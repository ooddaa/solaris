const showcase = document.querySelector(".showcase");
const projects = document.querySelectorAll(".project");
const drop = document.querySelector(".drop");

let start,
  offsetY,
  offsetX,
  targetRect,
  target,
  dropped = false,
  expanded = false;

/* ok-ish */
const stopped = () => {
  start = false;
  if (target) {
    showcase.classList.remove("is-dragging");
    target.classList.remove("is-selected");
    drop.classList.remove("is-active");
    drop.classList.remove("is-ready");
  }
  if (dropped) {
    showcase.classList.add("is-preview");
    target.classList.add("is-expanded");
    drop.classList.add("is-dropped");
    drop.textContent = "CLOSE";
    expanded = true;
  } else {
    drop.classList.remove("is-dropped");
    showcase.classList.remove("is-preview");
    target.classList.remove("is-expanded");
    drop.textContent = "DROP HERE";
    expanded = false;
  }
};

/* ok-ish */
const started = (e, type) => {
  start = true; // ok
  target = e.target; // ok
  if (type === "touch") {
    console.log(e.touches[0]);
    offsetY = target.offsetWidth / 2 + target.offsetTop;
    offsetX = target.offsetWidth / 2 + target.offsetLeft;
  } else {
    offsetY = e.offsetY + target.offsetTop;
    offsetX = e.offsetX + target.offsetLeft;
  }
  /* https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp */
  /* DOMRect {x: 355.25, y: 261, width: 80, height: 80, top: 261, …} */
  targetRect = target.getBoundingClientRect();

  target.classList.add("is-selected");
  showcase.classList.add("is-dragging");
};

/* ok */
projects.forEach((project) => {
  /* https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event */
  project.addEventListener("mousedown", (e) => {
    started(e, "mouse");
  });
  /* https://www.w3schools.com/jsref/event_touchstart.asp */
  project.addEventListener("touchstart", (e) => {
    started(e, "touch");
  });
});

const docUp = () => {
  if (!expanded && target) {
    stopped();
  }
};

/* https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event */
document.addEventListener("mouseup", () => {
  docUp();
});
document.addEventListener("touchend", () => {
  docUp();
});

const docMove = (e, type) => {
  let clientX = 0,
    clientY = 0;

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
    start &&
    !expanded
  ) {
    drop.classList.add("is-ready");
    dropped = true;
  } else {
    drop.classList.remove("is-ready");
    dropped = false;
  }

  if (start && !expanded) {
    target.style.transform = `translateY(${clientY - offsetY}px) translateX(${
      clientX - offsetX
    }px)`;
  }
};

document.addEventListener("mousemove", (e) => {
  docMove(e, "mouse");
});
document.addEventListener("touchmove", (e) => {
  docMove(e, "touch");
});

drop.addEventListener("click", () => {
  if (expanded) {
    dropped = false;
    target.style.transform = "none";
    stopped();
  }
});
