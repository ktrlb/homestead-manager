import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add more providers here
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.role = user.role;
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
