"use client"

import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  subtitle: string
  location: string
  origin: string
  message: string
  image: string
  date: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[500px]">
      <div className="relative h-[75%] overflow-hidden">
        <Image
          src={testimonial.image || "/placeholder.svg"}
          alt={`${testimonial.name} - Cliente satisfecho de Ruta Mundial`}
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="h-[25%] p-4 bg-gray-50 flex flex-col justify-between">
        <div className="flex-1 mb-2">
          <p className="text-gray-700 text-xs leading-tight line-clamp-3">"{testimonial.message}"</p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-sm">
              {testimonial.name}
              {testimonial.subtitle && <span className="text-gray-600 font-normal"> {testimonial.subtitle}</span>}
            </h3>
            <p className="text-gray-500 text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
