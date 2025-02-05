import type React from "react";
import { useState } from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src="/logo.svg" alt="Company Logo" /> */}
        <h2>Sri Vari Electricals</h2>
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
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="/about" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/" onClick={toggleMenu}>
            Gallery
          </a>
        </li>
        <li>
          <a href="/contact" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
