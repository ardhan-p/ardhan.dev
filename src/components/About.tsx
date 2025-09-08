import { aboutParagraphs } from "../data";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div>
        {aboutParagraphs.map((paragraph, index) => (
          <p 
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
};

export default About;