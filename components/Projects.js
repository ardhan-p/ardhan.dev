import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div className="main-block" id="projects">
      <h2>My Projects.</h2>
      <div className="project-container">
        <ProjectCard image="easypass" platform="Android" title="EasyPass"/>
        <ProjectCard image="wareeyes" platform="ReactJS + Spring Boot" title="WareEyes"/>
      </div>
    </div>
  )
}