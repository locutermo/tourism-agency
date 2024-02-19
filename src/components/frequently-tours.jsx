'use client'
import React from 'react'
import { useState,useEffect } from "react";
import {Button,InfoCard} from "@/components"
import Image from 'next/image';
import Link from 'next/link';
export default function FrequentlyTours(props){

    const [tours,setTours] = useState([]);
    
    useEffect(() => {
  
      const fetchTours = async () => {
        const response = await fetch("/api/tours")
        const data = await response.json()
        setTours(data.body)
      }
  
      fetchTours()
      
    },[])

    return (
        <div className="space-y-6">
            <div className="space-y-2" >
                <h2 className='font-bold text-2xl'>Excursiones de un día</h2>
                <p className='text-xs text-gray-500'>120 actividades disponibles ( i )</p>     
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {tours.map( (tour,index) =>  (
                <Link key={index} href={`/tours/${tour._id}`}>
                    <TourCard item={tour}/>
                </Link>
            ))} 
            </div>
        </div>
        
    )
}



function TourCard({item}){
    let {url,title,description,time,price,sold,rates,currency} = item
    return (
    <div className="w-full h-96 rounded-md cursor-pointer flex flex-col">
        <div className="relative w-full h-1/2">
            <dir className="label absolute top-1 left-2 bg-black w-16 p-1 rounded-sm h-4 z-10" >
                {/* Por revisar */}
                <span className='absolute top-0 left-0 text-white text-xs text-center w-full'>Top pick</span>
            </dir>
            <Image src={url} layout="fill" objectFit="cover" alt={title} className='h-1/2 w-full rounded-t-md'/>
        </div>
        <div className="h-1/2 w-full rounded-b-md border-gray-200 border-2 p-3 flex flex-col justify-between">
            <div className="space-y-1 flex flex-col">
                <span className='text-gray-500 font-semibold text-xs'>TOUR GUIADO</span>
                <h3 className='text-sm font-semibold text-gray-600'>{title}</h3>
                <span className="text-gray-800 text-xs">{description}</span>
            </div>
            <div className="flex flex-col text-xs space-y-1 mb-2">
                <span>{rates} - ({sold+""})</span>
                <span>{currency} {price}</span>
            </div>
        </div>
    </div>
    )
}