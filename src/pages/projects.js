import React from "react"
import image from "../images/hero_image.png"
import algo from "../images/algo.png"
import movie from "../images/movie.png"
import gricd from "../images/gricd.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="main-content">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-5 d-flex align-items-center">
            <div>
              <span className="hero-quote">Web App Design</span>
              <h3>Gricd Enterprise Web Application (VueJS)</h3>
              <p className="hero-quote">
                Displays data from a mote, which is an IOT device that monitors
                and records ambient temperature and humidity, and even GPS for
                up to 30 days.
              </p>
              <a
                className="hero-link"
                href="https://beta.gricd.com"
                target="_blank"
              >
                View application
                <span>
                  <img src="./images/icon/hero-icon-2.png" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="update-news-thumb text-right wow show-on-scroll-right"
              data-wow-duration="3000ms"
              data-wow-delay="0ms"
            >
              <img src={gricd} alt="" />
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-7">
            <div
              className="update-news-thumb wow show-on-scroll-left"
              data-wow-duration="3000ms"
              data-wow-delay="0ms"
            >
              <img src={algo} alt="" />
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <div>
              <span className="hero-quote">VS Code</span>
              <h3>Data Structures and Algorithms Courses</h3>
              <p className="hero-quote">
                Data Structures and Algorithm Solutions in JavaScript, from the
                Data Structures and Algorithms specialization course I'm taking.
              </p>
              <a
                className="hero-link"
                href="https://github.com/iamayoakinti/algorithms/tree/dev"
                target="_blank"
              >
                View source code
              </a>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-5 d-flex align-items-center">
            <div>
              <span className="hero-quote">Web App Design</span>
              <h3>Movie Search App (ReactJS with Hooks)</h3>
              <p className="hero-quote">
                A fun web application which allows you search for your favorite
                movies and shows you the year they were released.
              </p>
              <a
                className="hero-link"
                href="https://movie-search-app02.netlify.app"
                target="_blank"
              >
                View Application
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="update-news-thumb text-right wow show-on-scroll-right"
              data-wow-duration="3000ms"
              data-wow-delay="0ms"
            >
              <img src={movie} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
