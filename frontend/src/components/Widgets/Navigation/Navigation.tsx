import { useState } from "react";
import { Link } from "react-scroll";
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
          <Link to="hero" smooth={true} duration={500} offset={-70}>
            Home
          </Link>

          <Link to="services" smooth={true} duration={500} offset={-70}>
            Services
          </Link>

          <Link to="hero" smooth={true} duration={500} offset={-70}>
            Products
          </Link>

          <Link to="about" smooth={true} duration={500} offset={-70}>
            About Us
          </Link>

          <Link to="gallery" smooth={true} duration={500} offset={-70}>
            Gallery
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
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
              <Link to="hero" smooth={true} duration={500} offset={-70}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} offset={-70}>
                Services
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-70}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500} offset={-70}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
