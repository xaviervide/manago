import { Project } from '../../interfaces/Project';
import { Team } from '../../interfaces/Team';
import UserCollection from '../userCollection/userCollection';
import UserProjects from '../userProjects/userProjects';
import UserTasks from '../userTasks/userTasks';
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
      <UserTasks tasks={userData.tasks} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></UserTasks>
      <UserProjects projectArray={userData.projects} changeActiveWorkspace={changeActiveWorkspace}></UserProjects>
      <UserCollection isProjects={false} collectionProjects={userData.teams} changeActiveWorkspace={changeActiveWorkspace}></UserCollection>
    </div>
  );
}

export default Workspaces;