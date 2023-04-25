import { Project } from '../../interfaces/Project';
import { Team } from '../../interfaces/Team';
import './wsCard.css';

interface WSCardProps {
  cardContent: Project | Team,
  changeActiveWorkspace: (wsName: string, _id: string) => void
}

function WsCard ({cardContent, changeActiveWorkspace} : WSCardProps) {
  return (
    <div className="wscard-container">
      <div className="wscard" onClick={() => changeActiveWorkspace(cardContent.title as string, cardContent._id as string)}>
        <div className="wscard-info">
          <h4>{cardContent.title}</h4>
          <p>{cardContent.description}</p>
        </div>
        <p>{"\u2B9E"}</p>
      </div>
    </div>
  );
}

export default WsCard;
