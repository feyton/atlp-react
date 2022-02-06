import React, { Component, useState } from "react";
import "../css/main.scss"
export default class ServiceDiv extends Component {
  state = {
    services: [
      {
        name: "Web design",
        img: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
        desc: "Beauty lies in the designs",
      },
      {
        name: "System automation",
        img: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
        desc: "Cut the boring tasks",
      },
      {
        name: "Web development",
        img: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
        desc: "We bring your web idea to life",
      },
    ],
  };
  render() {
    return (
      <div class="services">
        <h2>Our Services</h2>
        <p>We are here to make your ideas come to life.</p>
        <div class="services-list">
          {this.state.services.map((service) => (
            <div className="card service-card" key={service.name}>
              <img src={service.img} alt="" />
              <div class="container">
                <h4>{service.name}</h4>

                <p>{service.desc}</p>
              </div>
              <div class="footer">
                <button
                  class="request btn"
                  onClick="window.location.href='#our-work'"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
