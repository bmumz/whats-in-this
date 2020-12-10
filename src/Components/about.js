import React, { Component } from "react";
import foodImg from "../Images/foodImg.png";
import Navbar from "./navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="about__blurb">
            <Navbar />
            <div>
              <p className="about__text">
                ...What's In This? is an ingredient prediction app!
                <br />
                <br />
                We help users get a better idea of what really goes into those
                delicious-looking food photos on Instagram...{" "}
              </p>
              <div className="about__imgMobile">
                <img src={foodImg} alt="5 images of different foods." />
              </div>
              <p className="grow ">
                <AnchorLink href="#route" className="about__button shadow-5 ">
                  Try it out!
                </AnchorLink>
              </p>
            </div>
          </div>
          <div className="about__img">
            <img src={foodImg} alt="5 images of different foods." />
          </div>
        </div>
      </div>
    );
  }
}
