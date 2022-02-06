import React, { Component, useState } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ServiceDiv from "../components/services";
import Feed from "../components/Feed";

import "../css/util.scss";
import "../css/main.scss";

class HeroDiv extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text">
          <h3>Your Dream</h3>
          <h2>Made a reality</h2>
        </div>

        <button className="btn-explore all-caps">Explore</button>
      </div>
    );
  }
}

class PostSection extends Component {
  state = {};
  render() {
    return <section></section>;
  }
}

class TrendingPosts extends Component {
  state = {};
  render() {
    return <PostSection />;
  }
}

class HomePage extends Component {
  state = {};
  componentDidMount() {
    document.title = "ATLP| Home";
  }
  render() {
    return (
      <>
        <Navigation />
        <main>
          <HeroDiv></HeroDiv>
          
          <ServiceDiv />
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default HomePage;
