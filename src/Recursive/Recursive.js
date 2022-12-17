import { useState } from "react";
import "./recursive.css";

const isObject = (item) =>
  typeof item === "object" && !Array.isArray(item) && item != null;

const RecursiveComponent = ({ data }) => {
  const [activeItem, setActiveItem] = useState();
  const changeActive = (dropdownitem) =>
    setActiveItem((prev) => (prev === dropdownitem ? null : dropdownitem));

  if (!isObject(data) && Array.isArray(data))
    return data.map((item) => (
      <li key={item}>
        <a href="#">{item}</a>
      </li>
    ));
  else if (!isObject(data))
    return (
      <li key={data}>
        <a href="#">{data}</a>
      </li>
    );

  const pairs = Object.entries(data);
  return (
    <div className="container">
      <ul className="accordion-menu">
        {pairs.map(([key, value]) => (
          <li
            className={`${activeItem === key && true && "active"}`}
            onClick={() => changeActive(key)}
            key={key}
          >
            <div className="dropdown">
              {key}
              <span className="downIcon">V</span>
            </div>
            <ul className="submenuitems">
              <RecursiveComponent data={value} />
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Recursive = (props) => {
  const data = {
    Python: ["Python level 1", "Python level 2", "Python level 3"],
    "Node-JS": ["Node-JS level 1", "Node-JS level 2", "Node-JS level 3"],
    React: ["React level 1", "React level 2", "React level 3"],
    "Boot Strap": [
      "Boot Strap level 1",
      "Boot Strap level 2",
      "Boot Strap level 3",
    ],
  };

  return <RecursiveComponent data={data} />;
};

export default Recursive;
