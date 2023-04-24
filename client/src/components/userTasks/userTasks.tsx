import './userTasks.css';
import { createUserTask } from '../../apiClient';

interface UserTasksProps {
  tasks: object [],
  changeActiveWorkspace: (newWS: string) => void
}

function UserTasks ({tasks, changeActiveWorkspace}: UserTasksProps) {

  async function handleAddTask () {
    const newTaskName = prompt('Please enter the name of the new task');
    const newTaskDescription = prompt('Provide a description for the new task');
    const newTask = {taskName: newTaskName || '', taskDescription: newTaskDescription || ''};
    if(newTaskName?.trim() && newTaskDescription?.trim())
      await createUserTask(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newTask);
  }

  return (
    <div className="usertasks-container" onClick={() => changeActiveWorkspace('Your')}>
      <div className="usertasks-info-container">
        <h3 className="usertasks-label">Your Tasks</h3>
        <p className="usertasks-info">Tasks: {tasks? tasks.length : 0} | 
        Time: 12h10m</p>
      </div>
      <div className="usertasks-btn-container">
        <div className="usertasks-add-btn"
        onClick={() => handleAddTask()}
        >+</div>
      </div>
    </div>
  );
}

export default UserTasks;
