import { useState } from "react";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState();

  const chevDown = " V";
  const changeAcitve = (item) =>
    setActiveItem((prev) => (prev === item ? null : item));
  return (
    <div className="app">
      <div className="container">
        <ul className="accordion-menu">
          <li
            className={`link ${activeItem === "python" && "active"}`}
            onClick={() => changeAcitve("python")}
          >
            <div className="dropdown">
              Python
              <span className="downIcon">{chevDown}</span>
            </div>
            <ul className="submenuitems">
              <li>
                <a href="#">Python level 1</a>
              </li>
              <li>
                <a href="#">Python level 2</a>
              </li>
              <li>
                <a href="#">Python level 3</a>
              </li>
            </ul>
          </li>
          <li
            className={`link ${activeItem === "Node-JS" && "active"}`}
            onClick={() => changeAcitve("Node-JS")}
          >
            <div className="dropdown">
              Node-JS
              <span className="downIcon">{chevDown}</span>
            </div>
            <ul className="submenuitems">
              <li>
                <a href="#">Node-JS level 1</a>
              </li>
              <li>
                <a href="#">Node-JS level 2</a>
              </li>
              <li>
                <a href="#">Node-JS level 3</a>
              </li>
            </ul>
          </li>
          <li
            className={`link ${activeItem === "React" && "active"}`}
            onClick={() => changeAcitve("React")}
          >
            <div className="dropdown">
              React
              <span className="downIcon">{chevDown}</span>
            </div>
            <ul className="submenuitems">
              <li>
                <a href="#">React level 1</a>
              </li>
              <li>
                <a href="#">React level 2</a>
              </li>
              <li>
                <a href="#">React level 3</a>
              </li>
            </ul>
          </li>

          <li
            className={`link ${activeItem === "Boot Strap" && "active"}`}
            onClick={() => changeAcitve("Boot Strap")}
          >
            <div className="dropdown">
              Boot Strap
              <span className="downIcon">{chevDown}</span>
            </div>
            <ul className="submenuitems">
              <li>
                <a href="#">Boot Strap level 1</a>
              </li>
              <li>
                <a href="#">Boot Strap level 2</a>
              </li>
              <li>
                <a href="#">Boot Strap level 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
