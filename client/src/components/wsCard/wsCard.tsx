import './wsCard.css';

interface wsCardProps {
  projectName: string,
  projectDescription: string,
  changeActiveWorkspace: (newWS: string) => void
}

function WsCard ({projectName, projectDescription, changeActiveWorkspace}: wsCardProps) {
  return (
    <div className="wscard-container">
      <div className="wscard" onClick={() => changeActiveWorkspace(projectName)}>
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
