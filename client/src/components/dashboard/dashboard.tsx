import { useEffect, useState } from 'react';
import MainView from '../mainView/mainView';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import Workspaces from '../workspaces/workspaces';
import Sidebar from '../sidebar/sidebar';
import { fetchUserData } from '../../apiClient';

interface WorkspacesProps {
  projects: object [],
  teams: object [],
  tasks: object []
}

function Dashboard () {

  const [activeWorkspace, setActiveWorkspace] = useState('Your')

  const [isWorkspaceShowing, setIsWorkspaceShowing] = useState(false);
  const [currUserData, setCurrUserData] = useState({} as WorkspacesProps);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user-token')) navigate('/');
    handleLoad();
  }, [])

  function toggleWorkspace () {
    setIsWorkspaceShowing(!isWorkspaceShowing);
  }

  function changeActiveWorkspace (newWS : string) {
    setActiveWorkspace(newWS);
  }

  async function handleLoad () {
    const userID = JSON.parse(sessionStorage.getItem('user-data') || '')._id;
    try {
      const userData = await fetchUserData(userID);
      setCurrUserData(userData);
    } catch (err) {
      window.location.reload();
      alert('Something went wrong!');
    }
  }

  return (
    <div className="dashboard-container" onClick={async () => await handleLoad()}>
      <Sidebar toggleWorkspace={toggleWorkspace}></Sidebar>
      {currUserData && isWorkspaceShowing && 
      <Workspaces userData={currUserData} changeActiveWorkspace={changeActiveWorkspace}></Workspaces>
      }
      {currUserData && 
        <MainView title={activeWorkspace} numOfTasks={currUserData.tasks?.length}></MainView>
      }
    </div>
  );
}

export default Dashboard;