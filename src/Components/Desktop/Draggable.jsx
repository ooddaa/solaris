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
        dimensions: props.dimensions,
      };
      // log(this.state.dimensions);
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseUpOutOfBounds = this.handleMouseUpOutOfBounds.bind(this);
    }

    componentDidMount() {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUpOutOfBounds);
    }

    handleMouseMove = (e) => {
      if (this.state.mouseDown) {
        function getBoundedDistance(val, crd, dimensions) {
          /* in px - by how much element stays visible when user tries to hide it behind boundary */
          // let PADDING = 0;
          let PADDING = 10;
          if (dimensions !== null) {
            if (crd === "x") {
              if (val < dimensions.left + PADDING)
                return dimensions.left + PADDING;
              if (val > dimensions.right - PADDING)
                return dimensions.right - PADDING;
            } else {
              if (val < dimensions.top + PADDING)
                return dimensions.top + PADDING;
              if (val > dimensions.bottom - PADDING)
                return dimensions.bottom - PADDING;
            }
            return val;
          }
          return val;
        }
        // log(this.state.dimensions);
        /**
         * take the last known x,y position and increment
         * by how much cursor has travelled
         *
         * Do not allow element to leave Desktop - bound it.
         */
        this.setState({
          x:
            this.state.initX +
            (getBoundedDistance(e.pageX, "x", this.state.dimensions) -
              this.state.mx),
          y:
            this.state.initY +
            (getBoundedDistance(e.pageY, "y", this.state.dimensions) -
              this.state.my),
        });
      }
    };

    handleMouseDown = (e) => {
      this.setState({
        /* record mouse position at dragStart */
        mx: e.pageX,
        my: e.pageY,
        /* x and y are delta values to move element by*/
        initX: this.state.x,
        initY: this.state.y,
        mouseDown: true,
      });
    };

    handleMouseUp = (e) => {
      this.setState({ mouseDown: false });
    };

    /**
     * When user drags element and cursor ends up outside of Desktop
     * we need to unlink cursor movement from element's positioning.
     */
    handleMouseUpOutOfBounds = (e) => {
      if (this.state.mouseDown) this.setState({ mouseDown: false });
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
