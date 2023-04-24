import { useState } from 'react';
import WsCard from '../wsCard/wsCard';
import './userCollection.css';
import { Project } from '../../interfaces/Project';
import { createProject, createTeam } from '../../apiClient';
import { Team } from '../../interfaces/Team';

interface UserCollectionProps {
  isProjects: boolean,
  collectionProjects: {projectName: string, projectDescription: string, _id: string}[],
  changeActiveWorkspace: (newWS: string, _id: string) => void
}

function UserCollection ({isProjects, collectionProjects, changeActiveWorkspace}: UserCollectionProps) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapseCollection () {
    setIsCollapsed(!isCollapsed);
  }

  async function handleAddProject () {
    const newElementName = prompt(`Plese enter the name of the new ${isProjects ? 'project' : 'team'}`);
    const newElementDescription = prompt('Please provide a short description');
    if (isProjects) {
      const newProject : Project = {
        projectName: newElementName,
        projectDescription: newElementDescription
      }
      if (newElementName?.trim().length && newElementDescription?.trim().length) {
        await createProject(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newProject);
      }
    } else {
      const newTeam : Team = {
        teamName: newElementName,
        teamDescription: newElementDescription
      }
      if (newElementName?.trim().length && newElementDescription?.trim().length) {
        await createTeam(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newTeam);
      }
    }
  }

  return (
    <div className="usercollection-container">
      <div className="usercollection-label-container">
        <h3 className="usercollection-label" onClick={() => collapseCollection()}>Your {isProjects ? "Projects" : "Teams"}</h3>
        <div className="usertasks-add-btn"
        onClick={() => handleAddProject()}
        >+</div>
      </div>
      {!isCollapsed && 
        <div className="usercollection-projects-container">
          {collectionProjects && collectionProjects.length > 0 &&
            collectionProjects.map(el => <WsCard _id={el._id} projectName={el.projectName} projectDescription={el.projectDescription} changeActiveWorkspace={changeActiveWorkspace}></WsCard>)
          }
        </div>
      }
    </div>
  );
}

export default UserCollection;
