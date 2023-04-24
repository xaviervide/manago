import TaskCard from '../taskCard/taskCard';
import './currentTasks.css';

interface CurrentTasksProps {
  tasks: {taskName: string, taskDescription: string, totalTaskTime: string} []
}

function CurrentTasks ({tasks} : CurrentTasksProps) {
  return (
    <div className="currenttasks-container">
      {tasks && tasks.length > 0 && 
        tasks.map(el => <TaskCard taskName={el.taskName} taskDescription={el.taskDescription} totalTaskTime={el.totalTaskTime}></TaskCard>)
      }
    </div>
  );
}

export default CurrentTasks;