import Image from "next/image";
const customPadding = 'p-8 md:p-14 lg:p-36 lg:px-50'
import { MESSAGE_WHATSAPP } from '@/constants'
import WhatsappButton from '@/components/whatsapp-button'
import Title from '@/components/Title'
export default function AboutUs(props) {
    return <section id="aboutus" className="w-full h-auto">
        <div className="relative w-full h-96 min-h-[80vh] lg:min-h-screen">
            <div className="absolute w-full h-full z-20 bg-gray-200 opacity-20">
                <Image
                    src="/images/mapa.webp"
                    fill
                    style={{ objectFit: "cover" }}
                    alt="Mapa mundial"
                    sizes="100%"
                />
            </div>
            <div className={`${customPadding} absolute w-full h-full pb-20 z-30`}>
                <div className="flex justify-center flex-col h-full text-center md:text-start">
                    <Title  position={'start'}>Nosotros</Title>
                    <div className="lg:w-1/2  text-[#3245a4] mb-4 md:mb-8 text-sm md:text-base space-y-4">
                        <p>Somos una agencia de viajes digital certificada por MINCETUR ubicado en Lima, Perú y ofrecemos paquetes de viajes a destinos nacionales e internacionales.</p>
                        <p>Nuestro objetivo es convertir cada viaje en una experiencia inolvidable, ofreciendo una atención personalizada desde el primer día, brindandote asesoría permanente y soporte las 24 horas durante tu viaje.</p>
                        <p>Te ayudaremos a elegir el mejor destino según tus gustos y necesidades, te asesoraremos sobre los requisitos para tu viaje y te daremos las mejores recomendaciones para que disfrutes sin ningún inconveniente.</p>
                        <p className="font-bold">¡Únete a Ruta Mundial y comienza a planificar tu próxima aventura hoy mismo!</p>
                    </div>
                    <div><WhatsappButton number="941155491" message={MESSAGE_WHATSAPP}>Iniciar conversación</WhatsappButton></div>
                </div>

            </div>
        </div>


    </section>
}