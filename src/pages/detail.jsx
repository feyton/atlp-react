import React, { Component } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Sidebar } from "./blog";
import { useParams, Link } from "react-router-dom";
import { dbPosts } from "../base/db";
import parse from "html-react-parser";
import "../css/detail.scss";

function CommentForm() {
  return (
    <div class="comments">
      <h3>Add a comment</h3>
      <div class="comment-form logged-in">
        <form action="#comment" id="comment-form">
          <textarea
            name="body"
            id="comment-body"
            cols="30"
            rows="3"
            placeholder="Type your comment here"
            required
            minLength="10"
            maxLength="200"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div class="comment-login logged-out">
        <br />
        <br />
        <h4>You need account to comment</h4>
        <div class="button-group">
          <Link to="/login" class="modal-link" target="login-modal">
            LOGIN
          </Link>
          &nbsp;&nbsp;OR
          <Link to="/signup">SIGNUP</Link>
        </div>
      </div>
    </div>
  );
}

function CommentSection() {
  return (
    <div class="comment-list">
      <h2>Comments</h2>
      <div class="comment-div">
        <ul id="comment-div">
          <h3>Be the first to comment</h3>

          <button class="btn btn-primary center">LOAD MORE</button>
        </ul>
      </div>
    </div>
  );
}

function AuthorDiv(author) {
  return (
    <div class="author author-card" id="author-div">
      <div class="author-avatar">
        <img src={author.image} alt="" />
      </div>

      <h2>{author.firstName}</h2>
      <p>{author.bio}</p>
      <button class="coffee">
        <span>Follow</span>
        <span>
          <a href={author.facebook} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href={author.twitter} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </span>
      </button>
    </div>
  );
}

function PostDetail(posts) {
  const { slug } = useParams();
  const post = dbPosts.find((post) => post.slug.toString() === slug);
  const date = new Date(post.date);
  document.title = `Blog| ${post.slug}`;
  return (
    <>
      <Navigation></Navigation>
      <main>
        <div class="trending-blogs">
          <div class="blog-section">
            <section class="blog-list">
              {post && (
                <>
                  <div class="blog-card " id="blog-div">
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
                      <h2>{post.title}</h2>
                      <div class="blog-detail-content">
                        {parse(post.content)}
                      </div>
                    </div>
                    <br />
                  </div>
                  <hr />
                </>
              )}

              <CommentForm></CommentForm>
            </section>

            <Sidebar>
              <AuthorDiv author={post.author}></AuthorDiv>
            </Sidebar>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default PostDetail;
