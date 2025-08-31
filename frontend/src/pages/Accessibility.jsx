import React from 'react';
import './Accessibility.css';

const Accessibility = () => {
  return (
    <div className="accessibility-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Accessibility Statement</h1>
          <p className="intro-text">
            Nari Shakti Connect is committed to ensuring digital accessibility for women of all abilities. 
            We continually improve the user experience for everyone and apply relevant accessibility standards 
            to make our platform inclusive and empowering for all women.
          </p>
        </header>

        <main className="content-grid">
          <section className="accessibility-card">
            <h2 className="card-title">Text & Readability</h2>
            <div className="card-content">
              <h3>Font & Typography</h3>
              <ul>
                <li>Clear, readable fonts (Poppins for headings, Open Sans for body text)</li>
                <li>Minimum font size of 16px for body text</li>
                <li>Sufficient line height (1.6) for comfortable reading</li>
                <li>High contrast ratios meeting WCAG 2.1 AA standards</li>
              </ul>
              
              <h3>Color & Contrast</h3>
              <ul>
                <li>Information is not conveyed by color alone</li>
                <li>Text maintains adequate contrast against backgrounds</li>
                <li>Focus indicators are clearly visible</li>
                <li>Error messages use both color and text descriptions</li>
              </ul>
            </div>
          </section>

          <section className="accessibility-card">
            <h2 className="card-title">Navigation</h2>
            <div className="card-content">
              <h3>Keyboard Navigation</h3>
              <ul>
                <li>All interactive elements are keyboard accessible</li>
                <li>Logical tab order throughout the application</li>
                <li>Skip links available to bypass repetitive content</li>
                <li>Focus indicators clearly mark current position</li>
              </ul>
              
              <h3>Screen Reader Support</h3>
              <ul>
                <li>Proper heading structure (H1, H2, H3, etc.)</li>
                <li>Alternative text for all meaningful images</li>
                <li>Form labels clearly associated with inputs</li>
                <li>ARIA labels and descriptions where appropriate</li>
              </ul>
            </div>
          </section>

          <section className="accessibility-card">
            <h2 className="card-title">Disclaimers & Feedback</h2>
            <div className="card-content">
              <h3>Current Limitations</h3>
              <p>
                As a prototype application, some accessibility features may still be in development. 
                We are actively working to address any barriers and improve the user experience 
                for all community members.
              </p>
              
              <h3>Contact Us</h3>
              <p>
                If you encounter any accessibility barriers or have suggestions for improvement, 
                please contact our team:
              </p>
              <ul>
                <li>Email: accessibility@narishakticonnect.org</li>
                <li>Phone: +91-800-NARI-HELP</li>
                <li>Feedback form available on our Contact page</li>
              </ul>
              
              <h3>Standards Compliance</h3>
              <p>
                We aim to conform to WCAG 2.1 Level AA guidelines and regularly audit our 
                platform to ensure compliance with accessibility best practices.
              </p>
            </div>
          </section>
        </main>

        <footer className="page-footer">
          <div className="footer-alert">
            <span className="alert-icon">⚠️</span>
            <span className="alert-text">This is a prototype. Accessibility improvements are ongoing.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Accessibility;