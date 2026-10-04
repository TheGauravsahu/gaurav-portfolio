import { useCallback, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import portrait from "./assets/images/11.jpeg";
import momentOne from "./assets/images/1.jpeg";
import momentTwo from "./assets/images/6.jpeg";
import momentThree from "./assets/images/11.jpeg";
import photoFour from "./assets/images/15.jpeg";
import photoFive from "./assets/images/17.jpeg";
import photoSix from "./assets/images/20.jpeg";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const instagramUrl = "https://www.instagram.com/grv.sahuu/";
const playlistId = "PLId8YsVEnssA";
const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
const playlistCacheKey = "gaurav-playlist-v1";
const playlistCacheDuration = 6 * 60 * 60 * 1000;

const moments = [
  {
    number: "01",
    title: "A good thriller",
    note: "Plot twists > spoilers",
    image: momentOne,
    alt: "Gaurav enjoying a sunny day outdoors",
  },
  {
    number: "02",
    title: "Somewhere new",
    note: "Always up for the next trip",
    image: momentTwo,
    alt: "A candid portrait of Gaurav",
  },
  {
    number: "03",
    title: "On repeat",
    note: "A soundtrack for every mood",
    image: momentThree,
    alt: "Gaurav in a relaxed everyday moment",
  },
];

const photos = [
  ...moments.map((moment) => ({
    title: moment.title,
    image: moment.image,
    alt: moment.alt,
  })),
  { title: "Mumbai, in the moment", image: photoFour, alt: "Gaurav visiting a landmark in Mumbai" },
  { title: "A day out exploring", image: photoFive, alt: "Gaurav at a historic landmark" },
  { title: "One for the camera roll", image: photoSix, alt: "A portrait of Gaurav outdoors" },
];

function usePlaylist() {
  const [cached] = useState(() => {
    try {
      const stored = window.localStorage.getItem(playlistCacheKey);
      if (!stored) return null;
      const entry = JSON.parse(stored);
      if (!entry?.cachedAt || !entry?.data?.videos?.length) return null;
      return {
        ...entry,
        isFresh: Date.now() - entry.cachedAt < playlistCacheDuration,
      };
    } catch (error) {
      console.warn("Could not read the saved playlist cache.", error);
      return null;
    }
  });
  const isCacheFresh = cached?.isFresh === true;
  const [playlist, setPlaylist] = useState(() => ({
    status: cached ? "ready" : "loading",
    data: cached?.data || null,
    message: cached && !isCacheFresh ? "Refreshing saved playlist…" : "",
  }));

  useEffect(() => {
    if (isCacheFresh) return undefined;

    let active = true;
    const controller = new AbortController();

    fetch("/api/listening", { signal: controller.signal })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "The playlist could not be loaded.");
        return result;
      })
      .then((data) => {
        if (!active) return;
        const entry = { data, cachedAt: Date.now() };
        try {
          window.localStorage.setItem(playlistCacheKey, JSON.stringify(entry));
        } catch (error) {
          console.warn("Could not save the playlist cache.", error);
        }
        setPlaylist({ status: "ready", data, message: data.warning || "" });
      })
      .catch((error) => {
        if (!active || error.name === "AbortError") return;
        console.error("Could not load the YouTube playlist.", error);
        setPlaylist({
          status: cached ? "ready" : "error",
          data: cached?.data || null,
          message: cached
            ? "Showing the saved playlist; it could not be refreshed just now."
            : error.message,
        });
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [cached, isCacheFresh]);

  return playlist;
}

function PlaylistContent() {
  const { status, data, message } = usePlaylist();
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const selectedVideo = data?.videos?.find((video) => video.id === selectedVideoId) || data?.videos?.[0];

  return (
    <div className="playlist-content">
      <div className="playlist-player">
        {selectedVideo ? (
          <iframe
            key={selectedVideo.id}
            src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
            title={`Now playing: ${selectedVideo.title}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="playlist-player-placeholder" role="status">
            {status === "loading" ? "Loading playlist…" : "Select a track to start listening"}
          </div>
        )}
      </div>
      <div className="playlist-tracks">
        <div className="playlist-tracks-heading">
          <span className="section-number">THE PLAYLIST</span>
          {data && <span>{data.videos.length} TRACKS</span>}
        </div>
        {data?.videos?.length ? (
          <ol>
            {data.videos.map((video, index) => (
              <li key={video.id}>
                <span className="track-number">{String(index + 1).padStart(2, "0")}</span>
                <button
                  className="track-select"
                  type="button"
                  onClick={() => setSelectedVideoId(video.id)}
                  aria-current={selectedVideo?.id === video.id ? "true" : undefined}
                  aria-label={`Play ${video.title}`}
                >
                  {video.title}
                </button>
                <span className="track-arrow" aria-hidden="true">
                  {selectedVideo?.id === video.id ? "▶" : "↗"}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <p className={`playlist-message ${status === "error" ? "is-error" : ""}`} role="status">
            {status === "loading"
              ? "Checking the playlist…"
              : message || "Tracks will appear here when the playlist is public."}
          </p>
        )}
        {message && data?.videos?.length > 0 && (
          <p className="playlist-message" role="status">{message}</p>
        )}
        <a className="text-link playlist-link" href={playlistUrl} target="_blank" rel="noreferrer">
          Open playlist on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

function ListeningSection({ compact = false }) {
  return (
    <section className={`listening-section${compact ? " listening-compact" : ""}`}>
      <div className="listening-heading">
        <div>
          <span className="section-number">A LITTLE BACKGROUND MUSIC</span>
          <h2>{compact ? <>On my<br /><em>playlist.</em></> : <>What’s on<br /><em>repeat.</em></>}</h2>
        </div>
        {compact && <Link className="work-note" to="/listening">More about my playlist ↗</Link>}
      </div>
      <p className="listening-intro">
        A playlist I’ve been enjoying lately. Press play and have a listen.
      </p>
      <PlaylistContent />
    </section>
  );
}

function ThemeIcon({ theme }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
    </svg>
  );
}

function Header({ onMenu, menuOpen, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Gaurav Sahu, home">
        GAURAV<span>®</span>
      </Link>
      <a className="header-social" href={instagramUrl} target="_blank" rel="noreferrer">
        Instagram <span aria-hidden="true">↗</span>
      </a>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <ThemeIcon theme={theme} />
      </button>
      <button
        className="menu-button"
        onClick={onMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
      >
        <i />
        <i />
      </button>
    </header>
  );
}

function Menu({ onClose }) {
  const menuRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeline = gsap.timeline({ paused: true });
    timeline
      .fromTo(
        menuRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.62, ease: "power4.inOut" },
      )
      .fromTo(
        ".menu-top",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
        "-=0.2",
      )
      .fromTo(
        ".menu-links a",
        { yPercent: 110, opacity: 0, rotate: 2 },
        { yPercent: 0, opacity: 1, rotate: 0, duration: 0.62, stagger: 0.08, ease: "power3.out" },
        "-=0.12",
      )
      .fromTo(
        ".menu-footer",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
        "-=0.25",
      );
    timeline.play();
    timelineRef.current = timeline;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        timeline.eventCallback("onReverseComplete", onClose).reverse();
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
      timeline.kill();
    };
  }, [onClose]);

  const closeMenu = () => {
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.eventCallback("onReverseComplete", onClose).reverse();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="menu-overlay"
      id="site-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="menu-top">
        <span>THE SHORT VERSION</span>
        <button className="close-button" onClick={closeMenu} aria-label="Close menu">
          ×
        </button>
      </div>
      <nav className="menu-links" aria-label="Main navigation">
        <Link to="/" onClick={closeMenu}><span>Home</span><b>01</b></Link>
        <Link to="/about" onClick={closeMenu}><span>About me</span><b>02</b></Link>
        <Link to="/interests" onClick={closeMenu}><span>Things I love</span><b>03</b></Link>
        <Link to="/listening" onClick={closeMenu}><span>Listening</span><b>04</b></Link>
        <Link to="/photos" onClick={closeMenu}><span>Photos</span><b>05</b></Link>
      </nav>
      <div className="menu-footer">
        <span>Student at DPS Kaluahi</span>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          Find me on Instagram ↗
        </a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Student at DPS Kaluahi · India</p>
          <h1>Just being<br /><em>Gaurav.</em></h1>
          <p className="hero-intro">
            A student, a daydreamer, and someone who is always up for a good story—
            on screen or somewhere new.
          </p>
        </div>
        <div className="hero-meta">
          <span>( A LITTLE INTRODUCTION )</span>
          <a className="scroll-cue" href="#about">Scroll to get to know me <b>↓</b></a>
        </div>
        <div className="hero-mark" aria-hidden="true">G<span>.</span></div>
      </section>

      <section className="statement" id="about">
        <span className="section-number">01 / THE INTRO</span>
        <div>
          <p data-reveal>No big title. Just a lot of curiosity.</p>
          <p className="muted" data-reveal>
            I’m Gaurav Sahu, a student at DPS Kaluahi. This little corner of the
            internet is simply a way to share who I am and the things I enjoy.
          </p>
          <Link className="text-link" to="/about">A little more about me <span>↗</span></Link>
        </div>
      </section>

      <section className="work-section" id="interests">
        <div className="section-heading">
          <span className="section-number">02 / OFF THE CLOCK</span>
          <h2>Things I<br /><em>love</em></h2>
          <Link className="work-note" to="/interests">( a few favourites ↗ )</Link>
        </div>
        <div className="project-list">
          {moments.map((moment) => (
            <article className="project" key={moment.number} data-reveal>
              <div className="project-image">
                <img src={moment.image} alt={moment.alt} loading="lazy" />
                <span>{moment.number}</span>
              </div>
              <div className="project-info">
                <div>
                  <h3>{moment.title}</h3>
                  <p>{moment.note}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <span className="section-number">03 / A BIT MORE</span>
        <div className="about-grid">
          <div className="about-photo" data-reveal>
            <img src={portrait} alt="Gaurav Sahu" loading="lazy" />
            <span className="photo-caption">THAT’S ME, BY THE WAY</span>
          </div>
          <div className="about-text" data-reveal>
            <h2>Still figuring<br />it <em>all out.</em></h2>
            <p>
              Right now, I’m focused on school, enjoying the little things, and
              making time for the stuff that makes a day better. I’m not a
              developer—this is just my personal space on the web.
            </p>
            <p>
              Give me a gripping thriller, a new place to explore, or a great
              playlist and I’m happy.
            </p>
            <Link className="text-link" to="/about">The full story <span>↗</span></Link>
          </div>
        </div>
      </section>

      <ListeningSection compact />

      <section className="contact-section" id="contact">
        <span className="section-number">04 / KEEP IN TOUCH</span>
        <h2>Say hello<br /><em>on Instagram.</em></h2>
        <a className="contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
          @grv.sahuu <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="inner-page">
      <section className="inner-page-hero page-intro">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>Hi, I’m<br /><em>Gaurav.</em></h1>
        <p>
          A student at DPS Kaluahi, making the most of school days and all the
          interesting bits in between.
        </p>
      </section>
      <section className="about-grid inner-about">
        <div className="about-photo" data-reveal>
          <img src={portrait} alt="Gaurav Sahu" />
          <span className="photo-caption">GAURAV SAHU</span>
        </div>
        <div className="about-text" data-reveal>
          <h2>Just me,<br />as I <em>am.</em></h2>
          <p>
            I’m a student, not a developer. This website isn’t a work portfolio;
            it’s my own little place to introduce myself and share what I’m into.
          </p>
          <p>
            I love watching thriller movies, travelling, and listening to music.
            I’m happy to keep learning, finding new favourites, and seeing where
            life takes me.
          </p>
          <Link className="text-link" to="/interests">The things I love <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}

function InterestsPage() {
  const interests = [
    {
      number: "01",
      title: "Thriller movies",
      text: "A tense storyline, a clever twist, and absolutely no spoilers beforehand.",
    },
    {
      number: "02",
      title: "Travelling",
      text: "There’s always something special about seeing somewhere new for yourself.",
    },
    {
      number: "03",
      title: "Listening to music",
      text: "The right track can make an ordinary moment feel like its own little scene.",
    },
  ];

  return (
    <main className="inner-page">
      <section className="inner-page-hero page-intro">
        <p className="eyebrow">THE THINGS I KEEP COMING BACK TO</p>
        <h1>Off the<br /><em>clock.</em></h1>
        <p>A few things that reliably make a day more interesting.</p>
      </section>
      <section className="interest-list">
        {interests.map((interest) => (
          <article className="interest-row" key={interest.number} data-reveal>
            <span className="section-number">{interest.number} / FAVOURITE</span>
            <h2>{interest.title}</h2>
            <p>{interest.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function PhotosPage() {
  return (
    <main className="inner-page">
      <section className="inner-page-hero page-intro">
        <p className="eyebrow">A FEW FRAMES</p>
        <h1>Little<br /><em>moments.</em></h1>
        <p>A small photo diary from my corner of the world.</p>
      </section>
      <section className="gallery-grid" aria-label="Photo gallery">
        {photos.map((photo, index) => (
          <figure className="gallery-card" key={photo.image} data-reveal>
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <figcaption><span>{photo.title}</span><span>{String(index + 1).padStart(2, "0")}</span></figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}

function ListeningPage() {
  return (
    <main className="inner-page">
      <section className="inner-page-hero page-intro">
        <p className="eyebrow">A SOUNDTRACK FOR THE DAY</p>
        <h1>Now on<br /><em>repeat.</em></h1>
        <p>Here’s a playlist I’ve been listening to lately. Pick a track and enjoy.</p>
      </section>
      <ListeningSection />
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("gaurav-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const location = useLocation();
  const pageRef = useRef(null);
  const lenisRef = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleTheme = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    document.documentElement.style.setProperty("--theme-origin-x", `${bounds.left + bounds.width / 2}px`);
    document.documentElement.style.setProperty("--theme-origin-y", `${bounds.top + bounds.height / 2}px`);
    const updateTheme = () => setTheme((current) => current === "light" ? "dark" : "light");
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      typeof document.startViewTransition === "function"
    ) {
      document.startViewTransition(updateTheme);
    } else {
      updateTheme();
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("gaurav-theme", theme);
  }, [theme]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = prefersReducedMotion
      ? null
      : new Lenis({ anchors: true, autoRaf: true, lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;

    return () => {
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const animationContext = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy > *, .page-intro > *",
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: "power3.out", delay: 0.12 },
      );

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });
    }, pageRef);

    return () => animationContext.revert();
  }, [location.pathname]);

  return (
    <div className="app-shell" ref={pageRef}>
      <Header
        onMenu={() => setMenuOpen(true)}
        menuOpen={menuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      {menuOpen && createPortal(<Menu onClose={closeMenu} />, document.body)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/listening" element={<ListeningPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Gaurav Sahu</span>
        <span>Just a little bit of me <b aria-hidden="true">✳</b></span>
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </div>
  );
}

export default App;
