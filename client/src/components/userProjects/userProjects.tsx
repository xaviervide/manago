import { useState } from 'react';
import { Project } from '../../interfaces/Project';
import { createProject } from '../../apiClient';
import WsCard from '../wsCard/wsCard';
import './userProjects.css';

interface UserProjectsProps {
  projectArray: Project[],
  changeActiveWorkspace: (wsName: string, _id: string) => void
}

function UserProjects ({projectArray, changeActiveWorkspace} : UserProjectsProps) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapseCollection () {
    setIsCollapsed(!isCollapsed);
  }

  async function handleAddProject () {
    const newProjectName = prompt('Please enter the name of the new project');
    const newProjectDescription = prompt('Please provide a short description for your project');

    const newProject : Project = {
      title: newProjectName,
      description: newProjectDescription
    }

    if (newProjectName?.trim().length && newProjectDescription?.trim().length) {
      await createProject(JSON.parse(sessionStorage.getItem('user-data') || '')._id, newProject);
    }
  }

  return (
    <div className="userprojects-container">
      <div className="userprojects-label-container">
        <h3 className="userprojects-label" onClick={() => collapseCollection()}>Your Projects</h3>
        <div className="usertasks-add-btn"
        onClick={() => handleAddProject()}
        >+</div>
      </div>
      {!isCollapsed && 
        <div className="userprojects-projects-container">
          {projectArray && projectArray.length > 0 &&
            projectArray.map(el => <WsCard cardContent={el} changeActiveWorkspace={changeActiveWorkspace}></WsCard>)
          }
        </div>
      }
    </div>
  );
}

export default UserProjects;
