import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Resend from "next-auth/providers/resend"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"

export const authConfig = {

  adapter: NeonAdapter(new Pool({ connectionString: process.env.EMAILMAGICLINK_DATABASE_URL })),

  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "nextjs-proj1-todo <onboarding@resend.dev>"
    }),

  ],

  session: {
    strategy: "database",
  },

} satisfies NextAuthConfig;
