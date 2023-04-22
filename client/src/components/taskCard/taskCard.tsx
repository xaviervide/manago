import './taskCard.css';

function TaskCard () {
  return (
    <div className="taskcard-container">
      <div className="taskcard-info-container">
        <div className="taskcard-info">
          <h3>Project Name</h3>
          <p>Some project description or data</p>
        </div>
        <div className="taskcard-members-container">
          <div>X</div>
          <div>L</div>
          <div>A</div>
          <div>+3</div>
        </div>
      </div>
      <div className="taskcard-timer-container">
        <button className="timer-button">START</button>
        <button className="task-opts-button">&#8942;</button>
        <p>3:02</p>
      </div>
    </div>
  );
}

export default TaskCard;
