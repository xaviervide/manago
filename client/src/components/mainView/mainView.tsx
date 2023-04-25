import { Task } from '../../interfaces/Task';
import CurrentTasks from '../currentTasks/currentTasks';
import WsLabel from '../wsLabel/wsLabel';
import './mainView.css';

interface MainViewProps {
  title: string,
  numOfTasks: number,
  tasks: Task []
}

function MainView ({title, numOfTasks, tasks} : MainViewProps) {
  return (
    <div className="mainview-container">
      <WsLabel wsName={title} numOfTasks={numOfTasks}></WsLabel>
      <CurrentTasks tasks={tasks}></CurrentTasks>
    </div>
  );
}

export default MainView;
