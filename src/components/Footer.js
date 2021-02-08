
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Falls Church, VA</p>
            </div>
            <div className="d-flex">
              <a href="tel:571-296-0154">(571)296-0154</a>
            </div>
            <div className="d-flex">
              <p>abwebdev358@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="" className="footer-nav">
                  About Me
                </a>
                <br />
                <a href="" className="footer-nav">
                  Skills
                </a>
              </div>
              <div className="col">
                <a href="" className="footer-nav">
                  Portfolio
                </a>
                <br />
                <a href="" className="footer-nav">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
              <div className="d-flex justify-content-center">
                  <FacebookShareButton
                  url={""}
                  quote={"Fullstack Developer"}
                  hashtag="#abwebdev">
                      <FacebookIcon className="mx-3" size={36} />
                  </FacebookShareButton>
                  <TwitterShareButton
                  url={""}
                  quote={"Fullstack Developer"}
                  hashtag="#abwebdev">
                      <TwitterIcon className="mx-3" size={36} />
                  </TwitterShareButton>
                  <RedditShareButton
                  url={""}
                  quote={"Fullstack Developer"}
                  hashtag="#abwebdev">
                      <RedditIcon className="mx-3" size={36} />
                  </RedditShareButton>
                  <LinkedinShareButton
                  url={""}
                  quote={"Fullstack Developer"}
                  hashtag="#abwebdev">
                      <LinkedinIcon className="mx-3" size={36} />
                  </LinkedinShareButton>

              </div>
              <p className="pt-3 text-center">
                  Copyright&copy; 
                  {new Date().getFullYear()}&nbsp;webDev358 | All Rights Reserved
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
