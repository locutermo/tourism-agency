'use client'
import Image from "next/image";
import {useState} from 'react'
import Button from './button'
export default function SearchTours(props){

    const [search,setSearch] = useState('')

    return   <section className="flex flex-row space-x-3 justify-between align-middle">
    <div className="flex flex-row p-2 border-2 space-x-4 rounded-full align-middle w-10/12">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mt-1 ml-1 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input className="focus:outline-none w-full" onChange={(event)=>{setSearch(event.target.value)}} placeholder="Buscar"></input>
      <Button onClick={(event)=>{setSearch(event.target.value)}}>Buscar</Button>
    </div>
    <input type="date" className="border-2 rounded-full justify-center w-2/12"></input>
  </section>
}