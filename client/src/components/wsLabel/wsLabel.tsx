import { createTask } from '../../apiClient';
import { Task } from '../../interfaces/Task';
import './wsLabel.css';

interface WsLabelProps {
  wsName: string,
  toggleLoading: () => void,
  currWSID: string
}

function WsLabel ({wsName, toggleLoading, currWSID} : WsLabelProps) {

  async function handleAddTask () {
    const newTaskName = prompt('Please enter the name of the new task');
    const newTaskDescription = prompt('Provide a description for the new task');
    const newTask : Task = {taskName: newTaskName, taskDescription: newTaskDescription}

    if(newTaskName?.trim() && newTaskDescription?.trim()) {
      toggleLoading();
      if (currWSID === JSON.parse(sessionStorage.getItem('user-data') || '')._id) {
        createTask(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newTask);
      } else {
        createTask(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newTask);
      }
    }
  }

  return (
    <div className="wslabel-container">
      <div className="wslabel-info">
        <h2>{wsName === 'Your' ? wsName : wsName + "'s"} Tasks</h2>
        <button onClick={() => handleAddTask()}>ADD TASK</button>
      </div>
    </div>
  );
}

export default WsLabel;
