import { useState } from 'react';
import './taskCard.css';
import useTimer from 'easytimer-react-hook';

function TaskCard () {

  const [timer, isTargetAchieved] = useTimer();
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function startStop () {
    if (isRunning) {
      setIsRunning(!isRunning);
      timer.stop();
    } else {
      setIsRunning(!isRunning);
      timer.start()
    }
  }

  function pauseResume () {
    if (isRunning) {
      if (isPaused) {
        setIsPaused(!isPaused);
        timer.start();
      } else {
        setIsPaused(!isPaused);
        timer.pause();
      }
    }
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
          className={`timer-button ${isRunning ? "stop-state" : "start-state"}`}
          onClick={() => startStop()}
        >{isRunning ? "FINISH" : "START"}</button>
        <p>{timer.getTimeValues().toString(['minutes', 'seconds'])}</p>
        <button 
        className={`opts-button ${isPaused ? "resume-state" : "pause-state"}`}
        onClick={() => pauseResume()}
        >{isPaused ? "RESUME" : "PAUSE"}</button>
      </div>
    </div>
  );
}

export default TaskCard;
