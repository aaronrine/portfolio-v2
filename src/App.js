import { icons, projects, midPic } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAppStyles,
  useHeaderStyles,
  useContactStyles,
  useNavStyles,
  useProjectsStyles,
  useProjectStyles,
} from "./styles";
import { useState } from "react";

function Nav() {
  const [burgerState, setBurgerState] = useState(false);
  
  const classes = useNavStyles();
  return (
    <nav className={burgerState ? classes.NavForwards : classes.NavBackwards}>
      <div onClick={() => setBurgerState(prev => {
        console.log(!prev)
        return !prev
        })}>
      <svg
        className={classes.hamburger}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect
          className={
            burgerState ? classes.lineOneForwards : classes.lineOneBackwards
          }
          width="100"
          height="20"
          rx="15"
        />
        <rect
          className={
            burgerState ? classes.lineTwoForwards : classes.lineTwoBackwards
          }
          y="30"
          width="100"
          height="20"
          rx="15"
        />
        <rect
          className={
            burgerState ? classes.lineThreeForwards : classes.lineThreeBackwards
          }
          y="60"
          width="100"
          height="20"
          rx="15"
        />
      </svg>
      </div>
      <div
        className={
          burgerState
            ? classes.linkWrapperForwards
            : classes.linkWrapperBackwards
        }
      >
        <a href="#top" title="home">
          Home
        </a>
        <a href="#projects" title="projects">
          Projects
        </a>
      </div>
    </nav>
  );
}

function Header() {
  const classes = useHeaderStyles();
  return <header className={classes.Header}></header>;
}

function Project({ project }) {
  const classes = useProjectStyles(project);

  return (
    <div className={classes.Project}>
      <h2>{project.name}</h2>
      <div className={classes.badgeContainer}>
        {project.tech.map(({ source, alt, title }, index) => (
          <img
            className={classes.badge}
            src={source}
            alt={alt}
            title={title}
            key={index}
          ></img>
        ))}
      </div>
      <p>{project.desc}</p>
      <div className={`${classes.btn} ${classes.btnDemo}`}>
        <a href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
      <div className={`${classes.btn} ${classes.btnCode}`}>
        <a href={project.code} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const classes = useProjectsStyles();
  return (
    <section id="projects" className={classes.Projects}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </section>
  );
}

function Contact() {
  const classes = useContactStyles();
  return (
    <section className={classes.Contact} id="contact">
      <h1>Contact</h1>
      <div className={classes.iconList}>
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
      <div className={classes.contactMethodsWrapper}>
        <a
          href="mailto:aaronrine@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="E-mail address"
        >
          aaronrine@gmail.com
        </a>
        <a href="tel:7024652519" title="Cellphone Number">
          (702) 465-2519
        </a>
      </div>
    </section>
  );
}

function App() {
  const classes = useAppStyles();
  return (
    <div className={classes.App}>
      <Nav />
      <div className={classes.splashContainer}>
        <Header />
        <Contact />
        <img
          className={classes.midPic}
          src={midPic}
          alt="blue glass geometric crystals"
        ></img>
      </div>
      <Projects />
    </div>
  );
}

export default App;
