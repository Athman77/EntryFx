import Footer from "@/components/footer";
import Header from "@/components/header";

import Link from "next/link";
export default function Tags({ posts }) {




  return (
    <>
      <div className="global-cover"></div>

      <div className="global-wrap">
        <div className="global-content">
          <Header />

          <main className="global-main">
            <div className="custom-archive-section">
              <h1
                id="post-title"
                className="custom-archive-title global-title-big"
              >
                Explore our <span>tags</span>
              </h1>
              <div className="custom-archive-wrap loop-wrap">
                <div className="custom-archive-item">
                  <Link href="/archive">
                    <a className="global-image">
                      <img
                        src="https://cdn.sanity.io/images/11ognen8/production/b40108ca9bb60da852779daf553cf78e95a67089-736x736.jpg"
                        loading="lazy"
                        alt="Creative"
                      />{" "}
                    </a>
                  </Link>
                  <h2>
                  <Link href="/archive">
                    <a>All Posts</a></Link>
                  </h2>
                  <span>{posts?.length} posts</span>
                </div>
                <div className="custom-archive-item">
                <Link href="/archive">
                  <a className="global-image">
                    <img
                      src="https://cdn.sanity.io/images/11ognen8/production/e3b0790ad874f9f0436391aa924b44ee09183a3c-736x1104.jpg"
                      loading="lazy"
                      alt="Art"
                    />{" "}
                  </a>
                  </Link>
                  <h2>
                  <Link href="/archive">
                    <a>Lifestyle</a></Link>
                  </h2><span>5 posts</span>
                </div>
                <div className="custom-archive-item">
                  <a href="/tag/lifestyle/" className="global-image">
                    <img
                      src="https://cdn.sanity.io/images/11ognen8/production/eb084bdb09738b134db97f7d5f3cb5c5edb1ca08-736x1281.jpg"
                      loading="lazy"
                      alt="Lifestyle"
                    />{" "}
                  </a>
                  <h2>
                    <a href="/tag/lifestyle/">Islamic Stories</a>
                  </h2>
                  <span>9 posts</span>
                </div>
                <h3 className="custom-archive-heading global-title-small">
                  <span>See also</span>
                </h3>
                <div className="custom-archive-item bottom">
                  <a href="/tag/review/" className="global-image">
                    <img
                      src="https://cdn.sanity.io/images/11ognen8/production/3e847aaad1dd24c5db3e788f1a20b7261ca87e55-736x736.jpg"
                      loading="lazy"
                      alt="Review"
                    />{" "}
                  </a>
                  <h2>
                    <a href="/tag/review/">Daily Reminder</a>
                  </h2>
                  <span>6 posts</span>
                </div>
                <div className="custom-archive-item bottom">
                  <a href="/tag/people/" className="global-image">
                    <img
                      src="https://cdn.sanity.io/images/11ognen8/production/b57313af4eb48dc5cde435966e35fa03bdb8245f-611x1086.jpg"
                      loading="lazy"
                      alt="People"
                    />{" "}
                  </a>
                  <h2>
                    <a href="/tag/people/">Dua & Prayers</a>
                  </h2>
                  <span>5 posts</span>
                </div>
                <div className="custom-archive-item bottom">
                <Link href="/archive">
                  <a className="global-image">
                    <img
                      src="https://cdn.sanity.io/images/11ognen8/production/4db7c7a7e98225f1b003b93c5bebf6b197493b15-433x639.jpg"
                      loading="lazy"
                      alt="Idea"
                    />{" "}
                  </a>
                  </Link>
                  <h2>
                  <Link href="/quran">
                    <a>Quran Recitation</a></Link>
                  </h2>
                  <span>4 posts</span>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
