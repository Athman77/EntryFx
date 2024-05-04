

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

          <Header  />
          {/*** end ***/}

          <main className="global-main">
            {/**** ====== hero section ===== ***/}
            <div className="hero-section">
              <div className="hero-wrap">
                <h1 className="hero-title global-title-huge global-title-offset text-white">
                  <span>HELLO 👋</span> WELCOME;
                </h1>
                <p className="hero-description global-subtitle-excerpt text-white">
                  Get Live Football Scores and Real-Time Football Results with LiveScore! 
                </p>
                <a href="/" className="hero-button global-button">
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
      
 

      <div
        data-elementor-type="wp-page"
        data-elementor-id="3718"
        className="elementor elementor-3718"
        data-elementor-post-type="page"
      >
        {/****section***/}
        <div
          className="elementor-element elementor-element-8511b5e e-con-full e-flex e-con e-parent"
          data-id="8511b5e"
          data-element_type="container"
          data-core-v316-plus="true"
        >
          <div
            className="elementor-element elementor-element-fcc57a8 e-con-full e-flex e-con e-child"
            data-id="fcc57a8"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-ea875a4 bt-image-effect elementor-widget elementor-widget-bt-podcast-grid"
              data-id="ea875a4"
              data-element_type="widget"
              data-widget_type="bt-podcast-grid.default"
            >
              <div className="elementor-widget-container">
                <div className="bt-elwg-podcast-grid--default">
                  <div className="bt-podcast-grid">
                    {posts &&
                      posts
                        .slice(0, 5)
                        .map((post) => (
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
          </div>
        </div>

        {/****new one***/}
      </div>

      {/*/////blog section////*/}

      {/* <!------ post card------>*/}

      <div
        data-elementor-type="wp-page"
        data-elementor-id="4810"
        className="elementor elementor-4810"
        data-elementor-post-type="page"
      >
        {/* <!------ post card------>*/}
        <div className="elementor-element elementor-element-510726c e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-cb5e833 elementor-absolute e-transform elementor-widget elementor-widget-bt-orbit-circle">
              <div className="elementor-widget-container">
                <div className="bt-elwg-orbit-circle">
                  <div className="bt-orbit-wrap">
                    <div className="bt-orbit red">
                      <span></span>
                    </div>
                    <div className="bt-orbit blue">
                      <span></span>
                    </div>
                    <div className="bt-orbit yellow">
                      <span></span>
                    </div>
                    <div className="bt-orbit purple">
                      <span></span>
                    </div>
                    <div className="bt-orbit green">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-09f894c elementor-absolute e-transform elementor-widget elementor-widget-bt-pattern-background">
              <div className="elementor-widget-container">
                <div className="bt-elwg-pattern-background">
                  <div className="bt-bg-pattern-effect"></div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b28e6c6 e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-170057f elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">
                      Podcast Show
                    </h6>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-bd103a3 elementor-widget elementor-widget-heading"
                  data-id="bd103a3"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default text-white">
                      My recent <span>episodes</span>
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8f9a284 elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p className="text-white">
                      Alienum phaedrum torquatos nec eu, vis detraxit periculis
                      ex, nihilmei. Mei an pericula euripidis, hinc partem ei
                      est.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-061914d e-flex e-con-boxed e-con e-child"
              data-id="061914d"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-922d7a7 bt-image-effect elementor-widget elementor-widget-bt-podcast-grid-style-2"
                  data-id="922d7a7"
                  data-element_type="widget"
                  data-widget_type="bt-podcast-grid-style-2.default"
                >
                  <div className="elementor-widget-container">
                    <div className="bt-elwg-podcast-grid--style-2">
                      <div className="bt-podcast-grid">
                        {posts &&
                          posts
                            .slice(5, 13)
                            .map((post) => (
                              <PostList
                                key={post._id}
                                post={post}
                                aspect="landscape"
                                preloadImage={true}
                              />
                            ))}
                      </div>

                       <nav className="bt-pagination" role="navigation">
                        {" "}
                        <span
                          aria-current="page"
                          className="page-numbers current"
                        >
                          1
                        </span>{" "}
                        <Link href="/archive">
                          <a className="page-numbers">2</a>{" "}
                        </Link>
                        <a className="page-numbers">3</a>{" "}
                            <Link href="/archive">
                        <a
                          className="next page-numbers"
                         
                        >
                          Next
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.28111 0.217951L8.54638 0.925058C8.37249 1.09242 8.37249 1.36377 8.54638 1.53117L14.3032 7.07149L1.63283 7.07149C1.38691 7.07149 1.18752 7.26338 1.18752 7.50006L1.18752 8.50006C1.18752 8.73674 1.38691 8.92863 1.63283 8.92863L14.3032 8.92863L8.54638 14.469C8.37249 14.6363 8.37249 14.9077 8.54638 15.0751L9.28111 15.7822C9.455 15.9496 9.73696 15.9496 9.91089 15.7822L17.6821 8.30309C17.856 8.13574 17.856 7.86438 17.6821 7.69699L9.91086 0.217952C9.73696 0.0505587 9.455 0.0505586 9.28111 0.217951Z"></path>
                          </svg>
                        </a>
                              </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-cb5e833 elementor-absolute e-transform elementor-widget elementor-widget-bt-orbit-circle">
              <div className="elementor-widget-container">
                <div className="bt-elwg-orbit-circle">
                  <div className="bt-orbit-wrap">
                    <div className="bt-orbit red">
                      <span></span>
                    </div>
                    <div className="bt-orbit blue">
                      <span></span>
                    </div>
                    <div className="bt-orbit yellow">
                      <span></span>
                    </div>
                    <div className="bt-orbit purple">
                      <span></span>
                    </div>
                    <div className="bt-orbit green">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
{/* <div className="elementor-element elementor-element-09f894c elementor-absolute e-transform elementor-widget elementor-widget-bt-pattern-background">
              <div className="elementor-widget-container">
                <div className="bt-elwg-pattern-background">
                  <div className="bt-bg-pattern-effect"></div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>

        {/*--_-gaucho---**/}
      </div>
  <div className="global-wrap">
        <div className="global-content">
          

          <main className="global-main">
       

            <Subscribe />
          </main>

          <Footer / >
        </div>
      </div>
      {/***** end *****/}
    </>
  );
}
