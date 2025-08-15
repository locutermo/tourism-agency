"use client"

import { useState } from "react"
import { TestimonialCard } from "./testimonial-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
const testimonials = [
  {
    id: 1,
    name: "Jose",
    subtitle: "",
    location: "Punta Cana",
    origin: "Cajamarca", // Added origin cities for each person
    message:
      "La señorita Rut nos brindó una excelente orientación en cada etapa de nuestro viaje, asegurándose de que no tuviéramos ningún inconveniente. Siempre estuvo atenta a mis consultas. ¡Servicio muy recomendado!",
    image: "/images/profiles/jose.jpeg",
    date: "Marzo 2024",
  },
  {
    id: 2,
    name: "Richard",
    subtitle: "",
    location: "Brasil",
    origin: "Chiclayo",
    message:"¡Recomendada al 100%! La comunicación fue clara con la Srta Ruth muy eficiente. Me sentí seguro y apoyado durante todo el viaje.",
    image: "/images/profiles/richard.jpeg",
    date: "Febrero 2024",
  },
  {
    id: 3,
    name: "Nelson",
    subtitle: "",
    location: "Brasil",
    origin: "Huaral",
    message:
      "Una experiencia de viaje increíble. Estoy muy agradecido y sin duda volveré a planificar mis próximos viajes con ustedes. ¡Recomendado al cien por ciento!",
    image: "/images/profiles/nelson.jpeg",
    date: "Enero 2024",
  },
  {
    id: 4,
    name: "Israel",
    subtitle: "",
    location: "Caribe",
    origin: "Lima",
    message:
      "Quiero expresar mi agradecimiento por el gran apoyo recibido durante todo mi viaje. Los recomiendo ampliamente a quienes busquen una agencia confiable y atenta.",
    image: "/images/profiles/israel.jpeg",
    date: "Diciembre 2023",
  },
  {
    id: 5,
    name: "Karla Rubí",
    subtitle: "con su mamá",
    location: "Brasil",
    origin: "Lima",
    message:
      "Agradezco a la señorita Thalía por su excelente atención y seguimiento constante durante nuestro viaje. Mi mamá y yo quedamos muy contentas con la experiencia brindada.",
    image: "/images/profiles/ruby.jpeg",
    date: "Noviembre 2023",
  },
  {
    id: 6,
    name: "Yesenia",
    subtitle: "",
    location: "Cancún",
    origin: "Cajamarca",
    message:
      "Celebrar mi cumpleaños en Chichén Itzá fue una experiencia única que jamás olvidaré. Gracias RUTA MUNDIAL por organizarlo todo.",
    image: "/images/profiles/yesenia.jpeg",
    date: "Abril 2024",
  },
  {
    id: 7,
    name: "Mateo",
    subtitle: "",
    location: "Cancún",
    origin: "Chiclayo",
    message:
      "Mis 50 años llegaron con la mejor celebración: viaje a Cancún y un día increíble en Xcaret. ¡Gracias a la agencia de viajes Ruta Mundial por cada detalle!",
    image: "/images/profiles/mateo.jpeg",
    date: "Mayo 2024",
  },
]


export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 4 // Go to last set of 4 testimonials
      }
      return prevIndex - 1
    })
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= testimonials.length - 4) {
        return 0 // Go back to beginning
      }
      return prevIndex + 1
    })
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">TESTIMONIOS</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Descubre lo que nuestros pasajeros tienen que decir sobre su experiencia con nosotros. ¡Conoce de primera
            mano cómo hacemos realidad sus viajes soñados!
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-lg pb-4">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-1/4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
