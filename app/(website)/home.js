

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
      <h1 class="screen-reader-text">Vozzy</h1>

  <div className="site-bg">
    <div className="site-decor"></div>

  </div>

  <div className="site">
      <header className="site-header header2">
        <div className="site-section header-section is-skin bg-dark bg-transparent">
          <div className="container">
            <div className="section-inner">
              <div className="nav_extra-wrap">
                <ul className="nav-extra">
                  <li className="extra-item">
                    <a
                      href="https://vozzy.tmrwstudio.net/subscribe"
                      className="btn-trigger button btn-text"
                      aria-label="Subscribe"
                    >
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <path d="M30 0v6h4V0h-4zM10.785 7.955l-2.83 2.83 4.25 4.248 2.828-2.828-4.248-4.25zm42.43.002-4.25 4.248 2.828 2.83 4.25-4.25-2.828-2.828zM29 10C16.869 10 7 19.869 7 32c0 11.099 7.076 19.768 17 21.62V56c0 4.42 3.58 8 8 8s8-3.58 8-8v-3.5a21.8 21.8 0 0 0 7.55-4.95C51.71 43.4 54 37.88 54 32c0-5.88-2.29-11.4-6.45-15.55-4.08-4.102-9.514-6.373-15.3-6.438V10H29zm3 4c4.81 0 9.33 1.87 12.73 5.28C48.13 22.67 50 27.19 50 32c0 4.81-1.87 9.33-5.28 12.73-1.4 1.4-2.99 2.55-4.72 3.4a17.17 17.17 0 0 1-4 1.42V56h-8v-6.45a17.47 17.47 0 0 1-4-1.42c-1.73-.86-3.33-2.01-4.73-3.41C15.87 41.33 14 36.81 14 32c0-4.81 1.87-9.33 5.28-12.73C22.67 15.87 27.19 14 32 14zM0 30v4h5v-4H0zm58 0v4h6v-4h-6z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Subscribe</span>
                    </a>
                  </li>
                  <li className="extra-item">
                    <a
                      className="btn-trigger button btn-text"
                      href="https://vozzy.tmrwstudio.net/signup"
                      aria-label="Sign Up"
                    >
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <path d="M27.5 4C16.196 4 7 13.196 7 24.5c0 10.17 7.454 18.61 17.18 20.205L26 52h6l-2 8h6l3-12h-8l-1-4-.79-3.16c-1.51-.21-2.95-.62-4.3-1.22C19.08 37.08 15 31.26 15 24.5 15 15.4 22.4 8 31.5 8S48 15.4 48 24.5c0 4.19-1.57 8.01-4.14 10.92a16.65 16.65 0 0 1-3.29 2.86L46 60h4l-5.02-20.08C49.28 36.17 52 30.64 52 24.5 52 13.2 42.8 4 31.5 4h-4zM26 12l1 4h8l-1-4h-8z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Sign Up</span>
                    </a>
                  </li>
                  <li className="extra-item mobile-trigger">
                    <a
                      href="#"
                      className="btn-trigger menu-trigger button btn-text"
                      aria-label="Menu"
                    >
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 35"
                        >
                          <path d="M0 30.91h48v4H0v-4ZM0 0h48v4H0V0Zm0 15.455h48v4H0v-4Z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo-wrap">
                <div className="site-logo">
                  <a href="https://vozzy.tmrwstudio.net" aria-label="Vozzy">
                    <img
                      src="https://cdn.sanity.io/images/wusctyxy/production/0c9a03db187311c93c59a970327d79d0f57fa9a8-359x157.png"
                      alt="Vozzy"
                      fetchpriority="high"
                      className="light-logo"
                      width="100"
                      height="50"
                    />

                    <img
                      src="https://cdn.sanity.io/images/wusctyxy/production/0c9a03db187311c93c59a970327d79d0f57fa9a8-359x157.png"
                      alt="Vozzy"
                      fetchpriority="high"
                      className="dark-logo"
                      width="100"
                      height="50"
                    />
                  </a>
                </div>
              </div>
              <div className="nav_extra-wrap">
                <ul className="nav-extra">
                  <li className="extra-item">
                    <span className="btn-trigger skin-trigger trigger-dark button btn-text">
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <path d="M37.06 32c0-8.608 5.01-16.436 12.764-19.941l4.013-1.814-4.007-1.828a25.017 25.017 0 0 0-10.46-2.263h-4C21.271 6.154 9.8 17.749 9.8 32s11.471 25.846 25.57 25.846h4c3.65 0 7.169-.761 10.46-2.263l4.007-1.827-4.013-1.814C42.07 48.436 37.06 40.608 37.06 32zm-23.232-1.123zM39.37 53.846c-11.894 0-21.57-9.8-21.57-21.846s9.676-21.846 21.57-21.846c1.631 0 3.23.181 4.786.538C37.298 15.452 33.06 23.398 33.06 32s4.239 16.548 11.097 21.308a21.367 21.367 0 0 1-4.787.538z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Dark</span>
                    </span>

                    <a
                      href="#"
                      className="btn-trigger skin-trigger trigger-light button btn-text"
                    >
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <path d="M37.06 32c0-8.608 5.01-16.436 12.764-19.941l4.013-1.814-4.007-1.828a25.017 25.017 0 0 0-10.46-2.263h-4C21.271 6.154 9.8 17.749 9.8 32s11.471 25.846 25.57 25.846h4c3.65 0 7.169-.761 10.46-2.263l4.007-1.827-4.013-1.814C42.07 48.436 37.06 40.608 37.06 32zm-23.232-1.123zM39.37 53.846c-11.894 0-21.57-9.8-21.57-21.846s9.676-21.846 21.57-21.846c1.631 0 3.23.181 4.786.538C37.298 15.452 33.06 23.398 33.06 32s4.239 16.548 11.097 21.308a21.367 21.367 0 0 1-4.787.538z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Light</span>
                    </a>
                  </li>
                  <li className="extra-item mob_desk-trigger">
                    <span
                      className="btn-trigger button btn-text"
                      data-ghost-search=""
                    >
                      <span className="icon-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 52 48"
                        >
                          <path d="M22.4 0c12.365 0 22.4 9.527 22.4 21.266 0 11.739-10.035 21.266-22.4 21.266-12.365 0-22.4-9.527-22.4-21.266C0 9.527 10.035 0 22.4 0Zm2.066 37.806c9.137 0 16.54-7.403 16.54-16.54s-7.403-16.54-16.54-16.54-16.54 7.403-16.54 16.54 7.403 16.54 16.54 16.54Zm20.05.168 6.684 6.682L47.856 48l-6.682-6.685 3.341-3.34Z"></path>
                        </svg>
                      </span>
                      <span className="text-btn">Search</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section nav-section is-skin bg-light bg-transparent">
          <div className="container">
            <div className="section-inner box-wrap">
              <div className="nav-wrap">
                <div className="block-sign">
                  <span className="sign-line first"></span>
                  <nav className="nav-main">
                    <ul className="nav">
                      <li className="offcanvas-header">
                        <span className="popup-close">
                          <span className="close-icon close-offcanvas"></span>
                        </span>
                      </li>
                      <li className="nav-demos">
                        <a href="https://vozzy.tmrwstudio.net/intro/">Demos</a>
                      </li>
                      <li className="nav-membership">
                        <a href="https://vozzy.tmrwstudio.net/membership/">
                          Membership
                        </a>
                      </li>
                      <li className="nav-tags">
                        <a href="https://vozzy.tmrwstudio.net/tags/">Tags</a>
                      </li>
                      <li className="nav-authors">
                        <a href="https://vozzy.tmrwstudio.net/authors/">
                          Authors
                        </a>
                      </li>
                      <li className="nav-web-picks">
                        <a href="https://vozzy.tmrwstudio.net/web-picks/">
                          Web Picks
                        </a>
                      </li>
                      <li className="nav-style-guide">
                        <a href="https://vozzy.tmrwstudio.net/style-guide/">
                          Style Guide
                        </a>
                      </li>
                      <li className="nav-contact">
                        <a href="https://vozzy.tmrwstudio.net/contact/">
                          Contact
                        </a>
                      </li>
                      <li className="nav-featured">
                        <a href="https://vozzy.tmrwstudio.net/featured/">
                          Featured
                        </a>
                      </li>
                      <li className="nav-inbuilt-comment">
                        <a href="https://vozzy.tmrwstudio.net/love-for-all-hatred-for-none/#comments">
                          Inbuilt Comment
                        </a>
                      </li>
                      <li className="nav-disqus-comment">
                        <a href="https://vozzy.tmrwstudio.net/good-friends-are-like-stars/#comments">
                          Disqus Comment
                        </a>
                      </li>
                      <li className="nav-post-one">
                        <a href="https://vozzy.tmrwstudio.net/time-tide-wait-for-no-man/">
                          Post One
                        </a>
                      </li>
                      <li className="nav-post-one-sidebar">
                        <a href="https://vozzy.tmrwstudio.net/good-things-come-in-good-time/">
                          Post One + Sidebar
                        </a>
                      </li>
                      <li className="nav-post-two">
                        <a href="https://vozzy.tmrwstudio.net/you-are-your-best-thing/">
                          Post Two
                        </a>
                      </li>
                      <li className="nav-post-two-sidebar">
                        <a href="https://vozzy.tmrwstudio.net/no-guts-no-story/">
                          Post Two + Sidebar
                        </a>
                      </li>
                      <li className="nav-post-three">
                        <a href="https://vozzy.tmrwstudio.net/a-dream-is-only-a-dream/">
                          Post Three
                        </a>
                      </li>
                      <li className="nav-post-three-sidebar">
                        <a href="https://vozzy.tmrwstudio.net/time-was-gods-first-creation/">
                          Post Three + Sidebar
                        </a>
                      </li>
                      <li className="nav-post-rtl">
                        <a href="https://vozzy.tmrwstudio.net/all-humor-is-rooted-in-pain/">
                          Post RTL
                        </a>
                      </li>
                      <li className="nav-sign-up">
                        <a href="https://vozzy.tmrwstudio.net/signup/">
                          Sign Up
                        </a>
                      </li>
                      <li className="nav-sign-in">
                        <a href="https://vozzy.tmrwstudio.net/signin/">
                          Sign In
                        </a>
                      </li>
                      <li className="nav-error-404">
                        <a href="https://vozzy.tmrwstudio.net/404/">
                          Error 404
                        </a>
                      </li>

                      <li className="extra-item">
                        <a
                          href="https://vozzy.tmrwstudio.net/subscribe"
                          className="btn-trigger button btn-text"
                          aria-label="Subscribe"
                        >
                          <span className="icon-svg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 64 64"
                            >
                              <path d="M30 0v6h4V0h-4zM10.785 7.955l-2.83 2.83 4.25 4.248 2.828-2.828-4.248-4.25zm42.43.002-4.25 4.248 2.828 2.83 4.25-4.25-2.828-2.828zM29 10C16.869 10 7 19.869 7 32c0 11.099 7.076 19.768 17 21.62V56c0 4.42 3.58 8 8 8s8-3.58 8-8v-3.5a21.8 21.8 0 0 0 7.55-4.95C51.71 43.4 54 37.88 54 32c0-5.88-2.29-11.4-6.45-15.55-4.08-4.102-9.514-6.373-15.3-6.438V10H29zm3 4c4.81 0 9.33 1.87 12.73 5.28C48.13 22.67 50 27.19 50 32c0 4.81-1.87 9.33-5.28 12.73-1.4 1.4-2.99 2.55-4.72 3.4a17.17 17.17 0 0 1-4 1.42V56h-8v-6.45a17.47 17.47 0 0 1-4-1.42c-1.73-.86-3.33-2.01-4.73-3.41C15.87 41.33 14 36.81 14 32c0-4.81 1.87-9.33 5.28-12.73C22.67 15.87 27.19 14 32 14zM0 30v4h5v-4H0zm58 0v4h6v-4h-6z"></path>
                            </svg>
                          </span>
                          <span className="text-btn">Subscribe</span>
                        </a>
                      </li>

                      <li className="extra-item">
                        <a
                          className="btn-trigger button btn-text"
                          href="https://vozzy.tmrwstudio.net/signup"
                          aria-label="Sign Up"
                        >
                          <span className="icon-svg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 64 64"
                            >
                              <path d="M27.5 4C16.196 4 7 13.196 7 24.5c0 10.17 7.454 18.61 17.18 20.205L26 52h6l-2 8h6l3-12h-8l-1-4-.79-3.16c-1.51-.21-2.95-.62-4.3-1.22C19.08 37.08 15 31.26 15 24.5 15 15.4 22.4 8 31.5 8S48 15.4 48 24.5c0 4.19-1.57 8.01-4.14 10.92a16.65 16.65 0 0 1-3.29 2.86L46 60h4l-5.02-20.08C49.28 36.17 52 30.64 52 24.5 52 13.2 42.8 4 31.5 4h-4zM26 12l1 4h8l-1-4h-8z"></path>
                            </svg>
                          </span>
                          <span className="text-btn">Sign Up</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <span className="sign-line last"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


                        <main id="site-main" className="site-main">
  
        <div className="site-section blog-section is-skin bg-light bg-transparent">
          <div className="container">
            <div className="site-content fullwidth">
              <div className="post-feed latest-posts posts-grid">
                <div className="grid-col grid-col--1"></div>
                <div className="grid-col grid-col--2"></div>
                
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
