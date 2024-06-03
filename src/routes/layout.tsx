import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./layout.module.css";

export default component$(() => {
  const isHomePage = useLocation().url.pathname === "/";
  const isContactsPage = useLocation().url.pathname === "/contact/";
  const isAwardsPage = useLocation().url.pathname === "/awards/";
  const isProjectsPage = useLocation().url.pathname === "/projects/";
  const isExperiencePage = useLocation().url.pathname === "/experience/"

  return (
    <div id={styles.page}>
      {!isHomePage && ( // Only render navbar if not homepage
        <header>
          <ul>
            <li>
              <a class={isHomePage && styles.active} id={styles.home} href="/">
                Caleb O'Neal
              </a>
            </li>
            <li style="float:right">
              <a class={isContactsPage && styles.active} id={styles.pages} href="/contact">
                Contact Me
              </a>
            </li>
            <li style="float:right">
              <a class={isAwardsPage && styles.active} id={styles.pages} href="/awards">
                Awards
              </a>
            </li>
            <li style="float:right">
              <a class={isProjectsPage && styles.active} id={styles.pages} href="/projects">
                Projects
              </a>
            </li>
            <li style="float:right">
              <a class={isExperiencePage && styles.active} id={styles.pages} href="/experience">
                Experience
              </a>
            </li>
          </ul>
        </header>
      )}
      <main>
        <div id={styles.content}>
          <Slot />
        </div>
      </main>
      <footer id={styles.footer}>
        <svg
          class={styles.editorial}
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0
          58-18 88-18s
          58 18 88 18
          58-18 88-18
          58 18 88 18
          v44h-352z"
            />
          </defs>
          <g class={styles.parallax1}>
            <use
              xlink:href="#gentle-wave"
              x="50"
              y="3"
              fill="hsla(320, 40%, 65%, 0.6)"
            />
          </g>
          <g class={styles.parallax2}>
            <use
              xlink:href="#gentle-wave"
              x="50"
              y="0"
              fill="hsla(300, 100%, 60%, 0.3)"
            />
          </g>
          <g class={styles.parallax3}>
            <use
              xlink:href="#gentle-wave"
              x="50"
              y="9"
              fill="hsla(200, 100%, 60%, 0.5)"
            />
          </g>
          <g class={styles.parallax4}>
            <use
              xlink:href="#gentle-wave"
              x="50"
              y="6"
              fill="hsla(320, 0%, 0%, 0%)"
            />
          </g>
        </svg>
      </footer>
    </div>
  );
});
