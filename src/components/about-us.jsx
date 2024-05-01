import Image from "next/image";
const customPadding = 'p-8 md:p-14 lg:p-36 lg:px-60'

export default function AboutUs(props) {
    return <section id="aboutus" className="w-full h-auto">
        <div className="relative w-full h-96 md:h-[500px] lg:min-h-screen">
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
                <div className="flex justify-center flex-col h-full">
                    <span className="text-xl text-[#4563ff] md:text-3xl lg:text-6xl font-bold py-2 md:py-8">NOSOTROS</span>
                    <div className="lg:w-1/2  text-[#3245a4] mb-4 md:mb-8 text-xs md:text-base space-y-4">
                        <p>Somos una agencia de viajes digital ubicado en Lima, Perú que ofrece paquetes de viajes nacionales e internacionales.</p>
                        <p>Nuestro objetivo es convertir cada viaje en una experiencia inolvidable, ofreciendo una atención personalizada desde el primer día, brindandote asesoría permanente y soporte las 24 horas durante tu viaje.</p>
                        <p>Te ayudaremos a elegir el mejor destino según tus necesidades y gustos, te asesoraremos sobre los requisitos para tu viaje y te daremos las mejores recomendaciones para que disfrutes sin ningún inconveniente.</p>
                        <p>¡Únete a Ruta Mundial y comienza a planificar tu próxima aventura hoy mismo!</p>
                    </div>
                    <button className=" text-white md:w-1/3 lg:w-fit text-sm md:text-base bg-[#a1b1ff] p-2 md:p-3 rounded-md hover:animate-pulse ">Iniciar Conversación</button></div>
            </div>
        </div>


    </section>
}