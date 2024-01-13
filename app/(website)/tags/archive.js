import Footer from "@/components/footer";
import Header from "@/components/header";

import Link from "next/link";
export default function Tags({ posts }) {
  const quran = posts.filter(post => post.tags === "quran");
  const reminder = posts.filter(post => post.tags === "reminder");
  const lifeStyle = posts.filter(post => post.tags === "lifeStyle");
  const prayer = posts.filter(post => post.tags === "prayer");
  const stories = posts.filter(post => post.tags === "stories");
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
                className="custom-archive-title global-title-big">
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
                      <a>All Posts</a>
                    </Link>
                  </h2>
                  <span>{posts?.length} posts</span>
                </div>
                <div className="custom-archive-item">
                  <Link href="/life">
                    <a className="global-image">
                      <img
                        src="https://cdn.sanity.io/images/11ognen8/production/e3b0790ad874f9f0436391aa924b44ee09183a3c-736x1104.jpg"
                        loading="lazy"
                        alt="Art"
                      />{" "}
                    </a>
                  </Link>
                  <h2>
                    <Link href="/life">
                      <a>Lifestyle</a>
                    </Link>
                  </h2>
                  <span>{lifeStyle?.length} posts</span>
                </div>
                <div className="custom-archive-item">
                  <Link href="/stories">
                    <a className="global-image">
                      <img
                        src="https://cdn.sanity.io/images/11ognen8/production/eb084bdb09738b134db97f7d5f3cb5c5edb1ca08-736x1281.jpg"
                        loading="lazy"
                        alt="Lifestyle"
                      />{" "}
                    </a>
                  </Link>
                  <h2>
                    <Link href="/stories">
                      <a>Islamic Stories</a>
                    </Link>
                  </h2>

                  <span>{stories?.length} posts</span>
                </div>
                <h3 className="custom-archive-heading global-title-small">
                  <span>See also</span>
                </h3>
                <div className="custom-archive-item bottom">
                  <Link href="/reminder">
                    <a className="global-image">
                      <img
                        src="https://cdn.sanity.io/images/11ognen8/production/3e847aaad1dd24c5db3e788f1a20b7261ca87e55-736x736.jpg"
                        loading="lazy"
                        alt="Review"
                      />{" "}
                    </a>
                  </Link>
                  <h2>
                    <Link href="/reminder">
                      <a>Daily Reminder</a>
                    </Link>
                  </h2>
                  <span>{reminder?.length} posts</span>
                </div>
                <div className="custom-archive-item bottom">
                  <Link href="/prayer">
                    <a className="global-image">
                      <img
                        src="https://cdn.sanity.io/images/11ognen8/production/b57313af4eb48dc5cde435966e35fa03bdb8245f-611x1086.jpg"
                        loading="lazy"
                        alt="People"
                      />{" "}
                    </a>
                  </Link>
                  <h2>
                    <Link href="/prayer">
                      <a>Dua & Prayers</a>
                    </Link>
                  </h2>
                  <span>{prayer?.length} posts</span>
                </div>
                <div className="custom-archive-item bottom">
                  <Link href="/quran">
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
                      <a>Quran Recitation</a>
                    </Link>
                  </h2>
                  <span>{quran?.length} posts</span>
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
