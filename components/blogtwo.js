
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogTwo({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image ?
    urlForImage(post.author.image) :
    null;
  return (
    <>
      

                
                
                
                
                
                
                
                
                   <div className="nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 h-full">
                    <Link href={`/post/${post.slug.current}`}> 
                    <a
                      className="absolute inset-0 z-0"
                      
                    ></a></Link>
                    <div className="flex flex-col flex-grow">
                      <div className="space-y-3 mb-4">
                        <div
                          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
                          //data-nc-id="CategoryBadgeList"
                        >
                         <Link href={`/post/${post.slug.current}`}> 
                          <a
                            className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                          
                          >
                            Highlights
                          </a>
                          </Link>
                        </div>
                        <h2 className="block font-semibold text-sm sm:text-base">
                         <Link href={`/post/${post.slug.current}`}> 
                          <a
                            className="line-clamp-2"
                            title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                         
                          >
                          {post.title}
                          </a>
                          </Link>
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
                               // data-nimg="fill"
                                className="absolute full-screen-transparent inset-0 w-full h-full object-cover"
                               // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100px"
                            
                                src="https://cdn.sanity.io/images/11ognen8/production/f271a0e60dc0ec7a41a2992e5ce28a4bb65c0ced-400x400.jpg"
                              />
                              <span className="wil-avatar__name">F</span>
                            </div>
                            <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                              Gaucho 
                            </span>
                          </a>
                          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                          
                           <time datetime="2021-01-13">
                                                         
                                                           {" "}
                                                           {format(
                                                             parseISO(
                                                               post?.publishedAt ||
                                                                 post._createdAt
                                                             ),
                                                             "MMMM dd, yyyy"
                                                           )}{" "}
                                                                                      </time>
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
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clipRule="evenodd"
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
                              strokeWidth="1.5"
                              fill="none"
                              stroke="currentColor"
                              className="w-[18px] h-[18px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                     <Link href={`/post/${post.slug.current}`}> 
                    <a
                      className="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
                     
                    >
                      {imageProps ? (
                      <img
                        alt="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                        loading="lazy"
                        decoding="async"
                        //data-nimg="fill"
                        className="object-cover full-screen-transparent w-full h-full"
                  
                        sizes="(max-width: 600px) 180px, 400px"
                    
                      src={imageProps.src}
                      />
                      ) : (
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotoIcon />
          </span>
        )}
                      <span className="absolute bottom-1 start-1">
                        <div
                          className="nc-PostTypeFeaturedIcon "
                         // data-nc-id="PostTypeFeaturedIcon"
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
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a></Link>
                  </div>
         
    </>
  );
}
