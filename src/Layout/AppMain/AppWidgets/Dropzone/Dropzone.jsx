import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropzone({ handleDropzoneFiles }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)

    /* send File[] up to AppMain */
    handleDropzoneFiles(acceptedFiles);
  }, [handleDropzoneFiles])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='dropzone'{...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Dropzone;