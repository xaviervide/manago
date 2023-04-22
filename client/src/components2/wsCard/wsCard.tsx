import './wsCard.css';

interface wsCardProps {
  prjectName: string,
  projectDescription: string,
}

function WsCard () {
  return (
    <div className="wscard-container">
      <div className="wscard">
        <div className="wscard-info">
          <h4>Project Name</h4>
          <p>Project Description</p>
        </div>
        <p>{"\u2B9E"}</p>
      </div>
    </div>
  );
}

export default WsCard;
