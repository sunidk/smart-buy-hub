import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Products.css";

const categories = [
  "All",
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Grocery",
  "Sports",
  "Beauty",
  "Books",
  "Toys",
  "Accessories",
  "Home Decor",
  "Kitchen",
  "Fitness"
];

const Products = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snap = await getDocs(collection(db, "products"));
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilter !== "All") {
      result = result.filter(
        (p) => p.category?.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (search.trim()) {
      result = result.filter((p) =>
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [products, search, activeFilter]);

  return (
    <div className="products-page">
      <div className="top-bar">
        <h2>Products</h2>
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeFilter === cat ? "active" : ""}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="content">
        {loading ? (
          <div className="empty">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="empty">No products found</div>
        ) : (
          <div className="grid">
            {filteredProducts.map((p, index) => (
              <div
                className="card"
                key={p.id}
                style={{ "--delay": `${Math.min(index * 0.06, 0.5)}s` }}
              >
                <a href={p.link} target="_blank" rel="noreferrer">
                  <img
                    src={p.image || "https://via.placeholder.com/300"}
                    alt={p.title}
                    loading="lazy"
                  />
                </a>

                <div className="card-info">
                  <h3>{p.title}</h3>
                  <p>₹{p.price}</p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="arrow"
                  >
                    ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="footer">
        <span>Showing {filteredProducts.length} products</span>
      </div>
    </div>
  );
};

export default Products;
