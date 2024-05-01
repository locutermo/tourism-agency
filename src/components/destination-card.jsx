import Image from 'next/image'
export const DestinationCard = ({name, img, flag,size }) => {


    return <div className={`h-52  w-full rounded-xl relative cursor-pointer`}>
        <Image src={size ? img[size] : (img.sm || img.md)} alt={`Foto de ${name}`} fill sizes='100%' className='rounded-xl' />
        <div className="w-full rounded-xl absolute bg-black z-1 h-full opacity-20 text-center">
        </div>
        <div className="z-2 font-extrabold absolute w-full h-full p-8 hover:animate-pulse">
            <div className="flex items-center justify-center w-full h-full bg-yellow z-200">
                <h3 className="text-white text-center text-3xl">{name}</h3>
            </div>
        </div>
        {flag && (
            <div className="z-30 font-extrabold absolute w-10 h-10 m-2 lg:w-14 lg:h-14 lg:m-1 right-0">
                <Image src={flag}
                    alt={`Bandera de ${name}`}
                    sizes='100%'
                    fill
                />
            </div>
        )}

    </div>
}