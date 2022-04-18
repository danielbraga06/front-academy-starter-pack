import "./styles.css";

import MyCV from './assets/Curriculo Carlos Daniel 2022.pdf';
import GitHub from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";
import Gmail from "./assets/gmail.png";
import CV from "./assets/cv.png";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a
        href="https://github.com/danielbraga06"
        target="_blank"
        rel="noreferrer"
        className="social-media-item"
      >
        <img alt="GitHub" src={GitHub} />
      </a>

      <a
        href="https://www.linkedin.com/in/carlos-daniel-braga-2a4522182/"
        target="_blank"
        rel="noreferrer"
        className="social-media-item"
      >
        <img alt="Linkedin" src={Linkedin} />
      </a>

      <a
        href="mailto: contatocdanielbraga@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="social-media-item"
      >
        <img alt="Gmail" src={Gmail} />
      </a>

      <a
        href={MyCV}
        target="_blank"
        rel="noreferrer"
        className="social-media-item"
      >
        <img alt="CV" src={CV} />
      </a>
    </div>
  );
}

export default SocialMedia;
