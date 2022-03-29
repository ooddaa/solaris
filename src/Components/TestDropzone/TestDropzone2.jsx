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

function Drop({ classNames, onClick, children }) {
  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
}

function TestDropzone() {
  const [config, setConfig] = useState({
    start: null,
    offsetY: null,
    offsetX: null,
    targetRect: null,
    target: null,
    dropped: false,
    expanded: false,
  });

  /**
   * Dynamically add classes to showcase
   */
  const [showcaseClassNames, setShowcaseClassNames] = useState(["showcase"]);

  function addShowcaseClassName_(className) {
    setShowcaseClassNames([...showcaseClassNames, className]);
  }
  const addShowcaseClassName = useCallback(addShowcaseClassName_, [
    setShowcaseClassNames,
    showcaseClassNames,
  ]);

  function removeShowcaseClassName_(className) {
    const newClassNames = showcaseClassNames.filter(
      (name) => name !== className
    );
    setShowcaseClassNames(newClassNames);
  }
  const removeShowcaseClassName = useCallback(removeShowcaseClassName_, [
    setShowcaseClassNames,
    showcaseClassNames,
  ]);
  /* ____________________________________________ */

  /**
   * Dynamically add classes to drop
   */
  const [dropClassNames, setDropClassNames] = useState(["drop"]);

  function addDropClassName_(className) {
    setDropClassNames([...dropClassNames, className]);
  }

  const addDropClassName = useCallback(addDropClassName_, [
    setDropClassNames,
    dropClassNames,
  ]);

  function removeDropClassName_(className) {
    const newClassNames = dropClassNames.filter((name) => name !== className);
    setDropClassNames(newClassNames);
  }
  const removeDropClassName = useCallback(removeDropClassName_, [
    setDropClassNames,
    dropClassNames,
  ]);
  /* ____________________________________________ */

  const started = (e, type) => {
    e.preventDefault();
    setConfig({
      ...config,
      started: true,
      target: e.target,
    });
    let offsetY, offsetX;
    let offsetTop = e.target ? e.target.offsetTop : 0;
    let offsetLeft = e.target ? e.target.offsetLeft : 0;
    // console.log("e.target.offsetTop: ", e.target.offsetTop);
    // console.log("e.target.offsetLeft: ", e.target.offsetLeft);
    // let offsetTop = config.target ? config.target.offsetTop : 0;
    // let offsetLeft = config.target ? config.target.offsetLeft : 0;
    // console.log("config.target.offsetTop: ", config.target.offsetTop);
    // console.log("config.target.offsetLeft: ", config.target.offsetLeft);
    if (type === "touch") {
      console.log(e.touches[0]);
      offsetY = e.target.offsetWidth / 2 + offsetTop;
      offsetX = e.target.offsetWidth / 2 + offsetLeft;
      // offsetY = config.target.offsetWidth / 2 + offsetTop;
      // offsetX = config.target.offsetWidth / 2 + offsetLeft;
    } else {
      /* https://www.w3schools.com/jsref/event_offsetx.asp */
      offsetY = e.offsetY + offsetTop;
      offsetX = e.offsetX + offsetLeft;
    }

    setConfig({
      ...config,
      offsetY,
      offsetX,
      // targetRect: config.target ? config.target.getBoundingClientRect() : null,
    });

    e.target && e.target.classList.add("is-selected");
    // config.target && config.target.classList.add("is-selected");

    // config.showcase.classList.add("is-dragging");
    addShowcaseClassName("is-dragging");
    // console.log(document.querySelector(".showcase"));
  };
  /* ____________________________________________ */

  const _stopped = () => {
    setConfig({
      ...config,
      started: false,
    });

    if (config.target) {
      // showcase.classList.remove("is-dragging");
      removeShowcaseClassName("is-dragging");

      config.target.classList.remove("is-selected");

      // drop.classList.remove("is-active");
      // drop.classList.remove("is-ready");
      removeDropClassName("is-active");
      removeDropClassName("is-ready");
    }
    if (config.dropped) {
      // showcase.classList.add("is-preview");
      addShowcaseClassName("is-preview");
      config.target.classList.add("is-expanded");

      // drop.classList.add("is-dropped");
      addDropClassName("is-dropped");
      // drop.textContent = "CLOSE";

      // expanded = true;
      setConfig({
        ...config,
        expanded: true,
      });
    } else {
      // drop.classList.remove("is-dropped");
      removeDropClassName("is-dropped");
      // showcase.classList.remove("is-preview");
      removeShowcaseClassName("is-preview");

      config.target.classList.remove("is-expanded");
      // drop.textContent = "DROP HERE";

      // expanded = false;
      setConfig({
        ...config,
        expanded: false,
      });
    }
  };
  const stopped = useCallback(_stopped, [
    config,
    addDropClassName,
    addShowcaseClassName,
    removeDropClassName,
    removeShowcaseClassName,
  ]);
  /* ____________________________________________ */

  const _docUp = () => {
    if (!config.expanded && config.target) {
      stopped();
    }
  };
  const docUp = useCallback(_docUp, [config, stopped]);

  const _docMove = (e, type) => {
    e.preventDefault();
    /* https://www.w3schools.com/jsref/event_clientx.asp */
    let clientX = 0,
      clientY = 0;
    const drop = document.querySelector(".drop");
    if (type === "touch") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    if (
      clientY > drop.offsetTop &&
      clientY < drop.offsetTop + drop.offsetHeight &&
      clientX > drop.offsetLeft &&
      clientX < drop.offsetLeft + drop.offsetWidth &&
      config.start &&
      !config.expanded
    ) {
      // config.drop.classList.add("is-ready");
      addDropClassName("is-ready");
      // dropped = true;
      setConfig({
        ...config,
        dropped: true,
      });
    } else {
      // drop.classList.remove("is-ready");
      removeDropClassName("is-ready");
      // dropped = false;
      setConfig({
        ...config,
        dropped: false,
      });
    }

    if (config.start && !config.expanded) {
      /* this is what actually 'moves' element */
      let newTransform = `translateY(${
        clientY - config.offsetY
      }px) translateX(${clientX - config.offsetX}px)`;

      setConfig({
        ...config,
        target: {
          ...config.target,
          style: {
            ...config.target.style,
            transform: newTransform,
          },
        },
      });
    }
  };
  const docMove = useCallback(() => {
    console.log("is moving");
  }, []);
  // const docMove = useCallback(_docMove, [
  //   config,
  //   addDropClassName,
  //   removeDropClassName,
  // ]);

  function handleMouseDown(e) {
    e.preventDefault();
    // console.log("onMouseDown", e);
    console.log("onMouseDown");
    // addDropClassName("lol");
    // console.log(document.querySelector(".drop"));
    started(e, "mouse");
  }
  function handleMouseUp(e) {
    e.preventDefault();
    // console.log("onMouseUp", e);
    console.log("onMouseUp");
    docUp();
  }
  function handleMouseMove(e) {
    e.preventDefault();
    // console.log("onMouseMove", e);
    console.log("onMouseMove");
    docMove();
  }
  function handleClick() {
    console.log("handleClick");
    if (config.expanded) {
      console.log("config.expanded: true");
      setConfig({
        ...config,
        dropped: false,
        target: {
          ...config.target,
          style: {
            ...config.target.style,
            transform: "none",
          },
        },
      });
      // config.dropped = false;
      // config.target.style.transform = "none";
      console.log("handleClick() -> stopped()");
      stopped();
    }
  }

  const Project = GenericProject({
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    handleMouseMove: handleMouseMove,
    // onTouchStart: handleTouchStart,
  });

  /* set event listeners on document? */
  useEffect(() => {
    document.addEventListener("mouseup", () => {
      docUp();
    });
    document.addEventListener("touchend", () => {
      docUp();
    });
    document.addEventListener("mousemove", (e) => {
      docMove(e, "mouse");
    });
    document.addEventListener("touchmove", (e) => {
      docMove(e, "touch");
    });
    return function cleanup() {
      /* https://www.w3schools.com/jsref/met_document_removeeventlistener.asp */
      document.removeEventListener("mouseup", () => {});
      document.removeEventListener("touchend", () => {});
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("touchmove", () => {});
    };
  }, [docUp, docMove]);

  return (
    <div className={showcaseClassNames.join(" ")}>
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

      <Drop classNames={dropClassNames.join(" ")} onClick={handleClick}>
        DROP HERE
      </Drop>
    </div>
  );
}

export default TestDropzone;
