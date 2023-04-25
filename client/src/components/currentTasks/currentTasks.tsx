import { Task } from '../../interfaces/Task';
import TaskCard from '../taskCard/taskCard';
import './currentTasks.css';

interface CurrentTasksProps {
  tasks: Task []
}

function CurrentTasks ({tasks} : CurrentTasksProps) {
  return (
    <div className="currenttasks-container">
      {tasks && tasks.length > 0 && 
        tasks.map(el => <TaskCard cardContent={el}></TaskCard>)
      }
    </div>
  );
}

export default CurrentTasks;