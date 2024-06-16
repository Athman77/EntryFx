"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header({home, search, explore, tv, account}) {
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
      router.push(`/search?search=${q}`);
      setShowSearch(false);
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

    <div id="__next">
        <div className="css-1ab30pa">
          <nav id="footer-container" className="css-5cj7kq">
            <div className="css-ekjgjk">
              <Link to="/" className={home}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  className="css-6qu7l6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071C21.3166 13.0976 20.6834 13.0976 20.2929 12.7071L20 12.4142V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12.4142L3.70711 12.7071C3.31658 13.0976 2.68342 13.0976 2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L11.2929 2.29289ZM6 10.4142V20H9V16C9 14.8954 9.89543 14 11 14H13C14.1046 14 15 14.8954 15 16V20H18V10.4142L12 4.41421L6 10.4142ZM13 20V16H11V20H13Z"
                  ></path>
                </svg>
                Home
              </Link>
              <a onClick={() => setShowSearch(true)} className={search}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  className="css-6qu7l6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4ZM2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"
                  ></path>
                </svg>
                Search
              </a>
              <Link to="/explore/movie" className={`footer-browse ${explore}`}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  className="css-6qu7l6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 4.44772 9 5 9H8C8.55228 9 9 8.55228 9 8V5C9 4.44772 8.55228 4 8 4ZM5 2C3.34315 2 2 3.34315 2 5V8C2 9.65685 3.34315 11 5 11H8C9.65685 11 11 9.65685 11 8V5C11 3.34315 9.65685 2 8 2H5Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 15H5C4.44772 15 4 15.4477 4 16V19C4 19.5523 4.44772 20 5 20H8C8.55228 20 9 19.5523 9 19V16C9 15.4477 8.55228 15 8 15ZM5 13C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H8C9.65685 22 11 20.6569 11 19V16C11 14.3431 9.65685 13 8 13H5Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 4H16C15.4477 4 15 4.44772 15 5V8C15 8.55228 15.4477 9 16 9H19C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4ZM16 2C14.3431 2 13 3.34315 13 5V8C13 9.65685 14.3431 11 16 11H19C20.6569 11 22 9.65685 22 8V5C22 3.34315 20.6569 2 19 2H16Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 15H16C15.4477 15 15 15.4477 15 16V19C15 19.5523 15.4477 20 16 20H19C19.5523 20 20 19.5523 20 19V16C20 15.4477 19.5523 15 19 15ZM16 13C14.3431 13 13 14.3431 13 16V19C13 20.6569 14.3431 22 16 22H19C20.6569 22 22 20.6569 22 19V16C22 14.3431 20.6569 13 19 13H16Z"
                  ></path>
                </svg>{" "}
                Browse
              </Link>
              <Link to="/explore/tv" className={tv}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  className="css-6qu7l6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.47368 6.78578C3.94666 7.79745 3.9392 9.02672 4.07146 9.70273C4.46989 11.7393 5.98381 14.0997 7.75719 15.9902C8.63197 16.9227 9.53387 17.7018 10.3315 18.2394C11.1783 18.8102 11.749 19 12 19C12.251 19 12.8217 18.8102 13.6685 18.2394C14.4661 17.7018 15.368 16.9227 16.2428 15.9902C18.0162 14.0997 19.5301 11.7393 19.9286 9.70273C20.0608 9.02672 20.0534 7.79745 19.5263 6.78578C19.2725 6.29849 18.9017 5.86627 18.3619 5.55002C17.82 5.23252 17.0529 5 15.96 5C14.7111 5 13.7204 5.56856 13.2125 6.32446C12.8891 6.80569 12.3638 6.94309 12 6.94309C11.6362 6.94309 11.1109 6.80569 10.7876 6.32446C10.2796 5.56856 9.28887 5 8.04003 5C6.94711 5 6.18001 5.23252 5.63809 5.55002C5.09831 5.86627 4.72752 6.29849 4.47368 6.78578ZM4.62707 3.82438C5.52816 3.29645 6.65797 3 8.04003 3C9.61785 3 11.0464 3.61724 12 4.64452C12.9536 3.61724 14.3822 3 15.96 3C17.342 3 18.4719 3.29645 19.3729 3.82438C20.2762 4.35357 20.8945 5.08322 21.3001 5.86176C22.0919 7.38172 22.0844 9.09982 21.8913 10.0867C21.3888 12.6555 19.5878 15.3476 17.7015 17.3585C16.7464 18.3766 15.7323 19.2603 14.7863 19.8979C13.8895 20.5023 12.8891 21 12 21C11.1109 21 10.1105 20.5023 9.21371 19.8979C8.26775 19.2603 7.25361 18.3766 6.29853 17.3585C4.41221 15.3476 2.61121 12.6555 2.10867 10.0867C1.91558 9.09982 1.90812 7.38172 2.69993 5.86176C3.1055 5.08322 3.72383 4.35357 4.62707 3.82438Z"
                  ></path>
                </svg>
                TV Show
              </Link>
              <Link to="/auth" className={account}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  className="css-6qu7l6"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.08194 19.9771H17.9181C17.4451 17.1282 14.981 15 12 15C9.01897 15 6.55491 17.1282 6.08194 19.9771ZM4 20.9771C4 16.5223 7.58876 13 12 13C16.4112 13 20 16.5223 20 20.9771C20 21.5294 19.5523 21.9771 19 21.9771H5C4.44772 21.9771 4 21.5294 4 20.9771Z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
                  ></path>
                </svg>
                Account
              </Link>
            </div>
          </nav>
        </div>
      </div>
    {/***  <header className="header-section">
        <div className="header-wrap">
          <div className="header-logo">
            <Link href="/">
              <a className="is-image w-28">
                <img
                  src="https://cdn.sanity.io/images/wusctyxy/production/b4db420cffcd9801febb554bb631d08a3dacb58a-224x58.png"
                  alt="Logo"
                  sizes="(max-width: 640px) 100vw, 200px"
                  //priority={true}
                />
                
              </a>
            </Link>
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
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/archive">
                    <a>Videos</a>
                  </Link>
                </li>
                <li>
                  
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
              <span onClick={() => setShowSearch(true)} id="search-open">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.877 18.456l5.01 5.011c.208.197.484.308.771.308a1.118 1.118 0 00.809-1.888l-5.011-5.01c3.233-4.022 2.983-9.923-.746-13.654l-.291-.29a.403.403 0 00-.095-.075C13.307-.77 7.095-.649 3.223 3.223c-3.997 3.998-3.997 10.489 0 14.485 3.731 3.731 9.633 3.981 13.654.748zm-.784-13.617a7.96 7.96 0 010 11.254 7.961 7.961 0 01-11.253 0 7.96 7.96 0 010-11.254 7.961 7.961 0 0111.253 0z"></path>
                </svg>
              </span>
            </nav>
          </div>
        </div>
      </header>***/}
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
