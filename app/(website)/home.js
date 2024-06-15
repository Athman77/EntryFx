//

import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Post({ posts }) {
  return (
    <>
      <div className="global-cover"></div>
      <div className="global-wrap">
        <div className="global-content">
          {/*** header ***/}

          <Header />
          {/*** end ***/}

          <main className="global-main">
            {/**** ====== hero section ===== ***/}
            <div className="hero-section">
              <div className="hero-wrap">
                <h1 className="hero-title global-title-huge global-title-offset text-white">
                  <span>HELLO 👋</span> WELCOME;
                </h1>
                <p className="hero-description global-subtitle-excerpt text-white">
                  Get Live Football Scores and Real-Time Football Results with
                  LiveScore!
                </p>
                <a
                  href="https://paystack.com/pay/9o5zytnrlk"
                  className="hero-button global-button"
                >
                  Support our channel
                </a>
              </div>
            </div>
            {/**** ====== hero section end ===== ***/}
            {/*  <Subscribe /> */}
          </main>

          {/*  <Footer / >*/}
        </div>
      </div>
      {/*****/}

      <div className="bg-[#f8f8f8]   text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
        <div className="nc-PageHome relative">
          <div className="container relative">
            {/*******/}
            <div className="nc-SectionMagazine1 py-16 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="nc-Card2 group relative flex flex-col h-full">
                  <div className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] z-0">
                    <img
                      alt="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover full-screen-transparent rounded-3xl"
                     // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      sizes="(max-width: 600px) 480px, 800px"
                      src="image_4"
                    />
                    <div
                      className="nc-PostTypeFeaturedIcon absolute bottom-2 left-2"
                      data-nc-id="PostTypeFeaturedIcon"
                    ></div>
                    <div
                      className="nc-CategoryBadgeList flex flex-wrap space-x-2 absolute top-3 left-3"
                      data-nc-id="CategoryBadgeList"
                    >
                      <a
                        className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Electronics
                      </a>
                    </div>
                  </div>
                  <a
                    className="absolute inset-0"
                    href="/single/this-is-single-slug"
                  ></a>
                  <div className="mt-5 px-4 flex flex-col">
                    <div className="space-y-3">
                      <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 relative text-sm">
                        <a
                          className="relative flex items-center space-x-2 rtl:space-x-reverse"
                          href="/author/the-demo-author-slug"
                        >
                          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-8 w-8 text-sm ring-1 ring-white dark:ring-neutral-900">
                            <img
                              alt="Pillifant Vern"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="absolute full-screen-transparent inset-0 w-full h-full object-cover"
                             // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                              sizes="100px"
                           //   srcset="image_124 16w, image_122 32w, image_128 48w, image_125 64w, image_129 96w, image_154 128w, image_133 256w, image_135 384w, image_132 640w, image_134 750w, image_138 828w, image_136 1080w, image_139 1200w, image_145 1920w, image_141 2048w, image_3 3840w"
                              src="image_3"
                            />
                            <span className="wil-avatar__name">P</span>
                          </div>
                          <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                            Pillifant Vern
                          </span>
                        </a>
                        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                          ·
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                          May 20, 2021
                        </span>
                      </div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-base sm:text-lg md:text-xl">
                        <a
                          className="line-clamp-2"
                          title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
                          href="/single/this-is-single-slug"
                        >
                          Microsoft announces a five-year commitment to create
                          bigger opportunities for people with disabilities
                        </a>
                      </h2>
                      <span className="block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione beatae quasi et, reprehenderit alias
                        veritatis nostrum iste sed laboriosam eveniet possimus.
                      </span>
                    </div>
                    <div className="my-5 border-t border-neutral-200 dark:border-neutral-700"></div>
                    <div className="flex items-center justify-between">
                      <div className="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                        <button
                          className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                          title="Liked"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                              d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                            34
                          </span>
                        </button>
                        <a
                          className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                          title="Comments"
                          href="/single/demo-slug#comments"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                              d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                            ></path>
                          </svg>
                          <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                            110
                          </span>
                        </a>
                      </div>
                      <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                        <button
                          className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                          title="Save to reading list"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            fill="none"
                            stroke="currentColor"
                            className="w-[18px] h-[18px]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:gap-8">
                  <div className="nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 h-full">
                    <a
                      className="absolute inset-0 z-0"
                      href="/single/this-is-single-slug"
                    ></a>
                    <div className="flex flex-col flex-grow">
                      <div className="space-y-3 mb-4">
                        <div
                          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
                          data-nc-id="CategoryBadgeList"
                        >
                          <a
                            className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                            href="/archive/the-demo-archive-slug"
                          >
                            Electronics
                          </a>
                        </div>
                        <h2 className="block font-semibold text-sm sm:text-base">
                          <a
                            className="line-clamp-2"
                            title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                            href="/single/this-is-single-slug"
                          >
                            360-degree video: How Microsoft deployed a
                            datacenter to the bottom of the ocean
                          </a>
                        </h2>
                        <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                          <a
                            className="relative flex items-center space-x-2 rtl:space-x-reverse"
                            href="/author/the-demo-author-slug"
                          >
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                              <img
                                alt="Pillifant Vern"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="absolute full-screen-transparent inset-0 w-full h-full object-cover"
                               // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100px"
                               // srcset="image_124 16w, image_122 32w, image_128 48w, image_125 64w, image_129 96w, image_154 128w, image_133 256w, image_135 384w, image_132 640w, image_134 750w, image_138 828w, image_136 1080w, image_139 1200w, image_145 1920w, image_141 2048w, image_3 3840w"
                                src="image_3"
                              />
                              <span className="wil-avatar__name">P</span>
                            </div>
                            <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                              Pillifant Vern
                            </span>
                          </a>
                          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                            May 20, 2021
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap justify-between mt-auto">
                        <div className="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                          <button
                            className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                            title="Liked"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              34
                            </span>
                          </button>
                          <a
                            className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                            title="Comments"
                            href="/single/demo-slug#comments"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              110
                            </span>
                          </a>
                        </div>
                        <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                          <button
                            className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            title="Save to reading list"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              fill="none"
                              stroke="currentColor"
                              className="w-[18px] h-[18px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      className="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
                      href="/single/this-is-single-slug"
                    >
                      <img
                        alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover full-screen-transparent w-full h-full"
                      //  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        sizes="(max-width: 600px) 180px, 400px"
                       // srcset="image_140 16w, image_144 32w, image_142 48w, image_143 64w, image_146 96w, image_148 128w, image_147 256w, image_152 384w, image_158 640w, image_151 750w, image_166 828w, image_160 1080w, image_169 1200w, image_155 1920w, image_164 2048w, image_8 3840w"
                        src="image_8"
                      />
                      <span className="absolute bottom-1 start-1">
                        <div
                          className="nc-PostTypeFeaturedIcon "
                          data-nc-id="PostTypeFeaturedIcon"
                        ></div>
                      </span>
                    </a>
                  </div>
                  <div className="nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 h-full">
                    <a
                      className="absolute inset-0 z-0"
                      href="/single-video/this-is-single-slug"
                    ></a>
                    <div className="flex flex-col flex-grow">
                      <div className="space-y-3 mb-4">
                        <div
                          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
                          data-nc-id="CategoryBadgeList"
                        >
                          <a
                            className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                            href="/archive/the-demo-archive-slug"
                          >
                            Industrial
                          </a>
                        </div>
                        <h2 className="block font-semibold text-sm sm:text-base">
                          <a
                            className="line-clamp-2"
                            title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                            href="/single-video/this-is-single-slug"
                          >
                            To cool datacenter servers, Microsoft turns to
                            boiling liquid Donec quis
                          </a>
                        </h2>
                        <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                          <a
                            className="relative flex items-center space-x-2 rtl:space-x-reverse"
                            href="/author/the-demo-author-slug"
                          >
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                              <img
                                alt="Foulcher Nathanil"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="absolute full-screen-transparent inset-0 w-full h-full object-cover"
                               // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100px"
                              //  srcset="image_118 16w, image_82 32w, image_116 48w, image_83 64w, image_86 96w, image_80 128w, image_114 256w, image_113 384w, image_94 640w, image_98 750w, image_97 828w, image_89 1080w, image_108 1200w, image_92 1920w, image_102 2048w, image_1 3840w"
                                src="image_1"
                              />
                              <span className="wil-avatar__name">F</span>
                            </div>
                            <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                              Foulcher Nathanil
                            </span>
                          </a>
                          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                            May 20, 2021
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap justify-between mt-auto">
                        <div className="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                          <button
                            className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                            title="Liked"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              34
                            </span>
                          </button>
                          <a
                            className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                            title="Comments"
                            href="/single/demo-slug#comments"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              110
                            </span>
                          </a>
                        </div>
                        <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                          <button
                            className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            title="Save to reading list"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              fill="none"
                              stroke="currentColor"
                              className="w-[18px] h-[18px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      className="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
                      href="/single-video/this-is-single-slug"
                    >
                      <img
                        alt="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover full-screen-transparent w-full h-full"
                     //   style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        sizes="(max-width: 600px) 180px, 400px"
                      //  srcset="image_150 16w, image_153 32w, image_157 48w, image_161 64w, image_156 96w, image_159 128w, image_162 256w, image_163 384w, image_165 640w, image_167 750w, image_168 828w, image_179 1080w, image_178 1200w, image_174 1920w, image_183 2048w, image_6 3840w"
                        src="image_6"
                      />
                      <span className="absolute bottom-1 start-1">
                        <div
                          className="nc-PostTypeFeaturedIcon "
                          data-nc-id="PostTypeFeaturedIcon"
                        >
                          <span className="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white h-7 w-7 ">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                  <div className="nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 h-full">
                    <a
                      className="absolute inset-0 z-0"
                      href="/single-video/this-is-single-slug"
                    ></a>
                    <div className="flex flex-col flex-grow">
                      <div className="space-y-3 mb-4">
                        <div
                          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
                          data-nc-id="CategoryBadgeList"
                        >
                          <a
                            className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                            href="/archive/the-demo-archive-slug"
                          >
                            Electronics
                          </a>
                        </div>
                        <h2 className="block font-semibold text-sm sm:text-base">
                          <a
                            className="line-clamp-2"
                            title="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                            href="/single-video/this-is-single-slug"
                          >
                            Xbox connects people to help through Crisis Text
                            Line and Aenean lectus
                          </a>
                        </h2>
                        <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                          <a
                            className="relative flex items-center space-x-2 rtl:space-x-reverse"
                            href="/author/the-demo-author-slug"
                          >
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                              <img
                                alt="Pillifant Vern"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="absolute inset-0 w-full h-full object-cover"
                                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100px"
                                srcset="image_124 16w, image_122 32w, image_128 48w, image_125 64w, image_129 96w, image_154 128w, image_133 256w, image_135 384w, image_132 640w, image_134 750w, image_138 828w, image_136 1080w, image_139 1200w, image_145 1920w, image_141 2048w, image_3 3840w"
                                src="image_3"
                              />
                              <span className="wil-avatar__name">P</span>
                            </div>
                            <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                              Pillifant Vern
                            </span>
                          </a>
                          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                            May 20, 2021
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap justify-between mt-auto">
                        <div className="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                          <button
                            className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                            title="Liked"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              34
                            </span>
                          </button>
                          <a
                            className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                            title="Comments"
                            href="/single/demo-slug#comments"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                              ></path>
                            </svg>
                            <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                              110
                            </span>
                          </a>
                        </div>
                        <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                          <button
                            className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            title="Save to reading list"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              fill="none"
                              stroke="currentColor"
                              className="w-[18px] h-[18px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      className="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
                      href="/single-video/this-is-single-slug"
                    >
                      <img
                        alt="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover full-screen-transparent w-full h-full"
                       // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        sizes="(max-width: 600px) 180px, 400px"
                        src="image_14"
                      />
                      <span className="absolute bottom-1 start-1">
                        <div
                          className="nc-PostTypeFeaturedIcon "
                          data-nc-id="PostTypeFeaturedIcon"
                        >
                          <span className="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white h-7 w-7 ">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*********/}
          </div>
        </div>
      </div>

      {/* <!------ post card------>*/}

      <div className="global-wrap">
        <div className="global-content">
          <main className="global-main">
            <Subscribe />
          </main>

          <Footer />
        </div>
      </div>
      {/***** end *****/}
    </>
  );
}
