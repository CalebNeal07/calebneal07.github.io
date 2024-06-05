import { component$ } from "@builder.io/qwik";
import Pageheader from "~/components/pageheader/pageheader";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <Pageheader name="Education"></Pageheader>
      <div class={styles.center}>
        <h2> Northern Virginia Community College</h2>
        <img
          src="https://www.nvcc.edu/dist/images/sites/about/locations/annandale/annandale-campus-for-homepage.jpg"
          width={700}
          height={500}
        />
        <h4>Courses</h4>
        <ul>
          <li>Calculus I</li>
          <li>Calculus II</li>
        </ul>
      </div>
    </>
  );
});
