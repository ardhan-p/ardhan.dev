import { useState } from "react"

export default function ProjectCard({ image, platform, title, description, github }) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="project-card" onClick={toggleModal}>
        <img src={`/images/${image}.png`} alt={`${image} image`} className="project-image" />
        <div className="project-info">
          <p className="project-platform">{platform}</p>
          <h3 className="project-title">{title}</h3>
        </div>
      </div>

      {modal && (
        <div className="project-modal">
          <div className="project-modal-background" onClick={toggleModal}></div>
          <div className="project-modal-content">
            <div className="project-close-wrapper">
              <btn onClick={toggleModal} className="project-close">Close</btn>
            </div>
            <div className="project-modal-image-wrapper">
              <img src={`/images/${image}.png`} alt={`${image} image`} className="project-image"/>
            </div>
            <div className="project-info">
              <h3 className="project-title">{title}</h3>
              <p>{description}</p>
              <a href={`https://github.com/ardhan-p/${github}`} target="_blank"><img className="icon" src="images/github.png" alt="GitHub Link to Project"/></a>
            </div>
          </div>
        </div>
        )
      }

    </>
  )
}