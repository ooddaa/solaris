import FileCard from "./Components/FileCard.jsx";

function AppWorkspaceBody({ acceptedFiles }) {
  return <div className='App-workspace-body'>
    {
      acceptedFiles.length 
      ? acceptedFiles.map(file => {
        return (
          <FileCard key={`${file.path}${file.lastModified}`} file={file}/>
        )
      })
      : <p>This is Workspace body</p>
    }
    {/* {
      acceptedFiles.length 
      ? acceptedFiles[0] && acceptedFiles[0].name
      : <p>This is Workspace body</p>
    } */}
    
  </div>;
}

export default AppWorkspaceBody;
