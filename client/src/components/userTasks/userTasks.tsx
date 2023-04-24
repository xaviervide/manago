import './userTasks.css';


interface UserTasksProps {
  tasks: object [],
  changeActiveWorkspace: (newWS: string) => void
}

function UserTasks ({tasks, changeActiveWorkspace}: UserTasksProps) {


  return (
    <div className="usertasks-container" onClick={() => changeActiveWorkspace('Your')}>
      <div className="usertasks-info-container">
        <h3 className="usertasks-label">Your Tasks</h3>
        <p className="usertasks-info">Tasks: {tasks? tasks.length : 0} | 
        Time: 12h10m</p>
      </div>
      <div className="usertasks-btn-container">
        <div className="usertasks-add-btn">+</div>
      </div>
    </div>
  );
}

export default UserTasks;
