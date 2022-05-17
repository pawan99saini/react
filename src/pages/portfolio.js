import React from 'react'
import { Link } from 'react-router-dom'

export default function portfolio() {
  return (
    <React.Fragment>
        <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 offset-lg-1">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
                <img src="assets/images/logo.png" alt="" />
                <span>
                  Uliya
                </span>
                </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                  <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>


  </div>

 

  <section className="portfolio_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our portfolio
        </h2>
        <p>
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>
      <div className="portfolio_container layout_padding2">
        <div className="box-1">
          <div className="img-box b-1">
            <img src="assets/images/p-1.jpg" alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
            </div>
          </div>
          <div className="img-box b-2">
            <img src="assets/images/p-2.jpg" alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="box-2-top">
            <div className="img-box b-3">
              <img src="assets/images/p-3.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
          <div className="box-2-top2">
            <div className="img-box b-4">
              <img src="assets/images/p-4.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
          <div className="box-2-btm">
            <div className="img-box b-5">
              <img src="assets/images/p-5.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
            <div className="img-box b-6">
              <img src="assets/images/p-6.jpg" alt="" />
              <div className="btn-box">
                <a href="" className="btn-1">

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="see_btn">
        <a href="">
          See More
        </a>
      </div>
    </div>

  </section>

  <section className="info_section ">
    <div className="container">
      <div className="info_container">
        <div className="info_social">
          <div className="d-flex justify-content-center">
            <h4 className="">
              Follow on
            </h4>
          </div>
          <div className="social_box">
            <a href="">
              <img src="assets/images/fb.png" alt="" />
            </a>
            <a href="">
              <img src="assets/images/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="assets/images/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="assets/images/linkedin.png" alt="" />
            </a>
            <a href="">
              <img src="assets/images/dribble.png" alt="" />
            </a>
            <a href="">
              <img src="assets/images/pinterest.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid footer_section">
    <div className="container">
      <p>
        &copy; 2019 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>

    </React.Fragment>
  )
}
