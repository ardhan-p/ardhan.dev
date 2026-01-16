import { personalInfo } from "../data";

personalInfo

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-15 py-10 text-center">
        <p className="font-extralight">
          &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;