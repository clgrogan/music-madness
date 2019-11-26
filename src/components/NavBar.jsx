import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <heading>
        <nav>
          <ul className="navbar-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/NWA">NWA</Link>
            </li>
            <li>
              <Link to="/Eminem">Eminem</Link>
            </li>
            <li>
              <Link to="/Katy Perry">Katy Perry</Link>
            </li>
          </ul>
        </nav>
      </heading>
    </>
  )
}

export default NavBar
