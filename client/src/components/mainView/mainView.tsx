import CurrentTasks from '../currentTasks/currentTasks';
import WsLabel from '../wsLabel/wsLabel';
import './mainView.css';

interface MainViewProps {
  title: string,
  numOfTasks: number
}

function MainView ({title, numOfTasks} : MainViewProps) {
  return (
    <div className="mainview-container">
      <WsLabel wsName={title} numOfTasks={numOfTasks}></WsLabel>
      <CurrentTasks></CurrentTasks>
    </div>
  );
}

export default MainView;
