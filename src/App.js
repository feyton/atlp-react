import React, { Component } from "react";
import HomePage from "./pages/home";
import "./css/main.scss"
import {Route, Swith, useHistory} from "react-router-dom";
import {useState, useEffect} from "react"
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <HomePage/>
        );
    }
}
 
export default Home;

