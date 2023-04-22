import CurrentTasks from '../currentTasks/currentTasks';
import WsLabel from '../wsLabel/wsLabel';
import './mainView.css';

interface MainViewProps {
  title: string,
}

function MainView () {
  return (
    <div className="mainview-container">
      <WsLabel></WsLabel>
      <CurrentTasks></CurrentTasks>
    </div>
  );
}

export default MainView;
