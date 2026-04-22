import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { MdLocalOffer, MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import "./Hero.css";

const Hero = ({ onShopNow, onExploreCat }) => (
  <section className="hero">
    <div className="hero-inner">
      <div className="hero-content">
        <span className="hero-label">Smart Deals Of The Day</span>
        <h1>
          Save Up To <span className="hero-percent">70%</span>
          <br />On Trending Products
        </h1>
        <div className="hero-badges">
          <span><MdLocalOffer /> Best Prices</span>
          <span><MdVerified /> Top Quality</span>
          <span><AiFillStar /> Trusted Store</span>
        </div>
        <div className="hero-actions">
          <button className="hero-btn-primary" onClick={onShopNow}>
            Shop Now <HiArrowRight />
          </button>
          <button className="hero-btn-outline" onClick={onExploreCat}>
            Explore Categories
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orb" />
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-offer-badge">
          <span>LIMITED TIME</span>
          <span>OFFER</span>
        </div>
      </div>
    </div>

    <div className="hero-dots">
      <span className="hero-dot active" />
      <span className="hero-dot" />
      <span className="hero-dot" />
    </div>
  </section>
);

export default Hero;
