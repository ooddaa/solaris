export default function GenericProject({ ...genericProps } = {}) {
  return function Project({ className, name, imgsrc, ...rest }) {
    return (
      <div className={`project ${className || ""}`} {...genericProps} {...rest}>
        <img className="project-img" src={imgsrc} alt="" />
        <span className="project-name">{name}</span>
      </div>
    );
  };
}
