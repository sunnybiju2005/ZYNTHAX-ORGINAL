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
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="badge">
            <span>Contact Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: '#0f172a', marginBottom: '14px' }}>
            Let’s Discuss Your <span className="text-gradient">Project</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Reach out directly or send us a message below. We respond to all inquiries within 2 hours during business hours.
          </p>
        </div>

        {/* Top Direct Contact Cards */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {/* Email Direct */}
          <a
            href="mailto:zynthax13@gmail.com"
            className="card-panel"
            style={{
              padding: '24px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              background: '#ffffff',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={20} color="#2563eb" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Email Inquiries
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '3px 0' }}>
                zynthax13@gmail.com
              </div>
              <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 500 }}>
                Send direct email &rarr;
              </div>
            </div>
          </a>

          {/* Phone Direct */}
          <a
            href="tel:+918848241519"
            className="card-panel"
            style={{
              padding: '24px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              background: '#ffffff',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={20} color="#2563eb" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Phone & WhatsApp
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '3px 0' }}>
                +91 8848241519
              </div>
              <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 500 }}>
                Call or message &rarr;
              </div>
            </div>
          </a>

          {/* SLA Card */}
          <div
            className="card-panel"
            style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              background: '#ffffff',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Clock size={20} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Response Time
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '3px 0' }}>
                Under 2 Hours
              </div>
              <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 500 }}>
                Mon &ndash; Sat: 9:00 AM &ndash; 8:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ maxWidth: '800px', margin: '0 auto 80px' }}>
          <ContactForm defaultSubject={defaultSubject} />
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge">
              <span>FAQ</span>
            </div>
            <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card-panel"
                style={{ padding: '22px 26px', borderRadius: '12px', background: '#ffffff' }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <HelpCircle size={17} color="#2563eb" />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65 }}>
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
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px', color: '#64748b' }}>Loading contact desk...</div>}>
      <ContactContent />
    </Suspense>
  );
}
