import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About Smart Buy Hub</h1>
        <p className="lead">
          Smart Buy Hub is your go-to destination for discovering the best deals on fashion,
          beauty, accessories, and home decor — all in one place.
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
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Shopping online should be simple and enjoyable. Our mission is to bring you a
            clean, fast browsing experience with honest product listings — no spam, no dark
            patterns, just great products at great prices.
          </p>
        </section>

        <section>
          <h2>Categories We Cover</h2>
          <ul>
            <li><strong>Clothes</strong> — Tops, dresses, kurtas, casual wear, and more for every occasion.</li>
            <li><strong>Shoes</strong> — Sneakers, heels, sandals, and footwear for every style.</li>
            <li><strong>Beauty</strong> — Skincare, makeup, haircare, and wellness products.</li>
            <li><strong>Accessories</strong> — Jewellery, bags, watches, belts, and more.</li>
            <li><strong>Home Decor</strong> — Cushions, wall art, planters, and everything to make your space feel like home.</li>
          </ul>
        </section>

        <section>
          <h2>Affiliate Disclosure</h2>
          <p>
            Smart Buy Hub participates in affiliate marketing programs. When you click a
            "Buy Now" link and make a purchase, we may earn a small commission at no
            extra cost to you. This helps us keep the site free and up-to-date. We only
            feature products we genuinely believe offer value.
          </p>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>
            Have a suggestion, a product you'd like to see featured, or a question?
            We'd love to hear from you. Head over to our{" "}
            <a href="/contact">Contact page</a> and drop us a message.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
