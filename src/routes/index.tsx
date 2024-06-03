import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.headers}>
          <h1>Caleb O'Neal</h1>
          <h3>--------</h3>
        </div>

        <div class={styles.buttons}>
          <a class={styles.navlink} href="/experience" id={styles.experience}>
            <b>Experience</b>
          </a>
          <a class={styles.navlink} href="/projects" id={styles.projects}>
            <b>Projects</b>
          </a>
          <a class={styles.navlink} href="/awards" id={styles.awards}>
            <b>Awards</b>
          </a>
          <a class={styles.navlink} href="/contact" id={styles.contact}>
            <b>Contact Me</b>
          </a>
        </div>
      </div>
    </>
  );
});
