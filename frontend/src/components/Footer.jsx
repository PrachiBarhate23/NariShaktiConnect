import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Open+Sans:wght@300;400;600&display=swap');
          
          .footer-container {
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
          }

          .footer {
            background: linear-gradient(135deg, #e1f5ff 0%, #b9d8f1 100%);
            color: white;
            padding: 60px 0 20px;
          }

          .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .footer-section h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: #003852;
          }

          .footer-section p {
            line-height: 1.6;
            color: #00355c;
            margin-bottom: 15px;
          }

          .footer-links {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .footer-links li {
            margin-bottom: 10px;
          }

          .footer-links a {
            color: #00355c;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.95rem;
          }

          .footer-links a:hover {
            color: #4FC3F7;
            padding-left: 5px;
          }

          .contact-info {
            color: #00355c;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .contact-info strong {
            color: #4FC3F7;
          }

          .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .social-link {
            width: 40px;
            height: 40px;
            background: rgba(79, 195, 247, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4FC3F7;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.3s ease;
          }

          .social-link:hover {
            background: #4FC3F7;
            color: white;
            transform: translateY(-2px);
          }

          .footer-bottom {
            border-top: 1px solid rgba(79, 195, 247, 0.3);
            padding-top: 30px;
            text-align: center;
          }

          .footer-bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .footer-bottom p {
            color: #00355c;
            font-size: 0.9rem;
            margin: 0;
          }

          .footer-bottom-links {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .footer-bottom-links a {
            color: #00355c;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .footer-bottom-links a:hover {
            color: #4FC3F7;
          }

          .emergency-banner {
            background: #FFE082;
            color: #212121;
            padding: 15px 0;
            text-align: center;
            font-weight: 600;
            border-bottom: 3px solid #FFC107;
          }

          .emergency-banner a {
            color: #0288D1;
            text-decoration: none;
            font-weight: 700;
          }

          .emergency-banner a:hover {
            text-decoration: underline;
          }

          /* Mobile Responsiveness */
          @media (max-width: 1024px) {
            .footer-container {
              padding: 0 30px;
            }

            .footer-content {
              grid-template-columns: 1fr 1fr;
              gap: 30px;
            }
          }

          @media (max-width: 768px) {
            .footer-container {
              padding: 0 20px;
            }

            .footer-content {
              grid-template-columns: 1fr;
              gap: 30px;
              text-align: center;
            }

            .footer-bottom-content {
              flex-direction: column;
              text-align: center;
            }

            .social-links {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .footer-container {
              padding: 0 15px;
            }

            .footer {
              padding: 40px 0 15px;
            }

            .footer-content {
              gap: 25px;
            }

            .footer-bottom-links {
              justify-content: center;
              gap: 15px;
            }
          }
        `}
      </style>

      <div>
        {/* Emergency Banner */}
        <div className="emergency-banner">
          <div className="footer-container">
            🚨 Need immediate help? Call <a href="tel:1091">Women Helpline: 1091</a> | Emergency: <a href="tel:100">100</a> 🚨
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              {/* About Section */}
              <div className="footer-section">
                <h3>Nari Shakti Connect</h3>
                <p>
                  Empowering women to shape inclusive, safe, and equitable urban communities. 
                  Together, we're building cities where every woman has a voice and the power to create change.
                </p>
                {/* <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">📘</a>
                  <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                  <a href="#" className="social-link" aria-label="Instagram">📷</a>
                  <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                </div> */}
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#our-work">Our Work</a></li>
                  <li><a href="#resources">Resources</a></li>
                  <li><a href="#about">About Us</a></li>
                </ul>
              </div>

              {/* Support & Safety */}
              <div className="footer-section">
                <h3>Support & Safety</h3>
                <ul className="footer-links">
                  <li><a href="#my-rights">My Rights</a></li>
                  <li><a href="#find-help">Find Help</a></li>
                  <li><a href="#safety-tips">Safety Tips</a></li>
                  <li><a href="#report-incident">Report Incident</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-section">
                <h3>Get in Touch</h3>
                <div className="contact-info">
                  <p><strong>Email:</strong><br />contact@narishakti.org</p>
                  <p><strong>Phone:</strong><br />+91 11 2345 6789</p>
                  <p><strong>Address:</strong><br />Nari Shakti- Women Empowerment Hub<br />Mumbai, India 400058</p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p>&copy; 2025 Nari Shakti Connect. All rights reserved.</p>
                {/* <div className="footer-bottom-links">
                  <a href="./PrivacyPolicy">Privacy Policy</a>
                  <a href="./TermsOfService">Terms of Service</a>
                  <a href="#accessibility">Accessibility</a>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;