import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiSearch, HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/smart-buy-hub.png";
import "./Navbar.css";

const Navbar = ({ search, setSearch }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src={logo} alt="Smart Buy Hub" />
          <div className="logo-text">
            <span>SMART</span>
            <span>BUY HUB</span>
          </div>
        </Link>

        {/* center wrapper ensures true centering */}
        <div className="navbar-center">
          <div className="search-wrapper">
            <input
              type="text"
              className="nav-search"
              placeholder="Search best products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <HiSearch />
            </button>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={close}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={close}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={close}>Contact</Link>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && <button className="nav-backdrop" aria-label="Close menu" onClick={close} />}
    </header>
  );
};

export default Navbar;
