import React from "react"
import image from "../images/hero_image.png"

// import Layout from "../layouts/index"
import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="About" />
    <div className="main-content">
      <div className="container">
        <div className="row mobile-flex-reverse">
          <div className="col-lg-7">
            <div className="col-lg-9 hero-text text-justify">
              <h2>About me</h2>
              <p className="hero-quote">
                Hello, my name is Ayomide Akintimehin, and I am a software
                engineer.
              </p>
              <p className="hero-quote">
                I am really passionate about solving complex problems and love
                to be part of a team that recognises the significance of
                critical thinking in the analysis of variants to provide
                solutions.
              </p>
              <p className="hero-quote">
                Right now, I am striving to improve greatly with algorithms and
                data structures, and also building projects to improve myself so
                I can get a job in a FAANG company and also start earning in
                dollars. Cool right?{" "}
                <span role="img" aria-label="emoji cool">
                  😎
                </span>
              </p>
              <p className="hero-quote">
                At the moment, I have experience with the{" "}
                <span className="font-bold">JavaScript/TypeScript{" "}</span>
                and its frameworks, with knowledge of{" "}
                <span className="font-bold">
                  React.js, Vue.js, Node.js, Nuxt.js and Ionic-vue.
                </span>
              </p>
              <p className="hero-quote">
                I strongly believe that the mind is our greatest tool and with
                the right mindset, anything is achievable so I am not shy of
                taking on a new challenge or adopting new technology.
              </p>
              <p className="hero-quote">
                Connect with me and let's build great products. Pay me in
                dollars too please.{" "}
                <span role="img" aria-label="emoji money">
                  🤑
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-end">
            <div
              className="d-flex align-items-center"
              data-sal="slide-left"
              data-sal-delay="0"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <img src={image} alt="hero"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
