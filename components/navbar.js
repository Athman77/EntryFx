
"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {
  
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  
  // Debounce function to optimize input search performance
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  
  // Handle search input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  
  // Optimized search handler
  const searchHandler = useCallback(
    debounce((searchQuery) => {
      if (searchQuery.trim().length >= 3) {
        router.push(`/search?search=${searchQuery.toLowerCase()}`);
      }
    }, 1000), // 500ms delay
    []
  );
  
  useEffect(() => {
    searchHandler(query);
  }, [query]);
  
  
  
  
  const leftmenu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const rightmenu = [
    {
      label: "Archive",
      href: "/archive",
    },
    {
      label: "Pro Version",
      href: "https://stablo-pro.web3templates.com/",
      external: true,
      badge: "new",
    },
    {
      label: "Download",
      href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
      external: true,
    },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <>
    <header className="site-header d-flex">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
    <Link href="/">
          <a
          
            className="logo-image"
            id="logo"
          >
            <img src="https://cdn.sanity.io/images/11ognen8/production/62948b14bb9aa6e81e82c4b0f0402bbc5d8fca9c-994x282.png" alt="Advant" />
          </a>
              </Link>
              <Link href="/">
          <a
           
            className="logo-image"
            id="logo-alternete"
          >
            <img src="https://cdn.sanity.io/images/11ognen8/production/62948b14bb9aa6e81e82c4b0f0402bbc5d8fca9c-994x282.png" alt="Advant" />
          </a>
              </Link>
        </div>
        <nav className="nav-wrap d-none d-lg-block">
          <ul className="nav-list">
            <li className="home nav-item nav-item-current">
              <a href="https://advant.gbjsolution.com/">Home</a>
            </li>
            <li className="features nav-item">
              <a href="https://advant.gbjsolution.com/features/">Features</a>
            </li>
            <li className="style-guide nav-item">
              <a href="https://advant.gbjsolution.com/style-guide/">
                Style Guide
              </a>
            </li>
            <li className="tags nav-item">
              <a href="https://advant.gbjsolution.com/tag-archive/">Tags</a>
            </li>
            <li className="authors nav-item">
              <a href="https://advant.gbjsolution.com/author-archive/">
                Authors
              </a>
            </li>
            <li className="contact nav-item">
              <a href="https://advant.gbjsolution.com/contact/">Contact</a>
            </li>
            <li className="error-404 nav-item">
              <a href="https://advant.gbjsolution.com/error-404/">Error 404</a>
            </li>
            <li className="nav-item ">
              <a href="/signin/">Sign in</a>
            </li>
            <li className="nav-item ">
              <a href="/signup/">Sign up</a>
            </li>
          </ul>
        </nav>
        <div className="nav-right">
          <input
            type="checkbox"
            name="theme-toggle"
            id="switch_theme"
            className="theme-toggle"
          />
          <label for="switch_theme" className="theme-toggle-label fade-in">
            Toggle Theme
          </label>
          <a
            href="#"
            onClick={() => setShowSearch(true)} 
            className="search-icon js-search-button"
            aria-label="Search"
            tabindex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.858,15.283a8.57,8.57,0,1,1,1.425-1.425L24,22.576,22.576,24ZM2.014,8.561A6.547,6.547,0,1,0,8.561,2.014,6.554,6.554,0,0,0,2.014,8.561Z"></path>
            </svg>
          </a>
          <div className="menu-icon d-lg-none js-menu-open">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <nav className="mobile-menu nav-wrap d-lg-none" id="mobile-menu">
          <ul className="nav-list">
            <ul className="nav-list">
              <li className="home nav-item nav-item-current">
                <a href="https://advant.gbjsolution.com/">Home</a>
              </li>
              <li className="features nav-item">
                <a href="https://advant.gbjsolution.com/features/">Features</a>
              </li>
              <li className="style-guide nav-item">
                <a href="https://advant.gbjsolution.com/style-guide/">
                  Style Guide
                </a>
              </li>
              <li className="tags nav-item">
                <a href="https://advant.gbjsolution.com/tag-archive/">Tags</a>
              </li>
              <li className="authors nav-item">
                <a href="https://advant.gbjsolution.com/author-archive/">
                  Authors
                </a>
              </li>
              <li className="contact nav-item">
                <a href="https://advant.gbjsolution.com/contact/">Contact</a>
              </li>
              <li className="error-404 nav-item">
                <a href="https://advant.gbjsolution.com/error-404/">
                  Error 404
                </a>
              </li>
              <li className="nav-item ">
                <a href="/signin/">Sign in</a>
              </li>
              <li className="nav-item ">
                <a href="/signup/">Sign up</a>
              </li>
            </ul>
          </ul>
        </nav>
        <div className="backdrop d-lg-none js-backdrop" id="backdrop"></div>
      </div>
    </header>
    {showSearch && (
       <div className="search-popup js-search-popup visible">
    <div onClick={() => setShowSearch(false)} className="close-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12.021,13.435,1.414,24.042,0,22.628,10.607,12.021,0,1.414,1.414,0,12.021,10.607,22.628,0l1.414,1.414L13.435,12.021,24.042,22.628l-1.414,1.414Z"></path>
      </svg>
    </div>
    <div className="container popup-inner">
      <div className="row">
        <div className="col-sm-12">
          <form id="search-form">
            <div className="input-group">
              <input
     onChange={handleInputChange}
     //defaultValue={param}
                autoFocus
     value={query}
      type="text"
        className="form-control js-search-input" 
          placeholder="Type to search"
            id="search-input" aria-label="Type to search"
              role="searchbox" />
            </div>
          </form>
          <div id="search-results"></div>
        </div>
      </div>
    </div>
  </div>
  )}
    </>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}
          >
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95"
          >
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}
            >
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}
                      >
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
