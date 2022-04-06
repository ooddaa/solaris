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

  const fileCards = [
    {
      Component: FileCard,
      props: {
        key: `a1`,
        file: {},
      },
    },
    {
      Component: FileCard,
      props: {
        key: `a2`,
        file: {},
      },
    },
  ];

  const myStyle = {
    position: "relative",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  };

  return (
    <div className="App-workspace-body">
      {/* <Desktop myStyle={myStyle} children={children} /> */}
      <Desktop myStyle={myStyle} draggable={true} children={fileCards} />
    </div>
  );
}

export default AppWorkspaceBody;
