import { component$ } from "@builder.io/qwik";
import Pageheader from "~/components/pageheader/pageheader";
import styles from "./index.module.css";
import Github from "~/media/github-mark-white.svg?jsx";

export default component$(() => {
  return (
    <>
      <Pageheader name="Contact Me"></Pageheader>
      <div class={styles.center}>
        <a id={styles.github} href="https://github.com/CalebNeal07">
          <div>
            <Github width={500} />
          </div>
          GitHub
        </a>
        <a id={styles.email} href="mailto:caleboneal@gmail.com">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120px"
              height="120px"
              viewBox="0 0 24 12"
            >
              <path
                fill="white"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
          </div>
          Email
        </a>
      </div>
    </>
  );
});
