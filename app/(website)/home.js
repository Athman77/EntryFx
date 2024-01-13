
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
                    <h1 className="hero-title global-title-huge global-title-offset">
                      <span>LEARN, TRADE</span> & EARN
                    </h1>
                    <p className="hero-description global-subtitle-excerpt">
                      NextApp has been providing free and premium trading education for almost a decade.   </p>
                    <a href="https://t.me/techLinkbot" className="hero-button global-button">
                      Join Our Trading Community
                    </a>
                  </div>
                </div>
                {/**** ====== hero section end ===== ***/}
                <div className="featured-section items-4">
                  <div className="featured-wrap">
                    {posts && posts.slice(0, 4).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                  </div>
                </div>

                {/*** blog ***/}
                <div className="loop-section">
                  {/**** section blog ***/}
                  <div className="loop-subtitle global-title-wrap">
                    <h3 className="global-title-large">
                      See what we’ve <span>written lately</span>
                    </h3>
                    <div className="loop-authors global-authors">
                      <div className="global-author-item is-image global-image">
                        <a
                          href="/author/victoria/"
                          className="global-link"
                          title="Victoria West"
                        ></a>
                        <img
                          src="https://cdn.sanity.io/images/cwzkjmps/production/f271a0e60dc0ec7a41a2992e5ce28a4bb65c0ced-400x400.jpg"
                          loading="lazy"
                          alt="Victoria West"
                        />
                      </div>
                      <div className="global-author-item is-image global-image">
                        <a
                          href="/author/lauren/"
                          className="global-link"
                          title="Lauren Langford"
                        ></a>
                        <img
                          src="https://cdn.sanity.io/images/cwzkjmps/production/40b4880f4ecf9bd47220684a639d5675679f9071-400x464.jpg"
                          loading="lazy"
                          alt="Lauren Langford"
                        />
                      </div>
                      <div className="global-author-item is-image global-image">
                        <a
                          href="/author/megan/"
                          className="global-link"
                          title="Megan Anderson"
                        ></a>
                        <img
                          src="https://cdn.sanity.io/images/cwzkjmps/production/4a570f81911531bff2ae40de4bd54fad97f77a77-480x480.jpg"
                          loading="lazy"
                          alt="Megan Anderson"
                        />
                      </div>
                      
                      <span>Meet our top authors</span>
                    </div>
                  </div>
                  {/*** end ***/}
                  <div className="loop-wrap">
                    {posts && posts.slice(5, 6).map((post) => (
                      <BlogOne
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                    {posts && posts.slice(6, 13).map((post) => (
                      <BlogTwo
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                  </div>
                  {/*** blog end here*/}
                </div>
                {/*** end blog ***/}
                <div className="pagination-section">
                  <div className="pagination-wrap">
                    <Link href="/tags">
                      <a id="next-page"></a>

                      <button className="global-button">Load more</button>
                    </Link>
                  </div>
                </div>
                {/*** ======== load more ==== ***/}

                {/****** ====== special ==== ***/}
                <div className="special-section">
                  <div className="global-title-wrap">
                    <h3 className="global-title-medium">
                      In case you <span>missed it</span>
                    </h3>
                    <Link href="/archive">
                      <a>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.185 6.08c1.485 1.585 2.733 2.8 3.813 3.643 1.045.843 2.057 1.45 3.002 1.855v.743c-1.08.506-2.16 1.18-3.171 2.024-1.012.81-2.227 1.99-3.644 3.576h-1.282c1.046-2.193 2.26-4.217 3.374-5.432H.014v-.978h19.263a31.274 31.274 0 01-1.855-2.699c-.338-.506-.844-1.417-1.485-2.733h1.248z"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="special-wrap">
                    {posts.slice(13, 17).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                    {/*** ===== content ==== ***/}
                  </div>
                </div>

                {/***** end *****/}
                <Subscribe />
              </main>

              <Footer />
            </div>
          </div>

          {/* <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>*/}
        
     
    </>
  );
}
