// imports
import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";
import {create} from '../../../actions'
const handler = NextAuth({
    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
          })
    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            create("user",user)
            create("account",account)
            create("profile",profile)
            return true
          },
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }