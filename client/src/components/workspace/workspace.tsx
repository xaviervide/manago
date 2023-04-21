import WorkspaceShelf from '../workspaceShelf/workspaceShelf';
import './workspace.css';

interface workspaceProps {
  userProjects: String [],
  userTeams: String []
}

function Workspace ({userProjects, userTeams} : workspaceProps) {
  return (
    <div className="workspace-container">
      <WorkspaceShelf wsName={"Workspace"} projectArray={[{projectName: "Testing #1", projectDescription: "The project description"}, {projectName: "Testing #2", projectDescription: "The project description"}]}></WorkspaceShelf>
      <WorkspaceShelf wsName={"Teams"} projectArray={[]}></WorkspaceShelf>
    </div>
  );
}

export default Workspace;
