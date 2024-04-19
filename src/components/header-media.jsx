export default async function HeaderMedia() {

    return <section className="w-full h-auto">
        <div className="relative w-full h-56 md:h-[450px] lg:min-h-screen">
            <div className="absolute z-20 w-full bg-black shadow  h-full left-0 opacity-40"></div>

            <div className="absolute z-20 w-full h-full left-0">
                <div className="flex w-full md:w-2/3 lg:w-2/4 h-full px-8 md:px-20 lg:px-32 flex-col justify-center items-start ">
                    <h2 className="text-white font-extrabold text-xs md:text-1xl lg:text-4xl">VIVE UNA NUEVA</h2>
                    <h2 className="text-white font-extrabold  text-base mb-2 md:text-4xl lg:text-7xl">EXPERIENCIA</h2>
                    <p className="text-white text-xs lg:text-sm hidden md:block ">Viaja con nosotros y convierte cada destino en una emocionante aventura. Te acompañaremos en todo el proceso</p>
                    <button className="md:mt-10 text-white text-xs lg:text-sm p-2 md:p-3 lg:p-4 border-[2px] bg-[#3245a4] border-blue-100">Solicita tu paquete aqui</button>
                </div>
            </div>

            <video autoPlay muted loop playsInline loading="eager" className="w-full max-h-full relative">
                <source src="/videos/ciudad_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.

            </video>

        </div>


    </section>
}