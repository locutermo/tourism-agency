'use client'
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
export default function SearchTours(props) {

  const [search, setSearch] = useState('')
  const [value, setValue] = useState(null);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }


  return <section className="flex flex-row align-middle  md:border-none border-2 rounded-full space-x-6" >
    <div className="flex flex-row p-1 md:border-2 space-x-0 rounded-full align-middle  md:w-8/12 w-6/12">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-2 md:w-8 md:h-8 h-6 w-6" >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input className="focus:outline-none w-full text-xs md:text-sm bg-transparent" onChange={(event) => { setSearch(event.target.value) }} placeholder="Buscar"></input>
    </div>
    <Datepicker
      containerClassName="relative w-6/12 md:w-4/12 text-gray-700 md:border-2 rounded-full "
      inputClassName="relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg 
      tracking-wide font-light text-xs md:text-sm placeholder-gray-400 bg-transparent disabled:opacity-40 disabled:cursor-not-allowed h-full text-center  outline-none   
      "
      // focus:ring  focus:border-blue-500 focus:ring-blue-500/20
      toggleClassName="absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed "
      useRange={false} 
      primaryColor={"blue"} 
      value={value}
      displayFormat={"DD MMM"} 
      readOnly={true} 
      minDate={new Date()} 
      maxDate={new Date("2025-01-30")} 
      onChange={handleValueChange}
      i18n={"es"} 
      placeholder='Añadir fechas'
    />
  </section>
}