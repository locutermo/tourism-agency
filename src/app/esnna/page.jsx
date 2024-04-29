import Image from "next/image";

export default function EsnaPage(props){
    

    return (
        <div className="min-h-screen bg-slate-50 flex justify-center items-center">
            <div className=" w-full min-h-screen lg:w-1/2 relative">
                <Image fill sizes="100%" alt="Afiche ESNNA" src="/images/AFICHE_ESNNA.webp" />
            </div>
        </div>
    )
}