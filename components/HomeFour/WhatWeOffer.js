import React from "react";
import Link from "next/link";

const WhatWeOffer = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <section className="industries-area industries-area-four pb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>What We Offer</span>
            <h2>Industries We Serve</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              eos ea obcaecati et similique incidunt animi, sed, quos officiis
              placeat. Id ipsa molestias.
            </p>
          </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">
              <div className="col-lg-3">
                {/* Tabs navs */}
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab1")}
                  >
                    <span>
                      <i className="flaticon-health"></i>
                      <h3>Healthcare Industry</h3>
                      <p>All kind of industry</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    <span>
                      <i className="flaticon-call"></i>
                      <h3>Retail</h3>
                      <p>All kind of industry</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    <span>
                      <i className="flaticon-offer"></i>
                      <h3>Finance</h3>
                      <p>All kind of industry</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    <span>
                      <i className="flaticon-automation"></i>
                      <h3>Manufacturing</h3>
                      <p>All kind of industry</p>
                    </span>
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab5")}>
                    <span>
                      
                      <i className="flaticon-success"></i>
                      <h3>Education</h3>
                      <p>All kind of industry</p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <div className="tab_content">
                  {/* Tab item #1 */}
                  <div id="tab1" className="tabs_item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                        <img src="/images/offer3.png" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Healthcare Industry</h3>
                          <p>We understand the importance of providing high-quality care, and we can help healthcare organizations implement technology solutions that improve patient outcomes, increase efficiency, and reduce costs.
                          </p>
                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Creating
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Consectetur
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Adipisicing
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Artificial
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Industry
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Opportunities
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* <div className="text-center">
                            <Link href="/services" className="default-btn">
                              Discover More
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #2 */}
                  <div id="tab2" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Retail</h3>
                          <p>
                          Our team has experience in developing e-commerce websites, creating marketing strategies, and building custom software to help retailers grow their online presence and increase sales.
                          </p>

                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Security
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Highest
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Priority
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Opportunities
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Creating
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Industries
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* <div className="text-center">
                            <Link href="/services" className="default-btn">
                              Discover More
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-img right-img">
                          <img src="/images/offer2.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #3 */}
                  <div id="tab3" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/finance.jpeg" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Finance</h3>
                          <p>
                           We are equipped to help financial institutions of all sizes streamline processes, manage risk, and improve customer experiences through innovative technology solutions.
                          </p>

                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Creating
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Consectetur
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Adipisicing
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Artificial
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Industry
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Opportunities
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="text-center">
                            <Link href="/services" className="default-btn">
                              Discover More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #4 */}
                  <div id="tab4" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Manufacturing</h3>
                          <p>
                          We can help manufacturers optimize their processes, increase productivity, and reduce costs through custom software development, process automation, and machine learning.
                          </p>

                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Opportunities
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Creating
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Industries
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Security
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Highest
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Priority
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="text-center">
                            <Link href="/services" className="default-btn">
                              Discover More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-img right-img">
                          <img src="/images/offer4.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab item #5 */}
                   <div id="tab5" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/education.avif" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Education</h3>
                          <p>
                          Our team can help educational institutions leverage technology to improve student experiences, implement e-learning solutions, and streamline administrative processes.
                          </p>

                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Creating
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Consectetur
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Adipisicing
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <ul className="industries-item">
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Artificial
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Industry
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Opportunities
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="text-center">
                            <Link href="/services" className="default-btn">
                              Discover More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
