import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";
import Link from "next/link";

export default function Footer(props) {
  return (
    <>
      <footer className="footer-section global-footer">
        <div className="footer-wrap">
          <div className="footer-logo">
            <a href="/" className="is-image">
              <img
                src="https://cdn.sanity.io/images/11ognen8/production/4cca0cc34eac7da36fedf0218a086c4d3bcef5f4-300x81.svg"
                alt="Genki"
              />
            </a>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-column is-social">
              <small>Social</small>
              <ul>
                <li>
                  <a href="">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                    </svg>
                    Twitter
                  </a>
                </li>

                <li>
                  <a href="https://youtube.com/@Binarybotsltd?si=WmbTs1GG24fsM-E5">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="a"
                        d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
                    </svg>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <small>About</small>
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <a href="">Our Podcast</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <small>Features</small>
              <ul>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <Link href="/archive">
                    <a>Our Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags">
                    <a>Tags</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="footer-nav-column">
          <small>Support</small>
          <ul>
            <li><a href="https://genki.fueko.net/">Light version</a></li>
            <li><a href="https://genki-medium.fueko.net/">Medium version</a></li>
            <li><a href="https://genki-dark.fueko.net/demo-account-paid-member/">Account</a></li>
          </ul>
        </div>*/}

            <div className="footer-nav-column">
              <small>Membership</small>
              <ul>
                <li>
                  <a href="">Sign in Today</a>
                </li>
                <li>
                  <a href="">Sign up Today</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <a href="">NextApp</a> © 2023 — All Right Reserved.
          Published with{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            NextApp
          </a>{" "}
          &amp;{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            TechLink
          </a>
          .
        </div>
      </footer>
    </>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
      target="_blank"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span> Purchase Pro ↗</span>
    </a>
  );
};
