import React from "react"
import ssp from "../images/ssp.png"
import movie from "../images/movie.png"
import mobile from "../images/gricd-mobile.png"
import gricd from "../images/gricd.png"

// import Layout from "../layouts/index"
import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="Projects" />
    <div className="main-content">
      <div className="container">
        <div className="row my-4 justify-content-between">
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              {/* <span className="hero-quote">Web App Design</span> */}
              <h3>Gricd Enterprise Web (VueJS)</h3>
              <p className="hero-quote text-justify">
                Gricd is an Internet of Things (IoT) enterprise that has
                developed a cold chain solution for the storage and
                transportation of vaccines, blood and agricultural products. The
                web application interacts with the motes and Frij boxes, which
                monitor temperature, humidity and live location.
              </p>
              <p className="hero-quote text-justify">
                My contribution has been very critical to the success of this
                project, as I am the lead frontend engineer, working with a
                great team, and responsible for the implementation of the visual
                elements to ensure optimal user experience, and optimizing the
                application for maximum speed and scalability.
              </p>
              <p className="hero-quote text-justify">
                My role has been clearly evident right from the design,
                conception and planning stages, right through the development
                and testing stages, up to the deployment and post-production
                phases. This has been my biggest project so far.
              </p>
              <a
                className="hero-link"
                href="https://beta.gricd.com"
                rel="noreferrer"
                target="_blank"
              >
                View application
              </a>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div
              data-sal="slide-down"
              data-sal-delay="0"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <img src={gricd} alt="" />
            </div>
          </div>
        </div>
        <div className="row my-4 mobile-flex-reverse justify-content-between">
          <div className="col-lg-7 d-flex align-items-center">
            <div
              data-sal="slide-right"
              data-sal-delay="200"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              {/* <span className="hero-quote">Web App Design</span> */}
              <h3>Gricd Enterprise Mobile (Ionic-vue)</h3>
              <p className="hero-quote text-justify">
                The Gricd Enterprise mobile application is an extension of the
                web application described above.
              </p>
              <p className="hero-quote text-justify">
                After I got pretty comfortable and attained stability with the
                vue.js framework, I decided to expand my skillset with mobile
                app development. For this project, I used the ionic + vue.js
                framework and built the entire mobile app from scratch right
                from the design, planning phase up to the development phase.
              </p>
              {/* <p className="hero-quote text-justify">
                This project isn't live yet, but would be coming to your mobile
                devices in no time.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row my-4 justify-content-between">
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              {/* <span className="hero-quote">Web App Design</span> */}
              <h3>Solarschool Project (ReactJS)</h3>
              <p className="hero-quote text-justify">
                The Solarschool project is aimed at taking sustainable power
                solution to middle class primary and secondary schools in Africa
                with extension to universities in remote areas.
              </p>
              <p className="hero-quote text-justify">
                I took on the role of the lead frontend engineer in this
                project, building the entire admin dashboard with the react.js
                framework, ensuring the implementation of user friendly designs
                to enable the administrators execute app management tasks with
                speed and efficiency.
              </p>
              {/* <a
                className="hero-link"
                href="https://github.com/iamayoakinti/algorithms/tree/dev"
                target="_blank"
              >
                View source code
              </a> */}
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div
              data-sal="slide-left"
              data-sal-duration="1000"
            >
              <img src={ssp} alt="" />
            </div>
          </div>
        </div>
        <div className="row my-4 mobile-flex-reverse justify-content-between">
          <div className="col-lg-7 d-flex align-items-center">
            <div
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <img src={movie} alt="" />
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              {/* <span className="hero-quote">Web App Design</span> */}
              <h3>Movie Search App (ReactJS with Hooks)</h3>
              <p className="hero-quote text-justify">
                A fun web application which allows you search for your favorite
                movies and shows you the year they were released.
              </p>
              <p className="hero-quote text-justify">
                I built this web application taking advantage of the OMDb open
                APIs. This was actually my first react app and the purpose was
                just to get a firm grip on how react.js works. At the same time,
                it's a fun app for movie lovers to search out their favorite
                movies and get more details about them.
              </p>
              <a
                className="hero-link"
                href="https://movie-search-app02.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                View Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
