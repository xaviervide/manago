import ProjectCard from '../projectCard/projectCard';
import './mainView.css';

function MainView () {
  return (
    <div className="mainview-container">
      <div className="mainview-title-container">
        <h2>Codework's Projects</h2>
      </div>
      <div className="mainview-project-container">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        
      </div>
    </div>
  );
}

export default MainView;
