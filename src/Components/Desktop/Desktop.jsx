import React from "react";
import Draggable from "./Draggable";

function Desktop({ children }) {
  /**
   * @todo hash child's props as key to draggable
   */
  return (
    <>
      {children.map(({ Component, props = {} }, idx) => {
        return (
          <Draggable key={props && (props.key || idx)}>
            <Component {...props} />
          </Draggable>
        );
      })}
    </>
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
