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
      <div className="menu-overlay hide-on-desktop-lg"></div>

      <div id="wrapper">
        <main id="home" className="main grid-container">
          <div className="content-wrapper">
            {/*-- start: .intro-text --*/}
            <div className="intro-text textcenter section np-bottom grid-container grid-medium np-mobile np-tablet">
              <h1 className="title ularge">
                Welcome to Wavy, a fast 🚀and modern theme fully compatible with
                Ghost!
              </h1>
              <p>
                Rich right us federal alone degree issue professor. Form crime
                tough effect least store day. Deep range they modern.
              </p>
              <p>
                <a
                  href="https://ghost.estudiopatagon.com/wavy/membership"
                  className="epcl-button gradient-button wave-button icon"
                >
                  View Plans
                </a>
              </p>
            </div>
            {/******* into ***/}
            <div className="sticky-container section np-bottom">
              <h2 className="title bordered large">
                Latest Articles<svg class="decoration"></svg>
              </h2>
              <div className="center left-content grid-70">
                <div className="articles classic">
                  {posts.slice(0, 2).map((post) => (
                    <BlogOne
                      key={post._id}
                      post={post}
                      aspect="landscape"
                      preloadImage={true}
                    />
                  ))}
                  <div className="epcl-subscribe epcl-gradient">
                    <div className="grid-container grid-usmall grid-parent np-mobile textcenter">
                      <form
                        className="subscribe-form"
                        data-members-form="subscribe"
                      >
                        <h2 className="title large white">
                          Subscribe to our Newsletter
                        </h2>
                        <p className="description">
                          Subscribe to our email newsletter and unlock access to{" "}
                          <b>members-only</b> content and{" "}
                          <b>exclusive updates.</b>
                        </p>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="inputbox large"
                            required=""
                            placeholder="Enter your email address"
                            data-members-email=""
                          />
                          <button
                            className="epcl-button submit absolute wave-button"
                            type="submit"
                          >
                            Get Started<span className="loader"></span>
                          </button>
                        </div>
                        <p className="error-detail" data-members-error=""></p>
                        <p className="success-message">
                          Subscription was sent successfully, check your email{" "}
                          <i className="fa fa-envelope-o"></i>
                        </p>
                      </form>
                    </div>
                    <svg
                      className="epcl-waves"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 24 150 28"
                      preserveAspectRatio="none"
                      shape-rendering="auto"
                    >
                      <defs>
                        <path
                          id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        ></path>
                      </defs>
                      {/*<g className="epcl-parallax">
        <use xlink:href="#gentle-wave" x="48" y="2" fill="rgba(252, 255, 255,0.1)"></use>
        <use xlink:href="#gentle-wave" x="48" y="4" fill="rgba(252, 255, 255,0.15)"></use>
        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(252, 255, 255,0.1)"></use>
      </g>*/}
                    </svg>
                  </div>
                  {}
                  {posts.slice(2, 12).map((post) => (
                    <BlogOne
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
        </main>
      </div>

      {/*  <div className="bg-[#f8f8f8] text-base darkG:bg-neutral-900/95G text-neutral-900 dark:text-neutral-200 font-body">
         <div className="container ">
   <div className="nc-SectionMagazine8 relative py-16 lg:py-28">
     <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-14 text-neutral-900 darkG:text-neutral-50">
       <div className="max-w-2xl">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Listen to podcasts live</h2>
         <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 darkG:text-neutral-400">Click on music icon and enjoy music or podcast</span>
       </div>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8">
       {posts.slice(0, 10).map((post) => (
                  <BlogOne
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
                
      */}

      {/* <!------ post card------>*/}
      <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-t8d8hp"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    </>
  );
}
