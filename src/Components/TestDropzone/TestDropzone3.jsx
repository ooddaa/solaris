import React, { useState, useEffect, useCallback } from "react";

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

function GenericProject({
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onTouchStart,
  onTouchMove,
}) {
  return function Project({ name, imgSrc }) {
    return (
      <div
        className="project"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <img className="project-img" src={imgSrc} alt="" />
        <span className="project-name">{name}</span>
      </div>
    );
  };
}

function TestDropzone() {
  const [positions, setPositions] = useState({
    posX: 0,
    posY: 0,
    mouseX: 0, // https://www.w3schools.com/jsref/event_clientx.asp
    mouseY: 0,
  });

  function handleMouseDown(e) {
    e.preventDefault();
    /* take mouse coordinates */
    console.log(`handleMouseDown: ${e.clientX} ${e.clientY}`);
    setPositions({
      ...positions,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });

    document.onmousemove = elementDrag1(e.target);
    document.onmouseup = handleMouseUp(e);
  }

  function elementDrag1(element) {
    return function inner(e) {
      e.preventDefault();

      let posX = positions.mouseX - e.clientX;
      let posY = positions.mouseY - e.clientY;

      console.log(`elementDrag: ${posX} ${posY}`);
      setPositions({
        posX,
        posY,
        mouseX: e.clientX,
        mouseY: e.clientY,
      });

      element.style.top = e.offsetTop - posY + "px";
      element.style.left = e.offsetLeft - posX + "px";
    };
  }

  function handleMouseUp(e) {
    e.preventDefault();
    /* make Project element stay where it is style: translate... */
    console.log("handleMouseUp");
    document.onmousemove = null;
  }

  const Project = GenericProject({
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    // handleMouseMove: handleMouseMove,
    // onTouchStart: handleTouchStart,
  });

  return (
    <div className="draggable-space">
      <Project
        name="The Catcher in the Rye"
        imgSrc="https://source.unsplash.com/900x900"
      ></Project>

      <Project
        name="To Kill a Mockingbird"
        imgSrc="https://source.unsplash.com/901x901"
      ></Project>

      <Project
        name="The Great Gatsby"
        imgSrc="https://source.unsplash.com/902x902"
      ></Project>
    </div>
  );
}

export default TestDropzone;
