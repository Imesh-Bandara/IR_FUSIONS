import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const SERVICES = [
  'Mobile App Development',
  'Web Development',
  'Software Development',
  'Social Media Marketing',
  'Business Consulting',
  'UI/UX Design',
  'Other'
];

const WHATSAPP_NUMBER = '94775513856'; // Sri Lanka format (0775513856 -> 94775513856)

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = (data: typeof formData) => {
    const messageText = `Hello IR FUSIONS,\n\nI'm interested in your services.\n\n*My Details:*\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\n\n*Message:*\n${data.message}`;
    
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Send WhatsApp message and close modal after a short delay
    setTimeout(() => {
      sendWhatsAppMessage(formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      onClose();
      onSubmitSuccess();
    }, 500);
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

        <h3 className="modal-title">Get Started</h3>
        <p className="modal-desc">
          Tell us about your project and the services you need. We'll connect with you on WhatsApp within 24 hours.
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
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="form-input" 
              required 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 77 5513856"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="service">Service Required *</label>
            <select 
              id="service" 
              name="service" 
              className="form-input form-select" 
              required 
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service...</option>
              {SERVICES.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Project Details *</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-input form-textarea" 
              required 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project and what you're looking to achieve..."
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "CONNECTING..." : "SEND VIA WHATSAPP"}
          </button>
        </form>
      </div>
    </div>
  );
};

