/**/

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import Video from "@/components/video";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;
  const cover = post?.videoCover
    ? urlForImage(post?.videoCover)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
  <div className="menu-overlay hide-on-desktop-lg"></div>

 
  <div id="wrapper">




    
    <main id="single" className="main grid-container classNameic">



      
      <div className="center content">
 <div className="left-content grid-70 np-mobile">

          <article className="main-article post-access-public primary-tag-nature post tag-nature tag-design tag-hash-import-2023-11-22-00-15 tag-hash-jonathan-doe">

            <header>
              <div className="featured-image">
                 {post.videoType === "upload" ? (
                    <video
                      className="fullwidth"
                      id="my-video"
                      controls
                      poster={cover?.src}
                      // autoPlay
                      playsInline>
                      <source
                        type="video/mp4"
                        data-quality="720p"
                        title="720p"
                        label="720p"
                        res="720"
                        size="720"
                        src={post?.videoUrl}
                      />
                    </video>
                  ) : (
                    <Video id={post.youtube || "Thumbnail"} />
                  )}
                {/*<img className="fullwidth" src="images/Untitled-3.webp" alt="Modern and colorful style of caricatures created by AI" />*/}
              </div>
              <div className="info">
                <h1 className="main-title title ularge">{post.title}</h1>
               
                <div className="meta epcl-flex  ">
                  <a href="/wavy/author/jonathan-doe/" className="author">
                    <span className="author-image cover lazy epcl-loader" data-src="/wavy/content/images/size/w120h120/2023/11/Untitled--12--1.jpeg"></span>
                    <span className="author-name"><span>By</span> Adriana Martins</span>
                  </a>
                  <time className="meta-info" datetime="2023-10-21">
                    <span className="dot"></span>{format(
                          parseISO(
                            post?.publishedAt || post._createdAt
                          ),
                          "MMMM dd, yyyy"
                        )}{" "}
                  </time>
                  <div className="min-read">
                    <svg>
                    {/* <use xlink:href="#reading-icon"></use>*/}
                    </svg> 2 min read
                  </div>
                </div>
                
              </div>

              <div className="clear"></div>
            </header>

            <section className="post-content">
              <div className="epcl-share-container hide-on-mobile hide-on-tablet hide-on-desktop-sm">
                <div className="epcl-share epcl-social-buttons fill-color">
                  <div className="epcl-share-inner">
                    <a className="tooltip facebook " rel="nofollow noopener" href="https://www.facebook.com/sharer/sharer.php?u=https://ghost.estudiopatagon.com/wavy/modern-and-colorful-style-of-caricatures-created-by-ai/" target="_blank" data-tooltip-position="right" data-title="Share on Facebook">
                      <svg className="icon large">
                      {/*  <use xlink:href="#facebook-icon"></use>*/}
                      </svg>
                      <span className="screen-reader-text">Share on Facebook</span>
                    </a>
                    <a className="tooltip twitter " rel="nofollow noopener" href="https://twitter.com/share?text=Modern%20and%20colorful%20style%20of%20caricatures%20created%20by%20AI&amp;url=https://ghost.estudiopatagon.com/wavy/modern-and-colorful-style-of-caricatures-created-by-ai/" target="_blank" data-tooltip-position="right" data-title="Share on Twitter">
                      <svg className="icon large">
                        {/*<use xlink:href="#twitter-icon"></use>*/}
                      </svg>
                      <span className="screen-reader-text">Share on Twitter</span>
                    </a>
                    <a className="tooltip pinterest" rel="nofollow noopener" href="https://pinterest.com/pin/create/link/?url=https://ghost.estudiopatagon.com/wavy/modern-and-colorful-style-of-caricatures-created-by-ai/&amp;media=https://ghost.estudiopatagon.com/wavy/content/images/size/w300h300/2024/01/Untitled-3.webp&amp;description=Modern%20and%20colorful%20style%20of%20caricatures%20created%20by%20AI" target="_blank" data-tooltip-position="right" data-title="Share on Pinterest">
                      <svg className="icon large">
                    {/* <use xlink:href="#pinterest-icon"></use>*/}
                      </svg>
                      <span className="screen-reader-text">Share on Pinterest</span>
                    </a>
                    <a className="tooltip telegram" rel="nofollow noopener" href="https://telegram.me/share/url?url=https://ghost.estudiopatagon.com/wavy/modern-and-colorful-style-of-caricatures-created-by-ai/&amp;text=Modern%20and%20colorful%20style%20of%20caricatures%20created%20by%20AI" target="_blank" data-tooltip-position="right" data-title="Share on Telegram">
                      <svg className="icon large">
                     
                      </svg>
                      <span className="screen-reader-text">Share on Telegram</span>
                    </a>
                    <a className="tooltip whatsapp" rel="nofollow noopener" href="https://api.whatsapp.com/send?text=https://ghost.estudiopatagon.com/wavy/modern-and-colorful-style-of-caricatures-created-by-ai/" target="_blank" data-tooltip-position="right" data-title="Share on WhatsApp">
                    
                      <span className="screen-reader-text">Share on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

             

              <div className="text main-content">
                {post.author.bio && <PortableText value={post.author.bio} />}
         
              </div>

              <div className="bottom-tags textcenter">
                <div className="tags-list">
                  <p><strong>Tagged in:</strong></p>
                  <a href="/wavy/tag/nature/">Nature</a>, <a href="/wavy/tag/design/">Design</a>
                </div>
                <p className="last-update"><span className="dot small"></span> <strong>Last Update:</strong> January 02, 2024</p>
              </div>
            </section>

          </article>

          <div className="clear"></div>

          <section className="siblings" id="epcl-other-stories">
            <a href="/wavy/more-effective-work-schedules-in-remote-work/" className="epcl-button gradient-button wave-button">
              Previous Article
            </a>
            <div className="clear"></div>
          </section>

          <div className="epcl-subscribe epcl-gradient">
            <div className="grid-container grid-usmall grid-parent np-mobile textcenter">
              <form className="subscribe-form" data-members-form="subscribe">
                <h2 className="title large white">Subscribe to our Newsletter</h2>
                <p className="description">Subscribe to our email newsletter and unlock access to <b>members-only</b> content and <b>exclusive updates.</b></p>
                <div className="form-group">
                  <input type="email" name="email" className="inputbox large" required="" placeholder="Enter your email address" data-members-email="" />
                  <button className="epcl-button submit absolute wave-button" type="submit">Get Started<span className="loader"></span></button>
                </div>
                <p className="error-detail" data-members-error=""></p>
                <p className="success-message">Subscription was sent successfully, check your email <i className="fa fa-envelope-o"></i></p>
              </form>
            </div>
          {/*  <svg className="epcl-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
              </defs>
              <g className="epcl-parallax">
                
              </g>
            </svg>*/}
          </div>

          
          <section id="author" className="author medium-section np-bottom  with-avatar single-author">
            <h3 className="title medium bordered absolute-border gray-border"><span>About the Author</span><svg className="decoration">
{/*<use xlink:href="#title-decoration"></use>*/}
              </svg></h3>
            <div className="epcl-flex">
              <div className="left">
                <a href="/wavy/author/jonathan-doe/" className="author-avatar translate-effect epcl-loader">
                  <span className="author-image cover lazy" data-src="https://ghost.estudiopatagon.com/wavy/content/images/2023/11/Untitled--12--1.jpeg"></span>
                </a>
              </div>
              <div className="right">
                <h4 className="title medium author-name underline-effect">
                  <a href="/wavy/author/jonathan-doe/">
                    Adriana Martins
                  </a>
                  <span className="location">
                    Canada
                  </span>
                </h4>
                <div className="info">
                  <p>Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
                </div>
                <div className="social">
                  <a href="https://twitter.com/envato" className="twitter tooltip" data-title="Follow me on Twitter" target="_blank">
                    <svg className="icon">
            {/* <use xlink:href="#twitter-icon"></use>*/}
                    </svg>Twitter
                  </a>
                  <a href="https://www.facebook.com/envato" className="facebook tooltip" data-title="Follow me on Facebook" target="_blank">
                    <svg className="icon">
            {/* <use xlink:href="#facebook-icon"></use>*/}
                    </svg>Facebook
                  </a>
                  <a href="https://estudiopatagon.com" className="website tooltip" data-title="Website: https://estudiopatagon.com" target="_blank">
                    <svg className="icon main-color">
            {/*<use xlink:href="#website-icon"></use>*/}
                    </svg>Website
                  </a>
                </div>
                <a href="/wavy/author/jonathan-doe/" className="epcl-button medium gradient-button icon wave-button">
                  View All Posts
                </a>
              </div>

            </div>

          </section>
         

      
          <div className="clear"></div>

         

        </div>
      </div>
    </main>
  </div>
{/************/}










     

     
    
         
                        <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-ta1yzo"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    
        
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
