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
        <div className="nc-PageHomeDemo3 relative">
     <div className="container relative">
        <div className="nc-SectionGridCategoryBox relative pb-16 lg:pb-28">
       <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
        <div className="max-w-2xl">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Top trending topics</h2>
         <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover over 100 topics</span>
        </div>
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
         
         
        <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug"><span className="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100  ">#1</span>
         <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
          <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
         </div>
         <div className="mt-3">
          <h2 className="text-base font-semibold">Liverpool</h2>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">13 Articles</span>
         </div></a>
         
         
        <a className="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors " href="/archive/the-demo-archive-slug"><span className="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-red-800 bg-red-100  ">#2</span>
         <div className="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
          <img src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=550&amp;q=80" alt="categories" sizes="80px" className="object-cover  object-cover absolute inset-0 w-full h-full" />
         </div>
         <div className="mt-3">
          <h2 className="text-base font-semibold">Manchester United</h2>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">16 Articles</span>
         </div></a>
         
      
       </div>
      </div>
     </div>
    </div>
   
    </>
  );
}
