import { heroParagraphs, personalInfo } from "../data";

const Hero = () => {

  return (
    <section>
      <div>
        <div>
          <h1>
            Hey, {personalInfo.name} here.
          </h1>
        </div>
        
        <div>
          <h2>
            {personalInfo.title}
          </h2>
        </div>

        <div>
          {heroParagraphs.map((paragraph, index) => (
            <p 
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <a href={personalInfo.linkedin}>
            linkedin
          </a>

          <a href={personalInfo.github}>
            github
          </a>

          <a href={personalInfo.email}>
            email
          </a>
        </div>
      </div>
      
      <div>
        profile image
      </div>

    </section>    
  );
};

export default Hero;