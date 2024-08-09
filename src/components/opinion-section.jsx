import Image from 'next/image'
import { showStars } from '@/lib/util'
import { getOpinions } from '@/lib/agency'
import Section from '@/components/section'

export default async function OpinionSection(props) {
    const opinions = await getOpinions(['opinions'], 60)

    return <Section title="Testimonios" description="Descubre lo que nuestros pasajeros tienen que decir sobre su experiencia con nosotros. ¡Conoce de primera mano cómo hacemos realidad sus viajes soñados!">
        <div className="mt-10 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {opinions.map((opinion, index) => <Opinion key={opinion._id} {...opinion} />)}
        </div>
    </Section>
}

const Opinion = ({ name, date, _id, description, img, stars, place }) => {

    return (
        <div className="opinion-container [&_span]:text-gray-600 [&_p]:text-gray-600 border-[1px] border-gray-200 shadow-md  md:shadow-lg lg:shadow-2xl w-full  flex gap-y-2 flex-col p-4 rounded-xl justify-between">
            <div className="flex justify-between">
                <div className="flex text-xs">
                    {showStars(stars, 'orange')}
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
                        src={img?.sm || '/images/profiles/empty-profile.jpg'}
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