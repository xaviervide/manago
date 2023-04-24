import UserCollection from '../userCollection/userCollection';
import UserTasks from '../userTasks/userTasks';
import './workspaces.css';

interface WorkspacesProps {
  projects: object [],
  teams: object [],
  tasks: object []
}


function Workspaces (userData : any) {
  return (
    <div className="workspaces-container">
      <UserTasks tasks={userData.tasks}></UserTasks>
      <UserCollection isProjects={true} collectionProjects={userData.projects}></UserCollection>
      <UserCollection isProjects={false} collectionProjects={userData.teams}></UserCollection>
    </div>
  );
}

export default Workspaces;