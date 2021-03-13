import { createUseStyles } from "react-jss";
import header from "./assets/header.svg";

const lightningBlue = "#02ccff";
const smallDevice = 576;
const mediumDevice = 768;
const largeDevice = 992;
const extraLargeDevice = 1200;

export const useAppStyles = createUseStyles({
  App: {
    minHeight: "100vh",
    backgroundColor: "black",
    color: lightningBlue,
    display: "flex",
    flexDirection: "column",
    "& > *": {
      textAlign: "center",
    },
  },
  splashContainer: {
    position: "relative",
    zIndex: "0",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      justifyContent: "flex-start",
    },
  },
  midPic: {
    width: "100%",
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      position: "absolute",
      zIndex: "-1",
      left: "0",
      bottom: "0",
    },
  },
});

export const useHeaderStyles = createUseStyles({
  Header: {
    backgroundImage: `url(${header})`,
    backgroundSize: "cover",
    height: "calc(100vw / 2.37)",
  },
  [`@media screen and (min-width: ${smallDevice}px)`]: {
    Header: {
      marginTop: "-15%",
    },
  },
});

export const useContactStyles = createUseStyles({
  Contact: {
    marginTop: "2em",
    [`@media screen and (min-width: ${smallDevice}px)`]: {
      fontSize: "1.5em",
    },
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      fontSize: "2em",
    },

    "&>h1": {
      marginBottom: "1em",
    },
  },
  iconList: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2em",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
      fontSize: "2em",
    },
    "&>a + a": {
      marginLeft: "1em",
    },
  },
  contactMethodsWrapper: {
    "&>a": {
      color: "inherit",
      textDecoration: "none",
    },
    "&>a + a": {
      marginLeft: "2em",
    },
  },
});

export const useNavStyles = createUseStyles({
  "@global": {
    "@keyframes rotateDown": {
      from: {
        transfrom: "rotate(0)",
      },
      to: {
        transform: "rotate(45deg) translateY(30px)",
        transformOrigin: "50% 50%",
      },
    },
    "@keyframes rotateDownReverse": {
      from: {
        transform: "rotate(45deg) translateY(30px)",
        transformOrigin: "50% 50%",
      },
      to: {
        transform: "rotate(0)",
      },
    },
    "@keyframes rotateUp": {
      from: {
        transfrom: "rotate(0)",
      },
      to: {
        transform: "rotate(-45deg) translateY(-30px)",
        transformOrigin: "50% 50%",
      },
    },
    "@keyframes rotateUpReverse": {
      from: {
        transform: "rotate(-45deg) translateY(-30px)",
        transformOrigin: "50% 50%",
      },
      to: {
        transform: "rotate(0)",
      },
    },
    "@keyframes slideOut": {
      from: {
        transfrom: "scaleX(1)",
      },
      to: {
        transform: "scaleX(0)",
      },
    },
    "@keyframes slideOutReverse": {
      from: {
        transform: "scaleX(0)",
      },
      to: {
        transform: "scaleX(1)",
      },
    },
  },
  NavForwards: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "black",
    color: "inherit",
    zIndex: "1000",
    display: "flex",
    alignItems: "center",
    padding: "0.75em ",
    paddingLeft: "1em",
    transition: "0.3s ease-out",
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      fontSize: "2em",
    },
  },
  hamburger: {
    fill: lightningBlue,
    borderRadius: 7,
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      transform: "scale(1.25)",
    },
  },
  lineOneForwards: {
    animation: "$rotateDown 0.3s ease-out forwards",
  },
  lineOneBackwards: {
    animation: "$rotateDownReverse 0.3s ease-out forwards",
  },
  lineTwoForwards: {
    animation: "$slideOut 0.3s ease-out forwards",
  },
  lineTwoBackwards: {
    animation: "$slideOutReverse 0.6s ease-out forwards",
  },
  lineThreeForwards: {
    animation: "$rotateUp 0.3s ease-out forwards",
  },
  lineThreeBackwards: {
    animation: "$rotateUpReverse 0.3s ease-out forwards",
  },

  linkWrapperForwards: {
    width: "80%",
    height: 40,
    position: "absolute",
    left: "3.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    transition: "width 0.3s ease-out",
    "&>a": {
      textDecoration: "none",
      color: lightningBlue,
      fontWeight: "bold",
    },
    "&>a + a": {
      marginLeft: "1.2em",
    },
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      "&>a:last-child": {
        marginRight: 110,
      },
    },
  },
  linkWrapperBackwards: {
    width: 0,
    position: "absolute",
    left: "3.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    transition: "width 0.3s ease-out",

    "&>a": {
      textDecoration: "none",
      color: lightningBlue,
      fontWeight: "bold",
      fontSize: "1.2em",
    },
    "&>a + a": {
      marginLeft: "1.2em",
    },
  },
  NavBackwards: {
    width: 70,
    borderRadius: "0 .0 .25em 0",
    position: "fixed",
    top: 0,
    backgroundColor: "black",
    color: "inherit",
    zIndex: "1000",
    display: "flex",
    alignItems: "center",
    padding: "0.75em ",
    paddingLeft: "1em",
    transition: "0.3s ease-out",
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      fontSize: "2em",
      width: 110,
    },
  },
});

export const useProjectsStyles = createUseStyles({
  Projects: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2em",
    "&>h1": {
      fontSize: "2em",
      marginTop: "1em",
    },
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      "&>h1": {
        fontSize: "3em",
      },
    },
  },
});

export const useProjectStyles = createUseStyles({
  Project: (project) => {
    return {
      position: "relative",
      marginTop: "2em",
      width: "80%",
      zIndex: "0",
      color: "black",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      placeItems: "center",
      "&>h2": {
        gridColumn: "1 / 3",
        gridRow: "1",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        background: "inherit",
        zIndex: "-1",
        width: "100%",
        height: "100%",
        boxShadow: "inset 0 0 2000px 0 rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(10px)",
        margin: -20,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundAttachment: "fixed",
        background: `url(${project.image}) no-repeat center center`,
        backgroundSize: "cover",
        willChange: "transform",
        zIndex: "-2",
      },
    };
  },
  ["@media screen and (min-width: 0px)"]: {
    Project: {
      height: "20em",
      "&>h2": {
        fontSize: "1.75em",
      },
    },
  },
  [`@media screen and (min-width: ${mediumDevice}px)`]: {
    Project: {
      height: "30em",
      "&>h2": {
        fontSize: "2.5em",
      },
    },
  },

  badgeContainer: {
    gridColumn: "1",
    gridRow: "2",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoFlow: "row",
    gap: "0.3em",
    boxShadow: "inset 0 0 50px 0 #000",
    padding: "0.3em",
  },
  badge: {
    width: "2rem",
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      width: "3rem",
    },
  },
  p: {
    fontSize: "1.2em",
    gridColumn: "2",
    gridRow: "2",
  },
  btn: {
    width: "4.5em",
    fontSize: "1.25em",
    padding: "0.25em 0",
    background: "black",
    color: lightningBlue,
    borderRadius: "1em",
    "&>a": {
      textDecoration: "none",
      color: "inherit",
    },
    [`@media screen and (min-width: ${mediumDevice}px)`]: {
      fontSize: "1.75em",
    },
  },
  btnDemo: {
    gridColumn: "1",
    gridRow: "3",
  },
  btnCode: {
    gridColumn: "2",
    gridRow: "3",
  },
});
