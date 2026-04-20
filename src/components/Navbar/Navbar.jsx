import { Link, useLocation } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import logo from "../../assets/smart-buy-hub.png";
import "./Navbar.css";

const Navbar = ({ search, setSearch }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" aria-label="Smart Buy Hub home">
          <img src={logo} alt="Smart Buy Hub" />
          <span>Smart Buy Hub</span>
        </Link>

        {isHome && (
          <div className="search-wrapper">
            <HiSearch className="search-icon" />
            <input
              type="text"
              className="nav-search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
