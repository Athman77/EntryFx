//

import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";

import BlogPages from "@/components/blogpage";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Post({ posts }) {
  return (
    <>


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



<div className="nc-SectionLatestPosts relative pb-16 lg:pb-28">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Latest Articles 🎈</h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover the most outstanding articles in all topics of life. </span>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
            <div className="nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden z-0  h-full">
              <div className="absolute inset-x-0 top-0 p-3  flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
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
              <a className="flex items-start relative w-full aspect-w-5 aspect-h-5" href="/single/this-is-single-slug"><img sizes="(max-width: 600px) 480px,800px" src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" className="object-cover w-full h-full rounded-3xl  object-cover absolute inset-0 w-full h-full" alt="">
                <div className="nc-PostTypeFeaturedIcon absolute top-3 left-3 group-hover:hidden" data-nc-id="PostTypeFeaturedIcon"></div><span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <div className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow">
                <a className="absolute inset-0" href="/single/this-is-single-slug"></a>
                <div className="space-y-2.5 mb-3">
                  <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                    <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Electronics</a>
                  </div>
                  <h2 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100 "><a title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities" className="line-clamp-2" href="/single/this-is-single-slug">Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities</a></h2>
                </div>
                <a className="nc-CardAuthor2 relative inline-flex items-center " href="/author/the-demo-author-slug">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-3">
                    <img sizes="100px" src=" =" className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Pillifant Vern" />
                    <span className="wil-avatar__name">P</span>
                  </div>
                  <div>
                    <h2 className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">Pillifant Vern</h2>
                    <span className="flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400"><span>May 20, 2021</span><span className="hidden lg:inline mx-1 transition-opacity opacity-0 group-hover:opacity-100">·</span><span className="hidden lg:inline transition-opacity opacity-0 group-hover:opacity-100">3 min read</span></span>
                  </div>
                </a>
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
