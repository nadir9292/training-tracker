import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { db, admin } from '@/lib/firebaseAdmin'
import Discord from 'next-auth/providers/discord'
import Github from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Discord, Github],
  pages: {
    signIn: '/welcome',
  },
  session: {
    strategy: 'jwt',
  },
  events: {
    async signIn({ user }) {
      if (!user?.id || !user.email) return

      try {
        const usersRef = db.collection('users')
        const existingUser = await usersRef
          .where('email', '==', user.email)
          .limit(1)
          .get()

        if (existingUser.empty) {
          // CREATE NEW USER
          await usersRef.doc(user.id).set({
            pseudo: user.name,
            email: user.email,
            image: user.image,
            height: null,
            weight: null,
            gender: null,
            dateOfBirth: null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            lastLogin: admin.firestore.FieldValue.serverTimestamp(),
          })
        } else {
          // JUST UPDATE LAST_LOGIN_DATE
          const userDoc = existingUser.docs[0]
          await usersRef.doc(userDoc.id).update({
            lastLogin: admin.firestore.FieldValue.serverTimestamp(),
          })
        }
      } catch (error) {
        console.error('Error conection :', error)
      }
    },
  },
})
