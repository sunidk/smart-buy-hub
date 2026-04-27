import { useEffect, useState, useMemo, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Products.css";

const categories = [
  "All",
  "Clothes",
  "Shoes",
  "Beauty",
  "Accessories",
  "Home Decor"
];

const ROWS_PER_PAGE = 2;

const Products = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [colCount, setColCount] = useState(4);
  const gridRef = useRef(null);

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

  useEffect(() => {
    if (!gridRef.current) return;

    const measure = () => {
      const computed = window.getComputedStyle(gridRef.current);
      const cols = computed.gridTemplateColumns.split(" ").filter(Boolean).length;
      if (cols > 0) setColCount(cols);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [loading]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, search]);

  const itemsPerPage = colCount * ROWS_PER_PAGE;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [];
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    return pages;
  };

  return (
    <div className="products-page">
      <div className="top-bar">
        <h2>Products</h2>
        {!loading && (
          <span className="product-count">{filteredProducts.length} items</span>
        )}
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
          <div className="grid" ref={gridRef}>
            {pagedProducts.map((p, index) => (
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
                  {p.description && (
                    <p className="card-desc">{p.description}</p>
                  )}
                  <div className="card-bottom">
                    <span className="price">₹{p.price}</span>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="buy-btn"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!loading && filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            className="page-btn nav-btn"
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {getPageNumbers().map((page, i) =>
            page === "..." ? (
              <span key={`ellipsis-${i}`} className="page-ellipsis">…</span>
            ) : (
              <button
                key={page}
                className={`page-btn${currentPage === page ? " active" : ""}`}
                onClick={() => goTo(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className="page-btn nav-btn"
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}

      <div className="footer">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
        </span>
      </div>
    </div>
  );
};

export default Products;
