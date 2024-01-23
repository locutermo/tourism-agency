'use client'
import Image from "next/image";
import {useState} from 'react'
import Button from './button'
export default function SearchTours(props){

    const [search,setSearch] = useState('')

    return   <section className="flex flex-row space-x-3 justify-between align-middle">
    <div className="flex flex-row p-2 border-2 space-x-4 rounded-full align-middle w-10/12">
      <Image className="ml-2" src="./search_icon.svg" width={20} height={20} alt="Buscar"/>
      <input className="focus:outline-none w-full" onChange={(event)=>{setSearch(event.target.value)}} placeholder="Buscar"></input>
      <Button onClick={(event)=>{setSearch(event.target.value)}}>Buscar</Button>
    </div>
    <input type="date" className="border-2 rounded-full justify-center w-2/12"></input>
  </section>
}