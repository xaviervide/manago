import './userTasks.css';


interface UserTasksProps {
  tasks: object []
}

function UserTasks (tasks: UserTasksProps) {


  return (
    <div className="usertasks-container">
      <div className="usertasks-info-container">
        <h3 className="usertasks-label">Your Tasks</h3>
        <p className="usertasks-info">Tasks: {tasks.tasks? tasks.tasks.length : 0} | 
        Time: 12h10m</p>
      </div>
      <div className="usertasks-btn-container">
        <div className="usertasks-add-btn">+</div>
      </div>
    </div>
  );
}

export default UserTasks;
