import React, { useState, useCallback } from "react";
import Draggable from "./Draggable";
const log = (...args) => console.log(...args);

function Desktop({ children, myStyle, draggable = true }) {
  const [dimensions, setDimensions] = useState(null);

  /* I will keep zindex without useState, not to re-render children */
  let zindex = { top: 1 };
  function incrementTopZindex() {
    zindex.top += 1;
  }

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
        border: "2px yellow solid",
        ...myStyle,
      }}
    >
      {children.map(({ Component, props = {} }, idx) => {
        let Child = draggable ? Draggable(Component) : Component;
        return (
          <Child
            key={(props && props.key) || idx}
            {...{ dimensions, ...props }}
            zindex={zindex}
            incrementzindex={incrementTopZindex}
          />
        );
      })}
    </div>
  );
}

export default Desktop;
