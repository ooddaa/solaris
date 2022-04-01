import React, { useState } from "react";
import Dropzone from "../../../AppWidgets/Dropzone/Dropzone";

// function SolarisFile(file, fileMetaData) {
//   return { file, meta: fileMetaData };
// }

function FileCard({ file, ...rest }) {
  const { path, lastModified, lastModifiedDate, name, size, type } = file;

  // let [fileMetaData, setFileMetaData] = useState({});

  // function addFileMetaData(prop) {}

  return (
    <div className="file-card" {...rest}>
      <div className="file-card-props">
        <div className="file-card-props__head">
          <div className="file-card-props__head__info">
            <ul>
              <li>File name</li>
              <li>Date</li>
              <li>Owner</li>
              <li>Size</li>
            </ul>
          </div>
          <div className="file-card-props__head__edit-btn">
            <img
              src={"/assets/img/file-card-props__head__edit-btn.png"}
              alt=""
            />
          </div>
        </div>

        <div className="file-card-props__body"></div>
      </div>

      <div className="file-card-description">
        <div className="file-card-description__head"></div>
        <div className="file-card-description__body"></div>
      </div>
      <div className="file-card-actions">
        <div className="file-card-actions__body"></div>
        <div className="file-card-actions__footer"></div>
      </div>
    </div>
  );
  // return (
  //   <div className="file-card" {...rest}>
  //     <div className="file-card__header">
  //       <div className="file-card__path">{path ?? "path"}</div>
  //       <div className="file-card__last-modified-date">
  //         {lastModifiedDate?.toLocaleString() ?? "date"}
  //       </div>
  //     </div>
  //     <div className="file-card__body">
  //       <div className="file-card__body__left-side">
  //         <div className="file-card__size">size: {size ?? 123}</div>
  //         <div className="file-card__type">type: {type ?? ".smth"}</div>
  //       </div>
  //       <div className="file-card__body__center-side">
  //         <textarea
  //           className="file-card-textarea"
  //           id="fileCardDescription"
  //           placeholder="Describe file here"
  //           // value={enitityForm.description}
  //           onChange={(e) => console.log(e.target.value)}
  //         ></textarea>
  //       </div>
  //       <div className="file-card__body__right-side">
  //         <div className="file-card-tags">
  //           <Dropzone
  //             classNames={["file-card-tags__dropzone"]}
  //             handleDrop={(e) => console.log(e)}
  //             // activeMsg={'dropping some tags'}
  //             passiveMsg={"drop tags here"}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="file-card__footer">
  //       <div className="file-car__action-btn">
  //         <button> click me </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default FileCard;
