import type {
    NextAuthOptions
} from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import Credentials from 'next-auth/providers/credentials';
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })
    ]
}