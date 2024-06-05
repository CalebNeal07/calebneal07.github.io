import { component$ } from "@builder.io/qwik";
import Pageheader from "~/components/pageheader/pageheader";
import styles from "./index.module.css";
import Image from "~/media/image.jpg?jsx";

export default component$(() => {
  return (
    <>
      <Pageheader name="Awards"></Pageheader>
      <div class={(styles.award, styles.center)}>
        <h2>Digital Electronics - Academic Achievment 2023-2024</h2>
        <p>
          I won the academic achievment award in my digital electronics course.
          The award is given out annually for each career and technical
          eduacation (CTE) course in Arlington county, pulling from all the
          students taking CTE courses, which are available to the entire county.
          I also helped make the awards themselves. The award is a wooden plaque
          inset with a custom engraved bronze plate.
        </p>
        <Image style="height: 500px; width: 400px; text-align: center" />
      </div>
      <div class={styles.award}>
        <h2>Computer Programming - Technical Achievment 2022-2023</h2>
        <p>
          Another CTE award, I was awarded the technical achievment award for
          computer programming my sophmore year of high school.
        </p>
      </div>
    </>
  );
});
