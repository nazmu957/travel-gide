import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
};

export default NextAuth(authOptions);
