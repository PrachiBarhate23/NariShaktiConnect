import React, { useState, useMemo } from 'react';
import { Search, Phone, MessageCircle, Globe, MapPin, Users } from 'lucide-react';
import './FindHelp.css';
const FindHelp = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample NGO data with images
  const ngoData = [
    {
      id: 1,
      name: { en: "Women's Safety Alliance", hi: "महिला सुरक्षा गठबंधन" },
      focus: { en: "Women's Safety", hi: "महिला सुरक्षा" },
      location: { en: "Mumbai", hi: "मुंबई" },
      phone: "+919876543210",
      description: { 
        en: "24/7 support for women facing harassment or violence",
        hi: "उत्पीड़न या हिंसा का सामना करने वाली महिलाओं के लिए 24/7 सहायता"
      },
      image: "https://i.pinimg.com/originals/3a/7f/19/3a7f1994a5f9b106fbc892624d50c06a.jpg"

    },
    {
      id: 2,
      name: { en: "Legal Aid Foundation", hi: "कानूनी सहायता संस्थान" },
      focus: { en: "Legal Aid", hi: "कानूनी सहायता" },
      location: { en: "Delhi", hi: "दिल्ली" },
      phone: "+919876543211",
      description: { 
        en: "Free legal consultation and representation services",
        hi: "निःशुल्क कानूनी परामर्श और प्रतिनिधित्व सेवाएं"
      },
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: { en: "Child Protection Society", hi: "बाल संरक्षण समिति" },
      focus: { en: "Child Protection", hi: "बाल संरक्षण" },
      location: { en: "Bangalore", hi: "बेंगलुरु" },
      phone: "+919876543212",
      description: { 
        en: "Safeguarding children from abuse and exploitation",
        hi: "बच्चों को दुर्व्यवहार और शोषण से बचाना"
      },
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      name: { en: "Domestic Violence Helpline", hi: "घरेलू हिंसा हेल्पलाइन" },
      focus: { en: "Domestic Violence", hi: "घरेलू हिंसा" },
      location: { en: "Chennai", hi: "चेन्नई" },
      phone: "+919876543213",
      description: { 
        en: "Emergency support and safe shelter services",
        hi: "आपातकालीन सहायता और सुरक्षित आश्रय सेवाएं"
      },
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      name: { en: "Mental Health Support", hi: "मानसिक स्वास्थ्य सहायता" },
      focus: { en: "Mental Health", hi: "मानसिक स्वास्थ्य" },
      location: { en: "Kolkata", hi: "कोलकाता" },
      phone: "+919876543214",
      description: { 
        en: "Counseling and psychological support services",
        hi: "परामर्श और मनोवैज्ञानिक सहायता सेवाएं"
      },
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      name: { en: "Emergency Response Team", hi: "आपातकालीन प्रतिक्रिया टीम" },
      focus: { en: "Emergency Response", hi: "आपातकालीन प्रतिक्रिया" },
      location: { en: "Pune", hi: "पुणे" },
      phone: "+919876543215",
      description: { 
        en: "Rapid response for crisis situations",
        hi: "संकट की स्थितियों के लिए त्वरित प्रतिक्रिया"
      },
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop"
    }
  ];

  const text = {
    title: {
      en: "Find Help (NGO/Legal Aid Directory)",
      hi: "सहायता खोजें (एनजीओ/कानूनी सहायता निर्देशिका)"
    },
    subtitle: {
      en: "Connect with organizations for immediate assistance and support",
      hi: "तत्काल सहायता और समर्थन के लिए संगठनों से जुड़ें"
    },
    searchPlaceholder: {
      en: "Search by focus area or location...",
      hi: "फोकस क्षेत्र या स्थान से खोजें..."
    },
    callNow: {
      en: "Call Now",
      hi: "अभी कॉल करें"
    },
    whatsapp: {
      en: "WhatsApp",
      hi: "व्हाट्सऐप"
    },
    disclaimer: {
      en: "⚠️ This is a demo. Contacts shown are not real.",
      hi: "⚠️ यह एक डेमो है। दिखाए गए संपर्क वास्तविक नहीं हैं।"
    },
    noResults: {
      en: "No organizations found matching your search.",
      hi: "आपकी खोज से मेल खाने वाली कोई संस्था नहीं मिली।"
    }
  };

  // Filter NGOs based on search term
  const filteredNGOs = useMemo(() => {
    if (!searchTerm.trim()) return ngoData;
    
    const term = searchTerm.toLowerCase();
    return ngoData.filter(ngo => 
      ngo.name[isHindi ? 'hi' : 'en'].toLowerCase().includes(term) ||
      ngo.focus[isHindi ? 'hi' : 'en'].toLowerCase().includes(term) ||
      ngo.location[isHindi ? 'hi' : 'en'].toLowerCase().includes(term)
    );
  }, [searchTerm, isHindi]);

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (phone) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}`, '_blank');
  };

  return (
    <div className="find-help-page">
      {/* Header Space */}
      <div className="header-space"></div>

      <div className="find-help-container">
        {/* Language Toggle */}
        <div className="language-toggle">
          <button 
            className={`toggle-btn ${!isHindi ? 'active' : ''}`}
            onClick={() => setIsHindi(false)}
          >
            <Globe size={16} />
            EN
          </button>
          <button 
            className={`toggle-btn ${isHindi ? 'active' : ''}`}
            onClick={() => setIsHindi(true)}
          >
            <Globe size={16} />
            हिं
          </button>
        </div>

        {/* Title and Subtitle */}
        <div className="page-header">
          <h1 className="page-title">
            {text.title[isHindi ? 'hi' : 'en']}
          </h1>
          <p className="page-subtitle">
            {text.subtitle[isHindi ? 'hi' : 'en']}
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder={text.searchPlaceholder[isHindi ? 'hi' : 'en']}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* NGO Cards Grid */}
        <div className="ngo-grid">
          {filteredNGOs.length > 0 ? (
            filteredNGOs.map((ngo) => (
              <div key={ngo.id} className="ngo-card">
                {/* Card Image */}
                <div className="ngo-image">
                  <img 
                    src={ngo.image} 
                    alt={ngo.name[isHindi ? 'hi' : 'en']}
                    className="card-image"
                  />
                </div>

                <div className="ngo-content">
                  <div className="ngo-header">
                    <h3 className="ngo-name">
                      {ngo.name[isHindi ? 'hi' : 'en']}
                    </h3>
                    <p className="ngo-description">
                      {ngo.description[isHindi ? 'hi' : 'en']}
                    </p>
                  </div>
                  
                  <div className="ngo-details">
                    <div className="ngo-info-item">
                      <div className="info-icon">
                        <Users size={16} />
                      </div>
                      <div>
                        <span className="info-label">
                          {isHindi ? 'फोकस:' : 'Focus:'}
                        </span>
                        <span className="info-value">
                          {ngo.focus[isHindi ? 'hi' : 'en']}
                        </span>
                      </div>
                    </div>
                    
                    <div className="ngo-info-item">
                      <div className="info-icon">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <span className="info-label">
                          {isHindi ? 'स्थान:' : 'Location:'}
                        </span>
                        <span className="info-value">
                          {ngo.location[isHindi ? 'hi' : 'en']}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ngo-actions">
                    <button 
                      className="action-btn call-btn"
                      onClick={() => handleCall(ngo.phone)}
                    >
                      <Phone size={16} />
                      {text.callNow[isHindi ? 'hi' : 'en']}
                    </button>
                    
                    <button 
                      className="action-btn whatsapp-btn"
                      onClick={() => handleWhatsApp(ngo.phone)}
                    >
                      <MessageCircle size={16} />
                      {text.whatsapp[isHindi ? 'hi' : 'en']}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <Search size={48} className="no-results-icon" />
              <p>{text.noResults[isHindi ? 'hi' : 'en']}</p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p>{text.disclaimer[isHindi ? 'hi' : 'en']}</p>
        </div>
      </div>

      {/* Footer Space */}
      <div className="footer-space"></div>
    </div>
  );
};

export default FindHelp;