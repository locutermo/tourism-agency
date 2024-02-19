import {ToursInfoSkeleton} from "@/components/skeleton/list-info-skeleton";
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
      <Suspense fallback={<ToursInfoSkeleton/>}>
        <FrequentlyTours/>
      </Suspense>
      
      
    </main>
  );
}


function InfoSkeleton(props){
  return <div className="h-80 w-1/2 bg-gray-200">

  </div>
}