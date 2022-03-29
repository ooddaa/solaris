import { Fragment } from "react";
import MangoUI from "./Components/MangoUI";
import TestDropzone from "./Components/TestDropzone/TestDropzone.jsx";
import TestDropzone5 from "./Components/TestDropzone/TestDropzone5.jsx";

function App() {
  function handleMouseUp(e) {
    console.log("App: onMouseUp", e);
  }
  return (
    <div
      className="App"
      // onMouseUp={handleMouseUp}
    >
      {/* <MangoUI /> */}

      <TestDropzone />
    </div>
  );
}

export default App;
