import Image from 'next/image'
import React from 'react'
import {rgbDataURL} from '@/lib/util'

export default function InfoCard({children,className,item,...restProps}){

  let {url,description} = item;

return <div className={`relative h-52 hover:opacity-100 opacity-90 cursor-pointer ${className}`} >
    <Image
        className="rounded-xl"
        src={url}
        alt="Card Background"
        fill
        placeholder="blur"  blurDataURL={rgbDataURL(237,181,6)}
        objectFit="cover"
    />
    <div className="absolute rounded-b-xl bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
      <h2 className="text-white text-xs font-medium">{description}</h2>
    </div>
  </div>
    
};