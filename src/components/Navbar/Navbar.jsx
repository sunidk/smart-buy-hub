import { HiSearch } from "react-icons/hi";
import logo from "../../assets/smart-buy-hub.png";
import "./Navbar.css";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <img src={logo} alt="Smart Buy Hub" />
          <span>Smart Buy Hub</span>
        </div>

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
      </div>
    </div>
  );
};

export default Navbar;
