import WsCard from '../wsCard/wsCard';
import './userCollection.css';

interface UserCollectionProps {
  isProjects: boolean,
  // collectionProjects: object [],
  // changeActiveWS: () => void
}

function UserCollection ({isProjects} : UserCollectionProps) {
  return (
    <div className="usercollection-container">
      <div className="usercollection-label-container">
        <h3 className="usercollection-label">Your {isProjects ? "Projects" : "Teams"}</h3>
      </div>
      <div className="usercollection-projects-container">
      <WsCard></WsCard>
      <WsCard></WsCard>
      <WsCard></WsCard>
      </div>
    </div>
  );
}

export default UserCollection;
