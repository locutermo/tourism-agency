import { randomUUID } from "crypto"
import Image from "next/image"
import Link from "next/link"

export default async function Footer(params) {
    let information = {
        assistances: [
            {
                title: "Política de protección de datos personales",
                url: "/legal-info"
            },
            {
                title: "Código ESNNA",
                url: "/esnna"
            },
            {
                title: "Términos y condiciones",
                url: "/terms-and-conditions"
            },

        ],
    }


    return (
        <footer className="w-full lg:flex-row h-fit flex flex-col-reverse">
            <div className="bg-primary w-full lg:w-10/12 flex flex-col">
                <div className="md:px-16 sm:px-16 p-4 py-8  self-center h-full flex flex-col w-full md:flex-row ">
                    <div className="w-full h-full flex flex-col items-start">
                        <Link href="/" className="w-[199.82px] h-[35.83px] relative ">
                            <Image
                                src={"/logo_3.png"}
                                className="md:block"
                                alt="Logo de Ruta Mundial"
                                sizes="100%"
                                fill
                            />
                        </Link>
                        <ul className="text-white [&>li>span]:font-bold [&>li]:space-x-2 text-xs md:text-sm lg:text-base py-6">
                            <li>
                                <label>Razón Social:</label>
                                <span>RUTA MUNDIAL EIRL</span>
                            </li>
                            <li>
                                <label>RUC:</label>
                                <span>20612400491</span>
                            </li>
                        </ul>
                        <ul className="text-white text-xs md:text-sm lg:text-base [&>li]:space-x-2 space-y-2 [&>li]:flex">
                            <li>
                                <label>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>


                                </label>
                                <span>Jr. Mercurio 7516, Los Olivos</span>
                            </li>
                            <li>
                                <label>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                    </svg>

                                </label>
                                <span>+51 941 155 491</span>
                            </li>
                            <li>
                                <label><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                </label>
                                <span>info.rutamundial@gmail.com</span>
                            </li>
                            <div className="py-2 flex space-x-4">
                                <a href={"https://www.instagram.com/_rutamundial"} target="__blank__" className="w-8 h-8 relative">
                                    <Image src="/instagram.svg" fill sizes="100%" alt="Logo de Instagram" />
                                </a>
                                <a href={"https://www.facebook.com/RutaMundialViajes"} target="__blank__" className="w-8 h-8 relative">
                                    <Image src="/facebook.svg" fill sizes="100%" alt="Logo de Facebook" />
                                </a>
                                <a href={"https://www.tiktok.com/@ruta.mundial"} target="__blank__" className="w-8 h-8 relative">
                                    <Image src="/tiktok.svg" fill sizes="100%" alt="Logo de Tiktok" />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <line className="border-1 border-2 md:mx-10 my-5 border-white"></line>
                    <div className="w-full h-full flex flex-col items-start">
                        <ul className=" space-y-2 text-white [&>li>span]:font-bold [&>li]:space-x-2 text-xs md:text-sm lg:text-base py-6">
                            <li key={randomUUID()} className="font-bold">Asistencia</li>
                            {information.assistances.map((assitance, index) => (
                                <li key={index}><Link href={assitance.url}>{assitance.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:px-16 sm:px-16 p-4 py-4 flex text-white text-sm">
                    <p className="font-bold">© Ruta Mundial 2024, All Rights Reserved</p>
                    <p >, Creado con ♡</p>
                </div>
            </div>
            <div className="h-full flex lg:p-10 p-2 px-4 lg:space-y-6 bg-slate-100 lg:bg-white lg:flex-col justify-between lg:items-center lg:w-2/12 items-center ">
                <figure className="h-28 w-28 lg:w-40 lg:h-40 relative ">
                    <Image src="/images/turismo_responsable.webp" fill sizes="100%" alt="Logo de Turismo responsable" />
                </figure>
                <div className="text-center flex flex-col  h-full">
                    <h3 className="text-[#3245a4] text-xs md:text-sm lg:text-base uppercase font-bold">Metodos de pago</h3>
                    <div className="flex space-x-4 [&>div]:w-14 [&>div]:h-14 lg:[&>div]:w-16 lg:[&>div]:h-16  ">
                        <div className="relative">
                            <Image src="/visa.svg" fill sizes="100%" alt="Logo de Visa" />
                        </div>
                        <div className="relative">

                            <Image src="/amex.svg" fill sizes="100%" alt="Logo de American Express" />
                        </div>
                        <div className="relative">
                            <Image src="/mastercard.svg" fill sizes="100%" alt="Logo de Mastercard" />
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    )
}

