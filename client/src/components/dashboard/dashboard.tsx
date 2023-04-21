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
  const [activeWorkspace, setActiveWorkspace] = useState('Xavi')

  const [isWorkspaceShowing, setIsWorkspaceShowing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user-token')) navigate('/');
  }, [])

  function toggleWorkspace () {
    setIsWorkspaceShowing(!isWorkspaceShowing);
  }

  function changeActiveWorkspace (newWS : string) {
    setActiveWorkspace(newWS);
  }

  return (
    <div className="dashboard-container">
      <Sidebar toggleWorkspace={toggleWorkspace}></Sidebar>
      {isWorkspaceShowing && 
        <Workspace userProjects={userProjects} userTeams={userTeams} changeActiveWorkspace={changeActiveWorkspace}></Workspace>
      }
      <MainView title={activeWorkspace}></MainView>
    </div>
  );
}

export default Dashboard;