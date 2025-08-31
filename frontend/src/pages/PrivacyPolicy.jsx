// src/pages/PrivacyPolicy.jsx
import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={styles.contentWrapper}>
        
        {/* Information We Collect Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>👤</div>
              <h4 className={styles.cardTitle}>Personal Information</h4>
              <p>Name, email address, phone number, and location data when you voluntarily provide it for emergency services or support.</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>📱</div>
              <h4 className={styles.cardTitle}>Usage Data</h4>
              <p>Information about how you use our platform, including pages visited, features used, and time spent on the application.</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>🔧</div>
              <h4 className={styles.cardTitle}>Technical Data</h4>
              <p>Device information, browser type, IP address, and operating system for security and optimization purposes.</p>
            </div>
          </div>
        </div>

        {/* How We Use Your Information Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          
          <div className={styles.usageGrid}>
            <div className={styles.usageCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <h4 className={styles.cardTitle}>Safety Services</h4>
              <p>To provide emergency assistance, connect you with support services, and ensure your safety when using our platform.</p>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.cardIcon}>📞</div>
              <h4 className={styles.cardTitle}>Emergency Response</h4>
              <p>To facilitate quick response times during emergencies and connect you with appropriate help services.</p>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.cardIcon}>🔄</div>
              <h4 className={styles.cardTitle}>Service Improvement</h4>
              <p>To improve our platform features, user experience, and develop better safety tools and resources.</p>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.cardIcon}>📧</div>
              <h4 className={styles.cardTitle}>Communication</h4>
              <p>To send important safety alerts, service updates, and educational content about harassment prevention.</p>
            </div>
          </div>
        </div>

        {/* Data Protection Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Protection & Security</h2>
          
          <div className={styles.protectionGrid}>
            <div className={styles.protectionCard}>
              <div className={styles.cardIcon}>🔐</div>
              <h4 className={styles.cardTitle}>Encryption</h4>
              <p>All personal data is encrypted using industry-standard SSL/TLS protocols during transmission and storage.</p>
            </div>
            
            <div className={styles.protectionCard}>
              <div className={styles.cardIcon}>🏦</div>
              <h4 className={styles.cardTitle}>Secure Storage</h4>
              <p>Your data is stored on secure servers with multiple layers of protection and regular security audits.</p>
            </div>
            
            <div className={styles.protectionCard}>
              <div className={styles.cardIcon}>👥</div>
              <h4 className={styles.cardTitle}>Limited Access</h4>
              <p>Only authorized personnel have access to your data, and only when necessary for providing safety services.</p>
            </div>
            
            <div className={styles.protectionCard}>
              <div className={styles.cardIcon}>🗑️</div>
              <h4 className={styles.cardTitle}>Data Retention</h4>
              <p>We retain your data only as long as necessary for safety purposes or as required by law.</p>
            </div>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Privacy Rights</h2>
          
          <div className={styles.rightsGrid}>
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>👁️</div>
              <h4 className={styles.cardTitle}>Access Your Data</h4>
              <p>You have the right to request access to all personal information we have collected about you.</p>
            </div>
            
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>✏️</div>
              <h4 className={styles.cardTitle}>Correct Information</h4>
              <p>You can request corrections to any inaccurate or incomplete personal information we hold.</p>
            </div>
            
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>🗂️</div>
              <h4 className={styles.cardTitle}>Data Portability</h4>
              <p>Request a copy of your data in a commonly used, machine-readable format for transfer to another service.</p>
            </div>
            
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>❌</div>
              <h4 className={styles.cardTitle}>Delete Your Data</h4>
              <p>You can request deletion of your personal data, subject to legal requirements for safety records.</p>
            </div>
            
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>⏸️</div>
              <h4 className={styles.cardTitle}>Restrict Processing</h4>
              <p>You can request that we limit how we process your personal information in certain circumstances.</p>
            </div>
            
            <div className={styles.rightCard}>
              <div className={styles.cardIcon}>🚫</div>
              <h4 className={styles.cardTitle}>Opt-Out</h4>
              <p>You can opt-out of non-essential communications and data processing activities at any time.</p>
            </div>
          </div>
        </div>

        {/* Third-Party Services Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          
          <div className={styles.thirdPartyGrid}>
            <div className={styles.thirdPartyCard}>
              <div className={styles.cardIcon}>🚔</div>
              <h4 className={styles.cardTitle}>Emergency Services</h4>
              <p>We may share your information with police, medical services, or other emergency responders when necessary for your safety.</p>
            </div>
            
            <div className={styles.thirdPartyCard}>
              <div className={styles.cardIcon}>🏥</div>
              <h4 className={styles.cardTitle}>Support Organizations</h4>
              <p>With your consent, we may share relevant information with trusted support organizations and helplines.</p>
            </div>
            
            <div className={styles.thirdPartyCard}>
              <div className={styles.cardIcon}>⚖️</div>
              <h4 className={styles.cardTitle}>Legal Requirements</h4>
              <p>We may disclose information when required by law, court orders, or to protect the rights and safety of users.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Privacy Questions & Contact</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h4 className={styles.contactMethod}>Email Us</h4>
              <p className={styles.contactInfo}>privacy@safespace.com</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h4 className={styles.contactMethod}>Call Us</h4>
              <p className={styles.contactInfo}>+91-XXX-XXX-XXXX</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <h4 className={styles.contactMethod}>Write to Us</h4>
              <p className={styles.contactInfo}>Data Protection Officer<br/>SafeSpace Privacy Team</p>
            </div>
          </div>
          
          <div className={styles.updateInfo}>
            <p><strong>Last Updated:</strong> January 2025</p>
            <p>We may update this privacy policy from time to time. We will notify you of any significant changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;