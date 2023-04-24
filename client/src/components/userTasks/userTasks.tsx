import './userTasks.css';


interface UserTasksProps {
  tasks: object [],
  changeActiveWorkspace: (newWS: string) => void
}

function UserTasks ({tasks, changeActiveWorkspace}: UserTasksProps) {

  function handleAddTask () {
    const newTaskName = prompt('Please enter the name of the new task');
    const newTaskDescription = prompt('Provide a description for the new task');
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
