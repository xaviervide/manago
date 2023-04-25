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
  const [isLoading, setIsLoading] = useState(true);

  const [currUserData, setCurrUserData] = useState({} as WorkspacesProps);
  const [currWSData, setCurrWSData] = useState({} as Task[]);
  const [tempWSData, setTempWSData] = useState({} as Task[]);
  const [currWSID, setCurrWSID] = useState('');

  const [activeWSTasks, setActiveWSTasks] = useState([] as Task[]);

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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400)
    setActiveWorkspace(newWS);
    // if (newWS === 'Your') {
    //   setActiveWSTasks(currUserData.tasks);
    // } else {
    //   currUserData.teams.forEach(el => {
    //     if(el.title === newWS){
    //       setActiveWSTasks(el.teamTasks as Task[])
    //       return;
    //     }
    //   })
    //   currUserData.projects.forEach(el => {
    //     if(el.title === newWS) {
    //       setActiveWSTasks(el.projectTasks as Task[])
    //       return;
    //     }
    //   })
    // }
  }

  const toggleLoading = async () => {
    setIsLoading(!isLoading);
    await handleLoad();
    setTimeout(() => {
      setIsLoading(false);
    }, 700)
  }

  async function handleLoad () {
    const userID = JSON.parse(sessionStorage.getItem('user-data') || '')._id;
    try {
      const userData = await fetchUserData(userID);
      setActiveWSTasks(userData.tasks);
      if(activeWorkspace === 'Your') {
        setCurrUserData(userData);
      }
    } catch (err) {
      window.location.reload();
      alert('Something went wrong!');
    }
  }

  return (
    <div className="dashboard-container" onClick={async () => await handleLoad()}>
      {isLoading && <Loading></Loading>}
      <Sidebar toggleWorkspace={toggleWorkspace}></Sidebar>
      <div className="dashboard-workspace-container" style={{display: isWorkspaceShowing? 'inherit' : 'none'}}>
        <Workspaces userData={currUserData} changeActiveWorkspace={changeActiveWorkspace} toggleLoading={toggleLoading}></Workspaces>
      </div>
      {currUserData && 
        <MainView toggleLoading={toggleLoading} title={activeWorkspace} tasks={activeWSTasks} currWSID={currWSID}></MainView>
      }
    </div>
  );
}

export default Dashboard;