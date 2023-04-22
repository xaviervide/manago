// import ProjectCard from '../projectCard/projectCard';
import './mainView.css';

interface MainViewProps {
  title: string
}

function MainView ({title} : MainViewProps) {
  return (
    <div className="mainview-container">
      <div className="mainview-title-container">
        <h2>{title}'s Tasks</h2>
      </div>
      <div className="mainview-project-container">
        {/* <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard> 
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard> */}
      </div>
    </div>
  );
}

export default MainView;
