import admin from 'firebase-admin'

if (!admin.apps.length) {
  const firebaseCredentialsBase64 =
    process.env.FIREBASE_ADMIN_CREDENTIALS_BASE64

  if (!firebaseCredentialsBase64) {
    throw new Error('Env var : FIREBASE_ADMIN_CREDENTIALS_BASE64 is missing.')
  }
  const firebaseCredentials = JSON.parse(
    Buffer.from(firebaseCredentialsBase64, 'base64').toString('utf-8')
  )

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: firebaseCredentials.project_id,
      clientEmail: firebaseCredentials.client_email,
      privateKey: firebaseCredentials.private_key.replace(/\\n/g, '\n'),
    }),
    databaseURL: `https://${firebaseCredentials.projectId}.firebaseio.com`,
  })
}

const db = admin.firestore()

export { admin, db }
