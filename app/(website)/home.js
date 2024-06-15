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
                <a href="https://paystack.com/pay/9o5zytnrlk" className="hero-button global-button">
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
              <div className="nc-SectionLargeSlider relative pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">

      {/*/////content////*/}
      <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Editor's pick</h2><span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover the most outstanding articles in all topics of life. </span>
                  </div>
                </div>
      
      {/*********/}
      
</div>
</div>
</div>
</div>

      {/* <!------ post card------>*/}

     
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
