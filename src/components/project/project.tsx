import { Slot, component$ } from "@builder.io/qwik";
import styles from "./project.module.css";

interface props {
  img?: string;
  width?: number;
  height?: number;
  caption?: string;
}

export default component$<props>(
  ({ img = "", width = 500, height = 500, caption = "" }) => {
    return (
      <>
        <div class={styles.project}>
          <fieldset>
            <legend>{caption}</legend>
            <img src={img} width={width} height={height} />
            <div class={styles.overlay}>
              <Slot />
            </div>
          </fieldset>
        </div>
      </>
    );
  },
);
