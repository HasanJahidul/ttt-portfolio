import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "App Development",
    shortText:
      "Custom Mobile App Development Services for Your Business.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "Web Development",
    shortText:
      "Transform Your Online Presence with Our Custom Web Development Solutions",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Blockchain Project",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "ERP Solutions",
    shortText:
      "ERP Solutions for Increased Efficiency and Productivity.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Digital Marketing",
    shortText:
      "Digital Marketing Services That Drive Growth.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Machine Learning",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <section className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Services</span>
            <h2>Our Professional Services For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              architecto quaerat eaque sapiente accusantium ad ut explicabo
              consequuntur fuga quidem? Sint.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
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

export default Services;
