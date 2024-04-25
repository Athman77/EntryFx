

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
                  I will remember you.And be grateful to Me & do not deny
                  Me.[Quran 2:152]
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
                    <h2 className="elementor-heading-title elementor-size-default">
                      My recent <span>episodes</span>
                    </h2>
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
                    <p>
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
                            .slice(0, 6)
                            .map((post) => (
                              <PostList
                                key={post._id}
                                post={post}
                                aspect="landscape"
                                preloadImage={true}
                              />
                            ))}
                      </div>

                    {/*  <nav className="bt-pagination" role="navigation">
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
                        <a
                          className="next page-numbers"
                          href="https://influencer.beplusthemes.com/showreel-podcasts-style-03/page/2/"
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
                      </nav>*/}
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
                    <h2 className="elementor-heading-title elementor-size-default">
                      My recent <span>episodes</span>
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8f9a284 elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
       
                    <p>
                      Alienum phaedrum torquatos nec eu, vis detraxit periculis
                      ex, nihilmei. Mei an pericula euripidis, hinc partem ei
                      est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        {/*--_-gaucho---**/}
      </div>

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
                        .slice(6, 11)
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
<section>
<div data-elementor-type="wp-page" data-elementor-id="4695" className="elementor elementor-4695" data-elementor-post-type="page">


  

  <div className="elementor-element elementor-element-98c0b57 e-flex e-con-boxed e-con e-parent" data-id="98c0b57" data-element_type="container" data-core-v316-plus="true">
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-57800aa elementor-absolute e-transform elementor-widget elementor-widget-bt-orbit-circle">
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
      <div className="elementor-element elementor-element-5d3652c elementor-absolute e-transform elementor-widget elementor-widget-bt-pattern-background">
        <div className="elementor-widget-container">
          <div className="bt-elwg-pattern-background">
            <div className="bt-bg-pattern-effect"></div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-b24c51f e-con-full e-flex e-con e-child" data-id="b24c51f" data-element_type="container">
        <div className="elementor-element elementor-element-a45c37b bt-image-effect elementor-widget elementor-widget-bt-post-grid-Style-2" data-id="a45c37b" data-element_type="widget" data-widget_type="bt-post-grid-Style-2.default">
          <div className="elementor-widget-container">
            <div className="bt-elwg-post-grid--style-2">
              <div className="bt-post-grid">


                <article className="bt-post post-3580 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle category-travel">
                  <div className="bt-post--inner">
                    <div className="bt-post--featured"> <a href="">
                        <div className="bt-cover-image"> <img loading="lazy" decoding="async" width="768" height="1155" src="images/post-14-min-768x1155.jpg" className="attachment-medium_large size-medium_large wp-post-image" alt="" /></div>
                      </a></div>
                    <div className="bt-post--infor">
                      <div className="bt-post--publish"> <svg width="23" height="23" viewBox="0 0 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.352 22.9922C14.3232 22.9962 14.2941 22.9981 14.265 22.998H3.43701C2.52552 22.9967 1.65175 22.634 1.00742 21.9893C0.363083 21.3445 0.000793481 20.4706 0 19.5591V6.15283C0.000794397 5.24153 0.363147 4.36802 1.00754 3.72363C1.65193 3.07924 2.52571 2.71661 3.43701 2.71582H4.51099V1.85596C4.50705 1.74062 4.52639 1.62578 4.56781 1.51807C4.60923 1.41035 4.67191 1.31199 4.75211 1.229C4.83231 1.14602 4.9284 1.08023 5.03464 1.03516C5.14088 0.990085 5.25511 0.966797 5.37051 0.966797C5.48592 0.966797 5.60012 0.990085 5.70636 1.03516C5.8126 1.08023 5.90869 1.14602 5.98889 1.229C6.06909 1.31199 6.13176 1.41035 6.17319 1.51807C6.21461 1.62578 6.23395 1.74062 6.23001 1.85596V2.71582H10.1V1.85596C10.0961 1.74062 10.1154 1.62578 10.1568 1.51807C10.1982 1.41035 10.2609 1.31199 10.3411 1.229C10.4213 1.14602 10.5174 1.08023 10.6236 1.03516C10.7299 0.990085 10.8441 0.966797 10.9595 0.966797C11.0749 0.966797 11.1891 0.990085 11.2954 1.03516C11.4016 1.08023 11.4977 1.14602 11.5779 1.229C11.6581 1.31199 11.7208 1.41035 11.7622 1.51807C11.8036 1.62578 11.8229 1.74062 11.819 1.85596V2.71582H15.729V1.85596C15.7251 1.74075 15.7444 1.62615 15.7857 1.51855C15.8271 1.41096 15.8897 1.31287 15.9698 1.22998C16.0499 1.14709 16.1459 1.08115 16.252 1.03613C16.3581 0.991113 16.4722 0.967773 16.5875 0.967773C16.7028 0.967773 16.8169 0.991113 16.923 1.03613C17.0291 1.08115 17.1251 1.14709 17.2052 1.22998C17.2853 1.31287 17.3479 1.41096 17.3893 1.51855C17.4306 1.62615 17.4499 1.74075 17.446 1.85596V2.71582H18.563C19.4745 2.71661 20.3485 3.0793 20.9932 3.72363C21.6379 4.36797 22.0007 5.24134 22.002 6.15283V10.8799C21.9944 11.1028 21.9005 11.3143 21.7401 11.4692C21.5798 11.6242 21.3655 11.7104 21.1425 11.7104C20.9195 11.7104 20.7052 11.6242 20.5448 11.4692C20.3845 11.3143 20.2906 11.1028 20.283 10.8799V6.15283C20.2822 5.69717 20.1008 5.26068 19.7786 4.93848C19.4564 4.61627 19.0197 4.43488 18.564 4.43408H17.447V5.29395C17.4509 5.40915 17.4316 5.52424 17.3903 5.63184C17.3489 5.73943 17.2863 5.83752 17.2062 5.92041C17.1261 6.0033 17.0301 6.06924 16.924 6.11426C16.8179 6.15928 16.7038 6.18213 16.5885 6.18213C16.4732 6.18213 16.3591 6.15928 16.253 6.11426C16.1469 6.06924 16.0509 6.0033 15.9708 5.92041C15.8907 5.83752 15.8281 5.73943 15.7867 5.63184C15.7454 5.52424 15.7261 5.40915 15.73 5.29395V4.43408H11.82V5.29395C11.8124 5.51682 11.7185 5.72832 11.5582 5.8833C11.3978 6.03828 11.1835 6.12451 10.9605 6.12451C10.7375 6.12451 10.5232 6.03828 10.3629 5.8833C10.2025 5.72832 10.1086 5.51682 10.101 5.29395V4.43408H6.23001V5.29395C6.22241 5.51682 6.12853 5.72832 5.96817 5.8833C5.80781 6.03828 5.59352 6.12451 5.37051 6.12451C5.1475 6.12451 4.93321 6.03828 4.77286 5.8833C4.6125 5.72832 4.51859 5.51682 4.51099 5.29395V4.43408H3.43701C2.98143 4.43514 2.5448 4.61633 2.22266 4.93848C1.90051 5.26062 1.71904 5.69725 1.71799 6.15283V19.5591C1.71878 20.0147 1.90015 20.4512 2.22235 20.7734C2.54455 21.0956 2.98135 21.277 3.43701 21.2778H13.577V17.7549C13.5783 16.8432 13.9411 15.9694 14.5857 15.3247C15.2304 14.6801 16.1043 14.3172 17.016 14.3159H21.14C21.3086 14.3161 21.4734 14.3659 21.6139 14.459C21.7544 14.5521 21.8645 14.6842 21.9305 14.8394C21.9964 14.9945 22.0153 15.1658 21.9848 15.3315C21.9543 15.4973 21.8758 15.6505 21.759 15.772L15.059 22.7349C14.9787 22.8179 14.8825 22.884 14.7762 22.9292C14.6699 22.9744 14.5555 22.9979 14.44 22.998C14.4106 22.9981 14.3811 22.9963 14.352 22.9922ZM15.297 17.7549V20.0059L19.12 16.0352H17.02C16.5642 16.0357 16.1271 16.2168 15.8047 16.5391C15.4823 16.8613 15.3008 17.2981 15.3 17.7539L15.297 17.7549ZM8.25101 17.501C8.25081 17.3308 8.30107 17.1645 8.39545 17.0229C8.48982 16.8814 8.62406 16.7708 8.78119 16.7056C8.93832 16.6403 9.11128 16.6232 9.27817 16.6562C9.44506 16.6893 9.59838 16.7714 9.71875 16.8916C9.83912 17.0118 9.92114 17.1652 9.95441 17.332C9.98767 17.4989 9.9707 17.6719 9.90564 17.8291C9.84058 17.9863 9.73035 18.1203 9.5889 18.2148C9.44745 18.3094 9.28113 18.3599 9.11099 18.3599C8.99802 18.36 8.88614 18.3381 8.78174 18.2949C8.67734 18.2517 8.58248 18.1883 8.50259 18.1084C8.42271 18.0285 8.35937 17.9335 8.31619 17.8291C8.27302 17.7247 8.25088 17.614 8.25101 17.501ZM4.51099 17.501C4.51079 17.3308 4.56108 17.1645 4.65546 17.0229C4.74983 16.8814 4.88407 16.7708 5.0412 16.7056C5.19833 16.6403 5.37129 16.6232 5.53818 16.6562C5.70507 16.6893 5.85839 16.7714 5.97876 16.8916C6.09913 17.0118 6.18115 17.1652 6.21442 17.332C6.24768 17.4989 6.23068 17.6719 6.16562 17.8291C6.10056 17.9863 5.99036 18.1203 5.84891 18.2148C5.70746 18.3094 5.54114 18.3599 5.371 18.3599C5.25803 18.36 5.14615 18.3381 5.04175 18.2949C4.93735 18.2517 4.84249 18.1883 4.7626 18.1084C4.68272 18.0285 4.61937 17.9335 4.5762 17.8291C4.53303 17.7247 4.51085 17.614 4.51099 17.501ZM11.99 13.7612C11.9898 13.5911 12.0401 13.4243 12.1345 13.2827C12.2288 13.1412 12.3631 13.0311 12.5202 12.9658C12.6773 12.9006 12.8503 12.8834 13.0172 12.9165C13.184 12.9496 13.3374 13.0311 13.4578 13.1514C13.5781 13.2716 13.6601 13.4249 13.6934 13.5918C13.7267 13.7586 13.7097 13.9317 13.6446 14.0889C13.5796 14.2461 13.4693 14.3806 13.3279 14.4751C13.1864 14.5696 13.0201 14.6201 12.85 14.6201C12.6222 14.6199 12.4037 14.5292 12.2425 14.3682C12.0813 14.2072 11.9905 13.9891 11.99 13.7612ZM8.25 13.7612C8.2498 13.5911 8.30006 13.4243 8.39444 13.2827C8.48882 13.1412 8.62309 13.0311 8.78021 12.9658C8.93734 12.9006 9.11027 12.8834 9.27716 12.9165C9.44405 12.9496 9.59737 13.0311 9.71774 13.1514C9.83812 13.2716 9.92014 13.4249 9.9534 13.5918C9.98666 13.7586 9.96969 13.9317 9.90463 14.0889C9.83957 14.2461 9.72934 14.3806 9.58789 14.4751C9.44644 14.5696 9.28012 14.6201 9.10999 14.6201C8.88233 14.6196 8.66415 14.5287 8.50317 14.3677C8.34219 14.2067 8.25154 13.9889 8.25101 13.7612H8.25ZM4.51001 13.7612C4.50981 13.5911 4.56007 13.4243 4.65445 13.2827C4.74883 13.1412 4.88306 13.0311 5.04019 12.9658C5.19732 12.9006 5.37028 12.8834 5.53717 12.9165C5.70406 12.9496 5.85738 13.0311 5.97775 13.1514C6.09813 13.2716 6.18014 13.4249 6.21341 13.5918C6.24667 13.7586 6.2297 13.9317 6.16464 14.0889C6.09958 14.2461 5.98935 14.3806 5.8479 14.4751C5.70645 14.5696 5.54013 14.6201 5.37 14.6201C5.14234 14.6196 4.92416 14.5287 4.76318 14.3677C4.6022 14.2067 4.51054 13.9889 4.51001 13.7612ZM15.729 10.021C15.7288 9.85086 15.7791 9.68453 15.8734 9.54297C15.9678 9.40141 16.1021 9.29083 16.2592 9.22559C16.4163 9.16034 16.5893 9.1432 16.7562 9.17627C16.9231 9.20934 17.0764 9.29139 17.1967 9.41162C17.3171 9.53185 17.3991 9.6852 17.4324 9.85205C17.4657 10.0189 17.4487 10.1914 17.3836 10.3486C17.3186 10.5058 17.2083 10.6403 17.0669 10.7349C16.9254 10.8294 16.7591 10.8799 16.589 10.8799C16.3613 10.8794 16.1432 10.7889 15.9822 10.6279C15.8212 10.467 15.7305 10.2487 15.73 10.021H15.729ZM11.989 10.021C11.9888 9.85086 12.0391 9.68453 12.1335 9.54297C12.2278 9.40141 12.3621 9.29083 12.5192 9.22559C12.6763 9.16034 12.8493 9.1432 13.0162 9.17627C13.1831 9.20934 13.3364 9.29139 13.4568 9.41162C13.5771 9.53185 13.6591 9.6852 13.6924 9.85205C13.7257 10.0189 13.7087 10.1914 13.6436 10.3486C13.5786 10.5058 13.4684 10.6403 13.3269 10.7349C13.1855 10.8294 13.0191 10.8799 12.849 10.8799C12.6213 10.8794 12.4032 10.7889 12.2422 10.6279C12.0812 10.467 11.9895 10.2487 11.989 10.021ZM8.24899 10.021C8.2488 9.85086 8.29909 9.68453 8.39346 9.54297C8.48784 9.40141 8.62208 9.29083 8.77921 9.22559C8.93633 9.16034 9.10926 9.1432 9.27615 9.17627C9.44304 9.20934 9.59639 9.29139 9.71677 9.41162C9.83714 9.53185 9.91913 9.6852 9.95239 9.85205C9.98566 10.0189 9.96869 10.1914 9.90363 10.3486C9.83856 10.5058 9.72833 10.6403 9.58688 10.7349C9.44544 10.8294 9.27914 10.8799 9.10901 10.8799C8.88152 10.8791 8.6636 10.7884 8.50284 10.6274C8.34207 10.4665 8.25153 10.2485 8.25101 10.021H8.24899ZM4.509 10.021C4.5088 9.85086 4.55906 9.68453 4.65344 9.54297C4.74782 9.40141 4.88206 9.29083 5.03918 9.22559C5.19631 9.16034 5.36927 9.1432 5.53616 9.17627C5.70305 9.20934 5.85637 9.29139 5.97675 9.41162C6.09712 9.53185 6.17914 9.6852 6.2124 9.85205C6.24567 10.0189 6.2287 10.1914 6.16364 10.3486C6.09857 10.5058 5.98834 10.6403 5.84689 10.7349C5.70545 10.8294 5.53912 10.8799 5.36899 10.8799C5.1415 10.8791 4.92358 10.7884 4.76282 10.6274C4.60205 10.4665 4.51151 10.2485 4.51099 10.021H4.509Z"></path>
                        </svg> December 23, 2023</div>
                      <h3 className="bt-post--title"> <a href="https://influencer.beplusthemes.com/increase-marketing-roi-with-social-media-that-works-2/"> Increase Marketing ROI with Social Media That Works </a></h3>
                      <div className="bt-post--meta">
                        <div className="bt-post-cat"><a href="https://influencer.beplusthemes.com/category/lifestyle/" rel="tag">Lifestyle</a>, <a href="https://influencer.beplusthemes.com/category/travel/" rel="tag">Travel</a></div>
                        <div className="bt-reading-time">1 min read</div>
                      </div>
                    </div>
                  </div>
                </article>



              </div>




              <nav className="bt-pagination" role="navigation"> <span aria-current="page" className="page-numbers current">1</span> <a className="page-numbers" href="https://influencer.beplusthemes.com/our-blog-style-03/page/2/">2</a> <a className="page-numbers" href="https://influencer.beplusthemes.com/our-blog-style-03/page/3/">3</a> <a className="next page-numbers" href="https://influencer.beplusthemes.com/our-blog-style-03/page/2/">Next<svg width="19" height="16" viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.28111 0.217951L8.54638 0.925058C8.37249 1.09242 8.37249 1.36377 8.54638 1.53117L14.3032 7.07149L1.63283 7.07149C1.38691 7.07149 1.18752 7.26338 1.18752 7.50006L1.18752 8.50006C1.18752 8.73674 1.38691 8.92863 1.63283 8.92863L14.3032 8.92863L8.54638 14.469C8.37249 14.6363 8.37249 14.9077 8.54638 15.0751L9.28111 15.7822C9.455 15.9496 9.73696 15.9496 9.91089 15.7822L17.6821 8.30309C17.856 8.13574 17.856 7.86438 17.6821 7.69699L9.91086 0.217952C9.73696 0.0505587 9.455 0.0505586 9.28111 0.217951Z"></path>
                  </svg></a></nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                      </section>                          
      {/***** end *****/}
    </>
  );
}
