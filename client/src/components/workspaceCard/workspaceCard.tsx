import './workspaceCard.css';

interface ProjectCardInfo {
  projectName: string,
  projectDescription: string,
  changeActiveWorkspace: (newWs : string) => void
}

function WorkspaceCard ({projectName, projectDescription, changeActiveWorkspace} : ProjectCardInfo) {
  return (
    <div className="workspacecard-container">
      <div className="project-container" onClick={() => changeActiveWorkspace(projectName)}>
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
