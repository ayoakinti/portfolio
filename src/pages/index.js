import React from "react"
import image from "../images/hero_image.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="col-9 hero-text">
              <h3>I am Ayomide</h3>
              <h1 className="hero-title">Frontend Engineer</h1>
              <p className="hero-quote">
                There is no such thing as impossible. Can the mind conceive it?
                Then it can be achieved.
              </p>
              <p>
                <a className="hero-link" href="#myprojects">
                  View Projects
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-end">
            <img src={image} alt="hero"></img>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
