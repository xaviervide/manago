import { Task } from '../../interfaces/Task';
import CurrentTasks from '../currentTasks/currentTasks';
import WsLabel from '../wsLabel/wsLabel';
import './mainView.css';

interface MainViewProps {
  title: string,
  tasks: Task [],
  toggleLoading: () => void,
  currWSID: string
}

function MainView ({title, tasks, toggleLoading, currWSID} : MainViewProps) {
  return (
    <div className="mainview-container">
      <WsLabel wsName={title} toggleLoading={toggleLoading} currWSID={currWSID}></WsLabel>
      <CurrentTasks tasks={tasks}></CurrentTasks>
    </div>
  );
}

export default MainView;
