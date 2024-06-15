
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
            <div className="nc-PageArchiveVideo">
              <div className="dark bg-neutral-900/95 text-white">
                <div className="container py-16 lg:py-28 ">
                  <div className="mt-10 flex flex-col sm:items-center sm:justify-between sm:flex-row">
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
            {/**end**/}
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
