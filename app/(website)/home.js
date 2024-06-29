//

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
   <main className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">

  <section className="relative pb-32 pt-20 lg:pt-48">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden"><img alt="gradient" loading="lazy" width="1920" height="900" decoding="async" data-nimg="1" className="w-full" className="bg-transparent" src="image_2" /></picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block"><img alt="gradient dark" loading="lazy" width="1920" height="900" decoding="async" data-nimg="1" className="w-full" className="bg-transparent" src="image_3" /></picture><img alt="pattern donut" loading="lazy" width="613" height="415" decoding="async" data-nimg="1" className="absolute bg-transparent right-0 top-0 -z-10" src="image_4" />
      <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
        <div className="h-full items-center gap-4 lg:grid lg:grid-cols-12">
          <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
            <p className="mb-10 text-xs font-bold uppercase text-jacarta-500 dark:text-jacarta-200">Discover How To Earn More</p>
            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">We Ensure &amp; Transform NFT Business Growing</h1>
            <p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">Every digital creation available through MakersPlace is an authentic and truly unique.</p>
            <div className="flex space-x-4"><a className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" href="/contact">Contact Us</a><a className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume" href="/collections">Learn More</a></div>
          </div>
          <div className="col-span-6">
            <div className="relative text-center lg:pl-32 lg:text-right">
              <div className="absolute -left-[18%] top-1/3 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[5%] md:left-20">
                <div className="flex gap-4"><span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-green">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z"></path>
                    </svg></span>
                  <div className="text-left"><span className="block font-display text-3xl text-green">3x</span><span className="block font-display text-sm text-jacarta-600">Increased Profits</span></div>
                </div>
              </div><img alt="crypto consultant hero" loading="lazy" width="524" height="670" decoding="async" data-nimg="1" className="inline-block bg-transparent rounded-2.5xl"  src="image_5" />
              <div className="absolute bottom-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%] lg:-right-[17%]">
                <div className="text-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="absolute right-6 top-6 fill-red">
                    <path fill="none" d="M0 0H24V24H0z"></path>
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"></path>
                  </svg><span className="block font-display text-3xl text-[#737EF2]">+10k</span><span className="mb-5 block font-display text-sm text-jacarta-600">Happy customers</span><img alt="happy customers" loading="lazy" width="152" height="24" decoding="async" data-nimg="1"  src="image_7" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  {/****/}

  {/*****/}
    
    
   <div className="bg-[#f8f8f8]   text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">

 
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
