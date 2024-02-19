'use client'
import React from 'react'
import { useState,useEffect } from "react";
import {Button,InfoCard} from "@/components"
import Image from 'next/image';
import Link from 'next/link';
import TourCard from "@/components/tour-card";
export default function FrequentlyTours(props){

    const [tours,setTours] = useState([]);
    
    useEffect(() => {
  
      const fetchTours = async () => {
        const response = await fetch("/api/tours")
        console.log(response)
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


