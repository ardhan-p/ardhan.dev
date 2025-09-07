import { personalInfo } from "../data";

const Header = () => {
  const navigationLinks = ["about", "experience", "skills", "projects"];

  return (
    <header>
      <div>
        <a 
          href="#"
        >
          {personalInfo.username}
        </a>

        <nav>
          {navigationLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${personalInfo.email}`}
        >
          contact
        </a>
      </div>
    </header>
  );
};

export default Header;