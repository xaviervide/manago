import WorkspaceCard from '../workspaceCard/workspaceCard';
import './workspaceShelf.css';


interface wsName {
  wsName: string
}

function WorkspaceShelf ( {wsName : wsName } : wsName) {
  return (
    <div className="workspaceshelf-container">
      <div className="shelf-title-container">
        <h2>Your {wsName}</h2>
      </div>
      <div className="workspace-projects-container">
        <WorkspaceCard projectName='Test #1' projectDescription='Some really long boilerplate description'></WorkspaceCard>
        <WorkspaceCard projectName='Test #2' projectDescription='Some boilerplate description'></WorkspaceCard>
        <WorkspaceCard projectName='Test #3' projectDescription='Some boilerplate description'></WorkspaceCard>
      </div>
    </div>
  );
}

export default WorkspaceShelf;
