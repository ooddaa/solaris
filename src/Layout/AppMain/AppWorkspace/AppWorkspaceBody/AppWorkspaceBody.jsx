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
  const data = [
    {
      Component: GenericProject(),
      props: {
        name: "Lolotron",
        className: "lol",
        imgsrc: "https://source.unsplash.com/900x900",
        wtf: "lol_wtf",
        key: "a1",
      },
    },
  ];
  const myStyle = {
    top: "50px",
    left: "150px",
    width: "750px",
    height: "500px",
    border: "2px green solid",
  };
  return (
    <div className="App-workspace-body">
      <Desktop myStyle={myStyle} children={children} />
      {/* <Desktop children={data} /> */}
    </div>
  );
}
// function AppWorkspaceBody({ acceptedFiles }) {
//   return <div className='App-workspace-body'>
//     {
//       acceptedFiles.length
//       ? acceptedFiles.map(file => {
//         return (
//           <FileCard key={`${file.path}${file.lastModified}`} file={file}/>
//         )
//       })
//       : <p>This is Workspace body</p>
//     }
//     {/* {
//       acceptedFiles.length
//       ? acceptedFiles[0] && acceptedFiles[0].name
//       : <p>This is Workspace body</p>
//     } */}

//   </div>;
// }

export default AppWorkspaceBody;
