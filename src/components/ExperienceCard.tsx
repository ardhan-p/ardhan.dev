import type { Experience } from "../types";

const ExperienceCard = (experience : Experience) => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center my-15">
        <div className="basis-1/3 self-start">
          <h2 className="py-2 text-xl font-bold align-text-top">
            {experience.title}
          </h2>

          <a 
            href={experience.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 underline">
            {experience.company}
          </a>
          
          <p className="py-2 italic">
            ({experience.duration})
          </p>
        </div>
        <div className="basis-2/3 self-start">
          <ul>
            {experience.description.map((point, index) => (
              <li key={index} className="py-2">{point}</li>
            ))}
          </ul>
          
          {experience.skill.map((tech, index) => (
            <span 
              key={index} 
              className="py-2 p-1 mr-1 bg-gray-50 rounded-md font-semibold inline-block mt-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExperienceCard;