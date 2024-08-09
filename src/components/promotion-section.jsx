import { getPromotions } from '@/lib/agency'
import { rgbDataURL } from '@/lib/util'
import Image from 'next/image'
import {MESSAGE_WHATSAPP_PROMOTION,NUMBER_AGENCY_WHATSAPP} from '@/lib/constants'
export default async function PromotionsSection({ ...restProps }) {
    const promotions = await getPromotions(['promotions'],1)

    
    return <section id='international-destination' className="py-10 px-4 md:px-20 xl:px-[10%] flex z-10 flex-col w-full justify-center lg:min-h-screen">
        <h3 className="text-xl font-bold md:text-3xl lg:text-4xl text-center pt-14 text-secondary uppercase">Promociones</h3>
        <h2 className="text-sm md:text-base text-center pb-14 py-4 text-primary">Aprovecha nuestras promociones con los mejores precios para que viajes por el Caribe</h2>
        <div className="flex gap-4 justify-center flex-col md:flex-row" >
            {promotions?.map((promotion, index) => (
                <PromotionCard {...promotion} 
                    number={NUMBER_AGENCY_WHATSAPP} 
                    message={`${MESSAGE_WHATSAPP_PROMOTION} ${promotion.place} a ${promotion.price_currency}`}
                />
            ))
            }
        </div>
    </section>
}



const PromotionCard = ({ place, img, price_currency, description, _id,number,message }) => {

    return (
        <a  href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`} target='__blank__' className='w-full h-auto'>
        <div className="w-full relative h-72 lg:h-96 cursor-pointer">
            <div className="absolute w-full h-full">
                <div className={`label absolute top-5 left-2 bg-black w-16 p-1 h-4 z-10 `} >
                    {/* Por revisar */}
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
                        <p className="text-white font-semibold">4D 3N - </p>
                        <p className="text-white">TARIFA DESDE</p>
                    </div>

                    <p className="text-2xl lg:text-4xl text-white font-extrabold">{price_currency}</p>
                    <p className="text-white text-[8px]">TARIFA POR PERSONA, SUJETO A DISPONIBILIDAD HASTA EL MOMENTO DE LA COMPRA</p>
                </div>
            </div>
        </div>
        </a>)
}