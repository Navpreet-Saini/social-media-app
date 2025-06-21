import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found with this email");
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");
        return {
          id: user._id,
          email: user.email,
          name: user.name,
          username: user.username,
          profile_picture: user.profile_picture,
        };
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // On login, set token fields from user
      if (user) {
        token.name = user.name;
        token.username = user.username;
        token.profile_picture = user.profile_picture;
      }
      // On profile update, update token fields from session
      if (trigger === "update" && session) {
        token.name = session.name;
        token.username = session.username;
        token.profile_picture = session.profile_picture;
      }
      return token;
    },
    async session({ session, token }) {
      // Always send latest user info to session
      session.user.name = token.name;
      session.user.username = token.username;
      session.user.profile_picture = token.profile_picture;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
