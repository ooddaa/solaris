import React from "react";

const log = (...args) => console.log(...args);

const FileCard = React.forwardRef(({ file, ...rest }, ref) => {
  const { path, lastModified, lastModifiedDate, name, size, type } = file;

  return (
    <div className="file-card" ref={ref} {...rest}>
      <div className="file-card-props">
        <div className="file-card-props__head">
          <div className="file-card-props__head__info">
            <ul>
              <li>{name}</li>
              <li>{lastModifiedDate?.toLocaleString() ?? "someDate"}</li>
              <li>Owner</li>
              <li>{size}</li>
              <li>{type}</li>
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
});

export default FileCard;
