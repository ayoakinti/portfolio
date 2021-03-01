import React from "react"
// import image from "../images/hero_image.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 hero-text">
            {/* <img src={image} alt="hero"></img> */}
            <h3>Hello there!</h3>
            {/* <h2 className="hero-title text-justify">
              I am looking forward to starting a project with you!
            </h2> */}
            <p className="hero-quote">
              Want to talk to me about a fascinating topic in the tech space,
              designs, relationships, doing great things in this world, a
              subject on the power of the mind and harnessing it, or just buy me
              a cup of coffee? I'm very available to chat.
            </p>
            <p className="hero-quote">
              Or you want me to help out on a project? I am also very
              interested.
            </p>
          </div>
          <div className="col-lg-7 d-flex justify-content-end">
            <div className="col-lg-9 hero-text">
              <h3>Get in touch</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" name="email" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea rows="6" required></textarea>
                </div>
                <div className="form-group">
                  <button className="btn py-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
