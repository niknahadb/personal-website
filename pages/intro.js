import React, { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../styles/intro.module.css";

const Intro = React.forwardRef((_, ref) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.container}>
        <h1>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hi, I'm <span style='color: rgb(47, 163, 163)'>Borna</span>."
                )
                .start();
            }}
          />
        </h1>
        <div className={styles.subtitle} data-aos="fade-up">
          I&apos;m a full-stack software engineer and iOS developer from
          Southern California. I am driven by a passion for building efficient,
          high-quality software that solves impactful problems at scale.
          Recently, I&apos;ve been learning about machine learning, operating
          systems, and embedded systems.
        </div>
      </div>
    </div>
  );
});

export default Intro;

Intro.displayName = "Intro";
