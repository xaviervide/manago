import './wsCard.css';

interface wsCardProps {
  projectName: string,
  projectDescription: string,
  _id: string,
  changeActiveWorkspace: (newWS: string, _id: string) => void
}

function WsCard ({projectName, projectDescription, _id, changeActiveWorkspace}: wsCardProps) {
  return (
    <div className="wscard-container">
      <div className="wscard" onClick={() => changeActiveWorkspace(projectName, _id)}>
        <div className="wscard-info">
          <h4>{projectName}</h4>
          <p>{projectDescription}</p>
        </div>
        <p>{"\u2B9E"}</p>
      </div>
    </div>
  );
}

export default WsCard;
