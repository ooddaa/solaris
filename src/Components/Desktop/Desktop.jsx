import React, { useState, useEffect, useRef } from "react";
import Draggable from "./Draggable";

function Desktop({ children /* , props: { myStyle = {} } = {}  */ }) {
  /* https://reactjs.org/docs/hooks-reference.html#useref */
  // const DesktopRef = useRef(null);

  /**
   * @todo hash child's props as key to draggable
   */
  return (
    <div className="desktop" /* style={myStyle} */>
      {children.map(({ Component, props = {} }, idx) => {
        const DraggableComponent = Draggable(Component);
        return (
          <DraggableComponent key={props && (props.key || idx)} {...props} />
        );
      })}
    </div>
  );
}

export default Desktop;
