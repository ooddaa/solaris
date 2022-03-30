import React from "react";

const log = (...args) => console.log(...args);

class Draggable extends React.Component {
  constructor({ props: { desktopBoundary }, children }) {
    // constructor({
    //   props: { x, y, width, height, mouseX, mouseY, top, left, desktopBoundary },
    // }) {
    super();

    // log(props);
    this.state = {
      // className,
      dragging: false,
      // x: props.x,
      // y: props.y,
      // width: props.width,
      // height,
      // mouseX,
      // mouseY,
      // top,
      // left,
      desktopBoundary,
    };

    // log(this.state.desktopBoundary());
  }

  handleDragStart = (e) => {
    const {
      x, // left
      y, // top
      width,
      height,
    } = e.target.getBoundingClientRect();
    log("start", e.target.getBoundingClientRect());
    let mouseX = e.clientX,
      mouseY = e.clientY;

    e.target.style.position = "absolute";
    this.setState({
      dragging: true,
      x,
      y,
      width,
      height,
      mouseX,
      mouseY,
    });
  };

  handleDrag = (e) => {
    /* don't let users drag elements out of viewport */
    if (e.clientX <= 0 || e.clientY <= 0) return false;
    // if (
    //   e.clientX <= this.state.desktopBoundary.x ||
    //   e.clientY <= this.state.desktopBoundary.y
    // )
    // return false;

    /* begin dragging,  */
    this.setState({
      dragging: true,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  handleDragEnd = (e) => {
    /* don't let users drag elements out of viewport */
    if (e.clientX <= 0 || e.clientY <= 0) return false;

    const {
      x, // left
      y, // top
      width,
      height,
    } = e.target.getBoundingClientRect();
    log("end", e.target.getBoundingClientRect());

    let { top, left } = e.target.style;
    // top = e.clientY;
    // left = e.clientX;
    top = e.clientY - height;
    left = e.clientX - width;
    // top = e.clientY - height / 2;
    // left = e.clientX - width / 2;

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
    const { top, left } = this.state;
    const { children, ...props } = this.props;

    return (
      <div
        draggable={true}
        className="draggable-item"
        style={{
          cursor: "move",
          top,
          left,
          display: "inline-block",
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
