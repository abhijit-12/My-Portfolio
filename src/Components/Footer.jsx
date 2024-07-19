import React from "react";
import Typewriter from "typewriter-effect";

function Footer() {
  return (
    <>
      <div className="footer-section" data-aos="fade-right">
      <div className="containe-fluid home-container" >
        <div className="container home-content">
          <h2 data-aos="zoom-in">I AM A</h2>
          <h1 data-aos="fade-left">
            <Typewriter 
              options={{
                strings: [
                  "Full Stack Devloper",
                  "Mern Stack Devloper",
                  "React JS Devloper",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/* <div className="home-buttons">
            <button class="glow-on-hover">Hire Me</button>
            </div> */}
          </div>
        </div>
        {/* <div className="dexian-gallary">
          <div className="img-gap1" data-aos="zoom-in-down">
            <img src="./assets/images/img30.jpg" alt="" />
          </div>
          <div className="img-gap2" data-aos="zoom-in-down">
            <img src="./assets/images/img28.jpg" alt="" />
          </div>
          <div className="img-gap3" data-aos="zoom-in">
            <img src="./assets/images/img8.jpg" alt="" />
          </div>
          <div className="img-gap4" data-aos="zoom-in-up">
            <img src="./assets/images/img11.jpg" alt="" />
          </div>
          <div className="img-gap5" data-aos="zoom-in-up">
            <img src="./assets/images/img6.jpg" alt="" />
          </div>
        </div>

        <div className="footer-caption" data-aos="fade-left">
          <h1> Lorem ipsum dolor sit amet.</h1>
        </div> */}

        {/* <div className="totoro-1png">
          <img src="./assets/images/totoro1.gif" alt="" />
        </div> */}
        <div className="footer-btn">
          <div className="info">
            <span>Copyright@2024 by Abhijit Das || All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
