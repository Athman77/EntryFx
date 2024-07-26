//

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
     <header className="header-section">
             <div className="header-wrap">
               <div className="header-logo">
                 <a href="https://forest.quest" className="is-image"><img src="images/Brandmark-design--5-..png" alt="The Forest" /></a>
               </div>
               <div className="header-nav">
                 <input id="toggle" className="header-checkbox" type="checkbox" />
                 <label className="header-toggle" for="toggle">
                   <span>
                     <span className="bar"></span>
                     <span className="bar"></span>
                     <span className="bar"></span>
                   </span>
                 </label>
                 <nav>
     
                   <ul>
                     <li><a href="https://forest.quest/manifesto/">Manifesto</a></li>
                     <li><a href="https://forest.quest/foundations/">Foundations</a></li>
                     <li><a href="https://forest.quest/coaching/">Coaching</a></li>
                   </ul>
     
                   <ul>
                     <li className="signin"><a href="https://forest.quest/signin/">Sign in</a></li>
                     <li className="signup"><a href="https://forest.quest/purchase/" className="global-button">Purchase</a></li>
                   </ul>
                   <span data-ghost-search=""><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M16.877 18.456l5.01 5.011c.208.197.484.308.771.308a1.118 1.118 0 00.809-1.888l-5.011-5.01c3.233-4.022 2.983-9.923-.746-13.654l-.291-.29a.403.403 0 00-.095-.075C13.307-.77 7.095-.649 3.223 3.223c-3.997 3.998-3.997 10.489 0 14.485 3.731 3.731 9.633 3.981 13.654.748zm-.784-13.617a7.96 7.96 0 010 11.254 7.961 7.961 0 01-11.253 0 7.96 7.96 0 010-11.254 7.961 7.961 0 0111.253 0z"></path>
                     </svg></span>
                 </nav>
               </div>
             </div>
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
