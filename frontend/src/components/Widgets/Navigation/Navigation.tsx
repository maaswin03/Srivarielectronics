import { useState } from "react";
import "./Navigation.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* <TopBar /> */}
      <div className="navbar-1">
        <div className="navbar-2 navbar-3">
          <a href="/" id="Title">
            Sri Vari Electricals
          </a>
        </div>

        <div className="navbar-2 navbar-3 navbar-5">
          <a href="">Home</a>

          <a href="">Services</a>

          <a href="">About Us</a>

          <a href="">Gallery</a>

          <a href="">Contact Us</a>
        </div>
      </div>

      <header>
        <div
          className="hamburger-menu"
          onClick={toggleMenu}
          style={{ display: "flex" }}
        >
          <div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
          </div>
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
