import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
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
                    <li className="nav-item">
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
   
    <section className=" slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1 ">
                  <div className="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        About Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-0">
                  <div className="img-box">
                    <img src="assets/images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        About Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-0">
                  <div className="img-box">
                    <img src="assets/images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        About Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-0">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section>

  </div>

<section className="about_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>
        About Studio
      </h2>
    </div>
    <div className="box">
      <div className="img-box">
        <img src="assets/images/about-img.jpg" alt="" />
        <div className="about_img-bg">
          <img src="assets/images/about-img-bg.png" alt="" />
        </div>
      </div>
      <div className="detail-box">
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
        <div>
          <a href="">
            about More
          </a>
        </div>
      </div>
    </div>
  </div>

</section>
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
<section className="achieve_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>
        ACHIEVEMENTS
      </h2>
      <p>
        minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
    </div>
    <div className="achieve_container">
      <div className="box">
        <div className="img-box">
          <img src="assets/images/a-1.png" alt="" />
        </div>
        <div className="detail-box">
          <h2>
            1000+
          </h2>
          <h6>
            Photo Session
          </h6>
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src="assets/images/a-2.png" alt="" />
        </div>
        <div className="detail-box">
          <h2>
            9000+
          </h2>
          <h6>
            Happy Customers
          </h6>
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src="assets/images/a-3.png" alt="" />
        </div>
        <div className="detail-box">
          <h2>
            1000+
          </h2>
          <h6>
            Archive Photographs
          </h6>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="client_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container">
      <h2>
        Testimonial
      </h2>
      <p>
        minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
    </div>
    <div className="layout_padding2-top">
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="row">
          <div className="col-md-3">
            <div className="btn_container">
              <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-lg-8">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="detail-box">
                  <h4>
                    Aloz den
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="detail-box">
                  <h4>
                    Aloz den
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="detail-box">
                  <h4>
                    Aloz den
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

<section className="contact_section layout_padding">
  <div className="bg-img1">
    <img src="assets/images/bg-img-1.png" alt="" />
  </div>
  <div className="bg-img2">
    <img src="assets/images/bg-img-2.png" alt="" />
  </div>
  <div className="container">
    <div className="heading_container">
      <h2>
        Contact Us
      </h2>
    </div>
    <div className="">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form action="">
            <div className="contact_form-container">
              <div>
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="">
                  <input type="text" placeholder="Message" className="message_input" />
                </div>
                <div className=" d-flex justify-content-center ">
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
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

 
    </React.Fragment >
  )
}
