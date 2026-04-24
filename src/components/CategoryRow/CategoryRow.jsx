import "./CategoryRow.css";

const CATS = [
  { key: "All",         label: "All",        emoji: "🛍️" },
  { key: "Shirt",       label: "Shirts",     emoji: "👔" },
  { key: "TShirt",     label: "T-Shirts",   emoji: "👕" },
  { key: "Kurta",       label: "Kurtas",      emoji: "👗" },
  { key: "Western",     label: "Western",    emoji: "🧥" },
  { key: "Shoes",       label: "Shoes",      emoji: "👟" },
  { key: "Beauty",      label: "Beauty",     emoji: "💄" },
  { key: "Accessories", label: "Accessories",emoji: "⌚" },
  { key: "Home Decor",  label: "Home Decor", emoji: "🪴" },
];

const CategoryRow = ({ active, onSelect }) => (
  <section className="cat-row">
    <div className="cat-scroll">
      {CATS.map((c) => (
        <button
          key={c.key}
          className={`cat-item ${active === c.key ? "cat-active" : ""}`}
          onClick={() => onSelect(c.key)}
        >
          <span className="cat-emoji">{c.emoji}</span>
          <span className="cat-label">{c.label}</span>
        </button>
      ))}
    </div>
  </section>
);

export default CategoryRow;
