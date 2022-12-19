import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div className="main-block" id="projects">
      <h2>My Projects.</h2>
      <div className="project-container">
        <ProjectCard image="easypass" platform="Android" title="EasyPass" github="easy-pass"
          description="EasyPass enables Android users to create encrypted login items and store them in a safe place. 
          This negates the need for users to remember the passwords for countless of accounts. 
          I developed this app to learn more about how Android Studio functions and how password encryption is able 
          to be securely achieved using Java."/>
        <ProjectCard image="wareeyes" platform="ReactJS + Spring Boot" title="WareEyes" github="wareeyes-reactjs-frontend"
          description="My final year project for university involved creating a web application that monitors an 
          inventory system in real-time. To achieve this, we had to utilise Apache Kafka to leverage its ability 
          to produce and consume a large amount of data reliably and concurrently. To visualise the data, we used 
          ReactJS for our frontend framework. Spring Boot was used for our backend, which can handle with the 
          data from Kafka seamlessly." />
      </div>
    </div>
  )
}