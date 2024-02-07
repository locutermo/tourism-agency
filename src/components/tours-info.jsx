'use client'
import React from 'react'
import { useState,useEffect } from "react";
import {Button,InfoCard} from "@/components"

export function ToursInfo(props){

  const [tours,setTours] = useState([]);
    useEffect(() => {
  
      const fetchTours = async () => {
        const response = await fetch("/api/info")
        const data = await response.json()
        setTours(data.body)
      }
  
      fetchTours()
      
    },[])

return (
    <div>
      <section className="group grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3">
    {
      tours.map( tour => (
        <InfoCard item={tour} className="box-border"/>
      ))
    }
  </section>

    </div>
  )
}


const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function InfoSkeleton() {
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

export function ToursInfoSkeleton() {
  return (
    <div className="space-y-6 pb-[5px]">
      <div className="space-y-2">
        <div className={`h-6 w-1/3 rounded-lg bg-gray-900 ${shimmer}`} />
        <div className={`h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}`} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
      </div>
    </div>
  );
}