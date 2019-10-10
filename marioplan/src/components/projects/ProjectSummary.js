import React from 'react'

const ProjectSummary = ({project}) => {
  var imgStyle = () => {
    return  {
      flex: 1,
      alignSelf: 'middle',
      width: '800',
      height: '600',
      overflow: 'auto',
      backgroundSize: 'cover'
    };
  };


  return (
    <div style = {imgStyle()} className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>{project.content}</p>
        {/* <p>{project.authorFirstName} {project.authorLastName}</p> */}
        
        <img  src={project.imageUrl} alt="image url may not be valid"></img>
        {/* <p>{project.imageUrl}</p> */}
        <p className="grey-text"></p>
      </div>
    </div>
  )
}

export default ProjectSummary
