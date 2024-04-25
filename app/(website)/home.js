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
  {/*  <Subscribe /> */}
    </main>

  {/*  <Footer / >*/}
      </div> 
      </div>

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
                    
                    
        
                   
                   
                    {posts && posts.slice(0, 6).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                   
                 
                   
                  </div>
                  
                  
                  
                 <nav className="bt-pagination" role="navigation"> <span aria-current="page" className="page-numbers current">1</span> <Link href="/archive"><a className="page-numbers">2</a> </Link><a className="page-numbers">3</a> <a className="next page-numbers" href="https://influencer.beplusthemes.com/showreel-podcasts-style-03/page/2/">Next<svg width="19" height="16" viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

 <div className="elementor-element elementor-element-8511b5e e-con-full e-flex e-con e-parent" data-id="8511b5e" data-element_type="container" data-core-v316-plus="true">
     <div className="elementor-element elementor-element-776a7bd e-flex e-con-boxed e-con e-child" data-id="776a7bd" data-element_type="container">
       <div className="e-con-inner">
         <div className="elementor-element elementor-element-87a590e elementor-widget elementor-widget-heading" data-id="87a590e" data-element_type="widget" data-widget_type="heading.default">
           <div className="elementor-widget-container">
             <h6 className="elementor-heading-title elementor-size-default">Showreel</h6>
           </div>
         </div>







         <div className="elementor-element elementor-element-3f54139 elementor-widget elementor-widget-heading" data-id="3f54139" data-element_type="widget" data-widget_type="heading.default">
           <div className="elementor-widget-container">
             <h2 className="elementor-heading-title elementor-size-default">My latest <span>videos!</span></h2>
           </div>
         </div>
         <div className="elementor-element elementor-element-3f2fddb elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="3f2fddb" data-element_type="widget" data-widget_type="text-editor.default">
           <div className="elementor-widget-container">
             <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihilmei. Mei an pericula euripidis, hinc partem ei est.</p>
           </div>
         </div>
       </div>
     </div>
     <div className="elementor-element elementor-element-fcc57a8 e-con-full e-flex e-con e-child" data-id="fcc57a8" data-element_type="container">
       <div className="elementor-element elementor-element-ea875a4 bt-image-effect elementor-widget elementor-widget-bt-podcast-grid" data-id="ea875a4" data-element_type="widget" data-widget_type="bt-podcast-grid.default">
         <div className="elementor-widget-container">
           <div className="bt-elwg-podcast-grid--default">
             <div className="bt-podcast-grid">


               <article className="bt-post post-5179 podcast type-podcast status-publish has-post-thumbnail hentry podcast_categories-comedy podcast_categories-humor">
                 <div className="bt-post--inner">
                   <div className="bt-post--thumbnail">
                     <div className="bt-post--featured"> <a href="https://influencer.beplusthemes.com/podcast/data-driven-marketing-and-sales-with-dana-cutts-2/">
                         <div className="bt-cover-image"> <img loading="lazy" decoding="async" width="768" height="1150" src="images/podcast-2-min-768x1150.jpg" className="attachment-medium_large size-medium_large wp-post-image" alt=""   sizes="(max-width: 768px) 100vw, 768px" /></div>
                       </a></div>
                   </div>
                   <div className="bt-post--infor">
                     <div className="bt-post--pod-link"> <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                           <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
                         </svg></a></div>
                     <div className="bt-post--infor-inner">
                       <h3 className="bt-post--title"> <a href="https://influencer.beplusthemes.com/podcast/data-driven-marketing-and-sales-with-dana-cutts-2/"> Data-driven marketing and sales with Dana Cutts </a></h3>
                       <div className="bt-post--prf-link"> <a href="#" target="_blank"> <img decoding="async" src="images/tiktok-white.svg" alt="tiktok-white">@lindasusan19</a></div>
                     </div>
                   </div>
                 </div>
               </article>


             </div>
           </div>
         </div>
       </div>
     </div>



     <div className="elementor-element elementor-element-5acfc22 e-flex e-con-boxed e-con e-child" data-id="5acfc22" data-element_type="container">
       <div className="e-con-inner">
         <div className="elementor-element elementor-element-43ed41f elementor-widget elementor-widget-button" data-id="43ed41f" data-element_type="widget" data-widget_type="button.default">
           <div className="elementor-widget-container">
             <div className="elementor-button-wrapper"> <a className="elementor-button elementor-button-link elementor-size-sm" href="/streaming-videos/"> <span className="elementor-button-content-wrapper"> <span className="elementor-button-text">View More VIdeos</span> </span> </a></div>
           </div>
         </div>
         <div className="elementor-element elementor-element-443161c elementor-widget elementor-widget-button" data-id="443161c" data-element_type="widget" data-widget_type="button.default">
           <div className="elementor-widget-container">
             <div className="elementor-button-wrapper"> <a className="elementor-button elementor-button-link elementor-size-sm" href="/contact-us/"> <span className="elementor-button-content-wrapper"> <span className="elementor-button-text">Subscribe Now</span> </span> </a></div>
           </div>
         </div>
       </div>
     </div>
   </div>
                          
                        {/****new one***/}
</div> 



  
            

        
   

          
            {/***** end *****/}
        
    
    </>
  );
}
