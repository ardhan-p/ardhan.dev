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
            <img src={`/images/${image}.png`} alt={`${image} image`} className="project-image" />
            <div className="project-info">
              <p className="project-platform">{platform}</p>
              <h3 className="project-title">{title}</h3>
              <p>{description}</p>
              <a href={`${github}`}></a>
            </div>
            <btn onClick={toggleModal}>close</btn>
          </div>
        </div>
        )
      }

    </>
  )
}