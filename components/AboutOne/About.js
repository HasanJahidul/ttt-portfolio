import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/images/about-img.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>The Architects of Tomorrow: Discover Take The Tech</h2>
                <p>
                  We are a software development company specialising in web and
                  mobile application development. Our team of experts leverages
                  the latest technologies to deliver top-quality solutions that
                  meet the unique needs of you. Our core competency lies in the
                  use of ReactJs, NextJs, Laravel, Flutter, and Dart, to create
                  highly performant and scalable web and mobile applications.
                  These technologies enable us to build modern, user-friendly,
                  and responsive applications that provide a seamless user
                  experience. At Take The Tech, we are passionate about using
                  technology to help businesses succeed. We take pride in our
                  ability to understand your requirements, and translate them
                  into innovative and effective solutions. Our goal is to help
                  businesses streamline their operations, increase their digital
                  presence, and stay ahead of the competition. We believe in
                  building long-lasting relationships with you, based on trust,
                  transparency, and mutual respect. Our developers work closely
                  with clients to ensure that their projects are delivered on
                  time, within budget, and to the highest standards. If you're
                  looking to take your business to the next level with the power
                  of technology, contact us today to learn more about how we can
                  help. Let us help you turn your vision into a reality.
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
