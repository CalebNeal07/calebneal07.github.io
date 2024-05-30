import { component$ } from "@builder.io/qwik";
import styles from "./namebar.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.headers}>
          <h1>Caleb O'Neal</h1>
          <h3>Programmer and Electrical Engineer</h3>
        </div>

        <div class={styles.buttons}>
          <a href="/experience" id={styles.experience}>
            <b>Experience</b>
          </a>
          <a href="/projects" id={styles.projects}>
            <b>Projects</b>
          </a>
          <a href="/awards" id={styles.awards}>
            <b>Awards</b>
          </a>
          <a href="/contact" id={styles.contact}>
            <b>Contact Me</b>
          </a>
        </div>
      </div>
    </>
  );
});
