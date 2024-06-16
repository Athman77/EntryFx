
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









          <div className="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
            <div className="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
              <div>
                <div className="nc-PostFeaturedMedia relative w-full h-full">
                  <img src="https://images.unsplash.com/photo-1587381420844-7bc5f4feec02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" sizes="(max-width: 600px) 480px, 800px" className="object-cover object-cover absolute inset-0 w-full h-full" alt="featured" />
                  <span className="absolute inset-0 flex items-center justify-center ">
                    <div className="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform" data-nc-id="PostTypeFeaturedIcon">
                      <span className="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                        <svg className="w-6 h-6" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></span>
                    </div>
                  </span>
                  <a className="block absolute inset-0 " href="/single-video/this-is-single-slug"></a>
                </div>
              </div>
            </div>
            <a className="absolute inset-0" href="/single-video/this-is-single-slug"></a>
            <span className="absolute top-3 inset-x-3 z-10">
              <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
              </div>
            </span>
            <div className="p-4 flex flex-col space-y-3">
              <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                <a className="relative flex items-center space-x-2" href="/author/the-demo-author-slug">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                    <img sizes="100px" src="data:image/jpeg;base64,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" className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Pillifant Vern" />
                    <span className="wil-avatar__name">P</span>
                  </div><span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">Pillifant Vern</span>
                </a>
                <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span>
                <span className="text-neutral-500 dark:text-neutral-400 font-normal">May 20, 2021</span>
              </div>
              <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"><span className="line-clamp-2" title="Xbox connects people to help through Crisis Text Line and Aenean lectus">Xbox connects people to help through Crisis Text Line and Aenean lectus</span></h3>
              <div className="flex items-end justify-between mt-auto">
                <div className="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                  <button className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500" title="Liked">
                    <svg width="24" height="24" fill="none" viewbox="0 0 24 24">
                      <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                    </svg><span className="ml-1 text-neutral-900 dark:text-neutral-200">34</span></button>
                  <a className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                    <svg width="24" height="24" fill="none" viewbox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                    </svg><span className="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
                </div>
                <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                  <button className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700" title="Save to reading list">
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" className="w-[18px] h-[18px]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg></button>
                </div>
              </div>
            </div>
          </div>
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
