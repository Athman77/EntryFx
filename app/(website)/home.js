
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
    {/*******/}
  <div className="nc-PageHomeDemo3 relative">
  <div className="container relative">
    <div className="nc-SectionHero relative pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100"><span>Far from face <br /> but not from <span className="relative pr-3"><img src="" className="w-full absolute top-1/2 -left-1 transform -translate-y-1/2" alt=""><span className="relative">heart</span></span></span></h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">Let stay at home and share with everyone the most beautiful stories in your hometown 🎈</span>
          <a className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6   " href="/">Getting started</a>
        </div>
        <div className="flex-grow">
          <img src="/static/media/hero-right.8e5a74e5612b59faa521.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
  {/*********/}
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

        <div className="nc-PageArchiveVideo">
          <div className="dark bg-neutral-900/95 text-white">
            <div className="container py-16 lg:py-28 ">
              <div className="mt-5 flex flex-col sm:items-center sm:justify-between sm:flex-row">
                <div className="block my-4 border-b w-full border-neutral-500 sm:hidden"></div>
                <div className="flex justify-end">
                  <div className="nc-ArchiveFilterListBox flex-shrink-0 ">
                    <div className="relative">
                      <div
                        id="headlessui-listbox-button-:ra:"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
                          Most Recent
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewbox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="w-4 h-4 ml-2 -mr-1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 mt-8 lg:mt-10">
                {posts.slice(5, 10).map((post) => (
                  <PostList
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

        <BlogPages />



                      <div className="nc-PageHome relative">
          <div className="container relative">
        <div className="nc-SectionLatestPosts relative pb-16 lg:pb-28">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
              <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Latest Articles 🎈
                  </h2>
                  <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                    Discover the most outstanding articles in all topics of
                    life.{" "}
                  </span>
                </div>
              </div>
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
              
               {posts.slice(6, 15).map((post) => (
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
      </div>

      {/* <!------ post card------>*/}

      {/***** end *****/}
    </>
  );
}
