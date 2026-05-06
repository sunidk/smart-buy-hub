import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About Smart Buy Hub</h1>
        <p className="lead">
          Smart Buy Hub is your go-to destination for discovering the best deals on fashion,
          beauty, accessories, and home decor — all curated by hand, all in one place.
        </p>

        <section>
          <h2>What We Do</h2>
          <p>
            We manually curate hundreds of products from trusted Indian retailers so you
            don't have to spend hours searching. Every item on Smart Buy Hub is hand-picked
            for quality, value, and popularity. Whether you're looking for the latest outfit
            trends, skincare essentials, statement accessories, or stylish home decor, we've
            got you covered.
          </p>
          <p style={{ marginTop: "12px" }}>
            Unlike general shopping platforms that list millions of products, we keep our
            catalogue intentionally focused. The result: less noise, more signal. Instead of
            scrolling through hundreds of mediocre options, you see only the ones that actually
            deserve your attention.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Shopping online should be simple and enjoyable. Our mission is to bring you a
            clean, fast browsing experience with honest product listings — no spam, no dark
            patterns, just great products at great prices.
          </p>
          <p style={{ marginTop: "12px" }}>
            We believe that finding a well-priced, high-quality product shouldn't require
            hours of research, comparison, and second-guessing. Smart Buy Hub exists to make
            that process faster and more reliable — especially for budget-conscious shoppers
            who want genuine value, not inflated "deals."
          </p>
        </section>

        <section>
          <h2>How We Curate Products</h2>
          <p>
            Our curation process involves several steps:
          </p>
          <ul>
            <li><strong>Research:</strong> We browse retailer catalogues, trending categories, and seasonal bestsellers to identify candidate products.</li>
            <li><strong>Quality check:</strong> We evaluate product ratings, review quality (real vs. incentivised reviews), seller reputation, and return policies.</li>
            <li><strong>Price verification:</strong> We check whether the listed "original price" reflects the actual market price — not an inflated MRP used to fake discounts.</li>
            <li><strong>Category fit:</strong> We only add products that genuinely fit their category and are likely to be useful to our audience.</li>
            <li><strong>Regular updates:</strong> We review our catalogue weekly to remove out-of-stock items, update prices, and add fresh picks.</li>
          </ul>
        </section>

        <section>
          <h2>Categories We Cover</h2>
          <ul>
            <li><strong>Clothes</strong> — Tops, dresses, kurtas, casual wear, and more for every occasion and budget.</li>
            <li><strong>Shoes</strong> — Sneakers, heels, sandals, and footwear for every style, from everyday comfort to festive elegance.</li>
            <li><strong>Beauty</strong> — Skincare, makeup, haircare, and wellness products suited for Indian skin and climate.</li>
            <li><strong>Accessories</strong> — Jewellery, bags, watches, belts, sunglasses, and more to complete any outfit.</li>
            <li><strong>Home Decor</strong> — Cushions, wall art, planters, candles, and everything to make your space feel like home.</li>
          </ul>
        </section>

        <section>
          <h2>Our Buying Guides</h2>
          <p>
            Beyond product listings, we publish in-depth buying guides to help you make
            informed decisions. Whether you're trying to understand what skincare ingredients
            work best for Indian skin, how to style a kurta for every occasion, or what to
            look for when buying budget running shoes — our guides cover it honestly and
            practically.
          </p>
          <p style={{ marginTop: "12px" }}>
            <Link to="/guides">Browse all our buying guides →</Link>
          </p>
        </section>

        <section>
          <h2>Who We Are</h2>
          <p>
            Smart Buy Hub is built and maintained by a small, passionate team of shoppers
            who got frustrated with the noise of modern e-commerce. We're not a large
            corporation with automated systems — we're people who manually review what we
            list, write our own guides, and genuinely care about helping you find something
            worth buying.
          </p>
          <p style={{ marginTop: "12px" }}>
            We are based in India, shop from the same platforms our users do, and understand
            firsthand the challenges of finding quality products at honest prices online.
          </p>
        </section>

        <section>
          <h2>Affiliate Disclosure</h2>
          <p>
            Smart Buy Hub participates in affiliate marketing programs. When you click a
            product link and make a purchase, we may earn a small commission at no
            extra cost to you. This commission is what allows us to keep the site free,
            ad-supported rather than subscription-based, and regularly updated.
          </p>
          <p style={{ marginTop: "12px" }}>
            Our affiliate relationships do not influence which products we feature. We do
            not accept paid placements or sponsored listings — every product in our catalogue
            is there because we genuinely believe it offers value. If we wouldn't recommend
            it to a friend, it doesn't go on the site.
          </p>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>
            Have a suggestion, a product you'd like to see featured, feedback about our
            guides, or a general question? We read every message.{" "}
            <Link to="/contact">Head over to our Contact page</Link> and drop us a note —
            we typically respond within 1–2 business days.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
