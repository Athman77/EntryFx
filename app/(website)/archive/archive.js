//

import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";
//import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import Footer from "@/components/footer";
import Header from "@/components/header";
//import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
import { getPaginatedPosts } from "@/lib/sanity/client";

export default async function Post({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 7;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  return (
    <>
      <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200 font-body">
        <div className="nc-PageSearchV2">
          <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
            <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                sizes="(max-width: 1280px) 100vw, 1536px"
                class="object-cover w-full h-full rounded-3xl md:rounded-[40px] object-cover absolute inset-0 w-full h-full"
                alt="archive"
              />
              <div class="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                <h2 class="inline-block align-middle text-5xl font-semibold md:text-7xl ">
                  Garden
                </h2>
                <span class="block mt-4 text-neutral-300">
                  {" "}
                  {posts && posts?.length} Articles
                </span>
              </div>
            </div>
          </div>

          <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
            <main>
              <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row ">
                <nav
                  className="nc-Nav w-full overflow-x-auto hiddenScrollbar"
                  data-nc-id="Nav"
                >
                  <ul className="flex   sm:space-x-2">
                    <li className="nc-NavItem relative flex-shrink-0">
                      <button className="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black ">
                        Articles
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">
                {posts &&
                  posts.map((post) => (
                    <PostList
                      key={post._id}
                      post={post}
                      aspect="landscape"
                      preloadImage={true}
                    />
                  ))}
              </div>

              {/**  <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">1</span>
                <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">2</a>
                <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">3</a>
                <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">4</a>
              </nav>
              <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Show me more</button>
            </div>**/}
            </main>
            {/*   <BlogPages />*/}
          </div>
        </div>

        {posts && posts?.length === 0 && (
          <div className="flex h-40 items-center justify-center">
            <span className="text-lg text-gray-500">End of the result!</span>
          </div>
        )}

        <div className="mb-5">
          <Pagination
            pageIndex={pageIndex}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            tag="archive"
          />
        </div>
        <Footer />
      </div>

      <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-t8d8hp"
        home="css-ta1yzo"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    </>
  );
}
