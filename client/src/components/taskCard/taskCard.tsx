import { useState } from 'react';
import './taskCard.css';
import Timer from 'easytimer.js';

function TaskCard () {

  const [isTracking, setIsTracking] = useState(false);
  const [currTime, setCurrTime] = useState('00:00');

  const timerInstance = new Timer();

  function startStop () {
    setIsTracking(!isTracking);
    timerInstance.start();
    setInterval(() => {
      console.log(timerInstance.getTimeValues().toString(['minutes', 'seconds']))
      setCurrTime(timerInstance.getTimeValues().toString(['minutes', 'seconds']))
    }, 1000)
  }

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
        <button 
          className={`timer-button ${isTracking ? "stop-state" : "start-state"}`}
          onClick={() => startStop()}
        >{isTracking ? "STOP" : "START"}</button>
        <p>{currTime}</p>
        <button className="task-opts-button">&#8942;</button>
      </div>
    </div>
  );
}

export default TaskCard;
