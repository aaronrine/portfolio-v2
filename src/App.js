import "./App.scss";
import midPic from "./assets/blue-glass-highlight.jpg";
import html from "./assets/html.png";
import css from "./assets/css.webp";
import js from "./assets/js2.png";
import react from "./assets/react2.png";
import sass from "./assets/sass.png";
import python from "./assets/python.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const icons = [
  {
    icon: faGithub,
    uri: "https://github.com/aaronrine",
    key: 1111,
    title: "github",
  },
  {
    icon: faLinkedin,
    uri: "https://www.linkedin.com/in/aaron-rine-1903b511a/",
    key: 2222,
    title: "linkedin",
  },
  {
    icon: faFileDownload,
    uri: "",
    key: 3333,
    title: "resume",
  },
];

const badges = [
  { source: html, alt: "html" },
  { source: css, alt: "css" },
  { source: js, alt: "js" },
  { source: react, alt: "react" },
  { source: sass, alt: "sass" },
  { source: python, alt: "python" },
];

function App() {
  const [burgerState, setBurgerState] = useState("false");
  return (
    <div className="App">
      <div className="above-fold-container">
        <header className="main-header">
          <nav className="Nav" direction={burgerState}>
            <svg
              onClick={() =>
                setBurgerState((prev) => (prev === "true" ? "false" : "true"))
              }
              className="hamburger"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect
                direction={burgerState}
                className="line-one"
                width="100"
                height="20"
                rx="15"
              />
              <rect
                direction={burgerState}
                className="line-two"
                y="30"
                width="100"
                height="20"
                rx="15"
              />
              <rect
                direction={burgerState}
                className="line-three"
                y="60"
                width="100"
                height="20"
                rx="15"
              />
            </svg>
            <div className="link-wrapper" direction={burgerState}>
              <a href="#top" title="home">
                Home
              </a>
              <a href="#projects" title="projects">
                Projects
              </a>
              <a href="#contact" title="contact">
                Contact
              </a>
            </div>
          </nav>
        </header>
        <div className="IconList">
          {icons.map(({ icon, uri, key, title }) => (
            <a
              href={uri}
              target="_blank"
              rel="noreferrer"
              key={key}
              title={title}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
        <h1>Elegant solutions to practical problems.</h1>
        <img src={midPic} alt="blue glass geometric crystals"></img>
      </div>
      <section id="projects" className="Projects">
        <h1>Projects</h1>
        <div className="Project">
          <h2>Project Name</h2>
          <div className="badge-container">
            {badges.map(({ source, alt }, index) => (
              <img className="badge" src={source} key={index} alt={alt}></img>
            ))}
          </div>
          <ul className="details">
            <li className="detail">short</li>
            <li className="detail">list</li>
            <li className="detail">of</li>
            <li className="detail">items</li>
          </ul>
          <div className="button btn-demo">
            <a href="#top">Demo</a>
          </div>
          <div className="button btn-code">
            <a href="#top">Code</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
