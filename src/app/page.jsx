import { Suspense } from "react";
import HeaderMedia from "@/components/header-media";
import InternationalSection from "@/components/international-section";
import NationalSection from "@/components/national-section";
import AboutUs from '@/components/about-us';
import OpinionSection from '@/components/opinion-section';
import PromotionSection from '@/components/promotion-section';

export async function generateMetadata({params}) {

    return {
      title: "Ofertas imperdibles",
      author:"www.rutamundial.online",
      locality: "Lima, Perú",
      description:"Descubre destinos internacionales (Mexico, Punta Cana, Brasil, Argentina, Colombia, Europa) y nacionales. Ofrecemos paquetes turísticos personalizados con vuelos, alojamiento en hoteles de lujo, tours y seguros de viaje. ¡Reserva ahora y disfruta de la atención personalizada de nuestro equipo de expertos",
      keywords: "agencia de viajes en lima, agencia de viajes, ofertas a punta cana, paquetes turisticos, ofertas a cartagena, paquetes internacionales, mejor agencia de viajes en peru, asesoria personalizada en viajes",
      openGraph: {
        title:"Ruta Mundial ! Agencia de Viajes - Lima, Perú",
        description:"Ingresa y cotiza con nosotros para tu próximo viaje soñado",
        images: ['/images/punta_cana/PUNTA_CANA_ACTIVIDADES_ISLA_SAONA_1500_lg.webp'],
      }
    }

}


export default async function Home(props) {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<p>Cargando...</p>}>
        <HeaderMedia />
      </Suspense>
      <AboutUs />

      <PromotionSection/>
      <InternationalSection />
      <NationalSection />
      <OpinionSection/>

    </main>
  );
}
