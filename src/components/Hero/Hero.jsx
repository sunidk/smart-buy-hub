import heroImg from "../../assets/hero.png";
import { HiArrowRight } from "react-icons/hi";
import "./Hero.css";

const DEALS = [
  { title: "Best Kurthas",  sub: "Under ₹499", cat: "Kurta",  budget: 499, color: "linear-gradient(135deg,#831843,#be185d)" },
  { title: "Best Shirts",   sub: "Under ₹499", cat: "Shirt",  budget: 499, color: "linear-gradient(135deg,#164e63,#0e7490)" },
  { title: "Best T-Shirts", sub: "Under ₹399", cat: "TShirt", budget: 399, color: "linear-gradient(135deg,#7c2d12,#c2410c)" },
  { title: "Best Shoes",    sub: "Under ₹999", cat: "Shoes",  budget: 999, color: "linear-gradient(135deg,#312e81,#4338ca)" },
];

const Hero = ({ onDealClick, products = [] }) => {
  const usedIds = new Set();
  const dealItems = DEALS.map((d) => {
    const scopedProducts = products
      .filter((p) => p.category?.toLowerCase() === d.cat.toLowerCase())
      .sort((a, b) => Number(a.price) - Number(b.price));
    const budgetMatches = products
      .filter((p) => Number(p.price) <= d.budget)
      .sort((a, b) => Number(a.price) - Number(b.price));
    const item =
      scopedProducts.find((p) => !usedIds.has(p.id)) ||
      budgetMatches.find((p) => !usedIds.has(p.id)) ||
      products.find((p) => !usedIds.has(p.id)) ||
      products[0] ||
      null;
    if (item?.id) usedIds.add(item.id);
    return { ...d, item };
  });

  return (
    <section className="hero">
      <div className="hero-img-wrap">
        <img src={heroImg} alt="Smart Buy Hub Hero" className="hero-image" />
      </div>

      <div className="hero-deals">
        {dealItems.map((d) => (
          <button
            key={d.title}
            className="hero-deal-card"
            style={{ background: d.color }}
            onClick={() => onDealClick?.(d.cat, d.budget)}
          >
            <div className="deal-card-text">
              <h4>{d.title}</h4>
              <p>{d.sub}</p>
              <span className="deal-link">View Products <HiArrowRight /></span>
            </div>
            {d.item?.image && (
              <img src={d.item.image} alt={d.item.title} className="deal-img" loading="lazy" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
