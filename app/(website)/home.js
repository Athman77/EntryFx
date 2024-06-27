//
//
//
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
      <div className="bg-[#f8f8f8]   text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
  {/****/}
  <div className="nc-PageAuthor ">
            <div className="w-full">
              <div className="relative w-full h-40 md:h-60 2xl:h-72">
                <div className="absolute inset-0">
                  <img src="https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg" alt="" sizes="(max-width: 1280px) 100vw, 1536px" className="object-cover w-full h-full object-cover absolute inset-0 w-full h-full" />
                </div>
              </div>
              <div className="container -mt-10 lg:-mt-16">
                <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
                  <div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
                      <img src="https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg" className="object-cover object-cover absolute inset-0 w-full h-full" alt="Avatar" />
                    </div>
                  </div>
                  <div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
                    <div className="max-w-screen-sm space-y-3.5 ">
                      <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold"><span>Dony Herrera</span><span className="ml-2">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" viewbox="0 0 17 17" fill="none">
                            <path d="M7.66691 2.62178C8.12691 2.22845 8.88025 2.22845 9.34691 2.62178L10.4002 3.52845C10.6002 3.70178 10.9736 3.84178 11.2402 3.84178H12.3736C13.0802 3.84178 13.6602 4.42178 13.6602 5.12845V6.26178C13.6602 6.52178 13.8002 6.90178 13.9736 7.10178L14.8802 8.15512C15.2736 8.61512 15.2736 9.36845 14.8802 9.83512L13.9736 10.8884C13.8002 11.0884 13.6602 11.4618 13.6602 11.7284V12.8618C13.6602 13.5684 13.0802 14.1484 12.3736 14.1484H11.2402C10.9802 14.1484 10.6002 14.2884 10.4002 14.4618L9.34691 15.3684C8.88691 15.7618 8.13358 15.7618 7.66691 15.3684L6.61358 14.4618C6.41358 14.2884 6.04025 14.1484 5.77358 14.1484H4.62025C3.91358 14.1484 3.33358 13.5684 3.33358 12.8618V11.7218C3.33358 11.4618 3.19358 11.0884 3.02691 10.8884L2.12691 9.82845C1.74025 9.36845 1.74025 8.62178 2.12691 8.16178L3.02691 7.10178C3.19358 6.90178 3.33358 6.52845 3.33358 6.26845V5.12178C3.33358 4.41512 3.91358 3.83512 4.62025 3.83512H5.77358C6.03358 3.83512 6.41358 3.69512 6.61358 3.52178L7.66691 2.62178Z" fill="#38BDF8" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.08691 8.98833L7.69358 10.6017L10.9136 7.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></span></h2>
                      <span className="block text-sm text-neutral-500 dark:text-neutral-400">Get Live Football Scores and Real-Time Football Results with LiveScore!.</span>
                      <a href="##" className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="flex-shrink-0 w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
                        </svg><span className="text-neutral-700 dark:text-neutral-300 truncate">https://example.com/me</span></a>
                      <nav className="nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ">
                        <a className="block w-7 h-7" href="#" target="_blank" rel="noopener noreferrer" title="Facebook">
                          <div>
                            <svg className="w-5 h-5" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_17_61)">
                                <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a className="block w-7 h-7" href="#" target="_blank" rel="noopener noreferrer" title="Twitter">
                          <div>
                            <svg className="w-5 h-5" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_17_80)">
                                <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a className="block w-7 h-7" href="#" target="_blank" rel="noopener noreferrer" title="Linkedin">
                          <div>
                            <svg className="w-5 h-5" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_17_68)">
                                <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a className="block w-7 h-7" href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
                          <div>
                            <svg className="w-5 h-5" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_17_63)">
                                <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"></path>
                                <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"></path>
                                <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div className="absolute md:static left-5 right-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex justify-end">
                    <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm md:text-base font-medium px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8  ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-5 h-5 sm:-ml-2.5">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path>
                      </svg><span className="ml-2">Follow</span></button>
                    <div className="mx-2">
                      <div className="relative inline-block text-left" data-headlessui-state="">
                        <button className="flex-shrink-0 flex items-center justify-center focus:outline-none h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full" title="More" id="headlessui-menu-button-:ra:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path>
                          </svg></button>
                      </div>
                    </div>
                    <div>
                      <div className="relative inline-block text-left" data-headlessui-state="">
                        <button className="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none" title="More" id="headlessui-menu-button-:rb:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                            <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                          </svg></button>
                      </div>
                      <div className="nc-NcModal"></div>
                      <div className="nc-NcModal"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
  {/*****/}
    
    

 
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

            {/**end**/}
          </div>
        </div>

       {/****** blog video *****/}
       
  <div className="nc-PageSearchV2">


    <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

      <main>
        <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row ">
          <nav className="nc-Nav w-full overflow-x-auto hiddenScrollbar" data-nc-id="Nav">
            <ul className="flex   sm:space-x-2">
              <li className="nc-NavItem relative flex-shrink-0"><button className="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black ">Articles</button></li>

            </ul>
          </nav>
          <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
          <div className="flex justify-end">
            <div className="nc-ArchiveFilterListBox flex-shrink-0 ">
              <div className="relative">
                <div id="headlessui-listbox-button-:ra:" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                  <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Most Recent
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-4 h-4 ml-2 -mr-1">
                      <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd"></path>
                    </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">




             {posts.slice(5, 13).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}



       
          
        </div>



        <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
          <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
            <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">1</span>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">2</a>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">3</a>
            <a className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none" href="/">4</a>
          </nav>
          <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Show me more</button>
        </div>
      </main>
        <BlogPages />
    </div>
  </div>

      {/***** end *******/}

        <div className="nc-PageHome relative">
          <div className="container relative">
            <div className="nc-SectionLatestPosts relative pb-16 lg:pb-28">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
                  <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl text-neutral-900 md:text-3xl lg:text-4xl font-semibold">
                        Latest Articles 🎈
                      </h2>
                      <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                        Discover the most outstanding articles in all topics of
                        life.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
                    {posts.slice(13, 19).map((post) => (
                      <BlogLast
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
        {/*****/}
<Footer />
      </div>

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
