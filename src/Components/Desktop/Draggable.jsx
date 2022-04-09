import React from "react";
const log = (...args) => console.log(...args);

function Draggable(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      let { incrementzindex, zindex, ...rest } = this.props;
      this.state = {
        /* mouse positions */
        mouseDown: false,
        mx: 0,
        my: 0,
        initX: 0,
        initY: 0,
        x: 0,
        y: 0,
        /* parent Desktop's dimensions */
        desktopDimensions: props.dimensions,
        padding: props.padding ?? 25,
        /* WrappedComponent */
        wrappedComponent: null, // set by componentDidMount
        rest,
      };

      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseUpOutOfBounds = this.handleMouseUpOutOfBounds.bind(this);
    }

    componentDidMount() {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUpOutOfBounds);

      this.setState({
        ...this.state,
        wrappedComponent: this.myRef.current,
      });
    }

    handleMouseMove = (e) => {
      if (this.state.mouseDown) {
        let x = this.state.initX + e.pageX - this.state.mx;
        let y = this.state.initY + e.pageY - this.state.my;

        this.setState({ x, y });
      }
    };

    handleMouseDown = (e) => {
      /* use current top zindex to style the dragged component 
      as hovering over everything else and staying on top of the heap
      when released */
      this.myRef.current.style.zIndex = this.props?.zindex?.top ?? 0;
      this.myRef.current.style.boxShadow = "5px 5px 5px grey";

      /* let Desktop know of new top zindex */
      this.props.incrementzindex();

      this.setState({
        /* record mouse position at dragStart relative to document */
        /* https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX */
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
      this.myRef.current.style.boxShadow = "none";
    };

    /**
     * When user drags element and cursor ends up outside of Desktop
     * we need to unlink cursor movement from element's positioning.
     */
    handleMouseUpOutOfBounds = (e) => {
      if (this.state.mouseDown) this.setState({ mouseDown: false });
    };

    handleMouseLeave = (e) => {
      if (this.state.mouseDown === false) this.handleMouseUpOutOfBounds();
    };

    normalizeX(x) {
      if (this.myRef.current == null) return x;
      let { offsetLeft, offsetWidth } = this.myRef.current;

      let left = (offsetLeft + offsetWidth - this.state.padding) * -1;
      if (x <= left) return left;

      let right = offsetLeft + offsetWidth - this.state.padding;
      if (x >= right) return right;

      return x;
    }

    normalizeY(y) {
      if (this.myRef.current == null) return y;
      let { offsetTop, offsetHeight } = this.myRef.current;
      let { height } = this.state.desktopDimensions;

      let up = (offsetTop + offsetHeight - this.state.padding) * -1;
      if (y <= up) return up;

      let down = height - offsetTop - this.state.padding;
      if (y >= down) return down;

      return y;
    }

    render() {
      const myStyle = {
        transform: `translate(${this.normalizeX(
          this.state.x
        )}px, ${this.normalizeY(this.state.y)}px)`,
      };

      return (
        <WrappedComponent
          ref={this.myRef}
          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          style={myStyle}
          {...{
            ...this.state.rest,
          }}
        />
      );
    }
  };
}

export default Draggable;
