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
      {/* AppNav on the left will display a list of files that 
      represent their status - edited, submitted, discarded */}
      <AppNav acceptedFiles={acceptedFiles}/>

      {/* Main workspace where files are enhanced by the user */}
      <AppWorkspace acceptedFiles={acceptedFiles}/>

      {/* Dropzone on the right upper corner is where files get dropped */}
      <AppWidgets handleDropzoneFiles={handleDropzoneFiles}/>
    </div>
  );
}

export default AppMain;
