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
            My first encounter with programming was in seventh grade when I
            discovered basic HTML and web development. I was fascinated by the
            endless possibilities it offered. This early exposure sparked a
            passion for solving problems through coding that has only grown more
            profound ever since.
          </p>
          <p data-aos="fade-up">
            Now, I&apos;m studying <span>Computer Science & Engineering</span>{" "}
            at the University of California, Davis. For the past two summers, I
            developed several impactful features and tools and helped scale
            businessses as a Software Engineering Intern at{" "}
            <a href="https://www.vimblygroup.com/" target="blank">
              <span>Vimbly Group</span>
            </a>
            , a tech startup in NYC with a diverse portfolio of businessses.
          </p>
          <p data-aos="fade-up">
            Here in Davis, I run and organize{" "}
            <a href="https://ucdhacknight.com/" target="blank">
              <span>Hack Nights</span>
            </a>{" "}
            (click it!). I have also worked on several engaging and rewarding
            projects as a full-stack software developer at{" "}
            <a href="https://www.codelabdavis.com/" target="blank">
              <span>CodeLab</span>
            </a>
            , the largest software and design agency at Davis.
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
            unique sandwiches! (self-proclaimed sandwich artist and expert)
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
