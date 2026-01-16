import { useState } from "react";
import { personalInfo } from "../data";

const Header = () => {
  const navigationLinks = ["experience"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'}); 
    }
    setIsMenuOpen(false);
  }; 

  return (
    <header className="bg-gray-50 bg-opacity-80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#"
            className="text-xl font-semibold hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2"
            onClick={(e) => {e.preventDefault(); scrollToSection('home')}}
          >
            {personalInfo.username}
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-xl">
            {navigationLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2 m-2"
                onClick={(e) => {e.preventDefault(); scrollToSection(link)}}
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

          <nav className={`md:hidden absolute top-20 left-0 right-0 p-2 flex flex-col backdrop-blur-xl bg-gray-100 transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
            {navigationLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-white hover:bg-gray-700 transition-colors rounded-md p-2 m-2"
                onClick={(e) => {e.preventDefault(); scrollToSection(link)}}
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
          <button className="md:hidden text-black text-xl rounded-md p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? `-` : `+`}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;