import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Custom Software Development",
    shortText:
      "Your business, your rules. Let's build something awesome together, tailored just for you.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-conversation",
    title: "E-commerce Solutions",
    shortText:
      "Open 24/7 for business! Transform your online store into a powerhouse of sales and success.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "API Development & Integration",
    shortText:
      "Connect, simplify, thrive. We'll make your systems talk to each other like old friends.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "Cloud Migration & Optimization",
    shortText:
      "Reach for the clouds! Let us lift your business to new heights with seamless migration and optimization",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
   {
    iconName: "flaticon-target",
    title: "Product Lifecycle Managemen",
    shortText:
      "From idea to market domination, we manage every detail meticulously, allowing you to focus on making waves and achieving success.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Digital Marketing",
    shortText:
      "From social media management to search engine optimization (SEO), we've got the tools and expertise to elevate your online presence.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Services</span>
            <h2>Unlock Your Potential with Our Tailored Solutions</h2>
            <p>
              Discover how we can supercharge your business! Our expert services are designed just for you. Whether you need awesome apps, killer websites, or cutting-edge tech solutions, we've got you covered. Let's make magic together
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
                      {value.title}
                      {/* <Link href={value.viewDetails}>{value.title}</Link> */}
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
