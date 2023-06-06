import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const MainBanner = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner-area main-banner-area-four">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  The Architects of Tomorrow: Discover Take The Tech
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  At Take The Tech, we're a team of tech-savvy experts who create custom software solutions for businesses. From software development to digital marketing and ERP solutions, we offer a range of services tailored to your unique needs. Our approach is simple: we listen, analyze, and create. Discover the power of tomorrow with Take The Tech.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                >
                  <Link href="/about" className="default-btn">
                    Learn More
                  </Link>
                  {/* 

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="default-btn active popup-youtube"
                  >
                    <i className="bx bx-play"></i> How it work?
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="banner-four-main-img">
                <img
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/images/home-four/main-img4.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
