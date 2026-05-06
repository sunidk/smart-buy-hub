import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Buying Guides &amp; Tips</h1>
        <p className="blog-subtitle">
          Honest, in-depth guides to help you shop smarter — from fashion and beauty
          to footwear and home decor.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/guides/${post.slug}`} className="blog-card" key={post.id}>
            <div className="blog-card-img-wrap">
              <img src={post.image} alt={post.title} loading="lazy" />
              <span className="blog-card-category">{post.category}</span>
            </div>
            <div className="blog-card-body">
              <h2>{post.title}</h2>
              <p className="blog-card-desc">{post.description}</p>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span className="blog-meta-dot">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
