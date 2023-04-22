import './wsLabel.css';

interface WsLabelProps {
  wsName: string,
  numOfMembers: number,
  totalHours: number
}

function WsLabel () {
  return (
    <div className="wslabel-container">
      <div className="wslabel-info">
        <h2>Current Tasks</h2>
        <p>Members: 7 | Total Hours: 132</p>
      </div>
    </div>
  );
}

export default WsLabel;
