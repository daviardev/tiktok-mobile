import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_CLIENTID,
      clientSecret: process.env.NEXT_PRIVATE_CLIENTSECRET
    })
  ],
  secret: process.env.NEXT_PRIVATE_SECRET
}

export default NextAuth(authOptions)
