function ProjectCard({
  title,
  status,
  description,
  techStack,
  milestones,
  completedMilestones,
  totalMilestones,
  updatedOn,
  github,
  demo,
}) {
  return (
    <div className="projectCard">

      <div className="projectHeader">
        <h2>{title}</h2>
        <span>{status}</span>
      </div>

      <p>{description}</p>

      <div className="techStack">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <h4>Milestones</h4>

      <div className="milestones">
        {milestones.map((milestone) => (
          <div key={milestone}>
            <input type="checkbox" />
            <span>{milestone}</span>
          </div>
        ))}
      </div>

      <div className="progressSection">
        <div className="progressText">
          <span>Progress</span>

          <span>
            {Math.trunc(
              (completedMilestones * 100) /
                totalMilestones
            )}
            %
          </span>
        </div>

        <div className="progressBar">
          Progress Bar
        </div>
      </div>

      <div className="projectFooter">
        <span>Updated {updatedOn}</span>

        <div className="links">
          <a href={github}>GitHub</a>

          <a href={demo}>Live Demo</a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;