import React from 'react';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Open+Sans:wght@300;400;600&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: #F8F9FA; /* same as your terms-container background */
            overflow-x: hidden;
          }

          .terms-container {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #212121;
            background: #F8F9FA;
            min-height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          .terms-header {
            background: linear-gradient(135deg, #0288D1 0%, #01579B 100%);
            color: white;
            padding: 40px 0 60px;
            text-align: center;
            width: 100%;
            margin: 0;
          }

          .terms-content {
            background: white;
            margin: -20px 0 0 0;
            border-radius: 20px 20px 0 0;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            padding: 0;
            min-height: calc(100vh - 200px);
          }

          .content-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px 60px;
            width: 100%;
            box-sizing: border-box;
          }

          .terms-title {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.8rem, 5vw, 3rem);
            font-weight: 700;
            margin-bottom: 10px;
            word-wrap: break-word;
            hyphens: auto;
          }

          .terms-subtitle {
            font-size: clamp(1rem, 3vw, 1.2rem);
            opacity: 0.9;
            word-wrap: break-word;
          }

          .prototype-warning {
            background: linear-gradient(135deg, #FFE082 0%, #FFD54F 100%);
            border: 3px solid #FFC107;
            border-radius: 15px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
            box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
            word-wrap: break-word;
            hyphens: auto;
          }

          .prototype-warning h2 {
            font-family: 'Poppins', sans-serif;
            color: #E65100;
            font-size: clamp(1.2rem, 4vw, 1.5rem);
            margin-bottom: 15px;
            font-weight: 700;
            word-wrap: break-word;
            hyphens: auto;
          }

          .prototype-warning p {
            color: #BF360C;
            font-weight: 600;
            font-size: clamp(0.9rem, 3vw, 1.1rem);
            line-height: 1.5;
            word-wrap: break-word;
            hyphens: auto;
          }

          .section {
            margin: 40px 0;
            word-wrap: break-word;
            hyphens: auto;
          }

          .section h2 {
            font-family: 'Poppins', sans-serif;
            color: #0288D1;
            font-size: clamp(1.3rem, 4vw, 1.8rem);
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #4FC3F7;
            word-wrap: break-word;
            hyphens: auto;
          }

          .section h3 {
            font-family: 'Poppins', sans-serif;
            color: #01579B;
            font-size: clamp(1.1rem, 3.5vw, 1.3rem);
            font-weight: 600;
            margin: 25px 0 15px;
            word-wrap: break-word;
            hyphens: auto;
          }

          .section p {
            margin-bottom: 15px;
            text-align: justify;
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }

          .section ul {
            margin: 15px 0;
            padding-left: 20px;
            word-wrap: break-word;
          }

          .section li {
            margin-bottom: 8px;
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }

          .highlight-box {
            background: #E3F2FD;
            border-left: 5px solid #4FC3F7;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }

          .highlight-box p {
            margin: 0;
            font-weight: 600;
            color: #01579B;
            word-wrap: break-word;
            hyphens: auto;
          }

          .emergency-notice {
            background: linear-gradient(135deg, #FFCDD2 0%, #EF9A9A 100%);
            border: 2px solid #F44336;
            border-radius: 10px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
            word-wrap: break-word;
            hyphens: auto;
          }

          .emergency-notice h3 {
            color: #C62828;
            margin-bottom: 10px;
            font-size: clamp(1.1rem, 3.5vw, 1.3rem);
            word-wrap: break-word;
            hyphens: auto;
          }

          .emergency-notice p {
            color: #B71C1C;
            font-weight: 600;
            margin: 0;
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }

          .contact-section {
            background: #E3F2FD;
            border-radius: 15px;
            padding: 25px;
            margin: 40px 0;
            text-align: center;
            word-wrap: break-word;
            hyphens: auto;
          }

          .contact-section h2 {
            border: none;
            margin-bottom: 15px;
          }

          .contact-section p {
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }

          .last-updated {
            background: #F5F5F5;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
            color: #616161;
            font-size: 0.9rem;
            word-wrap: break-word;
          }

          /* Enhanced Mobile Responsiveness */
          @media (max-width: 768px) {
            .terms-header {
              padding: 30px 0 50px;
            }

            .content-inner {
              padding: 30px 15px 50px;
            }

            .terms-content {
              margin-top: -15px;
              border-radius: 15px 15px 0 0;
            }

            .section {
              margin: 30px 0;
            }

            .section ul {
              padding-left: 18px;
            }

            .prototype-warning,
            .emergency-notice,
            .contact-section,
            .highlight-box {
              padding: 18px;
              margin: 20px 0;
            }

            .prototype-warning h2 {
              margin-bottom: 12px;
            }
          }

          @media (max-width: 480px) {
            .terms-header {
              padding: 25px 0 40px;
            }

            .content-inner {
              padding: 25px 12px 40px;
            }

            .terms-content {
              border-radius: 12px 12px 0 0;
            }

            .section {
              margin: 25px 0;
            }

            .section ul {
              padding-left: 16px;
            }

            .prototype-warning,
            .emergency-notice,
            .contact-section,
            .highlight-box {
              padding: 15px;
              margin: 18px 0;
              border-radius: 10px;
            }

            .last-updated {
              padding: 12px;
              font-size: 0.85rem;
            }

            .section p,
            .highlight-box p,
            .prototype-warning p,
            .emergency-notice p,
            .contact-section p {
              text-align: left;
              hyphens: auto;
              word-break: break-word;
            }
          }

          @media (max-width: 360px) {
            .terms-header {
              padding: 20px 0 35px;
            }

            .content-inner {
              padding: 20px 10px 35px;
            }

            .prototype-warning,
            .emergency-notice,
            .contact-section,
            .highlight-box {
              padding: 12px;
              margin: 15px 0;
            }

            .section ul {
              padding-left: 14px;
            }

            .section li {
              margin-bottom: 6px;
            }
          }

          /* Extra large screens */
          @media (min-width: 1200px) {
            .content-inner {
              max-width: 900px;
            }
          }

          /* Ensure no horizontal scrolling */
          * {
            max-width: 100%;
            overflow-wrap: break-word;
          }

          /* Fix any potential overflow from long words */
          p, li, h1, h2, h3, h4, h5, h6 {
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }
        `}
      </style>

      <div className="terms-container">
        {/* Header */}
        <div className="terms-header">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">Nari Shakti Connect</p>
        </div>

        {/* Content */}
        <div className="terms-content">
          <div className="content-inner">
            <div className="last-updated">
              <strong>Last Updated:</strong> August 31, 2025
            </div>

            {/* Prototype Warning */}
            <div className="prototype-warning">
              <h2>⚠️ IMPORTANT NOTICE - PROTOTYPE APPLICATION</h2>
              <p>
                This application is a <strong>NON-COMMERCIAL PROTOTYPE</strong> developed for demonstration and educational purposes only. 
                This is <strong>NOT a real-world legal or safety service</strong> and should <strong>NOT be relied upon</strong> for actual 
                workplace harassment reporting or legal assistance.
              </p>
            </div>

            {/* Section 1 */}
            <div className="section">
              <h2>1. Introduction and Acceptance</h2>
              <p>
                Welcome to Nari Shakti Connect ("App," "we," "us," or "our"). By accessing or using this prototype application, 
                you ("User" or "you") agree to be bound by these Terms of Service ("Terms").
              </p>
              <div className="highlight-box">
                <p><strong>IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS APPLICATION.</strong></p>
              </div>
              <p>
                This App is a <strong>prototype demonstration tool</strong> designed to showcase potential features for supporting 
                women in India's informal sector. It is not a commercial service and does not provide real legal, safety, or reporting services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="section">
              <h2>2. Nature of the Service - PROTOTYPE DISCLAIMER</h2>
              
              <h3>2.1 Prototype Status</h3>
              <p>This application is a <strong>NON-COMMERCIAL PROTOTYPE</strong> created for:</p>
              <ul>
                <li>Educational and demonstration purposes</li>
                <li>Research and development testing</li>
                <li>User experience evaluation</li>
                <li>Concept validation</li>
              </ul>

              <h3>2.2 No Real Services Provided</h3>
              <div className="highlight-box">
                <p><strong>CRITICAL NOTICE:</strong> This App does NOT provide:</p>
              </div>
              <ul>
                <li>Real incident reporting services</li>
                <li>Actual legal assistance or advice</li>
                <li>Professional counseling or support services</li>
                <li>Connection to real authorities or organizations</li>
                <li>Any form of emergency response</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="section">
              <h2>3. Simulated Features and Functionality</h2>
              
              <h3>3.1 Report Incident Feature - SIMULATION ONLY</h3>
              <p>
                The "Report Incident" feature is <strong>entirely simulated</strong> and for demonstration purposes only:
              </p>
              <ul>
                <li><strong>No real reports are sent</strong> to any authority, organization, or individual</li>
                <li>Data entered is <strong>not stored permanently</strong> and exists only temporarily for demonstration</li>
                <li>No actual investigation or follow-up will occur</li>
                <li>This feature cannot and will not help with real workplace harassment situations</li>
              </ul>

              <h3>3.2 Educational Content</h3>
              <p>
                Legal rights information provided is simplified educational content only. This information:
              </p>
              <ul>
                <li>Is for general awareness purposes</li>
                <li>May not reflect current or complete legal standards</li>
                <li>Should not be used as a substitute for professional legal advice</li>
                <li>May not apply to specific individual circumstances</li>
              </ul>
            </div>

            {/* Emergency Notice */}
            <div className="emergency-notice">
              <h3>🚨 FOR REAL EMERGENCIES 🚨</h3>
              <p>
                If you are experiencing actual workplace harassment or need immediate help, please contact:
                <br /><strong>Women Helpline: 1091</strong> | <strong>Police Emergency: 100</strong>
                <br />This app cannot provide real assistance in emergency situations.
              </p>
            </div>

            {/* Section 4 */}
            <div className="section">
              <h2>4. No Legal Advice</h2>
              <p>
                <strong>The information provided in this App is for educational purposes only and does not constitute 
                professional legal advice.</strong> The content is simplified and may not reflect the full complexity of Indian law.
              </p>
              <div className="highlight-box">
                <p>
                  <strong>You must consult with a qualified legal professional</strong> for advice specific to your situation. 
                  Do not rely on this App's content for making legal decisions.
                </p>
              </div>
              <p>
                Laws and regulations change frequently, and the information in this prototype may not reflect the most current legal standards.
              </p>
            </div>

            {/* Section 5 */}
            <div className="section">
              <h2>5. Privacy and Data Collection</h2>
              
              <h3>5.1 No Server-Side Data Storage</h3>
              <p>
                This is a <strong>front-end only application</strong> that:
              </p>
              <ul>
                <li>Does <strong>not collect or store personal data</strong> on any server</li>
                <li>Does not transmit data to external databases</li>
                <li>Uses only temporary, local browser storage for demonstration purposes</li>
                <li>Cannot track or identify individual users</li>
              </ul>

              <h3>5.2 Anonymous Usage</h3>
              <p>
                Any data entered for demonstration purposes is processed anonymously and temporarily. 
                However, users should <strong>never enter real personal information</strong> into this prototype application.
              </p>
            </div>

            {/* Section 6 */}
            <div className="section">
              <h2>6. User Conduct and Responsibilities</h2>
              
              <h3>6.1 Appropriate Use</h3>
              <p>Users agree to:</p>
              <ul>
                <li>Use the App only for its intended demonstration purposes</li>
                <li>Not submit real personal information or sensitive data</li>
                <li>Not attempt to use the App for actual reporting or legal assistance</li>
                <li>Understand that this is a prototype without real-world functionality</li>
              </ul>

              <h3>6.2 Prohibited Activities</h3>
              <p>Users must not:</p>
              <ul>
                <li>Submit malicious, false, or inappropriate content</li>
                <li>Attempt to reverse-engineer or exploit the application</li>
                <li>Use the App in any way that could cause harm to others</li>
                <li>Misrepresent the App's capabilities to other users</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="section">
              <h2>7. Limitation of Liability</h2>
              
              <div className="highlight-box">
                <p>
                  <strong>CRITICAL DISCLAIMER:</strong> The creators, developers, and associated parties of this prototype 
                  application are NOT LIABLE for any damages, losses, or consequences arising from the use of this App.
                </p>
              </div>

              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW,</strong> we disclaim all warranties and representations, 
                whether express or implied, including but not limited to:
              </p>
              <ul>
                <li>Accuracy or completeness of information</li>
                <li>Fitness for any particular purpose</li>
                <li>Reliability of the application</li>
                <li>Availability or uninterrupted access</li>
              </ul>

              <p>
                <strong>You use this prototype application entirely at your own risk.</strong> We shall not be held responsible 
                for any reliance placed on the demonstration features or educational content.
              </p>
            </div>

            {/* Section 8 */}
            <div className="section">
              <h2>8. Intellectual Property</h2>
              <p>
                This prototype application and its content are provided for educational demonstration purposes. 
                All intellectual property rights remain with the respective creators and contributors.
              </p>
              <p>
                Users may not reproduce, distribute, or create derivative works from this prototype without explicit permission.
              </p>
            </div>

            {/* Section 9 */}
            <div className="section">
              <h2>9. Modifications to Terms</h2>
              <p>
                As this is a prototype application, these Terms may be updated during the development and testing process. 
                Continued use of the App constitutes acceptance of any revised Terms.
              </p>
              <p>
                Users are encouraged to review these Terms periodically for any changes.
              </p>
            </div>

            {/* Section 10 */}
            <div className="section">
              <h2>10. Termination</h2>
              <p>
                Access to this prototype application may be terminated or suspended at any time without notice, 
                as this is a demonstration tool under development.
              </p>
              <p>
                Upon termination, all provisions of these Terms that by their nature should survive termination shall remain in effect.
              </p>
            </div>

            {/* Section 11 */}
            <div className="section">
              <h2>11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the <strong>laws of India</strong>.
              </p>
              <p>
                Any disputes arising from the use of this prototype application shall be subject to the 
                exclusive jurisdiction of the courts of New Delhi, India.
              </p>
            </div>

            {/* Final Warning */}
            <div className="prototype-warning">
              <h2>⚠️ FINAL REMINDER</h2>
              <p>
                This is a <strong>PROTOTYPE APPLICATION ONLY</strong>. Do not use it for real workplace harassment 
                reporting or as a substitute for professional legal advice. For actual help, contact qualified 
                professionals and appropriate authorities.
              </p>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <h2>12. Contact Information</h2>
              <p>
                For questions about this prototype application or these Terms of Service, please contact:
              </p>
              <p>
                <strong>Email:</strong> legal@narishakticonnect.org<br />
                <strong>Subject Line:</strong> "Terms of Service Inquiry - Prototype App"
              </p>
              <p style={{fontSize: '0.9rem', marginTop: '20px', fontStyle: 'italic'}}>
                Please note: This contact is for technical and legal inquiries about the prototype only. 
                We cannot provide real legal assistance or emergency support.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="section">
              <h2>13. User Acknowledgment</h2>
              <p>
                By using this application, you acknowledge that:
              </p>
              <ul>
                <li>You understand this is a <strong>prototype demonstration tool</strong></li>
                <li>You will <strong>not rely on this App</strong> for real legal or safety needs</li>
                <li>You will seek <strong>professional help</strong> for actual workplace harassment situations</li>
                <li>You accept full responsibility for your use of this prototype</li>
                <li>You have read and understood all disclaimers and warnings in these Terms</li>
              </ul>
            </div>

            <div style={{textAlign: 'center', padding: '40px 0', borderTop: '2px solid #E0E0E0', marginTop: '50px'}}>
              <p style={{color: '#616161', fontSize: '0.9rem'}}>
                <strong>Remember:</strong> This is a prototype for demonstration purposes only.<br />
                For real assistance, always contact qualified professionals and appropriate authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;