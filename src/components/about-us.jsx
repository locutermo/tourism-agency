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
                    <h2 className="text-xl text-[#4563ff] md:text-3xl lg:text-6xl font-bold py-2 md:py-8">NOSOTROS</h2>
                    <div className="lg:w-1/2  text-[#3245a4] mb-4 md:mb-8 text-xs md:text-base">
                        <p>Somos una agencia de viajes que nace con la pasión de hacer realidad tus sueños de aventura y descubrimiento</p>
                        <br></br>
                        <p>Nuestro objetivo es convertir cada viaje en una experiencia inolvidable, ofreciendo opciones para todos los gustos y presupuestos. Queremos inspirarte a explorar nuevos horizontes, conocer culturas fascinantes y crear recuerdos que perduren toda la vida.</p>
                        <br></br>
                        <p>¡Únete a Ruta Mundial y comienza a planificar tu próxima aventura hoy mismo!</p>
                    </div>
                    <button className=" text-white md:w-1/3 lg:w-fit text-sm md:text-base bg-[#a1b1ff] p-2 md:p-3 rounded-md hover:animate-pulse ">Iniciar Conversación</button></div>
            </div>
        </div>


    </section>
}