import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
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
            <span id="search-open">
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
  );
}
