'use client';

import React, { useState } from 'react';
import { submitClientMessage } from '@/lib/firestoreHooks';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and project message.');
      setLoading(false);
      return;
    }

    try {
      const res = await submitClientMessage(formData);
      if (res.success) {
        setSubmitted(true);
        setFeedbackMessage(res.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setErrorMessage(res.message);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '36px',
        borderRadius: '24px',
        position: 'relative',
        border: '1px solid rgba(0, 242, 254, 0.25)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '8px',
          }}
        >
          Send Us a Direct Message
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
          Fill out the brief below and our team will get back to you with a detailed scope and timeline within 2 hours.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            padding: '32px',
            borderRadius: '16px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07090e',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
            Inquiry Sent to Firestore!
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '420px', lineHeight: 1.6 }}>
            {feedbackMessage}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary btn-sm"
            style={{ marginTop: '8px' }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '18px',
            }}
          >
            {/* Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Your Full Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g. Rahul Nair"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address <span style={{ color: 'var(--accent-cyan)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '18px',
            }}
          >
            {/* Phone */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Subject / Service category */}
            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                Service of Interest
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a service category...</option>
                <option value="Website Building & Web Apps">Website Building & Web Apps</option>
                <option value="Mobile & Retail Billing Apps">Mobile & Retail Billing Apps</option>
                <option value="UI/UX Design & Prototypes">UI/UX Design & Prototypes</option>
                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                <option value="Logo Design & Brand Identity">Logo Design & Brand Identity</option>
                <option value="Logo Animation & Motion">Logo Animation & Motion</option>
                <option value="4K Video Editing & Social Reels">4K Video Editing & Social Reels</option>
                <option value="Photoshop & Commercial Graphics">Photoshop & Commercial Graphics</option>
                <option value="Custom Project Consultation">Custom Project Consultation</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Project Description & Requirements <span style={{ color: 'var(--accent-cyan)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your goals, timeline, deliverables, or current system challenges..."
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', marginTop: '8px', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Transmitting to Firestore...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
