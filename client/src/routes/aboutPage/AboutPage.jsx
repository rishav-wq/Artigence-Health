import React from "react";
import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Empowering Healthcare with AI-driven Solutions</p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          We build cost-effective AI-based diagnostic solutions for healthcare to help people get the best diagnosis no matter where they are on this planet. Currently, we're focusing on pathology.
        </p>

        <h2>Our Product</h2>
        <p>
          Our first product is a device for routine microscopy, mainly targeted to small and mid-scale pathologies and hospitals. It consists of:
        </p>
        <ul>
          <li>An imaging solution that digitizes microscopes</li>
          <li>AI-powered applications</li>
          <li>Dedicated hardware for diagnosis, locally independent of the internet</li>
        </ul>

        <h2>Key Benefits</h2>
        <p>
          Our product provides:
        </p>
        <ul>
          <li>Cost-effective diagnosis</li>
          <li>More accurate results</li>
          <li>Increased throughput</li>
          <li>A single device for multiple applications of routine microscopy</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
