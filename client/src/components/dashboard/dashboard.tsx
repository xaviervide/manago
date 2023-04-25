import './dashboard.css';
import { fetchProjectData, fetchUserData } from '../../apiClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Workspaces from '../workspaces/workspaces';
import Sidebar from '../sidebar/sidebar';
import MainView from '../mainView/mainView';
import Loading from '../loading/loading';
import { Project } from '../../interfaces/Project';
import { Team } from '../../interfaces/Team';
import { Task } from '../../interfaces/Task';


interface WorkspacesProps {
  projects: Project[],
  teams: Team[], 
  tasks: Task []
}

function Dashboard () {

  const [activeWorkspace, setActiveWorkspace] = useState('Your')

  const [isWorkspaceShowing, setIsWorkspaceShowing] = useState(true);
  const [currUserData, setCurrUserData] = useState({} as WorkspacesProps);
  const [currWSData, setCurrWSData] = useState({} as Task[]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user-token')) navigate('/');
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    handleLoad();
  }, [])

  function toggleWorkspace () {
    setIsWorkspaceShowing(!isWorkspaceShowing);
  }

  async function changeActiveWorkspace (newWS : string, _id: string) {
    setActiveWorkspace(newWS);
    if(_id.trim().length !== 0) {
      await fetchProjectData(_id)
        .then(res => setCurrWSData(res));
    } 
  }

  const toggleLoading = async () => {
    setIsLoading(!isLoading);
    await handleLoad();
    setTimeout(() => {
      setIsLoading(false);
    }, 300)
  }

  async function handleLoad () {
    const userID = JSON.parse(sessionStorage.getItem('user-data') || '')._id;
    try {
      const userData = await fetchUserData(userID);
      setCurrUserData(userData);
      setCurrWSData(userData.tasks);
    } catch (err) {
      window.location.reload();
      alert('Something went wrong!');
    }
  }

  return (
    <div className="dashboard-container" onClick={async () => await handleLoad()}>
      {isLoading && <Loading></Loading>}
      <Sidebar toggleWorkspace={toggleWorkspace}></Sidebar>
      {currUserData && isWorkspaceShowing && 
      <Workspaces userData={currUserData} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></Workspaces>
      }
      {currUserData && 
        <MainView title={activeWorkspace} numOfTasks={currWSData.length} tasks={currWSData}></MainView>
      }
    </div>
  );
}

export default Dashboard;