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
                  Take The Tech is your go-to source for cutting-edge technology solutions, designed to propel your business forward. We specialize in custom software development that fits your unique business requirements, robust e-commerce platforms that enhance your online sales and customer experience, and efficient API integration to streamline your operations. Our cloud migration services ensure a smooth transition to the cloud, optimizing your infrastructure for maximum efficiency and scalability. Additionally, our comprehensive product lifecycle management takes your ideas from conception to market domination, handling every detail along the way. Coupled with our digital marketing expertise, including social media management and SEO, we elevate your online presence and drive sustainable growth. Partner with Take The Tech to turn your technological vision into reality and achieve unparalleled business success.
                </p>

                {/* <div className="row">
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
                </div> */}

                <Link href="/contact" className="default-btn">
                  Contact Us
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
