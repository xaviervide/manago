import { useState } from 'react';
import { Team } from '../../interfaces/Team';
import './userTeams.css';
import { createTeam } from '../../apiClient';
import WsCard from '../wsCard/wsCard';

interface UserTeamsProps {
  teamArray: Team[],
  changeActiveWorkspace: (wsName: string, _id: string) => void,
  toggleLoading: () => void
}

function UserTeams({teamArray, changeActiveWorkspace, toggleLoading} : UserTeamsProps) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapseCollection() {
    setIsCollapsed(!isCollapsed);
  }

  async function handleAddTeam() {
    const newTeamName = prompt('Please enter the name of the new project');
    const newTeamDescription = prompt('Please provide a short description for your project');

    const newProject: Team = {
      title: newTeamName,
      description: newTeamDescription
    }

    if (newTeamName?.trim().length && newTeamDescription?.trim().length) {
      toggleLoading();
      await createTeam(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newProject);
    }
  }

  return (
    <div className="userteams-container">
      <div className="userteams-label-container">
        <h3 className="userteams-label" onClick={() => collapseCollection()}>Your Teams</h3>
        <div className="usertasks-add-btn"
          onClick={() => handleAddTeam()}
        >+</div>
      </div>
      {!isCollapsed &&
        <div className="userteams-projects-container">
          {teamArray && teamArray.length > 0 &&
            teamArray.map(el => <WsCard cardContent={el} changeActiveWorkspace={changeActiveWorkspace}></WsCard>)
          }
        </div>
      }
    </div>
  );
}

export default UserTeams;
