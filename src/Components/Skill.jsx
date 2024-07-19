import React from "react";
import Links from "./Links";

function Skill() {
  return (
    <>
      <section className="skill-set">
        <div className="skill-set-header" data-aos="fade-right">
          <h1><span style={{color:"#cb413f"}} >Short</span>View</h1>
        </div>
        
        <div className="skill-22">
          <div className="cards-skill" data-aos="zoom-in">
        <a className="ancor-text" href="https://github.com/abhijit-12?tab=repositories">
            <div className="card-skill-img">
              <img
                src="https://www.zellusmarketing.com/wp-content/uploads/2021/06/Rocket-Digital-Marketing-Gif-1.gif"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Web Project</h2>
              <br />
              <h6>Github Repos</h6>
            </div>

            {/* <div className="sectiondetails-info">
              <h1>Web Dev</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae itaque dicta quisquam architecto modi enim
                praesentium eum. Dolorum, eveniet natus.
              </p>
            </div> */}
          </a>
          </div>

          <div className="cards-skill" data-aos="zoom-in">
          <a className="ancor-text" href="https://youtube.com/shorts/Yolac3QOhVw?si=ULeoE2tGsW_ICBoH">
            <div className="card-skill-img">
              <img src="https://media1.giphy.com/media/5YpDAIRBS2xJMBoF2p/giphy-preview.gif" alt="" />
            </div>
            <div className="card-info">
              {" "}
              <h2>Gamer</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>
            </a>
          </div>

          <div className="cards-skill" data-aos="zoom-in">
            <a className="ancor-text" href="https://www.instagram.com/abhijittttt_/">
            <div className="card-skill-img">
              <img
                src="https://i.pinimg.com/originals/bf/23/08/bf2308cd01fbd8fe43bf6ac3d864c03c.gif"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Fitness</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>
            </a>
          </div>

          <div className="cards-skill" data-aos="zoom-in">
          <a className="ancor-text" href="https://www.youtube.com/channel/UCC6XDWXlkqY_mZiEjfd4NGQ">
            <div className="card-skill-img">
              <img
                src="https://gifdb.com/images/high/youtube-red-icon-78u4fsgfpf41nvsp.gif"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Youtuber</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>
              </a>
          </div>
        </div>
  
        <Links/>
      </section>
    </>
  );
}

export default Skill;
