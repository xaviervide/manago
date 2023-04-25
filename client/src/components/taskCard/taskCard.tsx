import './taskCard.css';
import { useState } from 'react';
import useTimer from 'easytimer-react-hook';
import { updateUserTask } from '../../apiClient';
import CalculateTotalTime from '../../helpers/calculateTotalTime';
import { Task } from '../../interfaces/Task';

interface TaskCardProps {
  cardContent: Task
}


function TaskCard ({cardContent} : TaskCardProps) {

  const [timer, isTargetAchieved] = useTimer();
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  async function startStop () {
    if (isRunning) {
      if(window.confirm('Are you sure you want to end this timer?')) {
        const finalTimeTemp = CalculateTotalTime(cardContent.totalTaskTime as string, timer.getTimeValues().toString());
        setIsRunning(!isRunning);
        setIsPaused(false);
        timer.stop();
        await updateUserTask(cardContent._id as string, finalTimeTemp).then(() => console.log('added'));
      } else {
        setIsPaused(true);
        timer.pause();
      }
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

  function handleDelete () {
    timer.reset();
    timer.stop();
    setIsPaused(false);
    setIsRunning(false);
  }

  return (
    <div className="taskcard-container">
      <div className="taskcard-info-container">
        <div className="taskcard-info">
          <h3>{cardContent.taskName}</h3>
          <p>{cardContent.taskDescription}</p>
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
        {isPaused && 
        <button className="delete-button"
        onClick={() => handleDelete()}
        >&#128465;</button>
        }
      </div>
      <div className="taskcard-totaltime-container">
        <p>{cardContent.totalTaskTime?.split(':')[0] === '00' ?
        cardContent.totalTaskTime.slice(3, 8) :
        cardContent.totalTaskTime?.slice(0, 5)}</p>
      </div>
    </div>
  );
}

export default TaskCard;
