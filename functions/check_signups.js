const admin = require('firebase-admin');
admin.initializeApp({ projectId: 'maahu-web' });
const db = admin.firestore();

(async () => {
  const snap = await db.collection('squad_signups').orderBy('joinedAt', 'asc').get();
  console.log(`Total documents in squad_signups: ${snap.size}`);
  snap.forEach(doc => {
    const d = doc.data();
    const ts = d.joinedAt ? d.joinedAt.toDate().toISOString() : 'no timestamp';
    console.log(`- ${doc.id} | ${ts} | email:${d.email} | intent:${d.intent} | source:${d.source} | eventId:${d.eventId || 'none'}`);
  });
  process.exit(0);
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
