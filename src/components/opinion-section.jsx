import Image from 'next/image'
import { showStars } from '@/lib/util'
import {getOpinions} from '@/lib/agency'

export default async function OpinionSection(props) {
    const opinions = await getOpinions(['opinions'],60)

    return <section className="py-8 pb-20 px-4 md:px-20 xl:px-[10%] flex z-10 flex-col w-full justify-center lg:min-h-screen">
        <h2 className="text-xl font-bold md:text-3xl lg:text-4xl text-center pt-14 text-secondary uppercase">Testimonios</h2>
        <h2 className="text-sm md:text-base text-center pb-14 py-4 text-primary">Te compartimos los testimonios de nuestros pasajeros donde nos cuentan sobre su experiencia con nosotros.</h2>
        <div className="mt-10 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {opinions.map((opinion,index)=> <Opinion key={opinion._id} {...opinion}/>)}
        </div>
    </section>
}

const Opinion=({name,date,_id,description,img,stars,place})=>{

    return (
        <div className="opinion-container [&_span]:text-gray-600 [&_p]:text-gray-600 border-[1px] border-gray-200 shadow-md  md:shadow-lg lg:shadow-2xl w-full  flex gap-y-2 flex-col p-4 rounded-xl justify-between">
                <div className="flex justify-between">
                    <div className="flex text-xs">
                        {showStars(stars,'orange')}
                    </div>
                    <span className="text-xs">{date}</span>
                </div>
                <p className="text-xs lg:text-sm">
                    {description}
                </p>
                <div className="flex gap-x-3 my-2">
                    <div className="bg-red-200 rounded-full w-10 h-10 lg:w-12 lg:h-12 relative">
                        <Image
                            className="rounded-full"
                            alt={`foto de perfil de ${name}`}
                            src={img?.sm || '/images/profiles/empty-profile.jpg'}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100%"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold">{name}</span>
                        <span className="text-xs">{place}</span>
                    </div>
                </div>
            </div>
    )
}