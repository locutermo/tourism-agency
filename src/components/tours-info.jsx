import React from 'react'
import {Button,InfoCard} from "@/components"
import {getAgencyInformation} from '@/app/api/service'

export default async function ToursInfo(props){
  const tours = await getAgencyInformation()
    
return (
    <div>
      <section className="group grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3">
    {
      tours.map( (tour,index) => (
        <InfoCard key={index} item={tour} className="box-border"/>
      ))
    }
  </section>

    </div>
  )
}

