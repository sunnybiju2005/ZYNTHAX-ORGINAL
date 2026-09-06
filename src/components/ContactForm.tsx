'use client';

import React, { useState } from 'react';
import { submitClientMessage } from '@/lib/firestoreHooks';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
      className="card-panel"
      style={{
        padding: '36px',
        borderRadius: '16px',
        background: '#ffffff',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h3
          style={{
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '6px',
          }}
        >
          Send Us a Message
        </h3>
        <p style={{ color: '#475569', fontSize: '0.925rem' }}>
          Tell us about your project requirements and our team will get back to you with a detailed estimate within 2 hours.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            padding: '32px',
            borderRadius: '12px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            <CheckCircle2 size={26} />
          </div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#065f46' }}>
            Inquiry Received!
          </h4>
          <p style={{ color: '#047857', fontSize: '0.925rem', maxWidth: '420px', lineHeight: 1.6 }}>
            {feedbackMessage}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary btn-sm"
            style={{ marginTop: '6px' }}
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
                borderRadius: '8px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#b91c1c',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '18px',
              }}
            >
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Full Name <span style={{ color: '#2563eb' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address <span style={{ color: '#2563eb' }}>*</span>
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
              gap: '16px',
            }}
          >
            {/* Phone */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone Number (WhatsApp)
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

            {/* Subject */}
            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                Service Required
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a service...</option>
                <option value="Website Building & Web Development">Website Building & Web Development</option>
                <option value="Mobile Apps & Retail Billing Software">Mobile Apps & Retail Billing Software</option>
                <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                <option value="Logo Design & Brand Identity">Logo Design & Brand Identity</option>
                <option value="Logo Animation & Motion">Logo Animation & Motion</option>
                <option value="4K Video Editing & Social Reels">4K Video Editing & Social Reels</option>
                <option value="Photoshop & Commercial Graphics">Photoshop & Commercial Graphics</option>
                <option value="General Inquiry / Other">General Inquiry / Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Project Details <span style={{ color: '#2563eb' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Describe your business goals, timeline, and deliverables..."
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', marginTop: '4px', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
