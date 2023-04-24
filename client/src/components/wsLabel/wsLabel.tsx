import './wsLabel.css';

interface WsLabelProps {
  wsName: string,
}

function WsLabel ({wsName} : WsLabelProps) {
  return (
    <div className="wslabel-container">
      <div className="wslabel-info">
        <h2>{wsName === 'Your' ? wsName : wsName + "'s"} Tasks</h2>
        <p>Members: 7 | Total Hours: 132</p>
      </div>
    </div>
  );
}

export default WsLabel;
