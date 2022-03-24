import AppNav from './AppNav/AppNav'
import AppWorkspace from './AppWorkspace/AppWorkspace';
import AppWidgets from './AppWidgets/AppWidgets';
import { useState } from 'react';

/**
 * App widgets may supply events/data that is handled by user in AppWorkspace 
 * (mainly in AppWorkspaceBody). 
 * 
 * Therefore we need to lift state up.
 * 
 * Dropzone is the first case. User drops a file and user adds metadata to it in
 * AppWorkspaceBody.
 * 
 */
function AppMain() {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  function handleDropzoneFiles(files) {
    setAcceptedFiles(files);
  }
  return (
    <div className='App-main'>
      <AppNav />
      <AppWorkspace acceptedFiles={acceptedFiles}/>
      <AppWidgets handleDropzoneFiles={handleDropzoneFiles}/>
    </div>
  );
}

export default AppMain;
