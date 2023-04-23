import { useState } from 'react';
import './taskCard.css';
import useTimer from 'easytimer-react-hook';

function TaskCard () {

  const [timer, isTargetAchieved] = useTimer();

  function startStop () {
    if (!timer.isRunning()) timer.start()
    else timer.stop();
  }

  function pauseResume () {
    if (timer.isRunning()) {
      if (!timer.isPaused()) timer.pause();
      else timer.start();
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
          className={`timer-button ${timer.isRunning() ? "stop-state" : "start-state"}`}
          onClick={() => startStop()}
        >{timer.isRunning() ? "FINISH" : "START"}</button>
        <p>{timer.getTimeValues().toString(['minutes', 'seconds'])}</p>
        <button 
        className={`opts-button ${timer.isPaused() ? "resume-state" : "pause-state"}`}
        onClick={() => pauseResume()}
        >{timer.isPaused() ? "RESUME" : "PAUSE"}</button>
      </div>
    </div>
  );
}

export default TaskCard;
