import React, { useState } from 'react';
import './OurWork.css';

const OurWorkPage = () => {
  const [language, setLanguage] = useState('english');

  const content = {
    english: {
      title: "Our Work",
      whatWeDone: {
        title: "What We Have Done",
        items: [
          "Trained 500+ women on workplace rights",
          "Partnered with 10 NGOs across Mumbai & Delhi",
          "Helped 200+ cases of workplace harassment reach proper legal/NGO support",
          "Conducted 50+ awareness workshops in communities",
          "Created multilingual resources accessible to all"
        ]
      },
      focusAreas: {
        title: "Focus Areas",
        items: [
          "Workplace harassment awareness",
          "Simplified access to legal rights",
          "Connecting women with local NGOs",
          "Building trust with women in the informal sector",
          "Digital literacy for women's empowerment",
          "Community-based support networks"
        ]
      },
      successStories: {
        title: "Success Stories",
        stories: [
          "A domestic worker in Delhi reported harassment anonymously and received NGO support within 48 hours.",
          "Our awareness drives in Mumbai increased legal reporting by 40% in targeted communities.",
          "Women reported feeling safer and more confident after using NarishaktiConnect resources.",
          "A factory worker in Pune successfully filed for workplace compensation with our legal guidance.",
          "Community leaders now actively promote women's rights awareness using our materials."
        ]
      },
      impact: "💙 500+ Women Reached | 10+ NGOs Connected | 200+ Cases Supported"
    },
    hindi: {
      title: "हमारा काम",
      whatWeDone: {
        title: "हमने क्या किया है",
        items: [
          "500+ महिलाओं को कार्यक्षेत्र अधिकारों का प्रशिक्षण दिया",
          "मुंबई और दिल्ली में 10 NGOs के साथ साझेदारी की",
          "200+ कार्यक्षेत्र उत्पीड़न के मामलों को उचित कानूनी/NGO सहायता तक पहुंचाया",
          "समुदायों में 50+ जागरूकता कार्यशालाएं आयोजित कीं",
          "सभी के लिए सुलभ बहुभाषी संसाधन बनाए"
        ]
      },
      focusAreas: {
        title: "मुख्य क्षेत्र",
        items: [
          "कार्यक्षेत्र उत्पीड़न जागरूकता",
          "कानूनी अधिकारों तक सरल पहुंच",
          "महिलाओं को स्थानीय NGOs से जोड़ना",
          "अनौपचारिक क्षेत्र की महिलाओं के साथ विश्वास निर्माण",
          "महिला सशक्तिकरण के लिए डिजिटल साक्षरता",
          "समुदाय आधारित सहायता नेटवर्क"
        ]
      },
      successStories: {
        title: "सफलता की कहानियां",
        stories: [
          "दिल्ली की एक घरेलू कामगार ने गुमनाम रूप से उत्पीड़न की रिपोर्ट की और 48 घंटों में NGO सहायता प्राप्त की।",
          "मुंबई में हमारे जागरूकता अभियानों ने लक्षित समुदायों में कानूनी रिपोर्टिंग में 40% की वृद्धि की।",
          "महिलाओं ने NarishaktiConnect संसाधनों का उपयोग करने के बाद अधिक सुरक्षित और आत्मविश्वासी महसूस करने की रिपोर्ट दी।",
          "पुणे की एक फैक्ट्री वर्कर ने हमारे कानूनी मार्गदर्शन से सफलतापूर्वक कार्यक्षेत्र मुआवजे के लिए दाखिल किया।",
          "समुदायिक नेता अब हमारी सामग्रियों का उपयोग करके सक्रिय रूप से महिलाओं के अधिकारों की जागरूकता को बढ़ावा देते हैं।"
        ]
      },
      impact: "💙 500+ महिलाएं पहुंचीं | 10+ NGOs जुड़े | 200+ मामलों का समर्थन"
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'hindi' : 'english');
  };

  const currentContent = content[language];

  return (
    <div className="our-work-page">
      <header className="header">
        <div className="header-content">
          <h1 className="page-title">{currentContent.title}</h1>
          <div className="header-image">
            <div className="blue-overlay"></div>
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
      </header>

      <main className="main-content">
        <section className="content-card fade-in">
          <h2>{currentContent.whatWeDone.title}</h2>
          <div className="card-content-with-image">
            <div className="text-content">
              <ul>
                {currentContent.whatWeDone.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-icon">📊</div>
              <span>Training Impact</span>
            </div>
          </div>
        </section>

        <section className="content-card fade-in">
          <h2>{currentContent.focusAreas.title}</h2>
          <div className="card-content-with-image">
            <div className="text-content">
              <ul>
                {currentContent.focusAreas.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-icon">🎯</div>
              <span>Focus Areas</span>
            </div>
          </div>
        </section>

        <section className="content-card fade-in">
          <h2>{currentContent.successStories.title}</h2>
          <div className="success-stories">
            {currentContent.successStories.stories.map((story, index) => (
              <blockquote key={index} className="success-story slide-in">
                "{story}"
              </blockquote>
            ))}
          </div>
        </section>

        <section className="impact-card bounce-hover">
          <div className="impact-content">
            {currentContent.impact}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurWorkPage;