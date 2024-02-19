import {FrequentlyToursSkeleton} from "@/components/skeleton/frequently-tours-skeleton";
import {ToursInfoSkeleton} from '@/components/skeleton/information-tours-skeleton'
import ToursInfo from "@/components/tours-info"
import Info from '@/components/info'
import FrequentlyTours from '@/components/frequently-tours'
import SearchTours from '@/components/search-tours'
import { Suspense } from "react";
export default async function Home(props) {

  return (
    <main className="flex min-h-screen flex-col space-y-10">
      <SearchTours/>
      <Info/>
      <Suspense fallback={<ToursInfoSkeleton/>}>
        <ToursInfo/>
      </Suspense>
      <Suspense fallback={<FrequentlyToursSkeleton/>}>
        <FrequentlyTours/>
      </Suspense>
      
    </main>
  );
}
