import React, { useState } from "react";
import { Link } from "react-router-dom";
import postImg from "../assets/ph.gif";

function Post({ postData }) {
  const [post, setPost] = useState(postData);
  const date = new Date(post.date);
  return (
    <>
      <div class="blog-card">
        <div class="blog-image">
          <img src={post.photoURL} alt="" />
          <div class="date-info">
            <h2>
              {date.getDate()}-{date.toString().split(" ")[1]}
            </h2>
            <hr />
            <h2>{date.getFullYear()}</h2>
          </div>
        </div>
        <div class="blog-info">
          <Link to={`/blog/${post.slug}`} class="title btn-more">
            <h2>{post.title}</h2>
          </Link>
          <p>{post.summary}</p>
          <br />
          <Link to={`/blog/${post.slug}`} class="btn btn-primary">
            Read more&nbsp;<i class="fa fa-fighter-jet" aria-hidden="true"></i>
          </Link>
          <br />
        </div>
        <br />
      </div>
      <hr />
    </>
  );
}

export default Post;
