import { aboutMeParagraphs } from "../data";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" title="about me">
      <div>
        {aboutMeParagraphs.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    </Section>
  )
};

export default About;