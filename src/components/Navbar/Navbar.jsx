import './Navbar.scss'

export default function Navbar({}) {
  return (
    <div className="navContainer">
      <nav className="nav">
        <ul>
          <li className="navBtn">
            <p>About</p>
          </li>
          <li className="navBtn">
            <p>Projects</p>
          </li>
          <li className="navBtn">
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}
