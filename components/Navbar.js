import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <ul className="navbar-list">
          <Link href={"/"}>
            <li className="nav-left">
              <a id="website-title">ardhan.dev</a>
            </li>
          </Link>

          <li className="nav-right">
            <a href="mailto:ardhan.s.pratama@gmail.com" target="_blank" rel="noreferrer">email</a>
          </li>

          <Link href={"/#projects"} scroll={false}>
            <li className="nav-right">
              <a>projects</a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}