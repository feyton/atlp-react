import React, { Component, useEffect } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Category from "../components/Category";
import Post from "../components/Post";
import { useState } from "react";
import { dbPosts } from "../base/db";
import api from "../base/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pagination(pageData) {
  const [page, setPage] = useState(pageData);
  return (
    <div class="pagination">
      <span class="active">1</span>
    </div>
  );
}

function TrendingBlogs({ blogs }) {
  const [posts, setPosts] = useState(blogs);
  console.log(posts)
  return (
    <section class="blog-list">
      <div id="blog-div">
        {posts.map((post) => (
          <Post key={post._id} postData={post} />
        ))}
      </div>
      <Pagination></Pagination>
    </section>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Category></Category>
    </aside>
  );
}

const BlogPage = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    document.title = "ATLP| Blog";
    const fetchPosts = async () => {
      try {
        toast("Loading");
        console.log("loading")
        const response = await api.get("/api/v1/blogs");
        console.log(response.data.data)
        setPosts(response.data.data);
      } catch (error) {
        console.log(error);
        toast("Something gone wrong");
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <main>
        <div class="trending-blogs">
          <h2 class="head-title">Trending Posts</h2>
          <div class="blog-section">
            <TrendingBlogs blogs={posts}></TrendingBlogs>
            <Sidebar></Sidebar>
          </div>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
};

export default BlogPage;
