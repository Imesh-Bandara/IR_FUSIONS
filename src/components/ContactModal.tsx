import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
      onSubmitSuccess();
    }, 1200);
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`} 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-accent modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <h3 className="modal-title">Get In Touch</h3>
        <p className="modal-desc">
          Tell us about your project — mobile app, social campaign, or business consulting. We will respond within 24 hours.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Director Sarah Vance"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Official Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. vance@gov.defense.org"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="company">Agency / Organization</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              className="form-input" 
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Advanced Defense Labs"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Transmission Details *</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-input form-textarea" 
              required 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Specify sensor spectrum requirements or thermal integration scope..."
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "TRANSMITTING..." : "INITIATE TRANSMISSION"}
          </button>
        </form>
      </div>
    </div>
  );
};
