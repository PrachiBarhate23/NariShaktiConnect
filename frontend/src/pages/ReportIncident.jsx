import React, { useState } from 'react';
import './ReportIncident.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const ReportIncident = () => {
  const [language, setLanguage] = useState('english');
  
  const translations = {
    english: {
      title: 'Report an Incident',
      incidentType: 'Incident type',
      harassment: 'Harassment',
      discrimination: 'Discrimination',
      other: 'Other',
      yourName: 'Your name',
      yourNamePlaceholder: 'Enter your name (optional)',
      language: 'Language',
      dateOfIncident: 'Date of incident',
      additionalNotes: 'Additional notes',
      additionalNotesPlaceholder: 'Any additional information...',
      yourPrivacy: 'Your privacy',
      yourPrivacyPlaceholder: 'Privacy preferences and concerns...',
      description: 'Description of incident',
      descriptionPlaceholder: 'Please provide detailed description of what happened...',
      request: 'Request',
      requestPlaceholder: 'What kind of help or action are you requesting...',
      confidentiality: 'Confidentiality',
      contactInfo: 'Contact info',
      contactInfoPlaceholder: 'Phone number or email (optional)',
      location: 'Location',
      locationPlaceholder: 'Where did this incident occur?',
      witnesses: 'Witnesses',
      witnessesPlaceholder: 'Names or descriptions of any witnesses...',
      helpSources: 'Help sources',
      helpSourcesPlaceholder: 'What kind of support or resources do you need...',
      contactNGO: 'Contact NGO',
      contactNGOPlaceholder: 'Would you like us to connect you with partner NGOs...',
      privacyNotice: 'Your privacy and safety are our top priorities. All reports are handled with strict confidentiality.',
      submitReport: 'Submit report',
      cancel: 'Cancel',
      reportSubmitted: 'Report Submitted Successfully',
      thankYou: 'Thank you for reporting this incident. Your report has been received and will be reviewed by our team.',
      reportId: 'Your report ID:',
      updates: 'You will receive updates if contact information was provided',
      confidentialityNote: 'All reports are handled with strict confidentiality',
      submitAnother: 'Submit Another Report',
      selectIncidentType: 'Please select an incident type',
      provideDescription: 'Please provide a description',
      selectDate: 'Please select a date'
    },
    hindi: {
      title: 'घटना की रिपोर्ट करें',
      incidentType: 'घटना का प्रकार',
      harassment: 'उत्पीड़न',
      discrimination: 'भेदभाव',
      other: 'अन्य',
      yourName: 'आपका नाम',
      yourNamePlaceholder: 'अपना नाम दर्ज करें (वैकल्पिक)',
      language: 'भाषा',
      dateOfIncident: 'घटना की तारीख',
      additionalNotes: 'अतिरिक्त टिप्पणियां',
      additionalNotesPlaceholder: 'कोई अतिरिक्त जानकारी...',
      yourPrivacy: 'आपकी गोपनीयता',
      yourPrivacyPlaceholder: 'गोपनीयता प्राथमिकताएं और चिंताएं...',
      description: 'घटना का विवरण',
      descriptionPlaceholder: 'कृपया क्या हुआ था इसका विस्तृत विवरण प्रदान करें...',
      request: 'अनुरोध',
      requestPlaceholder: 'आप किस प्रकार की सहायता या कार्रवाई का अनुरोध कर रहे हैं...',
      confidentiality: 'गोपनीयता',
      contactInfo: 'संपर्क जानकारी',
      contactInfoPlaceholder: 'फोन नंबर या ईमेल (वैकल्पिक)',
      location: 'स्थान',
      locationPlaceholder: 'यह घटना कहाँ हुई?',
      witnesses: 'गवाह',
      witnessesPlaceholder: 'किसी भी गवाह के नाम या विवरण...',
      helpSources: 'सहायता स्रोत',
      helpSourcesPlaceholder: 'आपको किस प्रकार के समर्थन या संसाधनों की आवश्यकता है...',
      contactNGO: 'NGO से संपर्क',
      contactNGOPlaceholder: 'क्या आप चाहते हैं कि हम आपको साझेदार NGOs से जोड़ें...',
      privacyNotice: 'आपकी गोपनीयता और सुरक्षा हमारी सर्वोच्च प्राथमिकताएं हैं। सभी रिपोर्ट्स को सख्त गोपनीयता के साथ संभाला जाता है।',
      submitReport: 'रिपोर्ट जमा करें',
      cancel: 'रद्द करें',
      reportSubmitted: 'रिपोर्ट सफलतापूर्वक जमा की गई',
      thankYou: 'इस घटना की रिपोर्ट करने के लिए धन्यवाद। आपकी रिपोर्ट प्राप्त हो गई है और हमारी टीम द्वारा इसकी समीक्षा की जाएगी।',
      reportId: 'आपकी रिपोर्ट ID:',
      updates: 'यदि संपर्क जानकारी प्रदान की गई है तो आपको अपडेट मिलेंगे',
      confidentialityNote: 'सभी रिपोर्ट्स को सख्त गोपनीयता के साथ संभाला जाता है',
      submitAnother: 'एक और रिपोर्ट जमा करें',
      selectIncidentType: 'कृपया घटना का प्रकार चुनें',
      provideDescription: 'कृपया विवरण प्रदान करें',
      selectDate: 'कृपया एक तारीख चुनें'
    }
  };

  const t = translations[language];
  const [formData, setFormData] = useState({
    incidentType: '',
    yourName: '',
    dateOfIncident: '',
    additionalNotes: '',
    yourPrivacy: '',
    description: '',
    request: '',
    contactInfo: '',
    location: '',
    witnesses: '',
    helpSources: '',
    contactNGO: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.incidentType) newErrors.incidentType = t.selectIncidentType;
    if (!formData.description.trim()) newErrors.description = t.provideDescription;
    if (!formData.dateOfIncident) newErrors.dateOfIncident = t.selectDate;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      incidentType: '',
      yourName: '',
      dateOfIncident: '',
      additionalNotes: '',
      yourPrivacy: '',
      description: '',
      request: '',
      contactInfo: '',
      location: '',
      witnesses: '',
      helpSources: '',
      contactNGO: ''
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="report-incident-container">
        {/* <Navbar /> */}
        <div className="main-content">
          <div className="confirmation-message">
            <div className="confirmation-card">
              <h2>{t.reportSubmitted}</h2>
              <p>{t.thankYou}</p>
              <div className="confirmation-info">
                <p>• {t.reportId} <strong>#{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong></p>
                <p>• {t.updates}</p>
                <p>• {t.confidentialityNote}</p>
              </div>
              <button 
                className="btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                {t.submitAnother}
              </button>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="report-incident-container">
      {/* <Navbar /> */}
      
      <div className="main-content">
        <div className="page-header">
          <h1>{t.title}</h1>
          <div className="header-controls">
            <div className="language-toggle">
              <button
                type="button"
                className={`toggle-btn ${language === 'english' ? 'active' : ''}`}
                onClick={() => setLanguage('english')}
              >
                English
              </button>
              <button
                type="button"
                className={`toggle-btn ${language === 'hindi' ? 'active' : ''}`}
                onClick={() => setLanguage('hindi')}
              >
                हिंदी
              </button>
            </div>
            <button className="close-btn">×</button>
          </div>
        </div>

        <div className="incident-form">
          <div className="form-grid">
            <div className="form-section incident-details">
              <div className="form-group">
                <label className="form-label">{t.incidentType}</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="incidentType"
                      value="harassment"
                      checked={formData.incidentType === 'harassment'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    {t.harassment}
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="incidentType"
                      value="discrimination"
                      checked={formData.incidentType === 'discrimination'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    {t.discrimination}
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="incidentType"
                      value="other"
                      checked={formData.incidentType === 'other'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    {t.other}
                  </label>
                </div>
                {errors.incidentType && <span className="error-text">{errors.incidentType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="yourName" className="form-label">{t.yourName}</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={t.yourNamePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfIncident" className="form-label">{t.dateOfIncident}</label>
                <input
                  type="date"
                  id="dateOfIncident"
                  name="dateOfIncident"
                  value={formData.dateOfIncident}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.dateOfIncident && <span className="error-text">{errors.dateOfIncident}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="additionalNotes" className="form-label">{t.additionalNotes}</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.additionalNotesPlaceholder}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="yourPrivacy" className="form-label">{t.yourPrivacy}</label>
                <textarea
                  id="yourPrivacy"
                  name="yourPrivacy"
                  value={formData.yourPrivacy}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.yourPrivacyPlaceholder}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">{t.description}</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.descriptionPlaceholder}
                  rows="4"
                />
                {errors.description && <span className="error-text">{errors.description}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="request" className="form-label">{t.request}</label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.requestPlaceholder}
                  rows="3"
                />
              </div>
            </div>

            <div className="form-section confidentiality-section">
              <h3 className="section-title">{t.confidentiality}</h3>
              
              <div className="form-group">
                <label htmlFor="contactInfo" className="form-label">{t.contactInfo}</label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={t.contactInfoPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">{t.location}</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={t.locationPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="witnesses" className="form-label">{t.witnesses}</label>
                <textarea
                  id="witnesses"
                  name="witnesses"
                  value={formData.witnesses}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.witnessesPlaceholder}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="helpSources" className="form-label">{t.helpSources}</label>
                <textarea
                  id="helpSources"
                  name="helpSources"
                  value={formData.helpSources}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.helpSourcesPlaceholder}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNGO" className="form-label">{t.contactNGO}</label>
                <textarea
                  id="contactNGO"
                  name="contactNGO"
                  value={formData.contactNGO}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t.contactNGOPlaceholder}
                  rows="3"
                />
              </div>

              <div className="privacy-notice">
                <p>{t.privacyNotice}</p>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-primary" onClick={handleSubmit}>
              {t.submitReport}
            </button>
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              {t.cancel}
            </button>
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default ReportIncident;