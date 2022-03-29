import FileCard from "./Components/FileCard.jsx";
import Desktop from "../../../../Components/Desktop/Desktop.jsx";

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

  return (
    <div className="App-workspace-body">
      <Desktop children={children} />
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
