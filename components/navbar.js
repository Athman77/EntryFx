
"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const rightmenu = [
    {
      label: "Archive",
      href: "/archive"
    },
    {
      label: "Pro Version",
      href: "https://stablo-pro.web3templates.com/",
      external: true,
      badge: "new"
    },
    {
      label: "Download",
      href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <header id="header" className="minimalist">

    <div className="menu-mobile">
      <svg className="icon ularge open">
    {/* <use xlink:href="#menu-icon"></use>*/}
      </svg>
      <svg className="icon ularge close">
    
      </svg>
    </div>

    
    <div className="menu-wrapper">

      <div className="grid-container">
        <div className="epcl-flex">
          <div className="logo"><a href="https://ghost.estudiopatagon.com/wavy"><img src="images/logo-wave7.svg" alt="Wavy" width="180" height="60" /></a></div>

          <span data-ghost-search="" className="epcl-search-button epcl-button gradient-button circle"><svg className="icon large">
             
            </svg></span>

          
          <nav className="main-nav">
            <ul className="menu underline-effect">
              <li className=" nav-home"><a href="https://ghost.estudiopatagon.com/wavy/">Home</a></li>
              <li className=" nav-tag"><a href="https://ghost.estudiopatagon.com/wavy/tag/design/">Tag</a></li>
              <li className=" nav-style-guide"><a href="https://ghost.estudiopatagon.com/wavy/style-guide/">Style Guide</a></li>
              <li className=" nav-membership"><a href="https://ghost.estudiopatagon.com/wavy/membership/">Membership</a></li>

              <li className="nav-more menu-item-has-children">
                <span className="link">More</span>
                <ul className="sub-menu">
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/masonry/">Home Grid Posts</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/cta-masonry/">Home Grid w/ Intro</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/cta-slider/">Home Slider w/ Intro</a></li>
                  <li className=" current-menu-item"><a href="https://ghost.estudiopatagon.com/wavy/cta-classNameic/">Home classNameic w/ Intro</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/vertical/">Post Vertical</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/nosidebar/">Post without Sidebar</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/classNameic/">Post classNameic</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/fullwidth/">Post Fullwidth</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/author/jonathan-doe/">Author</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/meet-the-authors/">Meet the Authors</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/explore-our-tags/">Tags Archive</a></li>
                  <li className=""><a href="https://ghost.estudiopatagon.com/wavy/404/">404 Page</a></li>
                </ul>
              </li>

              <li className="search-menu-item hide-on-mobile hide-on-tablet hide-on-desktop-sm"><span className="link" data-ghost-search=""><svg className="icon black large">
                    
                  </svg> Search</span></li>

            </ul>


          </nav>
          

          <div className="account underline-effect hide-on-mobile hide-on-tablet hide-on-desktop-sm">
            <a href="https://ghost.estudiopatagon.com/wavy/signin" className="link-button epcl-login">
              Login
            </a>
            <a href="https://ghost.estudiopatagon.com/wavy/subscribe" className="epcl-button gradient-button icon wave-button">
              <svg className="icon large">
              
              </svg>
              Subscribe
            </a>
          </div>

          <div className="clear"></div>

        </div>

        <div className="clear"></div>
      </div>

    </div>
    

    <div className="clear"></div>

  </header>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
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
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
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
                        )}>
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
