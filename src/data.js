import html from "./assets/html.png";
import css from "./assets/css.webp";
import js from "./assets/js2.png";
import react from "./assets/react2.png";
import sass from "./assets/sass.png";
import python from "./assets/python.webp";
import glassHighlight from "./assets/blue-glass-highlight.jpg";
import progressBar from "./assets/progressBars.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export const midPic = glassHighlight;

export const icons = [
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

export const badges = [
  { source: html, alt: "html" },
  { source: css, alt: "css" },
  { source: js, alt: "js" },
  { source: react, alt: "react" },
  { source: sass, alt: "sass" },
  { source: python, alt: "python" },
];

function getBadges(keywords) {
  return badges.filter((badge) => keywords.includes(badge.alt));
}

export const projects = [
  {
    name: "Progress Bar",
    tech: getBadges(["html", "css", "js"]),
    image: progressBar,
    demo: "http://www.google.com",
    code: "https://github.com/aaronrine/vanilla-progress-bar",
  },
  {
    name: "Progress Bar",
    tech: getBadges(["html", "css", "js"]),
    image: html,
    demo: "http://www.google.com",
    code: "#top",
  },
  {
    name: "Progress Bar",
    tech: getBadges(["html", "css", "js"]),
    image: progressBar,
    demo: "http://www.google.com",
    code: "#top",
  },
];
