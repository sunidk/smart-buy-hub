import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import logo from "../../assets/smart-buy-hub.png";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link to="/" className="footer-logo">
          <img src={logo} alt="Smart Buy Hub" />
          <div>
            <span>SMART</span>
            <span>BUY HUB</span>
          </div>
        </Link>
        <p>
          Smart Buy Hub is your one-stop destination for curated deals on fashion,
          beauty, accessories &amp; home decor. We share affiliate links — you get
          the best price, we earn a small commission at no extra cost to you.
        </p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/share/1AsERjfH2r/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/_smart_buy_hub?igsh=MThjMGlxcGhqcnN4MQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://pin.it/nOHzbfQ6Z" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <FaPinterest />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-col">
        <h5>Quick Links</h5>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-col">
        <h5>Legal</h5>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/privacy-policy">Disclaimer</Link>
        <Link to="/privacy-policy">Affiliate Disclosure</Link>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Smart Buy Hub. All rights reserved.</p>
      <p>
        Product links on this site are affiliate links. We may earn a commission when
        you purchase through our links, at no extra cost to you.
      </p>
    </div>
  </footer>
);

export default Footer;
