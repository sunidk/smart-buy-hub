import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Smart Buy Hub</span>
          <p>Curated deals on fashion, beauty &amp; home decor.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Smart Buy Hub. All rights reserved.
          Product links may be affiliate links — we earn a small commission
          at no extra cost to you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
