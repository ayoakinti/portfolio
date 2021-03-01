import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import menuIcon from "../images/menu.svg"

const Header = ({ siteTitle }) => {
  const [menuClass, setmenuClass] = useState("")

  const handleSidemenu = () => {
    console.log("clicked")
    if (menuClass === "") {
      setmenuClass("show")
    } else {
      setmenuClass("")
    }
  }

  return (
    <header>
      <div className="title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          data-sal="fade"
          data-sal-delay="0"
          data-sal-duration="2000"
          data-sal-easing="ease"
        >
          {siteTitle}
        </Link>
      </div>
      <nav>
        <div onClick={handleSidemenu} className="menu-icon" aria-hidden="true">
          <img className="" width="20px" src={menuIcon} alt="menu-icon"></img>
        </div>
        <ul className={menuClass}>
          <li>
            <Link className="nav-link" onClick={handleSidemenu} activeClassName="active" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="nav-link" onClick={handleSidemenu} activeClassName="active" to="/about">
              about me
            </Link>
          </li>
          <li>
            <Link className="nav-link" onClick={handleSidemenu} activeClassName="active" to="/projects">
              my projects
            </Link>
          </li>
          <li className="mr-0">
            <Link className="nav-link" onClick={handleSidemenu} activeClassName="active" to="/contact">
              contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
