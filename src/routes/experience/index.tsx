import { component$ } from "@builder.io/qwik";
import Pageheader from "~/components/pageheader/pageheader";
import styles from "./index.module.css";
import Pycon from "~/media/pycon.jpg?jsx";

export default component$(() => {
  return (
    <>
      <Pageheader name="Experience"></Pageheader>
      <div class={styles.center}>
        <h2>About Me</h2>
        <p>
          I'm a high school student enrolled in the Arlington Tech program at
          Arlington Career Center. The program also allows students to pursue an
          Associate's degree while in high school. A fact that I'm taking
          advantage of to get a degree in computer science. I've always been
          interested in programming and recently my interest has began to focus
          on lower level programming and firmware developemnt. Bellow are some
          of the things I've done related to my interests. I also have a number
          of personal projects displayed on this website.
        </p>
      </div>
      <div class={styles.center}>
        <h2>
          <b>Robotics Team</b> | Team Cocaptain | September 2022 - Present
        </h2>
        <p>
          I'm the proud captain of Team 8230, The KoiBots, a FIRST Robotics
          Competition (FRC) team. I've always been interested in programming and
          robotics, so when medical comlications prevented me from playing
          normal sports I joined the robotics team. Since then, I've dedicated
          myself to this incredible field, not just as a participant, but also
          as a leader. This past season, I had the privilege of serving as Team
          8230's captain. It was an exhilarating experience that involved
          motivating my fellow KoiBots, fostering collaboration, and
          strategizing for success. Prior to that, I honed my technical skills
          as the team's programming lead, spearheading the development of our
          robot's autonomous and driver-controlled functionalities. Through
          these experiences, I've gained invaluable leadership qualities, such
          as effective communication, delegation, and problem-solving under
          pressure. Furthermore, my programming expertise encompasses designing
          control systems to control linear systems and managing complex robot
          state. I'm eager to leverage these skills and continue making a
          positive impact in the world of robotics.
        </p>
        <img
          src="https://github.com/koibots8230/.github/raw/main/profile/assets/team_photo.jpg"
          width={700}
          height={400}
        />
      </div>
      <div class={styles.center}>
        <h2>
          <b>NASA App Development Challenge</b> | September 2023 - May 2024
        </h2>
        <p>
          I joined my schools NASA App Development Team to further my skills
          developing data visualization apps. We were tasked with building an
          app to effectivly simulate an Artemis mission to the south pole of the
          moon. NASA provided topographic data that we then visualized, charted
          a path on the terrain, and calculated optimal points for communication
          relays along that path. Our project did not win NASA's competition,
          but the team presented our project at PyCon 2024 in Pittsburg.
        </p>
        <Pycon />
      </div>
    </>
  );
});
