import { AiFillStar } from "react-icons/ai";
import "./ProductCard.css";

const ProductCard = ({ product: p, index = 0 }) => {
  const price = Number(p.price) || 0;
  let fallbackDiff = 200;
  if (price <= 299) {
    fallbackDiff = 200;
  } else if (price <= 499) {
    fallbackDiff = 300;
  } else if (price <= 999) {
    fallbackDiff = 500;
  }
  const fallbackOriginalPrice = price > 0 ? price + fallbackDiff : null;
  const originalPrice = Math.max(
    Number(p.originalPrice) || 0,
    fallbackOriginalPrice || 0
  ) || null;
  const discountLabel =
    p.discount ||
    (originalPrice && price
      ? `-${Math.round(((originalPrice - price) / originalPrice) * 100)}%`
      : "-25%");

  return (
  <div
    className="pcard"
    style={{ "--delay": `${Math.min(index * 0.05, 0.4)}s` }}
  >
    <div className="pcard-topline">
      <span className="pcard-badge">{discountLabel}</span>
    </div>

    <a href={p.link} target="_blank" rel="noreferrer" className="pcard-img-wrap">
      <img
        src={p.image || "https://via.placeholder.com/300"}
        alt={p.title}
        loading="lazy"
        decoding="async"
      />
    </a>

    <div className="pcard-body">
      <h3>{p.title}</h3>

      {p.rating && (
        <div className="pcard-rating">
          <AiFillStar />
          <span>{p.rating}</span>
          {p.ratingCount && (
            <span className="pcard-rating-count">({p.ratingCount})</span>
          )}
        </div>
      )}

      <div className="pcard-price-row">
        <span className="pcard-price">₹{p.price}</span>
        {originalPrice && (
          <span className="pcard-original">₹{originalPrice}</span>
        )}
      </div>
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="pcard-btn"
      >
        Check Price
      </a>
    </div>
  </div>
  );
};

export default ProductCard;
