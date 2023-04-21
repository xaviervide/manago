import './workspaceCard.css';

interface ProjectCardInfo {
  projectName: string,
  projectDescription: string,
}

function WorkspaceCard ({projectName, projectDescription} : ProjectCardInfo) {
  return (
    <div className="workspacecard-container">
      <div className="project-container">
          <div>
            <h4>{projectName}</h4>
            <p>{projectDescription}</p>
          </div>
          <p>{"\u2B9E"}</p>
        </div>
    </div>
  );
}

export default WorkspaceCard;
