import TaskCard from '../taskCard/taskCard';
import './currentTasks.css';

interface CurrentTasksProps {
  tasks: {taskName: string, taskDescription: string, totalTaskTime: string, taskID: string} []
}

function CurrentTasks ({tasks} : CurrentTasksProps) {
  return (
    <div className="currenttasks-container">
      {tasks && tasks.length > 0 && 
        tasks.map(el => <TaskCard taskID={el.taskID} taskName={el.taskName} taskDescription={el.taskDescription} totalTaskTime={el.totalTaskTime}></TaskCard>)
      }
    </div>
  );
}

export default CurrentTasks;