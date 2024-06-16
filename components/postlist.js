
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function PostList({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  return (
    <>
 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
         <div className="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
                  <div className="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                    <div>
                      <div className="nc-PostFeaturedMedia relative w-full h-full">
                         {imageProps ? (
                        <img
                        src={imageProps.src} sizes="(max-width: 600px) 480px, 800px" className="object-cover object-cover absolute inset-0 w-full h-full" alt="featured" />
                                      ) : (
                <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <PhotoIcon />
                </span>
              )}
                        <span className="absolute inset-0 flex items-center justify-center ">
                          <div className="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform" data-nc-id="PostTypeFeaturedIcon">
                            <span className="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                              <svg className="w-6 h-6" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></span>
                          </div>
                        </span>
                              <Link href={`/post/${post.slug.current}`}>
                        <a className="block absolute inset-0 " ></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                        <Link href={`/post/${post.slug.current}`}>
                  <a className="absolute inset-0"></a></Link>
                  <span className="absolute top-3 inset-x-3 z-10">
                    <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                          <Link href={`/post/${post.slug.current}`}>
                      <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800">Football</a></Link>
                    </div>
                  </span>
                  <div className="p-4 flex flex-col space-y-3">
                    <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                      <a className="relative flex items-center space-x-2" href="/author/the-demo-author-slug">
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img sizes="100px" src="https://cdn.sanity.io/images/11ognen8/production/f271a0e60dc0ec7a41a2992e5ce28a4bb65c0ced-400x400.jpg" className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Pillifant Vern" />
                          <span className="wil-avatar__name">P</span>
                        </div><span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">Gaucho</span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal">  <time datetime="2021-01-13">
                                            {" "}
                                            {format(
                                              parseISO(post?.publishedAt || post._createdAt),
                                              "MMMM dd, yyyy"
                                            )}{" "}
                                          </time></span>
                    </div>
                    <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"><span className="line-clamp-2" title="Xbox connects people to help through Crisis Text Line and Aenean lectus">{post.title}</span></h3>
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
    </>
  );
}
