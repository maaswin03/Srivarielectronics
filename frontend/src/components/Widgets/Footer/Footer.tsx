import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="Footer-1">
        <div className="Footer-2">
          <div className="Footer-3 Footer-4">
            <h1>Sri Vari Electricals</h1>
            <p>
              Providing top-quality electrical contracting services with
              reliability and excellence.
            </p>
            <p>
              <strong>Phone : </strong>
              <a href="tel:+919843079070">+91 98430 79070</a>
            </p>
            <p>
              <strong>Email : </strong>
              <a href="mailto:srivari.electricals24@gmail.com">
                srivari.electricals24@gmail.com
              </a>
            </p>
            <p>
              <strong>Location : </strong> 46C 8th Street,Tatabad,
              Coimbatore-641012
            </p>
          </div>

          <div className="Footer-3 Footer-5">
            <h1>Quick Links</h1>
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
          </div>
          <div className="Footer-3 Footer-5">
            <h1>Services</h1>
            <ul>
              <li>
                <Link to="/#services" smooth={true} duration={500} offset={-70}>
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70}>
                  Industrial
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70}>
                  Residential
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer-3 Footer-6">
            <iframe
              className="Footer-17"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250639.21365611948!2d76.65855829453125!3d11.020783300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8592ab939726b%3A0xa6904ca6d25ea3e9!2sSrivari%20Electricals!5e0!3m2!1sen!2sin!4v1739263402778!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location"
            ></iframe>
          </div>
        </div>
        <div className="Footer-15">
          &copy; {new Date().getFullYear()} Sri Vari Electronics. All rights reserved. Designed by Protowiz private limited
        </div>
      </div>
    </>
  );
};

export default Footer;
