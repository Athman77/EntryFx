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
        <div className="nc-PageSearch">
          <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
            <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0">
              <div className="absolute inset-0">
                <img
                  src="https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg"
                  alt="search"
                  sizes="(max-width: 1280px) 100vw, 1536px"
                  className="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div className="relative container -mt-20 lg:-mt-48">
              <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center">
                <header className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    Welcome
                  </h2>
                  <span className="block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300">
                    We found{" "}
                    <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                      1135
                    </strong>{" "}
                    results for{" "}
                    <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                      Technology
                    </strong>
                  </span>
                  <form
                    className="relative w-full mt-8 sm:mt-11 text-left"
                    method="post"
                  >
                    <label
                      for="search-input"
                      className="text-neutral-500 dark:text-neutral-300"
                    >
                      <span className="sr-only">Search all icons</span>
                      <input
                        type="text"
                        className="block w-full border-neutral-200 border-primary-300 ring ring-primary-200/50 bg-white dark:border-neutral-500 dark:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal pl-14 py-5 pr-5 md:pl-16 "
                        id="search-input"
                        placeholder="Type and press enter"
                       // value="Technology"
                      />
                          {/*   <button
                        className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
        text-slate-50 absolute right-2.5 top-1/2 transform -translate-y-1/2  w-11 h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
                          ></path>
                        </svg>
                      </button>
                      <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewbox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                          ></path>
                        </svg>
                      </span>*/}
                    </label>
                  </form>
                  <div className="w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300">
                    <div className="inline-block space-x-1.5 sm:space-x-2.5">
                      <span className="">Related:</span>
                      <a
                        className="nc-NcLink text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000 inline-block font-normal"
                        href="/search"
                      >
                        Design
                      </a>
                      <a
                        className="nc-NcLink text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000 inline-block font-normal"
                        href="/search"
                      >
                        Photo
                      </a>
                      <a
                        className="nc-NcLink text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000 inline-block font-normal"
                        href="/search"
                      >
                        Vector
                      </a>
                      <a
                        className="nc-NcLink text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000 inline-block font-normal"
                        href="/search"
                      >
                        Frontend
                      </a>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>

        {/*******
        <div className="nc-PageHomeDemo3 relative">
          <div className="container relative">
            <div className="nc-SectionHero relative pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
              <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
                <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
                  <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
                    <span>
                      Far from face <br /> but not from{" "}
                      <span className="relative pr-3">
                        <img
                          src=""
                          className="w-full absolute top-1/2 -left-1 transform -translate-y-1/2"
                          alt=""
                        />
                        <span className="relative">heart</span>
                      </span>
                    </span>
                  </h2>
                  <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
                    Let stay at home and share with everyone the most beautiful
                    stories in your hometown 🎈
                  </span>
                  <a
                    className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6   "
                    href="/"
                  >
                    Getting started
                  </a>
                </div>
                <div className="flex-grow">
                  <img
                    src="https://cdn.sanity.io/images/wusctyxy/production/e2c799c0e66021c125f5195a2e777ef8d17c3779-1450x638.png"
                    className="w-full"
                    alt=""
                  />
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
