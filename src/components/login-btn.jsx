'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LoginButton() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  if (session) {
    return (
      <div >
        <div className="relative size-10 cursor-pointer border-2 border-blue-300 rounded-full">
          <Image
            src={session.user.image}
            className="h-auto w-auto rounded-full"
            alt={session.user.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="100%"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className={`absolute z-10 p-4 w-auto ${!isOpen && 'hidden'} text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`}>
          <ul className="space-y-4 w-full" aria-labelledby="mega-menu-dropdown-button">
            <li>
              <Link href="/profile" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                Ver Perfil
              </Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center cursor-pointer rounded-full p-2 space-x-2" onClick={() => signIn('google')}>
      <div className="flex items-center justify-center size-10 cursor-pointer rounded-full bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

      </div>
      <span  className="sm:block hidden font-bold text-xs">Iniciar Sesión</span>
    </div>
  )
}