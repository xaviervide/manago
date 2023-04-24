import './wsLabel.css';

interface WsLabelProps {
  wsName: string,
  numOfTasks: number
}

function WsLabel ({wsName, numOfTasks} : WsLabelProps) {
  return (
    <div className="wslabel-container">
      <div className="wslabel-info">
        <h2>{wsName === 'Your' ? wsName : wsName + "'s"} Tasks</h2>
        <p>{wsName === 'Your' ? `Total tasks: ${numOfTasks}`: 'Members: '} | Total Hours: 132</p>
      </div>
    </div>
  );
}

export default WsLabel;
