import { component$ } from "@builder.io/qwik";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Pageheader from "~/components/pageheader/pageheader";
import Project from "~/components/project/project";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <Pageheader name="Projects"></Pageheader>
      <div class={styles.propjects}>
        <Project
          img="https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg"
          caption="Mars Crater Study"
          height={500}
          width={850}
        >
          <p>
            I took a dataset of 300,000 and tested the relationship between the
            crater's eccentricities and their location on Mars. I found a
            statistically significant relationship between the two variables.
            Based on my findings I hypothesize that the eccentricities of
            craters become more elongated on average as the crater's location
            becomes further from Olympus Mons due to the subsequent decrease in
            volcanic activity.
          </p>
        </Project>
        <Project
          img="https://community.alteryx.com/t5/image/serverpage/image-id/269381iE1288FAEB30E4EDA?v=v2"
          caption="Advent of Code"
          height={500}
          width={850}
        >
          <p>
            My repository of solutions to every advent of code problem. Each
            year is solved in a different programming language: Go, Rust, Scala,
            C++, Haskell, Swift, Julia, Ruby, & Typescript, in reverse
            chronological order.
          </p>
        </Project>
      </div>
    </>
  );
});
