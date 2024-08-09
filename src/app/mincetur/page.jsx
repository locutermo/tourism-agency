import Image from "next/image";

export default function Mincetur(props) {

    return (
        <div className="min-h-screen  flex flex-col justify-center items-center">
            <div className=" w-full min-h-[75vh] md:min-h-screen lg:w-1/2 relative">
                <Image fill sizes="100%" alt="Constancia MINCETUR" src="/images/mincetur.webp" />
            </div>
            <div className="space-y-10 text-center p-6 space-x-1">
                <span>Somos una agencia de viaje registrada por MINCETUR 📍 Puedes verificar </span>
                <a className="text-blue-500 " href="https://consultasenlinea.mincetur.gob.pe/directoriodeserviciosturisticos/DirPrestadores/DirBusquedaPrincipal/AgenciaViajes?IdGrupo=2" target="__blank__">
                    aqui
                </a>
            </div>
        </div>
    )
}