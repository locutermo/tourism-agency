'use client'

import Image from "next/image";
import {Button,Card} from "@/components"

import { useState,useEffect } from "react";
export default function Home() {

  const [search,setSearch] = useState("")
  const [results,setResults] = useState([])

  useEffect(() => {

    const fetchTours = async () => {
      const response = await fetch("/api/tours")
      const data = await response.json()
      console.log("Datos:",data)
      setResults(data.body)
    }

    fetchTours()
    
  },[])


  return (
    <main className="flex min-h-screen flex-col space-y-8">
      <section className="flex flex-row space-x-3 justify-between align-middle">
        <div className="flex flex-row p-2 border-2 space-x-4 rounded-full align-middle w-10/12">
          <Image className="ml-2" src="./search_icon.svg" width={20} height={20} alt="Buscar"/>
          <input className="focus:outline-none w-full" onChange={(event)=>{setSearch(event.target.value)}} placeholder="Buscar"></input>
          {/* <Button onClick={(event)=>{setSearch(event.target.value)}}>Buscar</Button> */}
        </div>
        <input type="date" className="border-2 rounded-full justify-center w-2/12"></input>
      </section>
      <section className="space-y-1">
        <p className="font-bold">Cosas que hacer</p>
        <h1 className="font-bold text-7xl">Lima</h1>
        <p className="text-sm font-200">Te encontrarás con sabores inesperados, arquitectura colonial y barrios bohemios a orillas del Pacìfico</p>
      </section>
      <section className="group grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 md:space-x-3 overflow-hidden group-hover:opacity-75 max-sm:odd:hidden">

        {

          results.map( tour => (
            <Card src={tour.url} key={tour.id}>
              {tour.description}
            </Card>
          ))

        }
        
          


      </section>
   
      
    </main>
  );
}
