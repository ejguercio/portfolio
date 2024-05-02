import ProjectCard from "./ProjectCard/ProjectCard";
import css from "./Projects.module.css";
import projectsData from "./projectsData.json";

const Projects = () => {
  return (
    <section id="projects" className={css.projects}>
      <h2>Proyectos</h2>
      <div className={css.container}>
        {projectsData.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            linkVideo={project.linkVideo}
            linkDeploy={project.linkDeploy}
            linkRepo={project.linkRepo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
