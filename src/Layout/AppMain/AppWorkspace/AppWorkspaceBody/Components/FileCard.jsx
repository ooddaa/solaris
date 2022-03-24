import React, { useState } from 'react';
// import * as fs from 'fs';

function SolarisFile(file, fileMetaData) {
    return { file, meta: fileMetaData }
}

function FileCard({ file }) {

    const { path, lastModified, lastModifiedDate, name, size, type } = file;

    let [fileMetaData, setFileMetaData] = useState({});

    function addFileMetaData(prop) {

    }

  return (
      <>
    <div className='file-card'>
        <div className="file-card__header">
        <div className="file-card__path">{path}</div>
        <div className="file-card__last-modified-date">{lastModifiedDate.toLocaleString()}</div>
        </div>
        <div className="file-card__body">
            <div className="file-card__body__left-side">
                <div className="file-card__size">size: {size}</div>
                <div className="file-card__type">type: {type}</div>
            </div>
            <div className="file-card__body__right-side">
                
                        <textarea 
                            className="file-card-textarea" 
                            id="fileCardDescription" 
                            placeholder="Describe file here"
                            // value={enitityForm.description}
                            onChange={e => console.log(e.target.value)}
                        >
                        </textarea>
            </div>
        
        
        </div>
        <div className="file-card__footer">
        <div className="file-car__action-btn">
            <button> click me </button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default FileCard