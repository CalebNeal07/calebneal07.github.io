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
          <div class={styles.row}>
            <div class={styles.navbutton} id={styles.experience}>
              <a href="/experience">Experience</a>
            </div>
            <div class={styles.navbutton} id={styles.awards}>
              <a href="/awards">Awards & Certifications</a>
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.navbutton} id={styles.projects}>
              <a href="/projects">Projects</a>
            </div>
            <div class={styles.navbutton} id={styles.contact}>
              <a href="/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
