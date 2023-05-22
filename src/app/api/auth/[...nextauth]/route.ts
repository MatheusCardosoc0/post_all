import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_ID as string,
    }),
  ],
  pages: {
    signIn: '/',
  },
})

export { handler as GET, handler as POST }
