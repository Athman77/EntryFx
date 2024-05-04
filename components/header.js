
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const openSearch = () => {
    setShowSearch(true);
  };
  
  
  
  
   const router = useRouter();
  
  const [param, setParam] = useState("");
  
  const onSearchHandler = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const q = e.currentTarget.value.toLowerCase();
      router.push(`/search/${q}`);
      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      );
      
    } else if (e.type === "click") {
      const q = param.toLowerCase();
      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      );
      
    }
  };

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    setParam(value);

  };

  useEffect(() => {
    router.prefetch("/search");
  }, [router]);

  


  return (
    <>
    <header className="header-section">
      <div className="header-wrap">
        <div className="header-logo">
          <Link href="/">
            <a className="is-image w-28">
              <img
                src="https://cdn.sanity.io/images/wusctyxy/production/0c9a03db187311c93c59a970327d79d0f57fa9a8-359x157.png"
                alt="Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                //priority={true}
              />
              {/*<img src="https://cdn.sanity.io/images/cwzkjmps/production/40c902d136fb0cd066ad95ab5154362926949422-406x216.png" alt="Genki" />*/}
            </a>
          </Link>
        </div>
        <div className="header-nav">
          <input
            id="toggle"
            className="header-checkbox"
            type="checkbox"
          />
          <label className="header-toggle" for="toggle">
            <span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </label>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/archive">
                  <a>Our Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/tags">
                  <a>tags</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="signin">
              <Link href="/contact">
                <a>Contact Us</a>
                </Link>
              </li>
            </ul>{" "}
            <span onClick={() => setShowSearch(true)}  id="search-open">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.877 18.456l5.01 5.011c.208.197.484.308.771.308a1.118 1.118 0 00.809-1.888l-5.011-5.01c3.233-4.022 2.983-9.923-.746-13.654l-.291-.29a.403.403 0 00-.095-.075C13.307-.77 7.095-.649 3.223 3.223c-3.997 3.998-3.997 10.489 0 14.485 3.731 3.731 9.633 3.981 13.654.748zm-.784-13.617a7.96 7.96 0 010 11.254 7.961 7.961 0 01-11.253 0 7.96 7.96 0 010-11.254 7.961 7.961 0 0111.253 0z"></path>
              </svg>
            </span>
          </nav>
        </div>
      </div>
    </header>
       {showSearch && (
        <div id="search" className="search-section block">
          <span
            id="search-close"
            onClick={() => setShowSearch(false)}
            className="search-close"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.997 10.846L1.369.219 1.363.214A.814.814 0 00.818.005.821.821 0 000 .822c0 .201.074.395.208.545l.006.006L10.842 12 .214 22.626l-.006.006a.822.822 0 00-.208.546c0 .447.37.817.818.817a.814.814 0 00.551-.215l10.628-10.627 10.628 10.628.005.005a.816.816 0 001.368-.603.816.816 0 00-.213-.552l-.006-.005L13.151 12l10.63-10.627c.003 0 .004-.003.006-.005A.82.82 0 0024 .817a.817.817 0 00-1.37-.602l-.004.004-10.63 10.627z"></path>
            </svg>
          </span>
          <div id="search-content" className="search-content">
            <div className="search-form">
              <input
                id="search-input"
                className="global-title-big text-white"
                type="text"
        defaultValue={param}
        autoFocus
                placeholder="Type your keywords"
                onKeyUp={onSearchHandler}
                  onChange={(e) => onChange(e)}
              //  onChange={(e) => setQuery(e.target.value)}
               // onKeyUp={searchQueryHandler}
              />
              <div className="search-meta">
                <span id="search-info">Please enter at least 3 characters</span>
                <span id="search-counter" className="is-hide">
                  <span id="search-counter-results">0</span>
                  Results for your search
                </span>
              </div>
            </div>
            <div id="search-results" className="search-results"></div>
          </div>
          <div id="search-overlay" className="search-overlay">
            <div className="global-cover"></div>
          </div>
        </div>
      )}
    </>
  );
}
