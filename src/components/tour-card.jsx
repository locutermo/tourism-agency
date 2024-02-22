import Image from "next/image"
import {rgbDataURL} from '@/lib/util'
export default function TourCard({item}){
    let {url,title,description,type,price,amount_sold,calification,currency} = item
    return (
    <div className="w-full h-96 rounded-md cursor-pointer flex flex-col">
        <div className="relative w-full h-1/2">
            <dir className={`label absolute top-1 left-2 bg-black w-16 p-1 rounded-sm h-4 z-10 `} >
                {/* Por revisar */}
                <span className='absolute top-0 left-0 text-white text-xs text-center w-full'>Top pick</span>
            </dir>
            <Image placeholder="blur"  
                blurDataURL={rgbDataURL(237,181,6)} 
                src={url} 
                fill 
                style={{objectFit:"cover"}} 
                alt={title} 
                sizes="100%"
                className='h-1/2 w-full rounded-t-md'/>
        </div>
        <div className="h-1/2 w-full rounded-b-md border-gray-200 border-2 p-3 flex flex-col justify-between">
            <div className="space-y-1 flex flex-col">
                <span className='text-gray-500 font-semibold text-xs'>{type}</span>
                <h3 className='text-sm font-semibold text-gray-600'>{title}</h3>
                <span className="text-gray-800 text-xs">{description}</span>
            </div>
            <div className="flex flex-col text-xs space-y-1 mb-2">
                <span>{calification && calification + "-" }  {amount_sold+""}</span>
                <span>{currency} {price}</span>
            </div>
        </div>
    </div>
    )
}