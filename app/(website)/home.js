
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import BlogLast from "@/components/bloglast";
import BlogPages from "@/components/blogpage";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Post({ posts }) {
  return (
    <>
      <div className="bg-[#f8f8f8]   text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
  {/****/}
  <div className="nc-PageAuthor ">
            <div className="w-full">
              <div className="relative w-full h-40 md:h-60 2xl:h-72">
                <div className="absolute inset-0">
                  <img src="https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg" alt="" sizes="(max-width: 1280px) 100vw, 1536px" className="object-cover w-full h-full object-cover absolute inset-0 w-full h-full" />
                </div>
              </div>
              <div className="container -mt-10 lg:-mt-16">
                <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
                  <div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
                      <img src="https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg" className="object-cover object-cover absolute inset-0 w-full h-full" alt="Avatar" />
                    </div>
                  </div>
                  <div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
                    <div className="max-w-screen-sm space-y-3.5 ">
            
                      <span className="block text-sm text-neutral-500 dark:text-neutral-400">Get Live Football Scores and Real-Time Football Results with LiveScore!.</span>
                      
                      
                      <a href="##" className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="flex-shrink-0 w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
                        </svg><span className="text-neutral-700 dark:text-neutral-300 truncate">https://example.com/me</span></a>
                        
               
                      
                    </div>
                  </div>
                  <div className="absolute md:static left-5 right-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex justify-end">
                 
                    <div className="mx-2">
                      <div className="relative inline-block text-left" data-headlessui-state="">
                       
                      </div>
                    </div>
                    <div>
                  
                      <div className="nc-NcModal"></div>
                      <div className="nc-NcModal"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            </div>
  {/*****/}
    
    

 
        <div className="nc-PageHome relative">
          <div className="container relative">
            {/*******/}
            <div className="nc-SectionMagazine1 py-16 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/*******card one ***/}
                {posts.slice(0, 1).map((post) => (
                  <BlogOne
                    key={post._id}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
                {/******/}

                <div className="grid gap-6 md:gap-8">
                  {posts.slice(2, 5).map((post) => (
                    <BlogTwo
                      key={post._id}
                      post={post}
                      aspect="landscape"
                      preloadImage={true}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/*********/}

            {/**end**/}
          </div>
        </div>

       {/****** blog video *****/}
       
  <div className="nc-PageSearchV2">


    <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

      <main>
        <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row ">
          <nav className="nc-Nav w-full overflow-x-auto hiddenScrollbar" data-nc-id="Nav">
            <ul className="flex   sm:space-x-2">
              <li className="nc-NavItem relative flex-shrink-0"><button className="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black ">Articles</button></li>

            </ul>
          </nav>
          <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
          <div className="flex justify-end">
            <div className="nc-ArchiveFilterListBox flex-shrink-0 ">
              <div className="relative">
                <div id="headlessui-listbox-button-:ra:" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                  <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Most Recent
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-4 h-4 ml-2 -mr-1">
                      <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                    </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">




             {posts.slice(5, 13).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}



       
          
        </div>



        <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
          <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
            <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">1</span>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">2</a>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">3</a>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">4</a>
          </nav>
          <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Show me more</button>
        </div>
      </main>
        <BlogPages />
    </div>
  </div>

      {/***** end *******/}

        <div className="nc-PageHome relative">
          <div className="container relative">
            <div className="nc-SectionLatestPosts relative pb-16 lg:pb-28">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
                  <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl text-neutral-900 md:text-3xl lg:text-4xl font-semibold">
                        Latest Articles 🎈
                      </h2>
                      <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                        Discover the most outstanding articles in all topics of
                        life.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
                    {posts.slice(13, 19).map((post) => (
                      <BlogLast
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*****/}
<Footer />
      </div>

      {/* <!------ post card------>*/}
<Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-t8d8hp"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    </>
  );
}
