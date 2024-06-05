import { component$ } from "@builder.io/qwik";
import Pageheader from "~/components/pageheader/pageheader";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <Pageheader name="Education"></Pageheader>
    </>
  );
});
