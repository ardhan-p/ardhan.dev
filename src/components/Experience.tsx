import { experienceData } from "../data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => (
  <section
    id="experience"
    className="pt-30 pb-20"
  >
    <div className="container mx-auto px-15">
      <div>
        <h1 className="text-3xl font-bold my-4">
          My work experience.
        </h1>
        {experienceData.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;