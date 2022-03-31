import { useState, useCallback } from "react";
import FileCard from "./Components/FileCard.jsx";
import Desktop from "../../../../Components/Desktop/Desktop.jsx";
import GenericProject from "../../../../Components/Desktop/GenericProject";

function AppWorkspaceBody({ acceptedFiles = [] }) {
  const children = acceptedFiles.map((file) => {
    return {
      Component: FileCard,
      props: {
        key: `${file.path}${file.lastModified}`,
        file,
      },
    };
  });

  // const [myStyle, setMyStyle] = useState(null);
  // const [dimensions, setDimensions] = useState(null);
  // const myDimensions = useCallback((node) => {
  //   if (node !== null) {
  //     let dimensions = node.getBoundingClientRect();
  //     setDimensions(dimensions);
  //     setMyStyle({
  //       top: `${dimensions.top + 10}px`,
  //       left: `${dimensions.left + 10}px`,
  //       width: `${dimensions.width - 10}px`,
  //       height: `${dimensions.height - 10}px`,
  //       border: "2px green solid",
  //     });
  //   }
  // }, []);
  const myStyle = {
    position: "relative",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="App-workspace-body"
      // ref={myDimensions}
    >
      <Desktop myStyle={myStyle} children={children} />
    </div>
  );
}

export default AppWorkspaceBody;
