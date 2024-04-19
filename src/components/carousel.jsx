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

    const showStars = (number) => {
        let stars = [];
        for (let i = 0; i < number; i++) {
            stars.push(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>)
        }
        return stars;
    }

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative overflow-hidden lg:rounded-lg h-80 md:min-h-[500px] lg:min-h-[700px] lg:max-h-[700px]">
                {items?.map((item, index) => (
                    <div key={index} className={`${index != currentIndex && 'hidden'} duration-700 ease-in-out`}>
                        <Image
                            alt={item.name}
                            src={item.img?.lg}
                            fill
                            sizes="100%"
                        />
                        <div className="absolute z-20 w-full bg-black h-full left-0  opacity-40"></div>
                        <div className="absolute z-30 w-full h-full left-0">
                            <div className="flex w-full md:w-2/3 lg:w-1/2 h-full px-10 md:px-20 lg:px-32 flex-col justify-center md:space-y-2">
                                <div className="flex">
                                    {[...showStars(item.stars)]} 
                                </div>
                                <h1 className="text-white font-extrabold md:text-4xl lg:text-5xl py-1 md:py-0">{item.name}</h1>
                                <p className="text-white text-xs md:text-base lg:text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {items.map((item, index) => (
                    <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={index + 1 == currentIndex} aria-label={`Slide ${index}`}></button>

                ))}
            </div>
            {/* <!-- Slider controls --> */}
            <CarouselButton position='left' handleClick={handlePrev}>
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Anterior</span>
            </CarouselButton>
            <CarouselButton position='right' handleClick={handleNext}>
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Siguiente</span>
            </CarouselButton>
        </div>
    )
}


const CarouselButton = ({ children, handleClick, position }) => {
    return <button type="button" onClick={handleClick} className={`absolute top-0 ${position}-0 z-30 flex items-center justify-center h-full px-1 md:px-4 cursor-pointer group focus:outline-none`}>
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            {children}
        </span>
    </button>
}