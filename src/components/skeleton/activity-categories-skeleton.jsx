export async function ActivityCategoriesSkeleton() {

    return (
      <div className="group grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3 animate-pulse" role="status">

          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />


      </div>
    );
  }




  export default async function CategorySkeleton() {

    return (
      <div className="relative h-52 hover:opacity-100 opacity-90 animate-pulse">
            <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-xl dark:bg-gray-600">
                <svg className="w-10 h-10 text-gray-100 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
           
        <div className="absolute rounded-b-xl bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <div className="flex flex-row space-x-2">
                <div className='bg-gray-300 h-2 w-3/4 rounded-full'></div>
                <div className='bg-gray-300 h-2 w-1/4 rounded-full'></div>
            </div>
        </div>
    </div>
    );
  }