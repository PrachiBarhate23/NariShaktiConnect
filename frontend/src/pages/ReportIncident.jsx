import React, { useState } from 'react';
import './ReportIncident.css';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    yourName: '',
    language: 'english',
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
    
    if (!formData.incidentType) newErrors.incidentType = 'Please select an incident type';
    if (!formData.description.trim()) newErrors.description = 'Please provide a description';
    if (!formData.dateOfIncident) newErrors.dateOfIncident = 'Please select a date';
    
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
      language: 'english',
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
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              <div className="logo-icon"></div>
              <span>Hari Shakti</span>
            </div>
          </div>
          <nav className="sidebar-nav">
            <div className="nav-item">Home</div>
            <div className="nav-item">Our Work</div>
            <div className="nav-item">My Rights</div>
            <div className="nav-item">Resources</div>
            <div className="nav-item">Find Help</div>
            <div className="nav-item">Safety Tips</div>
          </nav>
        </div>
        
        <div className="main-content">
          <div className="confirmation-message">
            <div className="confirmation-card">
              <h2>Report Submitted Successfully</h2>
              <p>Thank you for reporting this incident. Your report has been received and will be reviewed by our team.</p>
              <div className="confirmation-info">
                <p>• Your report ID: <strong>#{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong></p>
                <p>• You will receive updates if contact information was provided</p>
                <p>• All reports are handled with strict confidentiality</p>
              </div>
              <button 
                className="btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="report-incident-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon"></div>
            <span>Hari Shakti</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item">Home</div>
          <div className="nav-item">Our Work</div>
          <div className="nav-item">My Rights</div>
          <div className="nav-item">Resources</div>
          <div className="nav-item">Find Help</div>
          <div className="nav-item">Safety Tips</div>
        </nav>
      </div>
      
      <div className="main-content">
        <div className="page-header">
          <h1>Report an Incident</h1>
          <button className="close-btn">×</button>
        </div>

        <div className="incident-form">
          <div className="form-grid">
            <div className="form-section incident-details">
              <div className="form-group">
                <label className="form-label">Incident type</label>
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
                    Harassment
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
                    Discrimination
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
                    Other
                  </label>
                </div>
                {errors.incidentType && <span className="error-text">{errors.incidentType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="yourName" className="form-label">Your name</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your name (optional)"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Language</label>
                <div className="language-toggle">
                  <button
                    type="button"
                    className={`toggle-btn ${formData.language === 'english' ? 'active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, language: 'english' }))}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className={`toggle-btn ${formData.language === 'hindi' ? 'active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, language: 'hindi' }))}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dateOfIncident" className="form-label">Date of incident</label>
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
                <label htmlFor="additionalNotes" className="form-label">Additional notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Any additional information..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="yourPrivacy" className="form-label">Your privacy</label>
                <textarea
                  id="yourPrivacy"
                  name="yourPrivacy"
                  value={formData.yourPrivacy}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Privacy preferences and concerns..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">Description of incident</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Please provide detailed description of what happened..."
                  rows="4"
                />
                {errors.description && <span className="error-text">{errors.description}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="request" className="form-label">Request</label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="What kind of help or action are you requesting..."
                  rows="3"
                />
              </div>
            </div>

            <div className="form-section confidentiality-section">
              <h3 className="section-title">Confidentiality</h3>
              
              <div className="form-group">
                <label htmlFor="contactInfo" className="form-label">Contact info</label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Phone number or email (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Where did this incident occur?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="witnesses" className="form-label">Witnesses</label>
                <textarea
                  id="witnesses"
                  name="witnesses"
                  value={formData.witnesses}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Names or descriptions of any witnesses..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="helpSources" className="form-label">Help sources</label>
                <textarea
                  id="helpSources"
                  name="helpSources"
                  value={formData.helpSources}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="What kind of support or resources do you need..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNGO" className="form-label">Contact NGO</label>
                <textarea
                  id="contactNGO"
                  name="contactNGO"
                  value={formData.contactNGO}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Would you like us to connect you with partner NGOs..."
                  rows="3"
                />
              </div>

              <div className="privacy-notice">
                <p>Your privacy and safety are our top priorities. All reports are handled with strict confidentiality.</p>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Submit report
            </button>
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIncident;