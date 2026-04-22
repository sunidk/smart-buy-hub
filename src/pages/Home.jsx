import { useEffect, useState, useMemo, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Hero from "../components/Hero/Hero";
import CategoryRow from "../components/CategoryRow/CategoryRow";
import ProductCard from "../components/ProductCard/ProductCard";
import { HiArrowRight } from "react-icons/hi";
import "./Home.css";

const FALLBACK_PRODUCTS = [
  {
    id: "fallback-1",
    title: "Men Premium Cotton Shirt",
    price: 649,
    originalPrice: 899,
    discount: "-28%",
    rating: 4.5,
    ratingCount: 128,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
    link: "#",
    category: "Clothes",
  },
  {
    id: "fallback-2",
    title: "Classic Running Shoes",
    price: 799,
    originalPrice: 1099,
    discount: "-27%",
    rating: 4.3,
    ratingCount: 94,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    link: "#",
    category: "Shoes",
  },
  {
    id: "fallback-3",
    title: "Glow Hydration Serum",
    price: 399,
    originalPrice: 549,
    discount: "-25%",
    rating: 4.7,
    ratingCount: 211,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    link: "#",
    category: "Beauty",
  },
  {
    id: "fallback-4",
    title: "Smart Watch Fitness Edition",
    price: 1499,
    originalPrice: 1999,
    discount: "-25%",
    rating: 4.6,
    ratingCount: 86,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    link: "#",
    category: "Accessories",
  },
  {
    id: "fallback-5",
    title: "Minimal Desk Plant Decor",
    price: 249,
    originalPrice: 349,
    discount: "-29%",
    rating: 4.2,
    ratingCount: 53,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    link: "#",
    category: "Home Decor",
  },
];

const BUDGET_TIERS = [
  { max: 299, color: "linear-gradient(135deg,#064e3b,#065f46)" },
  { max: 499, color: "linear-gradient(135deg,#78350f,#92400e)" },
  { max: 999, color: "linear-gradient(135deg,#1e3a5f,#1e40af)" },
];

const getMidnightCountdown = () => {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  const diff = Math.max(nextMidnight.getTime() - now.getTime(), 0);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
};

const BudgetCard = ({ max, color, products, active, onClick }) => {
  let item = null;

  if (max === 299) {
    item = products.find((p) => Number(p.price) <= 299) || products[0];
  } else if (max === 499) {
    item =
      products.find(
        (p) => Number(p.price) > 299 && Number(p.price) <= 499
      ) ||
      products.find((p) => Number(p.price) <= 499) ||
      products[0];
  } else if (max === 999) {
    item =
      products.find(
        (p) => Number(p.price) > 499 && Number(p.price) <= 999
      ) ||
      products.find((p) => Number(p.price) <= 999) ||
      products[0];
  } else {
    item = products.find((p) => Number(p.price) <= max) || products[0];
  }

  return (
    <div
      className={`budget-card ${active ? "budget-card-active" : ""}`}
      style={{ background: color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="budget-card-text">
        <h4>Under ₹{max}</h4>
        <p>Best Deals</p>
        <span className="budget-link">View Products <HiArrowRight /></span>
      </div>
      {item?.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState(null);
  const [countdown, setCountdown] = useState(getMidnightCountdown);
  const trendingRef = useRef(null);
  const catRef = useRef(null);

  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((snap) =>
        setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      )
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getMidnightCountdown());
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setBudgetFilter(null);
  };

  const handleBudgetClick = (max) => {
    setBudgetFilter((prev) => (prev === max ? null : max));
    setTimeout(
      () => trendingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50
    );
  };

  const sourceProducts = products.length > 0 ? products : FALLBACK_PRODUCTS;

  const filtered = useMemo(() => {
    let r = [...sourceProducts];
    if (activeCategory !== "All") {
      r = r.filter(
        (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    if (budgetFilter) {
      r = r.filter((p) => Number(p.price) <= budgetFilter);
    }
    if (search?.trim()) {
      const q = search.toLowerCase();
      r = r.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.name?.toLowerCase().includes(q)
      );
    }
    return r;
  }, [sourceProducts, search, activeCategory, budgetFilter]);

  const trendingHeading = budgetFilter
    ? `Products under ₹${budgetFilter}`
    : "🔥 Trending Today";

  return (
    <main className="home">
      <Hero
        onShopNow={() => trendingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        onExploreCat={() => catRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
      />

      {/* ── CATEGORIES ── */}
      <div ref={catRef}>
        <CategoryRow active={activeCategory} onSelect={handleCategorySelect} />
      </div>

      {/* ── TRENDING + BUDGET SIDEBAR ── */}
      <section className="home-section" ref={trendingRef}>
        <div className="section-header">
          <h2 className="section-title">{trendingHeading}</h2>
          {budgetFilter && (
            <button className="clear-filter-btn" onClick={() => setBudgetFilter(null)}>
              Clear ✕
            </button>
          )}
        </div>

        <div className="trending-layout">
          <div className="trending-grid">
            {loading
              ? Array(8).fill(0).map((_, i) => <div key={i} className="pcard-skeleton" />)
              : filtered.length === 0
              ? <p className="no-products">No products found.</p>
              : filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
          </div>

          <aside className="budget-sidebar">
            <h3 className="budget-sidebar-title">Best Under Budget</h3>
            {BUDGET_TIERS.map(({ max, color }) => (
              <BudgetCard
                key={max}
                max={max}
                color={color}
                products={sourceProducts}
                active={budgetFilter === max}
                onClick={() => handleBudgetClick(max)}
              />
            ))}
          </aside>
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="promo-section">
        <div className="promo-card promo-new-arrivals">
          <div>
            <span className="promo-tag">New Arrivals</span>
            <h3>Latest Products<br />Just For You!</h3>
            <button
              className="promo-btn"
              onClick={() =>
                trendingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Shop Now <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="promo-card promo-limited">
          <div>
            <span className="promo-tag">Limited Time Deals</span>
            <h3>Hurry Up! Limited<br />Stock Available</h3>
            <div className="countdown">
              <span><b>{String(countdown.hours).padStart(2, "0")}</b><small>Hours</small></span>
              <span><b>{String(countdown.minutes).padStart(2, "0")}</b><small>Mins</small></span>
              <span><b>{String(countdown.seconds).padStart(2, "0")}</b><small>Secs</small></span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
