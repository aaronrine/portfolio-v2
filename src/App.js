import "./App.scss";
import midPic from "./assets/blue-glass-highlight.jpg";
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
    </div>
  );
}

export default App;
