import { useState } from 'react';
import WsCard from '../wsCard/wsCard';
import './userCollection.css';

interface UserCollectionProps {
  isProjects: boolean,
  collectionProjects: object [],
  // changeActiveWS: () => void
}

function UserCollection ({isProjects, collectionProjects}: UserCollectionProps) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapseCollection () {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="usercollection-container">
      <div className="usercollection-label-container">
        <h3 className="usercollection-label" onClick={() => collapseCollection()}>Your {isProjects ? "Projects" : "Teams"}</h3>
      </div>
      {!isCollapsed && 
        <div className="usercollection-projects-container">
          {collectionProjects && collectionProjects.length > 0 &&
            collectionProjects.map(el => <WsCard></WsCard>)
          }
        </div>
      }
    </div>
  );
}

export default UserCollection;
