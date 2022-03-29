import React from "react";

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

/**
 * Draggable
 * A wrapper component for
 * making elements draggable
 */
class Draggable extends React.Component {
  constructor() {
    super();
    this.state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      dragging: false,
    };
  }

  handleDragStart = (e) => {
    if (e.type === "dragstart") {
      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage
      e.dataTransfer.setDragImage(getDragImage(), 0, 0);
    }
    log("handleDragStart");
    this.setState({ dragging: true });
  };

  handleDrag = (e) => {
    log("handleDrag");
    if (e.clientX <= 0 || e.clientY <= 0) return false;
    this.setState(getPan(e));
  };

  handleDragEnd = (e) => {
    this.setState({ dragging: false });
  };

  render() {
    const { x, y, dragging } = this.state;
    const { children } = this.props;

    return (
      <div
        draggable="true"
        className="dib move"
        style={{
          display: "inline-block",
          cursor: "move",
          WebkitTransform: `translate3d(${x - 32}px, ${y - 32}px, 0)`,
          transform: `translate3d(${x - 32}px, ${y - 32}px, 0)`,
        }}
        // onTouchStart={this.handleDragStart}
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        // onTouchMove={this.handleDrag}
        // onTouchEnd={this.handleDragEnd}
        onDragEnd={this.handleDragEnd}
      >
        {children}
      </div>
    );
  }
}

/**
 * Utils
 */
function getPan(e) {
  if (e.type.includes("drag")) {
    return { x: e.clientX, y: e.clientY };
  }

  const touch = e.targetTouches[0];
  return { x: touch.clientX, y: touch.clientY };
}

function getDragImage() {
  let img = new Image();
  img.src = "fake.gif";
  return img;
}

function TestDropzone() {
  const Project = GenericProject({
    // onMouseDown: dragElement,
  });
  return (
    <Draggable>
      <Project
        name="The Great Gatsby"
        className={"gatsby"}
        imgSrc="https://source.unsplash.com/902x902"
      ></Project>
    </Draggable>
  );
}

export default TestDropzone;
