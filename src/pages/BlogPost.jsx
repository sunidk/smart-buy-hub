import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogPost, blogPosts } from "../data/blogPosts";
import "./BlogPost.css";

const renderContent = (raw) => {
  const lines = raw.split("\n");
  const elements = [];
  let listItems = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length) {
      elements.push(<ul key={key++}>{listItems}</ul>);
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={key++}>{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={key++}>{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("- ")) {
      listItems.push(<li key={key++}>{trimmed.slice(2)}</li>);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      flushList();
      elements.push(
        <p key={key++} className="bp-bold-line">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      const formatted = parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      );
      elements.push(<p key={key++}>{formatted}</p>);
    }
  });

  flushList();
  return elements;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/guides" replace />;

  const related = blogPosts.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 2);

  return (
    <div className="bp-page">
      <div className="bp-inner">
        <div className="bp-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/guides">Guides</Link>
          <span>›</span>
          <span className="bp-crumb-current">{post.category}</span>
        </div>

        <header className="bp-header">
          <span className="bp-category-badge">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="bp-meta">
            <span>{post.date}</span>
            <span className="bp-meta-dot">·</span>
            <span>{post.readTime}</span>
          </div>
          <p className="bp-desc">{post.description}</p>
        </header>

        <div className="bp-hero-img">
          <img src={post.image} alt={post.title} />
        </div>

        <article className="bp-content">
          {renderContent(post.content)}
        </article>

        <div className="bp-back-wrap">
          <Link to="/guides" className="bp-back-btn">
            ← Back to All Guides
          </Link>
        </div>

        {related.length > 0 && (
          <section className="bp-related">
            <h4>Related Guides</h4>
            <div className="bp-related-grid">
              {related.map((r) => (
                <Link to={`/guides/${r.slug}`} className="bp-related-card" key={r.id}>
                  <img src={r.image} alt={r.title} loading="lazy" />
                  <div className="bp-related-body">
                    <span className="bp-related-cat">{r.category}</span>
                    <p>{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
