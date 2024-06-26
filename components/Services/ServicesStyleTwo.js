import React from "react";
import Link from "next/link";

const ServicesStyleTwo = () => {
  return (
    <>
      <section className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Together, we strive to accomplish your objectives.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              architecto quaerat eaque sapiente accusantium ad ut explicabo
              consequuntur fuga quidem? Sint.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                  <Link href="/service-details">Robotics & Drones</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link href="/service-details">Virtually Reality</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <Link href="/service-details">Blockchain Project</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <Link href="/service-details">Image Processing</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-choice"></i>
                <h3>
                  <Link href="/service-details">Order Management</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <Link href="/service-details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1.png" alt="Image" />
          <img src="/images/shape/services-shape/2.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default ServicesStyleTwo;
