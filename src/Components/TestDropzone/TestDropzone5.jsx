import React, { useState, useEffect, useCallback } from "react";

function GenericProject({
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onTouchStart,
  onTouchMove,
  ...genericProps
}) {
  return function Project({ className, name, imgSrc, ...props }) {
    // log(props.classnames[0]);
    return (
      <div
        className={`project ${className || ""}`}
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseUp}
        // onMouseMove={onMouseMove}
        // onTouchStart={onTouchStart}
        // onTouchMove={onTouchMove}
        {...genericProps}
        {...props}
      >
        <img className="project-img" src={imgSrc} alt="" />
        <span className="project-name">{name}</span>
      </div>
    );
  };
}

const norm = (num) => (num < 0 ? num : ` ${num}`);
const log = (...args) => console.log(...args);

function Draggable({ children }) {
  // const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({
    // x: "100px",
    // y: "100px",
    // x: window.innerWidth / 2,
    // y: window.innerWidth / 2,
    x: 0,
    y: 0,
  });
  // const [target, setTarget] = useState(null);

  /* what happens when drag is initiated */
  function handleDragStart(e) {
    // e.preventDefault();
    // setTarget(e.target);
    log("handleDragStart");
    /* record dragged element initial position */
    // setElementPosition({
    //   /* x is the element's offset from the left */
    //   x: e.target.offsetLeft,
    //   /* y is the element's offset from the top */
    //   y: e.target.offsetTop,
    // });
    // log(`${e.target.offsetLeft} ${e.target.offsetTop}`);
  }
  /* what happenes while the drag in on */
  function handleDrag(e) {
    // e.preventDefault();
    let x, y;
    // log(e);
    // log("handleDrag");
    /* prevent mouse going outside viewport */
    if (e.clientX <= 0 || e.clientY <= 0) {
      log(`bad mouse   ${e.clientX} ${e.clientY}`);
      return false;
    }
    // log(e.type);

    if (e.type === "drag") {
      log("we are dragging");
      x = e.clientX;
      y = e.clientY;
      // setMousePosition({ x: `${x}px`, y: `${y}px` });
      setMousePosition({ x, y });
      log(`mouse   ${e.clientX} ${e.clientY}`);
    }

    // log(`element ${e.target.offsetLeft} ${e.target.offsetTop}`);

    /* record mouse coordinates */
    // setMousePosition({
    //   x: e.clientX,
    //   y: e.clientY,
    // });
    // log(`mouse   ${e.clientX} ${e.clientY}`);

    // log(`${e.clientX} ${e.clientY}`);
    // log(`${e.target.offsetTop} ${e.target.offsetLeft}`);
    // e.target.style = `translateX(${
    //   e.target.offsetLeft + e.clientX
    // }) translateY(${e.target.offsetTop + e.clientY})`;
  }

  /* what happenes when drag is finished */
  function handleDragEnd(e) {
    // e.preventDefault();

    /* we want to change the dragged element's position to last mouse coordinates */
    // e.target.style = `translateX(${
    //   e.target.offsetLeft + e.clientX
    // }px) translateY(${e.target.offsetTop + e.clientY}px)`
    // e.target.style.left = `${mousePosition.x}`;
    // e.target.style.top = `${mousePosition.top}`;

    log("handleDragEnd");
    // log(elementPosition);
    // log(mousePosition);
    // const transform = `translate3d(${mousePosition.x - elementPosition.x}px, ${
    //   mousePosition.y - elementPosition.y
    // }px, 0)`;
    // target.style.transform = transform;
    // log(`${transform}`);
    // log(target.style.transform);
    // log(elementPosition.x, elementPosition.y);
    // log(`${e.clientX} ${e.clientY}`);
    // log(`${e.target.offsetTop} ${e.target.offsetLeft}`);
    // e.target.style = `translateX(${
    //   e.target.offsetLeft + e.clientX
    // }) translateY(${e.target.offsetTop + e.clientY})`;
  }

  return (
    <div
      className="draggable-item"
      draggable={true}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{
        // display: "inline-block",
        cursor: "move",
        // transform: `translate3d(${mousePosition.x}, ${mousePosition.y}, 0)`,
        // transform: `translate3d(${x}px, ${y}px, 0)`,
        // transform: `translate3d(${mousePosition.x - 32}px, ${
        //   mousePosition.y - 32
        // }px, 0)`,
      }}
    >
      {children}
    </div>
  );
}

function TestDropzone5() {
  const Project = GenericProject({
    // onMouseDown: dragElement,
  });

  return (
    <div className="desktop">
      <Draggable>
        <Project
          name="The Catcher in the Rye"
          className={"catcher"}
          imgSrc="https://source.unsplash.com/900x900"
        ></Project>
      </Draggable>
    </div>
  );
}

export default TestDropzone5;
