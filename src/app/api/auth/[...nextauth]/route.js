import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../../../prisma/client";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
  ],
  session : {
    strategy : "jwt"
  }
  //   callbacks: {
  //     async signIn({ user, account, profile }) {
  //       if (!account) {
  //         throw new Error("Account is undefined");
  //       }
  //       return true;
  //     },
  //     async session({ session, token }) {
  //       if (token && token.id) {
  //         session.user.id = token.id;
  //       }
  //       return session;
  //     },
  //     async jwt({ token, user }) {
  //       if (user) {
  //         token.id = user.id;
  //       }
  //       return token;
  //     },
  //   },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
