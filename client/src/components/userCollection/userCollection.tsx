import { useState } from 'react';
import WsCard from '../wsCard/wsCard';
import './userCollection.css';

interface UserCollectionProps {
  isProjects: boolean,
  collectionProjects: {projectName: string, projectDescription: string}[],
  changeActiveWorkspace: (newWS: string) => void
}

function UserCollection ({isProjects, collectionProjects, changeActiveWorkspace}: UserCollectionProps) {

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
            collectionProjects.map(el => <WsCard projectName={el.projectName} projectDescription={el.projectDescription} changeActiveWorkspace={changeActiveWorkspace}></WsCard>)
          }
        </div>
      }
    </div>
  );
}

export default UserCollection;
