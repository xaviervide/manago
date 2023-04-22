import UserCollection from '../userCollection/userCollection';
import UserTasks from '../userTasks/userTasks';
import './workspaces.css';

function Workspaces () {
  return (
    <div className="workspaces-container">
      <UserTasks></UserTasks>
      <UserCollection isProjects={true}></UserCollection>
      <UserCollection isProjects={false}></UserCollection>
    </div>
  );
}

export default Workspaces;