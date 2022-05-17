import React from 'react'

export default function home() {
    return (
    <React.Fragment>
        <div class="hero_area">

    <header class="header_section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-11 offset-lg-1">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <img src="assets.images/logo.png" alt="" />
                <span>
                  Uliya
                </span>
              </a>
          
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html"> About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="portfolio.html"> Portfolio </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <form class="form-inline">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
   
    <section class=" slider_section position-relative">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1 ">
                  <div class="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        About Us
                      </a>
                      <a href="" class="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 px-0">
                  <div class="img-box">
                    <img src="assets/images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1">
                  <div class="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        About Us
                      </a>
                      <a href="" class="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 px-0">
                  <div class="img-box">
                    <img src="assets/images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1">
                  <div class="detail_box">
                    <h1>
                      photography <br/>
                      studio
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        About Us
                      </a>
                      <a href="" class="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 px-0">
                  <div class="img-box">
                    <img src="images/slider-img.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel_btn-container">
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section>

  </div>



 
    </React.Fragment >
  )
}
