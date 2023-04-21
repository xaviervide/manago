import WorkspaceShelf from '../workspaceShelf/workspaceShelf';
import './workspace.css';

function Workspace () {
  return (
    <div className="workspace-container">
      <WorkspaceShelf wsName={"Workspace"}></WorkspaceShelf>
      <WorkspaceShelf wsName={"Teams"}></WorkspaceShelf>
    </div>
  );
}

export default Workspace;
