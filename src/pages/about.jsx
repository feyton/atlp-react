import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../css/about.css";
import pic1 from "../assets/fab-1.jpg";
import pic2 from "../assets/fab-2.jpg";
import skill1Img from "../assets/about.jpg";
import professionJPG from "../assets/skills.jpg";
import xpJPG from "../assets/profession.jpg";
import React, { useState, useEffect } from "react";

function HeroDiv() {
  return (
    <div class="about-hero">
      <div class="bg-light"></div>
      <div class="about-text">
        <h3>Meet</h3>
        <h2>Fabrice</h2>
      </div>
      <div class="picture">
        <img src={pic1} alt="fabrice" class="img" />
        <img src={pic2} alt="fabrice" class="img-1" />
      </div>
      <div class="scroll">
        <i class="fas fa-chevron-down fa-lg"></i>
      </div>
    </div>
  );
}

function Skill(skill) {
  return (
    <div id="owner-skills" class="about-info d-none">
      <div class="img-tab">
        <img src={skill.imgUrl} alt="" />
      </div>
      <div class="text">
        <h3>
          Who is <b>Fabrice?</b>{" "}
        </h3>
        <p>
          With a Bachelor degree from the <b>University of Rwanda</b>{" "}
        </p>
        <br />
        <p>
          A certificate from Africa's leading tech hub <b>Andela</b> , which
          train the best software Africa has to offer
        </p>
        <br />
        <p>
          Fabrice is a man of many <b>Talents</b>{" "}
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div class="request">
      <h2>Contact Us</h2>
      <div class="request-div">
        <div class="info-card">
          <h3>Drop By:</h3>
          <p>Use your location to get directions</p>
          <div class="map-holder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.125926884062!2d29.90834265784309!3d-1.702068318661967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3eb95044c45bb6f2!2zMcKwNDInMDcuNSJTIDI5wrA1NCczNC4wIkU!5e1!3m2!1sen!2srw!4v1640443460840!5m2!1sen!2srw"
              style={{ width: "100%", height: "300px", style: "border:0;" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="form-card">
          <form action="#request">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              id=""
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <p>
              By submitting this form, you agree with our terms and privacy
              policy.
            </p>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div class="skills-xp-profession">
        <ul class="drop-menu">
          <li
            class="drop-menu-item active"
            data-target="#owner-profession"
            id="#profession-li"
          >
            Profession<i class="fa fa-chevron-down"></i>
          </li>
          <li
            class="drop-menu-item"
            data-target="#owner-skills"
            id="#skills-li"
          >
            Skills<i class="fa fa-chevron-down"></i>
          </li>
          <li
            class="drop-menu-item"
            data-target="#owner-experience"
            id="#experience-li"
          >
            Experience<i class="fa fa-chevron-down"></i>
          </li>
        </ul>

        <div id="owner-skills" class="about-info d-none">
          <div class="img-tab">
            <img src={skill1Img} alt="" />
          </div>
          <div class="text">
            <h3>
              Who is <b>Fabrice?</b>{" "}
            </h3>
            <p>
              With a Bachelor degree from the <b>University of Rwanda</b>{" "}
            </p>
            <br />
            <p>
              A certificate from Africa's leading tech hub <b>Andela</b> , which
              train the best software Africa has to offer
            </p>
            <br />
            <p>
              Fabrice is a man of many <b>Talents</b>{" "}
            </p>
          </div>
        </div>

        <div class="about-info" id="owner-profession">
          <div class="img-tab">
            <img src={professionJPG} alt="" />
          </div>
          <div class="text">
            <h3>A man of many talents</h3>
            <p>Advanced skills in:</p>
            <ul>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>HTML
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>CSS
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>JavaScript
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>Python
              </li>
            </ul>
            <p>
              Fabrice, is the person you call when you want something not just
              done
              <b>But,</b>
            </p>
            <h4>DONE RIGHT</h4>
          </div>
        </div>
        <div id="owner-experience" class="about-info d-none">
          <div class="img-tab">
            <img src={xpJPG} alt="" />
          </div>
          <div class="text">
            <p>
              With over <b>3 Years</b> of experience developing software that
              solves real world problems.
            </p>
            <br />
            <p>My actions speaks louder than me...</p>
            <h3>Recent projects</h3>
            <ul>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>Isaniro Corp
              </li>
              <li>
                <i class="fa fa-check" aria-hidden="true"></i>Igiti Corp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <main>
        <HeroDiv></HeroDiv>
        <AboutMe></AboutMe>
        <ContactPage></ContactPage>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
