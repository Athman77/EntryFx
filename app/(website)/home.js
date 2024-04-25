
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
                  <span>SO, REMEMBER</span> ME;
                </h1>
                <p className="hero-description global-subtitle-excerpt">
                  I will remember you.And be grateful to Me & do not
                  deny Me.[Quran 2:152]
                </p>
                <a
                  href="/"
                  className="hero-button global-button">
                  Support our channel
                </a>
              </div>
            </div>
            {/**** ====== hero section end ===== ***/}


        <div data-elementor-type="wp-page" data-elementor-id="4810" className="elementor elementor-4810" data-elementor-post-type="page">
    
    
   {/* <!------ post card------>*/}
    <div className="elementor-element elementor-element-510726c e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-cb5e833 elementor-absolute e-transform elementor-widget elementor-widget-bt-orbit-circle">
          <div className="elementor-widget-container">
            <div className="bt-elwg-orbit-circle">
              <div className="bt-orbit-wrap">
                <div className="bt-orbit red"><span></span></div>
                <div className="bt-orbit blue"><span></span></div>
                <div className="bt-orbit yellow"><span></span></div>
                <div className="bt-orbit purple"><span></span></div>
                <div className="bt-orbit green"><span></span></div>
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
            <div className="elementor-element elementor-element-170057f elementor-widget elementor-widget-heading" >
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">Podcast Show</h6>
              </div>
            </div>
            <div className="elementor-element elementor-element-bd103a3 elementor-widget elementor-widget-heading" data-id="bd103a3" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">My recent <span>episodes</span></h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-8f9a284 elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
              {/* 
                  .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {
                    background-color: #69727d;
                    color: #fff
                  }

                  .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {
                    color: #69727d;
                    border: 3px solid;
                    background-color: transparent
                  }

                  .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {
                    margin-top: 8px
                  }

                  .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {
                    width: 1em;
                    height: 1em
                  }

                  .elementor-widget-text-editor .elementor-drop-cap {
                    float: left;
                    text-align: center;
                    line-height: 1;
                    font-size: 50px
                  }

                  .elementor-widget-text-editor .elementor-drop-cap-letter {
                    display: inline-block
                  }
                </style>*/}
                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihilmei. Mei an pericula euripidis, hinc partem ei est.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-061914d e-flex e-con-boxed e-con e-child" data-id="061914d" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-922d7a7 bt-image-effect elementor-widget elementor-widget-bt-podcast-grid-style-2" data-id="922d7a7" data-element_type="widget" data-widget_type="bt-podcast-grid-style-2.default">
              <div className="elementor-widget-container">
                <div className="bt-elwg-podcast-grid--style-2">
                  <div className="bt-podcast-grid">
                    
                    
        
                   
                   
                    {posts && posts.slice(0, 8).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                   
                 
                   
                  </div>
                  
                  
                  
                  <nav className="bt-pagination" role="navigation"> <span aria-current="page" className="page-numbers current">1</span> <a className="page-numbers" href="https://influencer.beplusthemes.com/showreel-podcasts-style-03/page/2/">2</a> <a className="page-numbers" href="https://influencer.beplusthemes.com/showreel-podcasts-style-03/page/3/">3</a> <a className="next page-numbers" href="https://influencer.beplusthemes.com/showreel-podcasts-style-03/page/2/">Next<svg width="19" height="16" viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.28111 0.217951L8.54638 0.925058C8.37249 1.09242 8.37249 1.36377 8.54638 1.53117L14.3032 7.07149L1.63283 7.07149C1.38691 7.07149 1.18752 7.26338 1.18752 7.50006L1.18752 8.50006C1.18752 8.73674 1.38691 8.92863 1.63283 8.92863L14.3032 8.92863L8.54638 14.469C8.37249 14.6363 8.37249 14.9077 8.54638 15.0751L9.28111 15.7822C9.455 15.9496 9.73696 15.9496 9.91089 15.7822L17.6821 8.30309C17.856 8.13574 17.856 7.86438 17.6821 7.69699L9.91086 0.217952C9.73696 0.0505587 9.455 0.0505586 9.28111 0.217951Z"></path>
                      </svg></a></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/*--_-gaucho---**/}

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
                      title="Victoria West"></a>
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
                      title="Lauren Langford"></a>
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
                      title="Megan Anderson"></a>
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
                {posts &&
                  posts
                    .slice(5, 6)
                    .map(post => (
                      <BlogOne
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                {posts &&
                  posts
                    .slice(6, 13)
                    .map(post => (
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
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.185 6.08c1.485 1.585 2.733 2.8 3.813 3.643 1.045.843 2.057 1.45 3.002 1.855v.743c-1.08.506-2.16 1.18-3.171 2.024-1.012.81-2.227 1.99-3.644 3.576h-1.282c1.046-2.193 2.26-4.217 3.374-5.432H.014v-.978h19.263a31.274 31.274 0 01-1.855-2.699c-.338-.506-.844-1.417-1.485-2.733h1.248z"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="special-wrap">
                {posts.slice(13, 17).map(post => (
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

    
    </>
  );
}
