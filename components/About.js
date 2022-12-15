export default function About() {
  return (
    <div className="main-block" id="about">
      <h1>Hey, Ardhan here.</h1>
      <div className="about-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus enim, egestas sit amet felis sit amet, dignissim vehicula lacus. Curabitur venenatis feugiat odio ut ullamcorper. Aenean pulvinar varius massa, et tincidunt neque commodo nec. Quisque sit amet sem ac elit mattis ullamcorper ac vel elit. Quisque dolor mi, elementum sed dapibus quis, euismod sit amet urna. Fusce hendrerit, dolor vel elementum facilisis, nisi enim pretium tellus, in volutpat neque magna eu odio. Fusce a maximus felis. Aenean id efficitur lectus. Nam interdum pulvinar ullamcorper. Suspendisse ullamcorper ultricies odio et dictum. Curabitur dictum enim ligula, sed gravida sapien mattis nec. Aenean rhoncus mauris a vestibulum vestibulum. Aliquam eget varius nisi. Aliquam non ante in tortor bibendum iaculis at et augue. Pellentesque sed varius odio.</p>
        <img src="images/pfp.png" alt="Image of Ardhan"/>
      </div>
      <div className="social-icons">
        <ul className="social-list">
          <li className="social-icon"><a href="https://github.com/ardhan-p"><img className="icon" src="images/github.png" alt="GitHub Account"/></a></li>
          <li className="social-icon"><a href="https://www.linkedin.com/in/ardhan-p/"><img className="icon" src="images/linkedin.png" alt="LinkedIn Account"/></a></li>
          <li className="social-icon"><a href="mailto:ardhan.s.pratama@gmail.com" target="_blank"><img className="icon" src="images/email.png" alt="Email Address"/></a></li>
        </ul>
      </div>
    </div>
  )
}