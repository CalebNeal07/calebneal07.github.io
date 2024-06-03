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
        <Project img="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg">
          <p> Sample Text</p>
        </Project>
        <Project
          img="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          caption="Sample Title"
          height={800}
          width={800}
        >
          <p> More Sample Text</p>
        </Project>
      </div>
    </>
  );
});
