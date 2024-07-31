export async function FrequentlyToursSkeleton() {

    return (
      <div className="space-y-6 animate-pulse" role="status">
        <div className="space-y-2" >
          <div className='bg-gray-300 h-4 w-1/2 rounded-full'></div>
          <div className='bg-gray-300 h-3 w-1/5 rounded-full'></div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          <FrequentlyTourSkeleton />
          <FrequentlyTourSkeleton />
          <FrequentlyTourSkeleton />
          <FrequentlyTourSkeleton />
          <FrequentlyTourSkeleton />
        </div>
      </div>
    );
  }




  export default async function FrequentlyTourSkeleton() {

    return (
      <div className="w-full h-96 rounded-md  flex flex-col animate-pulse">
        <div className="relative w-full h-1/2 bg-gray-300">
            <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-600">
                <svg className="w-10 h-10 text-gray-100 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
            <div className="label absolute top-1 left-2 bg-gray-400 w-16 p-1 rounded-sm h-4 z-10" >
                {/* <span className='absolute top-0 left-0 text-white text-xs text-center w-full'>Top pick</span> */}
            </div>
            <div className='h-1/2 w-full rounded-t-md'/>
        </div>
        <div className="h-1/2 w-full rounded-b-md border-gray-200 border-2 p-3 flex flex-col justify-between">
            <div className="space-y-1 flex flex-col">
                <div className='bg-gray-300 h-2 w-1/2 rounded-full'></div>
                <div className='bg-gray-300 h-2 w-full rounded-full'></div>
                <div className='bg-gray-300 h-2 w-1/2 rounded-full'></div>
            </div>
            <div className="flex flex-col text-xs space-y-1 mb-2">
              <div className={`bg-gray-300 h-2 w-1/2 rounded-full`}></div>
              <div className='bg-gray-300 h-2 w-1/4 rounded-full'></div>
            </div>
        </div>
    </div>
    );
  }