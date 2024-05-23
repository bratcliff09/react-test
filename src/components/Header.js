import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav className="head">
      <Link to="/" className="logo">HUMBLE</Link>
      <div className="stuff">
        {/*<Link> treated as anchor tags by the css */}
        <a href="">Bundles</a>
        <Link to="/store">Store</Link>
        <a href="">Choice</a>
        <a href="">Blog</a>
        <a href="">About</a>
      </div>
      <div className="search-box">
        <form action="" id="search-form">
          <input type="text" name="" id="" placeholder="Search" />
          <button type="submit" class="search-btn">
            O
          </button>
        </form>
      </div>
      <div className="log-in">
        <a href="">Sign Up</a>
        <a href="">Log In</a>
      </div>
    </nav>
  );
}

export default Header;
