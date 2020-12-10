import React from "react";
import foodImgMobile from "../Images/foodImgsMobile.png";
import Navbar from "./navbar";
import Tilt from "react-parallax-tilt";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => (
  <div>
    <div className="about" id="about">
      <div className="about__blurb">
        <Navbar />
        <div>
          <p className="about__text">
            We help users get a better idea of what really goes into those
            delicious-looking food photos on Instagram...{" "}
          </p>
          <div className="about__imgMobile">
            <img src={foodImgMobile} />
          </div>
          <Tilt>
            <AnchorLink href="#route" className="about__button">
              Try it out!
            </AnchorLink>
          </Tilt>
        </div>
      </div>
      <div className="about__img">
        <img src={foodImgMobile} />
      </div>
    </div>

    {/* <img
            src={foodImg}
            alt="Collage of many cuisines."
            className="about__img"
          /> */}
  </div>
);

export default About;
