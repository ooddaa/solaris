import React from "react";

const log = (...args) => console.log(...args);

class Draggable extends React.Component {
  constructor({
    // className = ["draggable-item"],
    x,
    y,
    width,
    height,
    mouseX,
    mouseY,
    top,
    left,
  }) {
    super();
    this.state = {
      // className,
      dragging: false,
      x,
      y,
      width,
      height,
      mouseX,
      mouseY,
      top,
      left,
    };
  }

  handleDragStart = (e) => {
    // log(e);
    // log(e.target.getBoundingClientRect());
    const {
      x, // left
      y, // top
      width,
      height,
    } = e.target.getBoundingClientRect();
    let mouseX = e.clientX,
      mouseY = e.clientY;

    e.target.style.position = "absolute";
    this.setState({
      // className: [...this.state.className, "is-absolute"],
      dragging: true,
      x,
      y,
      width,
      height,
      mouseX,
      mouseY,
    });
    // log(this.state.className);
  };

  handleDrag = (e) => {
    // log("handleDrag");
    // log(e);
    if (e.clientX <= 0 || e.clientY <= 0) return false;
    this.setState({
      dragging: true,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  handleDragEnd = (e) => {
    // log("handleDragEnd");
    if (e.clientX <= 0 || e.clientY <= 0) return false;
    const {
      x, // left
      y, // top
      width,
      height,
    } = e.target.getBoundingClientRect();
    // log(e.target.getBoundingClientRect());
    let { top, left } = e.target.style;
    // top = e.clientY;
    top = e.clientY - height / 2;
    // left = e.clientX;
    left = e.clientX - width / 2;
    log(top, left);

    this.setState({
      dragging: false,
      mouseX: e.clientX,
      mouseY: e.clientY,
      x,
      y,
      top,
      left,
    });
  };

  render() {
    const {
      // className,
      dragging,
      x,
      y,
      width,
      height,
      mouseX,
      mouseY,
      top,
      left,
    } = this.state;
    const { children, ...props } = this.props;

    // const transform = dragging
    //   ? `translateX(${mouseX - x - width / 2}px) translateY(${
    //       mouseY - y - height / 2
    //     }px)`
    //   : //"none";
    //     //`translateX(${x}px) translateY(${y}px)`;
    //     `translateX(0px) translateY(0px)`;

    // const transform = dragging
    //   ? `translateX(${mouseX - x - width / 2}px) translateY(${
    //       mouseY - y - height / 2
    //     }px)`
    //   : // : "none";
    //     `translateX(${x}px) translateY(${y}px)`;

    log(
      `${dragging} ${x} ${y} width: ${width} height: ${height} mouseX: ${mouseX} mouseY: ${mouseY} top: ${top} left: ${left}`
    );

    return (
      <div
        draggable={true}
        className="draggable-item" // "draggable-item"
        // className={className.join(" ")} // "draggable-item"
        style={{
          cursor: "move",
          top,
          left,
          display: "inline-block",
          border: "red 1px solid",
        }}
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Draggable;
