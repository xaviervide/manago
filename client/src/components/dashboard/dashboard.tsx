import './dashboard.css';
import { fetchProjectData, fetchUserData } from '../../apiClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Workspaces from '../workspaces/workspaces';
import Sidebar from '../sidebar/sidebar';
import MainView from '../mainView/mainView';


interface WorkspacesProps {
  projects: {projectName: string, projectDescription: string, _id: string, currentEmployeesIds: [], currentTaskIds: []}[],
  teams: {projectName: string, projectDescription: string, _id: string}[], 
  tasks: {taskName: string, taskDescription: string, totalTaskTime: string, _id: string} []
}

function Dashboard () {

  const [activeWorkspace, setActiveWorkspace] = useState('Your')

  const [isWorkspaceShowing, setIsWorkspaceShowing] = useState(true);
  const [currUserData, setCurrUserData] = useState({} as WorkspacesProps);
  const [currWSData, setCurrWSData] = useState({_id: '', projectName: '', projectDescription: '', currentEmployeesIds: [], currentTaskIds: []})

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user-token')) navigate('/');
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
        <MainView title={activeWorkspace} numOfTasks={currUserData.tasks?.length} tasks={currUserData.tasks}></MainView>
      }
    </div>
  );
}

export default Dashboard;