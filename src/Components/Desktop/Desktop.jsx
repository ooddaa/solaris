import React, { useState, useCallback } from "react";
import Draggable from "./Draggable";

function Desktop({ children, myStyle, draggable = true }) {
  /* https://reactjs.org/docs/hooks-reference.html#useref */
  /* https://codesandbox.io/s/l7m0v5x4v9?file=/src/index.js */
  const [dimensions, setDimensions] = useState(null);
  const measureRef = useCallback((node) => {
    if (node !== null) {
      setDimensions(node.getBoundingClientRect());
    }
  }, []);
  /**
   * @todo hash child's props as key to draggable
   */
  return (
    <div
      className="desktop"
      ref={measureRef}
      style={{
        overflow: "hidden",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
        // border: "2px yellow solid",
        ...myStyle,
      }}
    >
      {children.map(({ Component, props = {} }, idx) => {
        let Child = draggable ? Draggable(Component) : Component;
        return (
          <Child
            key={(props && props.key) || idx}
            {...{ dimensions, ...props }}
          />
        );
      })}
    </div>
  );
}

export default Desktop;
