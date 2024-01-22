import Image from 'next/image'
import React from 'react'

export default function Card({children,src,...restProps}){

return <div className="relative h-52 " >
    <Image
        className="rounded-xl"
        src={src}
        alt="Card Background"
        layout="fill"
        objectFit="cover"
    />
    <div className="absolute rounded-xl bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
      <h2 className="text-white text-xs font-medium">Recomendaciones de viajeros</h2>
    </div>
  </div>
    
};