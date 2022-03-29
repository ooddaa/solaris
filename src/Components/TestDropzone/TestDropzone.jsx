import React from "react";
import Draggable from "./Draggable";

const log = (...args) => console.log(...args);

function GenericProject({
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onTouchStart,
  onTouchMove,
  ...genericProps
}) {
  return function Project({ className, name, imgSrc, ...props }) {
    return (
      <div
        className={`project ${className || ""}`}
        {...genericProps}
        {...props}
      >
        <img className="project-img" src={imgSrc} alt="" />
        <span className="project-name">{name}</span>
      </div>
    );
  };
}

const mockData = [
  {
    name: "Lolotron",
    className: "lol",
    imgSrc: "https://source.unsplash.com/900x900",
  },
  {
    name: "The Great Gatsby",
    className: "gatsby",
    imgSrc: "https://source.unsplash.com/901x901",
  },
];

function TestDropzone() {
  const Project = GenericProject({
    // onMouseDown: dragElement,
  });
  return (
    <>
      {mockData.map((props) => {
        return (
          <Draggable key={props.name}>
            <Project {...props} />
          </Draggable>
        );
      })}
    </>
  );
}

export default TestDropzone;
