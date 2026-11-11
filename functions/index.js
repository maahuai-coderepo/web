const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const crypto = require("crypto");

// Set via: firebase functions:secrets:set META_ACCESS_TOKEN
const metaAccessToken = defineSecret("META_ACCESS_TOKEN");

const PIXEL_ID = "1040673992145213";
const EVENTS_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

function sha256(value) {
  return crypto
    .createHash("sha256")
    .update(String(value).trim().toLowerCase())
    .digest("hex");
}

async function sendMetaEvent(eventName, eventId, doc, accessToken) {
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: "https://maahu.ai/join",
        event_id: eventId,
        user_data: {
          em: doc.email ? [sha256(doc.email)] : undefined,
        },
        custom_data: {
          content_name:
            eventName === "Lead" ? "Founding Squad Signup" : "Qualified Signup",
          content_category: doc.intent,
        },
      },
    ],
  };

  const res = await fetch(`${EVENTS_URL}?access_token=${accessToken}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  console.log(`Meta CAPI ${eventName} response:`, JSON.stringify(result));
  return result;
}

// Fires automatically whenever join.html writes a new document to
// the squad_signups collection — completely independent of the
// visitor's browser, so ad blockers / tracking protection can't stop it.
exports.sendLeadToMeta = onDocumentCreated(
  { document: "squad_signups/{docId}", secrets: [metaAccessToken], retry: true },
  async (event) => {
    const doc = event.data?.data();
    if (!doc) return;

    // Reuse the client-generated eventId if present (for Meta's
    // browser/server dedup) — fall back to the Firestore doc id.
    const eventId = doc.eventId || event.params.docId;
    const token = metaAccessToken.value();

    await sendMetaEvent("Lead", eventId, doc, token);

    if (["lend", "borrow", "both"].includes(doc.intent)) {
      await sendMetaEvent("CompleteRegistration", `${eventId}-reg`, doc, token);
    }
  }
);
