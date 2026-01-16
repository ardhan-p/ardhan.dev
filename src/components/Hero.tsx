import { heroParagraphs, personalInfo } from "../data";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons";
import profilePhoto from "../assets/ardhan-pfp-1.jpeg";

const Hero = () => {
   return (
    <section
      id="hero"
      className="pt-30 pb-20" 
    >
      <div className="container mx-auto px-15">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="basis-1/2">
            <h1 className="text-3xl font-bold my-4">
              Hey, {personalInfo.name} here.
            </h1>

            {heroParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="py-2"
              >
                {paragraph}
              </p>
            ))}

            <div
              className="flex my-4" 
            >
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <GithubIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>

              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <LinkedinIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>

              <a 
                href={personalInfo.email}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <EmailIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>
            </div>

          </div>

          <div className="basis-1/2 flex justify-center">
            <div className="h-64 w-64 my-4">
              <img 
                className="rounded-md shadow-2xl"
                src={profilePhoto}
              />
            </div>
          </div>

        </div>

      </div>
    </section>    
  );
};

export default Hero;