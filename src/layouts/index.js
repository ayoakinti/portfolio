/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import twitterIcon from "../images/twitter.svg"
import linkedInIcon from "../images/linkedin.svg"
import githubIcon from "../images/github.svg"
import Transition from "../components/transitions"
// import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Header from "../components/header"
import "../css/styles.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <Transition location={location}>
            <main>{children}</main>
        </Transition>
      </div>
      <footer>
        <div className="footer-link mr-20">
          <a
            href="https://twitter.com/iamayoakinti"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt=""></img>
          </a>
        </div>
        <div className="footer-link mr-20">
          <a
            href="https://www.linkedin.com/in/ayomideakintimehin/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInIcon} alt=""></img>
          </a>
        </div>
        <div className="footer-link">
          <a
            href="https://github.com/iamayoakinti"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt=""></img>
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
