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
                engineer with over <span className="font-bold">12 months of professional experience.</span>
              </p>
              <p className="hero-quote">
                I am really passionate about solving complex problems and love
                to be part of a team that recognises the significance of
                critical thinking in the analysis of variants to provide
                solutions. I am a great enthusiast of data structures and
                algorithms, and have completed 2 courses on these subjects, and
                I keep learning everyday to improve my critical thinking skills.
              </p>
              <p className="hero-quote">
                At the moment, I have experience with tools for frontend
                development of products, with knowledge of <span className="font-bold">Vue.js, React.js, and
                Ionic-vue</span>. I am also intrigued about how the backend works and
                should dive into <span className="font-bold">Node.js or Python</span> in the coming months.
              </p>
              <p className="hero-quote">
                I strongly believe that the mind is our greatest tool and with
                the right mindset, anything is achievable so I am not shy of
                taking on a new challenge or adopting new technology.
              </p>
              <p className="hero-quote">
                I am currently interested in freelancing, and open to
                opportunities in the USA, UK, Canada or Germany.
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
