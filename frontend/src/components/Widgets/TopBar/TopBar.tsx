import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="Navbar1-box">
      <div className="Navbar1-box-subbox1">
        <ul>
          <li>
            <a>Mon - Sat : 9:00 AM to 7:00 PM</a>
          </li>
        </ul>
      </div>
      <div className="Navbar1-box-subbox1 Navbar1-box-subbox3">
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box">
                <FaFacebook size={13} className="text-white" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box">
                <FaLinkedin size={13} className="text-white" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box">
                <FaTwitter size={13} className="text-white" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box">
                <FaInstagram size={13} className="text-white" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
