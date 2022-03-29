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
  return function Project({ className, name, imgSrc }) {
    // log(props.classnames[0]);
    return (
      <div
        className={`project ${className || ""}`}
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
function norm(num) {
  return num < 0 ? num : ` ${num}`;
}
const log = (...args) => console.log(...args);

function TestDropzone() {
  function dragElement({ target }) {
    // log("dragElement");
    // log(target);
    var left = 0,
      top = 0,
      posX = 0,
      posY = 0;
    if (document.getElementById(target.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(target.id + "header").onmousedown = dragMouseDown;
    } else {
      // log("no header");
      // otherwise, move the DIV from anywhere inside the DIV:
      document.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      console.log("dragMouseDown");
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      posX = e.clientX;
      posY = e.clientY;
      // console.log(posX, posY);
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      // document.onmousemove = elementDrag(target);
    }

    // function elementDrag(target) {
    //   return
    function elementDrag(e) {
      // console.log("elementDrag");
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      top = posY - e.clientY; // how much cursor moved over Y
      left = posX - e.clientX; // how much cursor moved over X
      posY = e.clientY;
      posX = e.clientX;

      // log(`${norm(top)} ${norm(left)} ${posY}   ${posX}`);
      const transform = `translateY(${target.offsetTop - top}px) translateX(${
        target.offsetLeft - left
      }px)`;
      target.style.transform = transform;
      log(target.offsetTop);
      log(target.offsetLeft);
      // log(`${transform} <`);
      // log(`${target.style.transform}`);
    }
    // }

    function closeDragElement() {
      // stop moving when mouse button is released:
      console.log("closeDragElement");
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  const Project = GenericProject({
    onMouseDown: dragElement,
  });

  return (
    <div className="desktop">
      <Project
        name="The Catcher in the Rye"
        className={"catcher"}
        imgSrc="https://source.unsplash.com/900x900"
      ></Project>

      <Project
        name="To Kill a Mockingbird"
        imgSrc="https://source.unsplash.com/901x901"
      ></Project>

      <Project
        name="The Great Gatsby"
        className={"gatsby"}
        imgSrc="https://source.unsplash.com/902x902"
      ></Project>
    </div>
  );
}

export default TestDropzone;
