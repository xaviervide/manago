import { useEffect, useState } from 'react';
import MainView from '../mainView/mainView';
import Sidebar from '../sidebar/sidebar';
import Workspace from '../workspace/workspace';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard () {

  const [userProjects, setUserProjects] = useState([]);
  const [userTeams, setUserTeams] = useState([]);
  const [userSessions, setUserSessions] = useState([]);

  const [isWorkspaceShowing, setIsWorkspaceShowing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user-token')) navigate('/');
  }, [])

  function toggleWorkspace () {
    setIsWorkspaceShowing(!isWorkspaceShowing);
  }

  return (
    <div className="dashboard-container">
      <Sidebar toggleWorkspace={toggleWorkspace}></Sidebar>
      {isWorkspaceShowing && 
        <Workspace userProjects={userProjects} userTeams={userTeams}></Workspace>
      }
      <MainView></MainView>
    </div>
  );
}

export default Dashboard;