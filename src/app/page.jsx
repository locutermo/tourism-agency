import { Suspense } from "react";
import HeaderMedia from "@/components/header-media";
import InternationalSection from "@/components/international-section";
import NationalSection from "@/components/national-section";
import AboutUs from '@/components/about-us';
import OpinionSection from '@/components/opinion-section';
export default async function Home(props) {

  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<p>Cargando...</p>}>
        <HeaderMedia />
      </Suspense>
      <InternationalSection />
      <NationalSection />
      <AboutUs />

    </main>
  );
}
