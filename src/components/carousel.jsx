'use client'
import { useState } from 'react'
import Image from "next/image"

export default function Carousel({ items = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex == (items.length - 1) ? 0 : prevIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex == 0 ? items.length - 1 : (prevIndex - 1));
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div class="relative overflow-hidden lg:rounded-lg h-80 md:min-h-[500px] lg:min-h-[700px] lg:max-h-[700px]">
                {items?.map((item, index) => (
                    <div key={index} className={`${index != currentIndex && 'hidden'} duration-700 ease-in-out`}>
                        <Image
                            alt={item.name}
                            src={item.img?.lg}
                            fill
                            sizes="100%"
                        />
                        <div className="absolute z-20 w-full bg-black h-full left-0 opacity-40"></div>
                        <div className="absolute z-30 w-full h-full left-0">
                            <div className="flex w-full md:w-2/3 lg:w-1/2 h-full px-10 md:px-20 lg:px-32 flex-col justify-center md:space-y-2">
                                <h1 className="text-white font-extrabold md:text-4xl lg:text-5xl py-1 md:py-0">{item.name}</h1>
                                <p className="text-white text-xs lg:text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {items.map((item, index) => (
                    <button key={index} type="button" class="w-3 h-3 rounded-full" aria-current={index + 1 == currentIndex} aria-label={`Slide ${index}`}></button>

                ))}
            </div>
            {/* <!-- Slider controls --> */}
            <CarouselButton position='left' handleClick={handlePrev}>
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Anterior</span>
            </CarouselButton>
            <CarouselButton position='right' handleClick={handleNext}>
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Siguiente</span>
            </CarouselButton>
        </div>
    )
}


const CarouselButton = ({ children, handleClick,position }) => {
    return <button type="button" onClick={handleClick} className={`absolute top-0 ${position==='left'?'start':'end'}-0 z-30 flex items-center justify-center h-full px-1 md:px-4 cursor-pointer group focus:outline-none`}>
        <span class="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            {children}
        </span>
    </button>
}