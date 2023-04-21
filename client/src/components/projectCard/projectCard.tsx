import './projectCard.css';

function ProjectCard () {
  return (
    <div className="projectcard-container">
      <div className="projectcard-info-container">
        <div>
          <h3>Project Name</h3>
          <p>Some project description or data</p>
        </div>
        <div className="projectcard-members-container">
          <div>X</div>
          <div>L</div>
          <div>A</div>
          <div>+3</div>
        </div>
      </div>
      <div className="projectcard-timer-container">
        <button>START</button>
        <button>&#8942;</button>
        <p>3:02</p>
      </div>
    </div>
  );
}

export default ProjectCard;
