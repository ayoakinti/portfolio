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
              I ensure projects I work on are scalable and the performance is thoroughly optimised. With an excellent eye for design and meticulous analysis, I provide pixel-perfect implementations and seamless user interfaces for the optimal experience.
              </p>
              <p className="hero-quote">
              I also greatly utilise my critical thinking skills and knowledge of data structures and algorithms to ensure optimal solutions. I am also a great communicator and a tremendous team player.
              </p>
              <p className="hero-quote">
                I have industry experience with{" "}
                <span className="font-bold">JavaScript</span>
                <span>, specializing in{" "}</span>
                <span className="font-bold">
                  React.js, Vue.js, Nuxt.js and TypeScript.{" "}
                </span>
                I also have experience working with{" "}
                <span className="font-bold">
                webpack, Node JS, Django and MongoDB.
                </span>
              </p>
              <p className="hero-quote">
                I strongly believe that the mind is our greatest tool and with
                the right mindset, anything is achievable so I am not shy of
                taking on a new challenge or adopting new technology.
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
