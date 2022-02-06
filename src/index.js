import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";

import App from "./App";
import Login from "./components/Login";
import Signup from "./pages/signup";
import BlogPage from "./pages/blog";
import PostDetail from "./pages/detail"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App></App>}></Route>
        <Route path="/blog" exact element={<BlogPage/>}></Route>
        <Route path="/blog/:slug" element={<PostDetail/>}></Route>

        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/work" element={<WorkPage></WorkPage>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
