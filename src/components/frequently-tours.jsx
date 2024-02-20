import React from 'react'
import Link from 'next/link';
import TourCard from "@/components/tour-card";
import {getTours} from '@/lib/agency'

export default async function FrequentlyTours(props){

    const tours = await getTours(["tours"],10)

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


