import { heroParagraphs, personalInfo } from "../data";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons";

const Hero = () => {
   return (
    <section
      id="hero"
      className="pt-40 pb-20" 
    >
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-2 gap-12">
          <div>
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
                className="mr-4"
              >
                <GithubIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>

              <a 
                href={personalInfo.linkedin}
                target="_blank"
                className="mr-4"
              >
                <LinkedinIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>

              <a 
                href={personalInfo.email}
                target="_blank"
                className="mr-4"
              >
                <EmailIcon className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-1"/>
              </a>
            </div>

          </div>

          <div
            className="flex justify-center" 
          >
            <div className="relative h-64 w-64 my-4">
              <img 
                className="rounded-md shadow-2xl"
                src="src/public/ardhan-pfp-1.jpeg"
              />
            </div>
          </div>

        </div>

      </div>
    </section>    
  );
};

export default Hero;