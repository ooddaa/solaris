import React, { useState, useEffect, useRef } from "react";
import Draggable from "./Draggable";

function Desktop({ children }) {
  /* https://reactjs.org/docs/hooks-reference.html#useref */
  const DesktopRef = useRef(null);

  // const [desktopBoundary, setDesktopBoundary] = useState(
  //   document.getElementsByClassName("desktop")[0].getBoundingClientRect()
  // );
  // const desktop = document.getElementsByClassName("desktop")[0];
  // setDesktopBoundary(desktop.getBoundingClientRect());
  // useEffect(() => {
  //   /* get Desktop's measurements */
  //   const desktop = document.getElementsByClassName("desktop")[0];
  //   setDesktopBoundary(desktop.getBoundingClientRect());
  // }, [desktopBoundary]);
  // useEffect(() => {
  //   console.log(DesktopRef.current.getBoundingClientRect());
  // });
  function getRef() {
    return DesktopRef;
  }
  /**
   * @todo hash child's props as key to draggable
   */
  return (
    <div className="desktop" ref={DesktopRef}>
      {children.map(({ Component, props = {} }, idx) => {
        return (
          <Draggable
            key={props && (props.key || idx)}
            props={{
              ...props,
              // lol: "lol",
              // desktopBoundary: DesktopRef.current.getBoundingClientRect(),
              // desktopBoundary: DesktopRef.current,
              // desktopBoundary: getRef,
            }}
            // {...props}
          >
            <Component {...props} />
          </Draggable>
        );
      })}
    </div>
  );
}

export default Desktop;

/* document 
https://www.w3schools.com/jsref/dom_obj_document.asp
*/
/* 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

*/
/* 
mousedown == onmousedown == onMouseDown 
mouseup == onmouseup == onMouseUp
mousemove == onmousemove == onMouseMove
click == onclick == onClick

// touchpad screens only
touchstart == onTouchStart
touchend == onTouchEnd
touchmove == onTouchMove
*/

/* e.target: {
  __reactFiber$: FiberNode,
  __reactProps$: Object,
  autofocus: boolean,
  childElementCount: number,
  childNodes: NodeList[],
  children: HMTLCollection[],
  classList: DOMTokenList[],
  className: string,
  draggable: boolean,
} */

/* 
.getBoundingClientRect()
const exampleDOMRect = {bottom: 341
height: 80
left: 355.25
right: 435.25
top: 261
width: 80
x: 355.25
y: 261}
*/
