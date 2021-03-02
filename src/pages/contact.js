import React from "react"
// import image from "../images/hero_image.png"

// import Layout from "../layouts/index"
import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="Contact" />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 hero-text">
            {/* <img src={image} alt="hero"></img> */}
            <h2>Hello there!</h2>
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
            <p className="hero-quote">
              <a className="hero-link" href = "mailto: ayoakinti@gmail.com">ayoakinti@gmail.com</a>
            </p>
          </div>
          <div
            className="col-lg-7 d-flex justify-content-end"
            data-sal="slide-left"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <div className="col-lg-9 hero-text">
              <h3>Get in touch</h3>
              <form
                id="myForm"
                target="_blank"
                action="https://getform.io/f/44a48cb2-3f9e-46a4-8796-15512b40d6a0"
                method="POST"
                onSubmit={() => {
                  setTimeout(() => {
                    var form = document.getElementById("myForm")
                    form.reset()
                  }, 2000)
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    required
                  ></textarea>
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
  </div>
)

export default SecondPage
