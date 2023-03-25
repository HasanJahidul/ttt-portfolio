import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area about-area-four pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/about-img.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <span>About Us</span>
                <h2>Empowering your business with technology</h2>
                <p>
                  Welcome to Take The Tech, where we're passionate about helping
                  businesses grow through technology. Our team of experts
                  specializes in delivering custom software solutions that
                  empower businesses to streamline processes, boost
                  productivity, and increase revenue. From software development
                  to digital marketing and ERP solutions, we offer a range of
                  services tailored to your unique needs. Our approach is
                  simple: we listen, analyze, and create. With Take The Tech by
                  your side, you can take your business to the next level.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced caching
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Unlimited applications
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP 7 ready transfer
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP ready serves
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Free extra support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Optimized stack
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about-1" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
