import UserTasks from '../userTasks/userTasks';
import './workspaces.css';

function Workspaces () {
  return (
    <div className="workspaces-container">
      <UserTasks></UserTasks>
    </div>
  );
}

export default Workspaces;