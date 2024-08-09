import { rgbDataURL } from '@/lib/util'
import Image from 'next/image'
import {MESSAGE_WHATSAPP} from '@/constants'
import WhatsappButton from '@/components/whatsapp-button'

export default async function HeaderMedia() {

    return <section className="w-full self-center min-h-screen bg-[#F9FAFF]">
    
        <div className="flex z-10 flex-col lg:flex-row w-full h-full pt-20 lg:pt-28 items-center">
            <div className="flex w-full lg:w-1/2  h-full px-8 md:px-20 lg:px-32 flex-col justify-center lg:items-start items-center text-center lg:text-start">
                <h2 className="text-primary text-lg md:text-1xl lg:text-4xl font-black ">VIVE UNA NUEVA</h2>
                <h2 className="text-primary text-3xl mb-2 md:text-4xl lg:text-7xl font-black ">EXPERIENCIA</h2>
                <h1 className="text-primary my-4 lg:my-2 text-sm lg:text-base ">Descubre destinos internacionales (Mexico, Punta Cana, Brasil, Argentina, Colombia, Europa) y nacionales. Paquetes turísticos personalizados con vuelos, alojamiento en hoteles de lujo, tours y seguros de viaje.</h1>
                <p className="text-primary text-sm lg:text-base font-bold md:text-start mt-2 mb-8">¡Reserva ahora y disfruta de la atención personalizada de nuestro equipo de expertos</p>
                <WhatsappButton number="941155491" message={MESSAGE_WHATSAPP}>Solicita tu paquete aqui</WhatsappButton>
            </div>
            <div className="w-full h-auto lg:w-1/2 items-center flex justify-center">
                <div className="relative lg:w-[550px] lg:h-[550px] w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                    <Image
                        src={"/images/isla.webp"}
                        alt="Ilustración de un viaje"
                        sizes="100%"
                        fill
                    />
                </div>

            </div>
        </div>
        <div className="w-full h-auto p-6 md:p-20 mt-2">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <li>
                    <Information title="ATENCIÓN PERSONALIZADA" description="Buscamos los mejores hoteles, tours, seguros para tu viaje según tus gustos y necesidades"/>
                </li>
                <li>
                    <Information title="ASESORIA PERMANENTE" description="Te indicamos cuáles son las restricciones y requisitos para cada destino."/>
                </li>
                <li>
                    <Information title="CALIDAD" description="Nos aseguramos que disfrutes tu viaje sin inconvenientes y con servicios de calidad"/>
                </li>
                <li>
                    <Information title="SOPORTE 24/7" description="Estaremos atentos a tus consultas las 24 horas del día durante tu viaje"/>
                </li>
            </ul>
        </div>


    </section>
}

const Information = ({title,description}) => {
    return (
        <div className=" text-primary border-creativity border-[1px] rounded-lg p-2 lg:p-4 h-32 space-y-2">
            <h2 className="font-bold text-xs lg:text-sm text-center">{title}</h2>
            <p className='text-xs lg:text-sm text-start md:px-4'>{description}</p>
        </div>
    )
}