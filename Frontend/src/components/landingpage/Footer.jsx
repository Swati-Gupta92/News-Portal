import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mx-auto" >
      <div className="container">
        <div className="row gy-4">

          {/* Left Column */}
          <div className="col-md-4 text-center text-md-start">
            <h2 className="mb-3">
              <span className="text-white">NBC</span>{" "}
              <span className="text-danger fw-bold">News</span>
            </h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="img-fluid mb-2"
              style={{ maxWidth: "200px" }}
            />
            <br />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="img-fluid"
              style={{ maxWidth: "200px" }}
            />
          </div>

          {/* Center Column */}
          <div className="col-md-5 text-center text-md-start">
            <p className="small">
              NBC News creates and publishes online news and information
              content – which informs, educates and helps users make better life
              decisions.
            </p>
            <p className="small">
              NBC News content focuses on creating and sharing helpful,
              relevant, and factual content that inspires and educates.
            </p>
            <p className="small">
              NBC News strives to provide informative stories that solve
              problems and entertain readers.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5 mt-3">
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className="col-md-3">
            <div className="ratio ratio-4x3 rounded overflow-hidden">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.134916184848!2d80.95457077539157!3d26.86640596225752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a6823f7399%3A0xb6c09f46dff68864!2sVijay%20Paradise%20Hotel!5e0!3m2!1sen!2sin!4v1659865795075!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;