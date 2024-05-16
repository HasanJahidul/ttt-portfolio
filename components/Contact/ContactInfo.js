import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>
                  <a href="mailto:takethetechbd@gmail.com">
                    takethetechbd@gmail.com
                  </a>
                </p>
                <p>
                  <a href="mailto:takethetechcareer@gmail.com">
                    takethetechcareer@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>
                  Tel. + <a href="tel:+8801631137535">(880) 1631-137535</a>
                </p>
                <p>
                  Tel. + <a href="tel:+8801749549840">(880) 1749-549840</a>
                </p>
                {/* <p>
                  Tel. + <a href="tel:+880 1521-581783">(880) 1521-581783</a>
                </p> */}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Dhaka</h3>
                <p>Panthapath, Green Road, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <a href="https://wa.me/+8801631137535">
                  <h3>Live Chat</h3>
                  <p>live chat all the time with our company 24/7</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
