import React from 'react';
// import * as fs from 'fs';

function SolarisFile(file, fileMetaData) {
    return { file, meta: fileMetaData }
}

function FileCard({ file }) {
    // function parseFile(file) {
        const { path, lastModified, lastModifiedDate, name, size, type } = file;
        console.log(file)
    console.log(path, lastModified)
    // }
  return (
      <>
    <div className='file-card'>
        <div className="file-card__path">{path}</div>
        <div className="file-card__last-modified-date">{lastModifiedDate.toLocaleString()}</div>
        <div className="file-card__size">{size}</div>
        <div className="file-card__type">{type}</div>
        <div className="file-car__action-btn">
            <button> click me </button>
        </div>
    </div>
    </>
  )
}

export default FileCard