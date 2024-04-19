import { randomUUID } from "crypto"
import Link from "next/link"

export default async function Footer(params){
    let information = {
        assistances : [
            {
                title:"Contacto",
                url:"/contacto"
            },
            {
                title:"Información legal",
                url:"/legal-info"
            },
            {
                title:"Política de privacidad",
                url:"/privacy-policy"
            },
            {
                title:"Términos y condiciones generales",
                url:"/terms-and-conditions"
            },
            {
                title:"Información conforme a la Ley de servicios digitales",
                url:"/digital-information"
            }
        ],
        company_informations : [
            {
                title:"Sobre nosotros",
                url:"/about-us"
            },
            {
                title:"Blog",
                url:"/blog"
            },
            {
                title:"Prensa",
                url:"/prensa"
            },
            {
                title:"Tarjetas de regalo",
                url:"/gift-card"
            }
        ]
    }

    
    return (
        <footer className="w-full h-80 bg-indigo-950 lg:px-32 md:px-16 sm:px-16 px-4 align-bottom max-w-[1700px] self-center">
        <div className="w-full h-full flex flex-col justify-between">
          <div className=" w-full h-3/4 pt-8 px-4 [&>ol]:text-white  [&>ol]:md:text-sm text-xs flex flex-col md:flex-row md:justify-between" >
            <ol>
                <li key={randomUUID()} className="font-bold">Asistencia</li>
                {information.assistances.map( (assitance,index) => (
                    <li key={index}><Link href={assitance.url}>{assitance.title}</Link></li>
                ))}
            </ol>
            <br></br>
            <ol>
                <li key={randomUUID()} className="font-bold">Empresa</li>
                {information.company_informations?.map( (info,index) => (
                    <li key={index}><Link href={info.url}>{info.title}</Link></li>
                ))}
            </ol>
          </div>
          <div className=" w-full h-1/4 flex flex-row justify-between items-center px-4 md:text-sm  text-xs text-white">              
              <p className="" >© 2024 Ruta Mundial, Creada en Perú</p>
              <div className="flex flex-row space-x-4">
            
                <a href="#" target="_blank" >
                    <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                <a href="#" target="_blank" >
                    <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="#" target="_blank" >
                    <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
              </div>
          </div>

        </div>
      </footer>
    )
}

