import React from "react"
import image from "../images/hero_image.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="col-9 hero-text">
              <h3>Get in  touch</h3>
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

export default SecondPage
