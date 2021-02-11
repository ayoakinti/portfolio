import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="title">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link className="nav-link" activeClassName="active" to="/">
            home
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/about">
            about me
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/projects">
            my projects
          </Link>
        </li>
        <li className="mr-0">
          <Link className="nav-link" activeClassName="active" to="/contact">
            contact me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
