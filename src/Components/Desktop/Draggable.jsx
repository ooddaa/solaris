import React from "react";
const log = (...args) => console.log(...args);

function Draggable(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseDown: false, // dragging: boolean
        mx: 0,
        my: 0,
        initX: 0,
        initY: 0,
        x: 0,
        y: 0,
      };

      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    componentDidMount() {
      document.addEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = (e) => {
      if (this.state.mouseDown) {
        this.setState({
          /* take the last known x,y position and increment
          by how much cursor has travelled */
          x: this.state.initX + (e.pageX - this.state.mx),
          y: this.state.initY + (e.pageY - this.state.my),
        });
      }
    };

    handleMouseDown(e) {
      this.setState({
        /* record mouse position at dragStart */
        mx: e.pageX,
        my: e.pageY,
        /* x and y are delta values to move element by*/
        initX: this.state.x,
        initY: this.state.y,
        mouseDown: true,
      });
    }

    handleMouseUp = (e) => {
      this.setState({ mouseDown: false });
    };

    render() {
      const myStyle = {
        transform: `translate(${this.state.x}px, ${this.state.y}px)`,
      };
      return (
        <WrappedComponent
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          style={myStyle}
          {...this.props}
        />
      );
    }
  };
}

export default Draggable;
