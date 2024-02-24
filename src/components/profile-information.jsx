import Image from "next/image"
import {rgbDataURL} from '@/lib/util'

export default function ProfileInformation({ user }) {

    return <div className="flex flex-col w-full h-full">
        <div className="flex md:flex-row flex-col w-full md:h-1/2 h-2/3 p-6 rounded-t-md bg-green-800 items-center justify-between">
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="rounded-full md:w-28 md:h-28 w-16 h-16 relative bg-yellow-200 ">
                    <Image placeholder="blur"  
                    blurDataURL={rgbDataURL(237,181,6)} 
                    src={user.image} 
                    fill 
                    style={{objectFit:"cover"}} 
                    alt={user.name} 
                    sizes="100%"
                    className='h-1/2 w-full rounded-full'/>
                </div>
                <div className="flex flex-col md:items-start items-center md:p-4 p-2 justify-center text-white">
                    <h1 className="md:text-2xl text-md font-bold">
                        {user.name}
                    </h1>
                    <p className="md:text-sm text-xs">
                        {user.email}
                    </p>
                </div>
            </div>
            <button className="bg-transparent md:text-sm text-xs border-2 rounded-full px-4 py-2 m-2 border-white text-white">Editar</button>
        </div>
        <div className="grid gap-3 md:grid-cols-2 grid-cols-1 md:grid-rows-2 w-full md:h-1/2 h-auto p-4 bg-white">
            <div className="grid grid-rows-2 grid-cols-5 [&>span]:text-gray-400 [&>span]:uppercase">
                <div className="row-span-2 col-span-1 size-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </div>
                <span className="col-span-4 row-span-1">Datos Personales</span>
                <p className="col-span-4 row-span-1">Jose Francisco Mateo</p>
            </div>
            <div className="grid grid-rows-2 grid-cols-5 [&>span]:text-gray-400 [&>span]:uppercase">
                <div className="row-span-2 col-span-1 size-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <span className="col-span-4 row-span-1">Teléfonos</span>
                <p className="col-span-4 row-span-1 text-red-800">Agregar Teléfono</p>
            </div>
            <div className="grid grid-rows-2 grid-cols-5 [&>span]:text-gray-400 [&>span]:uppercase">
                <div className="row-span-2 col-span-1 size-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>

                </div>
                <span className="col-span-4 row-span-1">Emails</span>
                <p className="col-span-4 row-span-1">locutermo@gmail.com</p>
            </div>
        </div>
    </div>

}