import WorkspaceShelf from '../workspaceShelf/workspaceShelf';
import './workspace.css';

interface workspaceProps {
  userProjects: String [],
  userTeams: String [],
  changeActiveWorkspace: (newWs : string) => void
}

function Workspace ({userProjects, userTeams, changeActiveWorkspace} : workspaceProps) {
  return (
    <div className="workspace-container">
      <WorkspaceShelf changeActiveWorkspace={changeActiveWorkspace} wsName={"Projects"} projectArray={[{projectName: "2048", projectDescription: "A little mobile game"}, {projectName: "Netflix Clone", projectDescription: "Pretty self explanatory"}, {projectName: "CW Practices", projectDescription: "CW Practice Exercices"}]}></WorkspaceShelf>
      <WorkspaceShelf changeActiveWorkspace={changeActiveWorkspace} wsName={"Teams"} projectArray={[{projectName: "Codeworks", projectDescription: "CW London Bootcamp"}, {projectName: "Spotify", projectDescription: "I'm not working here (yet)"}]}></WorkspaceShelf>
    </div>
  );
}

export default Workspace;
