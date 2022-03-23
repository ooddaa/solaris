
function AppWorkspaceBody({ acceptedFiles }) {
  return <div className='App-workspace-body'>
    {
      acceptedFiles.length 
      ? acceptedFiles[0] && acceptedFiles[0].name
      : <p>This is Workspace body</p>
    }
    
  </div>;
}

export default AppWorkspaceBody;
