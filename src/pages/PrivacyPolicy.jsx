import "./About.css";

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Privacy Policy</h1>
        <p className="lead">
          Last updated: April 20, 2026. Your privacy matters to us. This page explains
          what information Smart Buy Hub collects and how it is used.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            Smart Buy Hub does not require you to create an account or provide any personal
            information to browse the site. We do not collect your name, email address, or
            payment details.
          </p>
          <p style={{ marginTop: "10px" }}>
            Like most websites, our hosting provider and analytics services may automatically
            collect non-personal technical data such as your browser type, device type,
            referring URL, pages visited, and approximate location (country/city level) via
            cookies and server logs.
          </p>
        </section>

        <section>
          <h2>2. Cookies</h2>
          <p>
            We use cookies to improve your experience on our site. Cookies are small files
            stored on your device. We use two types:
          </p>
          <ul style={{ marginTop: "10px" }}>
            <li><strong>Essential cookies</strong> — required for the site to function correctly.</li>
            <li><strong>Advertising cookies</strong> — used by Google AdSense to show relevant ads (see section 3).</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            You can disable cookies in your browser settings, though some features of the
            site may not work as intended.
          </p>
        </section>

        <section>
          <h2>3. Google AdSense & Advertising</h2>
          <p>
            Smart Buy Hub uses Google AdSense to display advertisements. Google and its
            partners may use cookies to serve ads based on your prior visits to this site
            or other sites on the internet. Google's use of advertising cookies enables it
            and its partners to serve ads to you based on your visit to Smart Buy Hub and/or
            other sites.
          </p>
          <p style={{ marginTop: "10px" }}>
            You may opt out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . For more information on how Google uses data, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section>
          <h2>4. Affiliate Links</h2>
          <p>
            Some links on Smart Buy Hub are affiliate links. If you click an affiliate link
            and make a purchase, we may receive a small commission. This does not affect the
            price you pay. We only recommend products we believe are of genuine value.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Links</h2>
          <p>
            Our site contains links to third-party retailer websites. We are not responsible
            for the privacy practices or content of those sites. We encourage you to review
            the privacy policy of any site you visit.
          </p>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>
            Smart Buy Hub is not directed at children under the age of 13. We do not
            knowingly collect any personal information from children.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            reflected on this page with an updated date at the top. Continued use of the
            site after changes constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
