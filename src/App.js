import "./App.scss";
import midPic from "./assets/blue-glass-highlight.jpg";
import { useState } from "react";

function App() {
  const [burgerState, setBurgerState] = useState(0);
  return (
    <div className="App">
      <div className="above-fold-container">
        <header className="main-header">
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
        </header>
        <img src={midPic} alt="blue glass geometric crystals"></img>
      </div>
    </div>
  );
}

export default App;
