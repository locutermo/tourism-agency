import {FrequentlyToursSkeleton} from "@/components/skeleton/frequently-tours-skeleton";
import {ActivityCategoriesSkeleton} from '@/components/skeleton/activity-categories-skeleton'
import ActivityCategories from "@/components/activity-categories"
import Info from '@/components/info'
import FrequentlyTours from '@/components/frequently-tours'
import SearchTours from '@/components/search-tours'
import { Suspense } from "react";
import HeaderMedia from "@/components/header-media";
import InternationalSection from "@/components/international-section";

export default async function Home(props) {

  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<p>Cargando...</p>}>
        <HeaderMedia/>
      </Suspense>
      {/* <Suspense fallback={<ActivityCategoriesSkeleton/>}>
        <ActivityCategories/>
      </Suspense> */}

      <InternationalSection />
    </main>
  );
}
