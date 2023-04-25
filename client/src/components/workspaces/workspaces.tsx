import UserCollection from '../userCollection/userCollection';
import UserTasks from '../userTasks/userTasks';
import './workspaces.css';

interface WorkspacesProps {
  userData: {
    projects: {projectName: string, projectDescription: string, _id: string}[],
    teams: {projectName: string, projectDescription: string, _id: string}[]
    tasks: object [],
  }
  changeActiveWorkspace: (newWS : string, _id: string) => void,
  toggleLoading: () => void
}


function Workspaces ({userData, changeActiveWorkspace, toggleLoading} : WorkspacesProps) {
  return (
    <div className="workspaces-container">
      <UserTasks tasks={userData.tasks} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></UserTasks>
      <UserCollection isProjects={true} collectionProjects={userData.projects} changeActiveWorkspace={changeActiveWorkspace}></UserCollection>
      <UserCollection isProjects={false} collectionProjects={userData.teams} changeActiveWorkspace={changeActiveWorkspace}></UserCollection>
    </div>
  );
}

export default Workspaces;