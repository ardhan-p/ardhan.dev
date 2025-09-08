import { personalInfo } from "../data";

const Header = () => {
  const navigationLinks = ["about", "experience"];

  return (
    <header className="bg-gray-50 bg-opacity-80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#"
            className="text-xl font-semibold hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2"
          >
            {personalInfo.username}
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-xl">
            {navigationLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2 m-2"
              >
                {link}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2 m-2"
            >
              email
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;