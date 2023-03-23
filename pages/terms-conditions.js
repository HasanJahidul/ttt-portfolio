import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function TermsConditions() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <div className="text-container ptb-100">
        <div className="container">
          This document outlines the terms and conditions between Take The Tech
          and its clients for the use of software and related services. By using
          the services provided by Take The Tech, you agree to be bound by these
          terms and conditions.
          <br></br>
          <br />
          <p
            style={
              // some mergin between the text and the title from left
              { marginLeft: "20px" }
            }
          >
            <b>Services Provided:</b> Take The Tech provides software
            development and related services to its clients. The services may
            include custom software development, website development, mobile
            application development, and other related services as agreed upon
            between Take The Tech and the client.
            <br></br>
            <b>Payment Terms:</b> Payments for services provided by Take The
            Tech must be made according to the agreed-upon payment schedule.
            Late payments may result in interest charges or suspension of
            services.
            <br></br>
            <b>Confidentiality:</b> Take The Tech agrees to maintain the
            confidentiality of all information provided by the client and to use
            the information only for the purpose of providing services to the
            client.
            <br></br>
            <b>Intellectual Property Rights:</b> The client retains all
            intellectual property rights to any software or other products
            developed by Take The Tech for the client. Take The Tech retains the
            right to use the technologies and processes developed during the
            course of providing services to the client for its own business
            purposes.
            <br></br>
            <b>Warranty:</b> Take The Tech warrants that the services provided
            will be performed in a professional and workmanlike manner. Take The
            Tech does not warrant that the software or other products developed
            for the client will be free from errors or defects.
            <br></br>
            <b>Limitation of Liability:</b> Take The Tech shall not be liable
            for any indirect, special, incidental, or consequential damages
            arising from the use of the services provided, including but not
            limited to loss of profits or revenue.
            <br></br>
            <b>Termination:</b> Either party may terminate this agreement at any
            time upon written notice. Upon termination, Take The Tech will
            return all confidential information in its possession to the client
            and cease use of such information.
            <br></br>
            <b>Dispute Resolution:</b> Any disputes arising from this agreement
            will be resolved through arbitration in accordance with the rules of
            the Bangladesh Arbitration Act.
            <br></br>
            <b>Governing Law:</b> This agreement shall be governed by and
            construed in accordance with the laws of Bangladesh.
          </p>
          <br></br>
          These terms and conditions may vary based on the specific needs of the
          software firm and its clients, and it's always best to have a lawyer
          review them to ensure they are legally sound and protect the interests
          of both parties.
        </div>
      </div>

      <Footer />
    </>
  );
}
