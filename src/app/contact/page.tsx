'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import {
  Mail,
  Phone,
  Clock,
  HelpCircle,
} from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get('subject') || '';

  const faqs = [
    {
      q: 'What is the standard turnaround time for a project?',
      a: 'Landing pages, brand identities, and promotional video edits typically take 5–10 business days. Custom full-stack web applications and retail billing software take 2 to 5 weeks depending on barcode scanner/printer hardware integration and feature scope.',
    },
    {
      q: 'How does real-time content sync work on the website?',
      a: 'All dynamic content (services, portfolio items, team directory) is connected to Firebase Firestore using onSnapshot listeners. Whenever changes are made in the backend or mobile admin app, the live site updates automatically without needing a code rebuild.',
    },
    {
      q: 'Can your retail billing software operate without an active internet connection?',
      a: 'Yes. Our POS and billing applications are engineered offline-first with local database caching. You can continue scanning barcodes and printing customer receipts offline, and the data automatically syncs with the cloud once connectivity is re-established.',
    },
    {
      q: 'Do you offer ongoing website maintenance and SEO packages?',
      a: 'Yes, we provide flexible monthly retainers that include speed optimization, cloud database maintenance, technical SEO tracking, security monitoring, and regular feature updates.',
    },
  ];

  return (
    <div className="contact-page-wrapper" style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="contact-header" style={{ maxWidth: '720px', margin: '0 auto 48px', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px',
            }}
          >
            Contact Desk
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0f172a', marginBottom: '14px', fontWeight: 800 }}>
            Discuss Your Next Project
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Direct lines to our engineering and design team. We respond to all project inquiries within 2 hours during business hours.
          </p>
        </div>

        {/* Top Direct Contact Cards */}
        <div className="contact-cards-row grid-3" style={{ marginBottom: '40px' }}>
          {/* Email */}
          <a
            href="mailto:zynthax13@gmail.com"
            style={{
              padding: '22px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                background: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={18} color="#2563eb" />
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Email
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '2px 0' }}>
                zynthax13@gmail.com
              </div>
              <div style={{ fontSize: '0.775rem', color: '#2563eb' }}>
                Send direct email
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+918848241519"
            style={{
              padding: '22px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                background: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={18} color="#2563eb" />
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Phone & WhatsApp
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '2px 0' }}>
                +91 8848241519
              </div>
              <div style={{ fontSize: '0.775rem', color: '#2563eb' }}>
                Call or message
              </div>
            </div>
          </a>

          {/* Response SLA */}
          <div
            style={{
              padding: '22px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                background: '#ecfdf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Clock size={18} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Response Standard
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '2px 0' }}>
                Under 2 Hours
              </div>
              <div style={{ fontSize: '0.775rem', color: '#059669' }}>
                Mon &ndash; Sat: 9am &ndash; 8pm IST
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper" style={{ maxWidth: '780px', margin: '0 auto 64px' }}>
          <ContactForm defaultSubject={defaultSubject} />
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
              }}
            >
              FAQ
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800 }}>
              Common Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px 24px',
                  borderRadius: '4px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <HelpCircle size={16} color="#2563eb" />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>Loading contact desk...</div>}>
      <ContactContent />
    </Suspense>
  );
}
