import html from "./assets/badges/html.png";
import css from "./assets/badges/css.webp";
import js from "./assets/badges/JavaScript.png";
import php from "./assets/badges/php.png";
import react from "./assets/badges/react2.png";
import sass from "./assets/badges/sass.png";
import wordpress from "./assets/badges/wordpress2.png";
import python from "./assets/badges/python.webp";
import glassHighlight from "./assets/site/blue-glass-highlight.jpg";
import progressBar from "./assets/projects/progressBars.png";
import todoApp from "./assets/projects/todo-app-better-phone.png"
import propocket from "./assets/projects/propocket.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export const midPic = glassHighlight;

export const icons = [
  {
    icon: faGithub,
    uri: "https://github.com/aaronrine",
    key: 1111,
    title: "Github",
  },
  {
    icon: faLinkedin,
    uri: "https://www.linkedin.com/in/aaron-rine-1903b511a/",
    key: 2222,
    title: "Linkedin",
  },
  {
    icon: faFileDownload,
    uri: "",
    key: 3333,
    title: "Resume",
  },
];

export const badges = [
  { source: html, alt: "html", title: "HTML" },
  { source: css, alt: "css", title: "CSS" },
  { source: js, alt: "js", title: "JavaScript" },
  { source: php, alt: "php", title: "PHP" },
  { source: wordpress, alt: "wordpress", title: "Wordpress" },
  { source: react, alt: "react", title: "React.JS" },
  { source: sass, alt: "sass", title: "Sass" },
  { source: python, alt: "python", title: "Python" },
];

function getBadges(keywords) {
  return badges.filter((badge) => keywords.includes(badge.alt));
}

export const projects = [
  {
    name: "Progress Bar",
    tech: getBadges(["html", "css", "js"]),
    image: progressBar,
    desc:
      "A small vanilla JS progress bar to help learn styling and vanilla dom manipulation.",
    demo: "https://aaron-demo-progressbar.rine.us/",
    code: "https://github.com/aaronrine/vanilla-progress-bar",
  },
  {
    name: "Propocket",
    tech: getBadges(["html", "css", "php", "wordpress"]),
    image: propocket,
    desc:
      "My first large scale project. Live E-commerce site for a startup. Code is not available for this project.",
    demo: "https://propocket.biz/",
    code: "",
  },
  {
    name: "Todo App",
    tech: getBadges(["html", "css", "js", 'react', 'sass']),
    image: todoApp,
    desc: 'The humble todo app. Mine features responsive drag and drop, localstorage saving and the normal CRUD you\'d expect from any similar app.',
    demo: "https://aaron-demo-todo.rine.us/",
    code: "https://github.com/aaronrine/todo-v2",
  },
];
