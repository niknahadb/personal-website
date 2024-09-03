import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import profilePicture from "../public/profile.png";
import techStackData from "../data/techStackData";
import styles from "../styles/about.module.css";

const TechStackList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const About = React.forwardRef((_, ref) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <h2 data-aos="fade-up">about me</h2>
      <div className={styles.container}>
        <div className={styles.body}>
          <p data-aos="fade-up">
            My first encounter with programming was in sixth grade when I
            discovered{" "}
            <a href="https://scratch.mit.edu/" target="blank">
              <span>Scratch</span>
            </a>
            , a beginner friendly, block-based programming interface. I was
            instantly captivated by the endless possibilities it offered, losing
            track of time creating interactive games and projects. This early
            exposure sparked a passion for solving problems through coding that
            has only grown more profound ever since.
          </p>
          <p data-aos="fade-up">
            Now, I&apos;m a fourth year at UC Davis majoring in{" "}
            <span>Computer Science & Engineering</span>. For the past two summers,
            I developed impactful client-facing features from the ground up as a Software Engineering Intern at{" "}
            <a href="https://www.vimblygroup.com/" target="blank">
              <span>Vimbly Group</span>
            </a>
            , a New York City based profitable startup focused on the growth and
            expansion of tech-driven companies.
          </p>
          <p data-aos="fade-up">
            I have also worked on several engaging and
            rewarding projects as a full-stack software developer at{" "}
            <a href="https://www.codelabdavis.com/" target="blank">
              <span>CodeLab</span>
            </a>
            , the largest software and design agency in Davis. 
          </p>

          <h3 data-aos="fade-up">Technical Skills</h3>
          <div data-aos="zoom-in-up">
            <div className={styles.skills}>
              {techStackData.map((stack) => (
                <div key={stack.name}>
                  <h4>{stack.name}</h4>
                  <TechStackList data={stack.contents}></TechStackList>
                </div>
              ))}
            </div>
          </div>

          <p data-aos="fade-up">
            In my free time, I like to read, lift weights, swim, and craft
            unique sandwiches!
          </p>
        </div>

        <div data-aos="zoom-in-up">
          <Image
            src={profilePicture}
            alt="Profile picture"
            className={styles.profile}
          ></Image>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
