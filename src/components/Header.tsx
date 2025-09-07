import React from "react";

const Header = () => {
  const navigationLinks = ["about", "experience", "skills", "projects"];

  return (
    <header>
      <div>
        <a href="#">
          ardhan.dev
        </a>

        <nav>
          {navigationLinks.map((link) => (
            <a>
              {link}
            </a>
          ))}
        </nav>

        <a>
          contact
        </a>
      </div>
    </header>
  );
};

export default Header;