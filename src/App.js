import { Fragment } from "react";
import MangoUI from "./Components/MangoUI";
import Desktop from "./Components/Desktop/Desktop.jsx";
import GenericProject from "./Components/Desktop/GenericProject";

const mockData = [
  {
    name: "Lolotron",
    className: "lol",
    imgsrc: "https://source.unsplash.com/900x900",
    wtf: "lol_wtf",
    key: "a1",
  },
  {
    name: "Terminator",
    className: "terminator",
    imgsrc: "https://source.unsplash.com/901x901",
    wtf: "terminator_wtf",
    key: "a2",
  },
];

const projects = mockData.map((props) => {
  return { Component: GenericProject(), props };
});

function App() {
  return (
    <div className="App">
      <MangoUI />

      {/* <Desktop children={projects} /> */}
    </div>
  );
}

export default App;
