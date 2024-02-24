"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import ProfileInformation from '@/components/profile-information'
export default function Profile() {
  const { data: session } = useSession()

  if (session) {
    
    return (
        <div className="h-auto w-full grid lg:grid-cols-2 grid-cols-1 bg-gray-200">
            <ProfileInformation user={session.user}/>
        </div>

    )
  }

  return (
    <>
        
        <button onClick={() => signOut()}>Sign out</button>
        <p>Not Signed In</p>
        <button onClick={() => signIn('google')}>Sign in with google</button>
    </>
  )
}