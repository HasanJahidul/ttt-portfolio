import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";
import Footer from "../components/Layouts/Footer";

export default function Contact2() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactInfo />

      <ContactFormStyleTwo />

      <Footer />
    </>
  );
}
