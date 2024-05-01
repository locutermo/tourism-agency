import Image from 'next/image'
import { rgbDataURL } from '@/lib/util'

export const FlipCard = ({ name, description, img, flag, size }) => {


    return <div className={`group [perspective:1000px] h-52 md:h-80 lg:h-96 cursor-pointer`}>
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
                <Image
                    src={size ? img[size] : (img.sm || img.md)}
                    alt={`Foto de ${name}`} fill sizes='100%'
                    placeholder="blur"
                    blurDataURL={rgbDataURL(161, 177, 255)}
                    className='rounded-xl object-cover shadow-xl shadow-black/10 ' />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl px-12 text-center bg-black/40 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold h-1/2 w-full ">{name}</h2>
                    <p className="text-xs my-1 md:my-3 md:text-sm lg:text-base overflow-x-auto text-ellipsis h-[90px] md:h-[140px]">{description}</p>
                    <a className="mt-2 rounded-md bg-neutral-800 py-1 px-2 hover:bg-neutral-900" href={`https://api.whatsapp.com/send?phone=${"941155491"}&text="Hola, me gustaría viajar a ${name}, me podría brindar más información sobre los paquetes disponibles"`} target='__blank__'>Solicitar cotización</a>
                </div>

            </div>
        </div>

    </div>
}


