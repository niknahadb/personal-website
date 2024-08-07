import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../styles/footer.module.css";

const socials = [
  {
    element: <FiMail size={40} />,
    description: "niknahad.borna@gmail.com",
    link: "mailto:niknahad.borna@gmail.com",
  },
  {
    element: <AiFillGithub size={40} />,
    description: "niknahadb",
    link: "https://github.com/niknahadb",
  },
  {
    element: <AiFillLinkedin size={40} />,
    description: "niknahad",
    link: "https://www.linkedin.com/in/niknahad",
  },
  {
    element: <CgFileDocument size={40} />,
    description: "Resume",
    link: "/Borna_Niknahad_Resume.pdf",
  },
];

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.wrapper}>
      <p data-aos="fade-up">Contact me!</p>
      <ul>
        {socials.map((social, i) => (
          <li key={i} data-aos="fade-up">
            {social.element}
            <a href={social.link} target="blank">
              {social.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
