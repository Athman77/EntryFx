//
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogPages() {

  return (
    <>
      <div className="relative py-16">
            <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20">
             <span className="sr-only hidden">bg</span>
            </div>
            <div className="nc-SectionGridCategoryBox relative ">
             <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
              <div className="text-center w-full max-w-2xl mx-auto ">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Top trending topics</h2>
               <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover over 100 topics</span>
              </div>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
               
            
              <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://cdn.sanity.io/images/wusctyxy/production/3a7b126d47f69635c7cbd4acc9a65d154823b018-736x1030.jpg" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Liverpool</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">25 Articles</span>
               </div></a>
                <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Arsenal</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">25 Articles</span>
               </div></a>
              <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Man United</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">14 Articles</span>
               </div></a>
              <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://images.unsplash.com/photo-1512686096451-a15c19314d59?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Real Madrid</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">4 Articles</span>
               </div></a>
              <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://images.unsplash.com/photo-1546015018-8f2e2f225773?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Man City</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">7 Articles</span>
               </div></a>
              <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug">
               <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                <img src="https://images.unsplash.com/photo-1512658740823-0ebb97b3b86e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
               </div>
               <div className="mt-3">
                <h2 className="text-base font-semibold">Chelsea</h2>
                <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">26 Articles</span>
               </div></a>
             </div>
            </div>
            <div className="text-center mx-auto mt-10 md:mt-16">
             <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-secondary-500 hover:bg-secondary-6000 text-secondary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Show me more</button>
            </div>
           </div>
   
    </>
  );
}
