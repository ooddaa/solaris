import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone({ handleDrop, classNames, activeMsg, passiveMsg }) {
  const onDrop = useCallback(acceptedFiles => {
    handleDrop(acceptedFiles);
  }, [handleDrop])
  const {
    getRootProps, 
    getInputProps, 
    isDragActive, 
    // acceptedFiles
  } = useDropzone({onDrop})

  // const files = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  return (
    <div className={classNames.join(" ")} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>{activeMsg}</p> :
          <p>{passiveMsg}</p>
      }
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </div>
  )
}

export default Dropzone;