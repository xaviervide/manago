import './userTasks.css';
import { createTask } from '../../apiClient';
import { Task } from '../../interfaces/Task';

interface UserTasksProps {
  changeActiveWorkspace: (newWS: string, _id:string) => void
}

function UserTasks ({changeActiveWorkspace}: UserTasksProps) {
  return (
    <div className="usertasks-container" onClick={() => changeActiveWorkspace('Your', '')}>
      <div className="usertasks-info-container">
        <h3 className="usertasks-label">Your Tasks</h3>
      </div>
    </div>
  );
}

export default UserTasks;
