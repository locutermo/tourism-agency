import { getPromotions } from '@/lib/agency'
import { rgbDataURL } from '@/lib/util'
import Image from 'next/image'
import { MESSAGE_WHATSAPP_PROMOTION, NUMBER_AGENCY_WHATSAPP } from '@/lib/constants'
import Section from '@/components/section'

export default async function PromotionsSection() {
    const promotions = await getPromotions(['promotions'])


    return <Section title="Promociones" id="promotions"
        description="¡Escápate al paraíso con nuestras promociones exclusivas para Punta Cana y Cartagena! 🌴✨ Haz clic en las imágenes de abajo para descubrir ofertas increíbles. Las promociones son limitadas y pueden variar hasta el momento de la compra. ¡No pierdas esta oportunidad!">
        <div className="flex gap-4 justify-center flex-col md:flex-row" >
            {promotions?.map((promotion, index) => (
                <PromotionCard key={promotion._id} {...promotion}
                    number={NUMBER_AGENCY_WHATSAPP}
                    message={`${MESSAGE_WHATSAPP_PROMOTION} ${promotion.place} a ${promotion.price_currency} - ${promotion.days_description}`}
                />
            ))
            }
        </div>
    </Section>
}



const PromotionCard = ({ place, img, price_currency,days_description,description, number, message }) => {

    return (
        <a href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`} target='__blank__' className='w-full h-auto'>
            <div className="w-full relative h-72 lg:h-96 cursor-pointer">
                <div className="absolute w-full h-full">
                    <div className={`label absolute top-5 left-2 rounded-md bg-secondary w-16 p-1 h-4 z-10 `} >
                        <span className='absolute top-0 left-0 text-white text-xs text-center w-full'>Nuevo</span>
                    </div>
                    <div className="absolute shadow-bottom z-20 w-full bg-black rounded-lg h-full left-0 opacity-40"></div>
                    <Image placeholder="blur"
                        blurDataURL={rgbDataURL(237, 181, 6)}
                        src={img.sm}
                        fill
                        style={{ objectFit: "cover" }}
                        alt={place}
                        sizes="100%"
                        className='h-1/2 w-full rounded-lg' />
                </div>
                <div className="absolute z-50 w-full h-full rounded-lg  flex flex-col-reverse p-4 px-8 items-center">
                    <div className="space-y-1 flex flex-col text-center ">
                        <h3 className='text-2xl lg:text-4xl text-white font-extrabold'>{place}</h3>
                        <hr className="border-[1px] px-3 border-white"></hr>
                        <div className="flex w-full justify-center">
                            <p className="text-white font-semibold">{days_description} - </p>
                            <p className="text-white">TARIFA DESDE</p>
                        </div>

                        <p className="text-2xl lg:text-4xl text-white font-extrabold">{price_currency}</p>
                        <p className="text-white text-[8px]">{description || 'TARIFA POR PERSONA, SUJETO A DISPONIBILIDAD HASTA EL MOMENTO DE LA COMPRA'}</p>
                    </div>
                </div>
            </div>
        </a>)
}