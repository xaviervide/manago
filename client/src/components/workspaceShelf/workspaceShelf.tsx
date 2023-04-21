import WorkspaceCard from '../workspaceCard/workspaceCard';
import './workspaceShelf.css';


interface workspaceShelfProps {
  wsName: string,
  projectArray: ProjectCardInfo []
}

interface ProjectCardInfo {
  projectName: string,
  projectDescription: string,
}

function WorkspaceShelf ( {wsName, projectArray} : workspaceShelfProps) {
  return (
    <div className="workspaceshelf-container">
      <div className="shelf-title-container">
        <h2>Your {wsName}</h2>
      </div>
      <div className="workspace-projects-container">
        {projectArray && projectArray.length > 0 && 
          projectArray.map(el => <WorkspaceCard projectName={el.projectName} projectDescription={el.projectDescription}></WorkspaceCard>)
        }
      </div>
    </div>
  );
}

export default WorkspaceShelf;
