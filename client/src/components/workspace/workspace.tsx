import WorkspaceShelf from '../workspaceShelf/workspaceShelf';
import './workspace.css';

function Workspace () {
  return (
    <div className="workspace-container">
      <WorkspaceShelf></WorkspaceShelf>
    </div>
  );
}

export default Workspace;
