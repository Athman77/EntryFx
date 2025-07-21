
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

 
    
        <header className="site-header">
    <div className="container">
        <div className="header-inner flex">
            <div className="header-logo flex justify-space-between">
              <Link href="/">
                <a className="logo-image theme-light-logo">
    <img src="https://cdn.sanity.io/images/wusctyxy/production/b4db420cffcd9801febb554bb631d08a3dacb58a-224x58.png" alt="Sucharu" 
    />
</a>
</Link>
<Link href="/">
<a className="logo-image theme-dark-logo">
    <img src="https://cdn.sanity.io/images/wusctyxy/production/b4db420cffcd9801febb554bb631d08a3dacb58a-224x58.png" />
</a>
</Link>
                <div className="mobile-only-items flex">
                    <button className="nav-icon search-icon flex" data-ghost-search="" aria-label="Search">
                        <span><svg>
                         {/* <use xlink:href="#i-search"></use>*/}
                          </svg></span>
                    </button>
                    <button className="nav-icon theme-icon flex js-toggle-dark-light" aria-label="Toggle theme">
                        <div className="toggle-mode flex">
                            <div className="light"><svg>
                            {/*  <use xlink:href="#i-sun"></use>*/}
                              </svg></div>
                            <span className="dark"><svg>
                            {/*  <use xlink:href="#i-moon"></use>*/}
                              </svg></span>
                        </div>
                    </button>
                    <button className="nav-icon" id="menu-toggle">
                        <div className="burger">
                            <div className="burger-line"></div>
                        </div>
                    </button>
                </div>
            </div>
            <nav className="nav-wrap flex" role="navigation" aria-label="main navigation">
                <ul className="nav nav-item-container nav-left no-style-list flex align-center" role="menu">
    <li className="nav-item" role="menuitem">
        <a href="/style-guide/" className="nav-link">Style Guide</a>
    </li>
     
</ul>

                <div className="nav-center icon-items-wrap flex">
                    <button className="nav-icon search-icon flex" data-ghost-search="" aria-label="Search">
                        <span>
                          <svg>
                          {/*  <use xlink:href="#i-search"></use>*/}
                            </svg></span>
                    </button>
                    <button className="nav-icon theme-icon flex js-toggle-dark-light" aria-label="Toggle theme">
                        <div className="toggle-mode flex">
                            <div className="light"><svg>
                           {/*   <use xlink:href="#i-sun"></use>*/}
                              </svg></div>
                            <span className="dark"><svg>
                            {/*  <use xlink:href="#i-moon"></use>*/}
                              
                              </svg></span>
                        </div>
                    </button>
                </div>
                <ul className="nav-item-container nav-right no-style-list flex align-center" role="menu">
                    <li className="nav-item" role="menuitem">
                        <a href="https://sucharu.gbjsolution.com/signin/" className="nav-link">Sign in</a>
                    </li>
                    <li className="nav-item" role="menuitem">
                        <a href="https://sucharu.gbjsolution.com/membership/" className="btn">Become member</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
    </>
  );
}
