export default function About() {
  return (
    <div className="main-block" id="about">
      <h1>Hey, Ardhan here.</h1>
      <div className="about-section">
        <div className="about-image-left-wrapper">
          <img src="images/ardhan_pfp_icon.jpeg" className="about-image-left" alt="Image of Ardhan" />
        </div>
        <div className="about-description">
          <p>
            I&apos;m currently a junior software engineer working in Samsung Research Indonesia.
          </p>
          <p>
            Making a positive difference in people&apos;s lives through technology has always been cool to me, and I&apos;m inspired
            to learn as much as I can to achieve that.
          </p>
          <p>
            You can check out a couple of my programming projects that I&apos;ve created down below.
          </p>
          <p>
            Feel free to connect with me! (or not, up to you really)
          </p>
        </div>
        <img src="images/ardhan_pfp_icon.jpeg" className="about-image-right" alt="Image of Ardhan" />
      </div>
      <div className="social-icons">
        <ul className="social-list">
          <li className="social-icon">
            <a href="https://github.com/ardhan-p" target={"_blank"} rel="noreferrer">
              <img className="icon" src="images/github.png" alt="GitHub Account" />            
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/ardhan-p/" target={"_blank"} rel="noreferrer">
              <img className="icon" src="images/linkedin.png" alt="LinkedIn Account" />
            </a>
          </li>
          <li className="social-icon">
            <a href="mailto:ardhan.s.pratama@gmail.com" target={"_blank"} rel="noreferrer">
              <img className="icon" src="images/email.png" alt="Email Address" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}