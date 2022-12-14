import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div class="main-block" id="projects">
      <h2>My Projects.</h2>
      <div class="project-container">
        <ProjectCard image="easypass" platform="Android" title="EasyPass"/>
        <ProjectCard image="wareeyes" platform="ReactJS + Spring Boot" title="WareEyes"/>
      </div>
    </div>
  )
}