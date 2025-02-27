import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.classList.toggle("menu-open", !prev);
      return !prev;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="navbar-1">
        <div className="navbar-2 navbar-3">
          <a href="/" id="Title">
            Sri Vari Electricals
          </a>
        </div>

        <div className="navbar-2 navbar-3 navbar-5">
          {["services", "aboutUs" ,"products", "gallery", "contactUs"].map(
            (section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={900}
                offset={-70}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          )}
        </div>
      </div>

      <header>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "animate" : ""}`}></div>
          </div>
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {["services", "aboutUs" ,"products", "gallery", "contactUs"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
