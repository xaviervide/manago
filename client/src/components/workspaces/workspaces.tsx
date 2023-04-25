import { Project } from '../../interfaces/Project';
import { Team } from '../../interfaces/Team';
import UserProjects from '../userProjects/userProjects';
import UserTasks from '../userTasks/userTasks';
import UserTeams from '../userTeams/userTeams';
import './workspaces.css';

interface WorkspacesProps {
  userData: {
    projects: Project[],
    teams: Team[]
    tasks: object [],
  }
  changeActiveWorkspace: (newWS : string, _id: string) => void,
  toggleLoading: () => void
}


function Workspaces ({userData, changeActiveWorkspace, toggleLoading} : WorkspacesProps) {
  return (
    <div className="workspaces-container">
      <UserTasks changeActiveWorkspace={changeActiveWorkspace}></UserTasks>
      <UserProjects projectArray={userData.projects} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></UserProjects>
      <UserTeams teamArray={userData.teams} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></UserTeams>
    </div>
  );
}

export default Workspaces;