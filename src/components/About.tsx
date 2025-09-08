import { aboutMeParagraphs } from "../data";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="about me">
      <div>
        {aboutMeParagraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
};

export default About;