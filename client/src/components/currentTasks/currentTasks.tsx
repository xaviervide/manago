import TaskCard from '../taskCard/taskCard';
import './currentTasks.css';

function CurrentTasks () {
  return (
    <div className="currenttasks-container">
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
    </div>
  );
}

export default CurrentTasks;