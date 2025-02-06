import type React from "react";
import { useState } from "react";
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2 style={{"fontWeight":"700"}}>SRI VARI ELECTRICALS</h2>
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
