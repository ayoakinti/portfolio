import React from "react"
import ssp from "../images/ssp.png"
import movie from "../images/movie.png"
import mobile from "../images/gricd-mobile.png"
import gricd from "../images/gricd.png"
import ecommerce from "../images/ecommerce.png"
import unsplash from "../images/unsplash.png"

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
              <h3>Gricd Enterprise Web (VueJS)</h3>
              <p className="hero-quote text-justify">
                Gricd is an Internet of Things (IoT) enterprise that has
                developed a cold chain solution for the storage and
                transportation of vaccines, blood and agricultural products. The
                web application interacts with the motes and Frij boxes, which
                monitor temperature, humidity and live location.
              </p>
              <p className="hero-quote text-justify">
                My contribution was very critical to the success of this
                project, as I was lead frontend engineer who built the
                enterprise application from scratch. I was responsible for the
                implementation of the visual elements to ensure optimal user
                experience, and optimizing the application for maximum speed and
                scalability.
              </p>
              <p className="hero-quote text-justify">
                My role was clearly evident right from the design, conception
                and planning stages, right through the development and testing
                stages, up to the deployment and post-production phases.
              </p>
              <a
                className="hero-link"
                href="https://enterprise.gricd.com"
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
              <img src={ecommerce} alt="" width="100%" />
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              <h3>E-commerce Site (ReactJS, TypeScript, NodeJS, MongoDB)</h3>
              <p className="hero-quote text-justify">
                This is a market place ecommerce site I built just to solidify
                my understanding of node.js and react.js
              </p>
              <p className="hero-quote text-justify">
                With help from{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=sfmL6bGbiN8"
                >
                  Tutorial Motivation
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://themeforest.net/item/fixxo-ecommerce-xd-template/30467287"
                >
                  UI Guide
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://fakestoreapi.com/"
                >
                  API Guide
                </a>
                , I built the entire application to have similar functionalities
                to a mini Amazon store.
              </p>
              <p className="hero-quote text-justify">
                You can have various sellers, buyers, and register as many
                products you wish to sell. For payment processing, I utilized
                the paystack payment gateway (just test payment).
              </p>
              <a
                className="hero-link"
                href="https://aycommerce.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                View application
              </a>
            </div>
          </div>
        </div>
        <div className="row my-4 justify-content-between">
          <div className="col-lg-4 d-flex align-items-center">
            <div>
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
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div data-sal="slide-left" data-sal-duration="1000">
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
              <img src={unsplash} alt="" />
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div>
              <h3>UnSplash Mini-clone (NuxtJS)</h3>
              <p className="hero-quote text-justify">
                A fun web application which works as a mini-clone of{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://unsplash.com/"
                >
                  UnSplash
                </a>
              </p>
              <a
                className="hero-link"
                href="https://patronize-frontend-task.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                View Application
              </a>
            </div>
          </div>
        </div>
        
        <div className="row my-4 justify-content-between">
          <div className="col-lg-4 d-flex align-items-center">
            <div>
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
          <div className="col-lg-7 d-flex align-items-center">
            <div data-sal="slide-left" data-sal-duration="1000">
              <img src={movie} alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
