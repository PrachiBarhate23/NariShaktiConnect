import React, { useState, useEffect } from 'react';
import './MyRightsPage.css';

const MyRightsPage = () => {
  const [language, setLanguage] = useState('english');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    english: {
      pageTitle: "My Rights",
      languageToggle: "English | हिंदी",
      sections: {
        harassment: {
          title: "What is Harassment?",
          content: [
            "Harassment is any unwelcome behavior (physical, verbal, or emotional).",
            "Includes touching, teasing, or threatening at the workplace.",
            "Can also include inappropriate comments about appearance or personal life.",
            "Creating a hostile work environment through repeated unwanted advances."
          ]
        },
        rights: {
          title: "Your Rights to Safety",
          content: [
            "Under the POSH Act, you have the right to a safe workplace.",
            "You cannot be fired or punished for reporting harassment.",
            "Right to confidential complaint process and fair investigation.",
            "Right to interim relief during investigation period.",
            "Protection against retaliation for filing complaints."
          ]
        },
        reporting: {
          title: "How to Report (General)",
          content: [
            "Talk to a trusted NGO or women's group in your area.",
            "Use helpline numbers like 181 (Women Helpline) - available 24/7.",
            "If unsafe, reach out via WhatsApp to verified NGOs.",
            "Document incidents with dates, times, and witness details.",
            "Keep copies of any written evidence or messages."
          ]
        },
        legalAid: {
          title: "Legal Aid & Support",
          content: [
            "Free legal aid available through District Legal Services Authority.",
            "One Stop Centres provide integrated support services.",
            "Mahila Police Stations offer specialized assistance.",
            "Labour Department can help with workplace-related issues.",
            "NGOs like Jagori, CWDS provide counseling and legal support."
          ]
        },
        emergencyContacts: {
          title: "Emergency Contacts",
          content: [
            "Police Emergency: 100 (immediate danger)",
            "Women Helpline: 181 (24/7 support)",
            "National Commission for Women: 011-26944880",
            "Domestic Violence Helpline: 181",
            "Legal Aid Helpline: 15100 (free legal advice)"
          ]
        }
      },
      disclaimer: "This information is for awareness purposes only. For specific legal advice, please consult qualified professionals or registered NGOs."
    },
    hindi: {
      pageTitle: "मेरे अधिकार",
      languageToggle: "English | हिंदी",
      sections: {
        harassment: {
          title: "उत्पीड़न क्या है?",
          content: [
            "उत्पीड़न कोई भी अवांछित व्यवहार है (शारीरिक, मौखिक, या भावनात्मक)।",
            "इसमें कार्यस्थल पर छूना, चिढ़ाना, या धमकी देना शामिल है।",
            "रूप-रंग या व्यक्तिगत जीवन पर अनुचित टिप्पणी भी शामिल है।",
            "बार-बार अवांछित प्रस्तावों से शत्रुतापूर्ण कार्य वातावरण बनाना।"
          ]
        },
        rights: {
          title: "सुरक्षा के आपके अधिकार",
          content: [
            "POSH अधिनियम के तहत, आपको सुरक्षित कार्यस्थल का अधिकार है।",
            "उत्पीड़न की रिपोर्ट करने पर आपको नौकरी से नहीं निकाला जा सकता।",
            "गोपनीय शिकायत प्रक्रिया और निष्पक्ष जांच का अधिकार।",
            "जांच अवधि के दौरान अंतरिम राहत का अधिकार।",
            "शिकायत दर्ज करने पर प्रतिशोध से सुरक्षा।"
          ]
        },
        reporting: {
          title: "रिपोर्ट कैसे करें (सामान्य)",
          content: [
            "अपने क्षेत्र में किसी विश्वसनीय NGO या महिला समूह से बात करें।",
            "181 (महिला हेल्पलाइन) जैसे हेल्पलाइन नंबर का उपयोग करें - 24/7 उपलब्ध।",
            "यदि असुरक्षित हैं, तो सत्यापित NGOs को WhatsApp से संपर्क करें।",
            "घटनाओं को तारीख, समय और गवाहों के विवरण के साथ दर्ज करें।",
            "किसी भी लिखित सबूत या संदेशों की प्रतियां रखें।"
          ]
        },
        legalAid: {
          title: "कानूनी सहायता और समर्थन",
          content: [
            "जिला कानूनी सेवा प्राधिकरण के माध्यम से मुफ्त कानूनी सहायता।",
            "वन स्टॉप सेंटर एकीकृत सहायता सेवाएं प्रदान करते हैं।",
            "महिला पुलिस स्टेशन विशेष सहायता प्रदान करते हैं।",
            "श्रम विभाग कार्यस्थल संबंधी मुद्दों में मदद कर सकता है।",
            "जागोरी, CWDS जैसी NGOs परामर्श और कानूनी सहायता प्रदान करती हैं।"
          ]
        },
        emergencyContacts: {
          title: "आपातकालीन संपर्क",
          content: [
            "पुलिस आपातकाल: 100 (तत्काल खतरे में)",
            "महिला हेल्पलाइन: 181 (24/7 सहायता)",
            "राष्ट्रीय महिला आयोग: 011-26944880",
            "घरेलू हिंसा हेल्पलाइन: 181",
            "कानूनी सहायता हेल्पलाइन: 15100 (मुफ्त कानूनी सलाह)"
          ]
        }
      },
      disclaimer: "यह जानकारी केवल जागरूकता के लिए है। विशिष्ट कानूनी सलाह के लिए, कृपया योग्य पेशेवरों या पंजीकृत NGOs से सलाह लें।"
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english');
  };

  const currentContent = content[language];

  return (
    <div className="my-rights-page">
      {/* Animated Background Elements */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Header */}
      <header className="header heroOverlay">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="rights-icon">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10.1V11.1C14.8 11.6 14.4 12 13.9 12H10.1C9.6 12 9.2 11.6 9.2 11.1V10.1C9.2 8.6 10.6 7 12 7M8.8 13H15.2V16C15.2 17.1 14.3 18 13.2 18H10.8C9.7 18 8.8 17.1 8.8 16V13Z"/>
              </svg>
            </div>
            <div className="title-section">
              <h1 className="page-title">{currentContent.pageTitle}</h1>
              <p className="page-subtitle">Your Safety, Your Rights</p>
            </div>
          </div>
          <div className="language-toggle-container">
            <button 
              className={`language-toggle ${language === 'hindi' ? 'hindi-active' : 'english-active'}`}
              onClick={toggleLanguage}
            >
              <span className="toggle-option english">EN</span>
              <span className="toggle-divider">|</span>
              <span className="toggle-option hindi">हि</span>
              <div className="toggle-slider"></div>
            </button>
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">
                {language === 'english' ? 'Empowering Women Through Knowledge' : 'ज्ञान के माध्यम से महिला सशक्तिकरण'}
              </h2>
              <p className="hero-description">
                {language === 'english' 
                  ? 'Understanding your rights is the first step towards safety and empowerment' 
                  : 'अपने अधिकारों को समझना सुरक्षा और सशक्तिकरण की दिशा में पहला कदम है'}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
          {Object.entries(currentContent.sections).map(([key, section], index) => (
            <section key={key} className="content-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-content">
                <div className="card-header">
                  <div className="section-icon">
                    {key === 'harassment' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14.5V22H9.5V14.5H8.5V9A2,2 0 0,1 10.5,7Z"/>
                      </svg>
                    )}
                    {key === 'rights' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                      </svg>
                    )}
                    {key === 'reporting' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    )}
                    {key === 'legalAid' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16,18H18V20H16M16,15H18V17H16M12,7A2,2 0 0,0 10,9V11A2,2 0 0,0 12,13A2,2 0 0,0 14,11V9A2,2 0 0,0 12,7M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    )}
                    {key === 'emergencyContacts' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17,12V3A1,1 0 0,0 16,2H8A1,1 0 0,0 7,3V4H10V6H7V8H10V10H7V11A1,1 0 0,0 8,12H16A1,1 0 0,0 17,12M16,14H8A3,3 0 0,0 5,17V20A1,1 0 0,0 6,21H18A1,1 0 0,0 19,20V17A3,3 0 0,0 16,14Z"/>
                      </svg>
                    )}
                  </div>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                
                <ul className="section-content">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="content-item">
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* Disclaimer */}
          <section className="disclaimer-card">
            <div className="disclaimer-content">
              <div className="disclaimer-header">
                <div className="warning-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                  </svg>
                </div>
                <h3 className="disclaimer-title">Important Notice</h3>
              </div>
              <p className="disclaimer-text">{currentContent.disclaimer}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MyRightsPage;