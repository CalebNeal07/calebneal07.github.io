import { component$ } from "@builder.io/qwik";
import styles from "./pageheader.module.css";

interface props {
  name: string;
}

export default component$<props>(({ name = "" }) => {
  return (
    <>
      <h1>{name}</h1>
      <hr class={styles.divider} />
    </>
  );
});
