export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="nav-left"><a id="website-title">ardhan.dev</a></li>
          <li className="nav-right"><a href="mailto:ardhan.s.pratama@gmail.com" target="_blank">email</a></li>
          <li className="nav-right"><a href="#blogs">blog</a></li>
          <li className="nav-right"><a href="#projects">projects</a></li>
          <li className="nav-right"><a href="#about">about</a></li>
        </ul>
      </div>
    </header>
  )
}