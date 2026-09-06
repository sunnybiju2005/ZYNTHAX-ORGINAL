'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get('subject') || '';

  const faqs = [
    {
      q: 'What is the typical turnaround time for a project?',
      a: 'Landing pages and branding kits typically take 5–10 business days. Custom full-stack web platforms and retail billing applications range from 2 to 6 weeks depending on custom hardware integrations and scope.',
    },
    {
      q: 'How does real-time content sync work on our website?',
      a: 'Your dynamic content (portfolio items, services, team members) is connected to Firebase Firestore via onSnapshot listeners. Any changes made in the database or admin app reflect instantly on your site without requiring a code rebuild.',
    },
    {
      q: 'Can you develop retail billing apps that work offline?',
      a: 'Yes! Our billing and POS solutions are built offline-first with local SQLite/IndexedDB caching. They continue printing thermal receipts and scanning barcodes even if your internet connection drops, and sync seamlessly once restored.',
    },
    {
      q: 'Do you provide maintenance and SEO support after launch?',
      a: 'Absolutely. We offer dedicated monthly retainers covering technical SEO optimization, speed maintenance, security patches, cloud database scaling, and regular feature updates.',
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge">
            <span>Direct Client Desk</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', marginBottom: '18px' }}>
            Let’s Build Something <span className="text-gradient">Extraordinary</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Reach out directly or submit your project details below. We guarantee a thoughtful response within 2 hours.
          </p>
        </div>

        {/* Top Info Cards */}
        <div className="grid-3" style={{ marginBottom: '60px' }}>
          {/* Email Direct */}
          <a
            href="mailto:zynthax13@gmail.com"
            className="glass-panel"
            style={{
              padding: '28px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={22} color="var(--accent-cyan)" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Email Inquiries
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '4px 0' }}>
                zynthax13@gmail.com
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--accent-cyan)' }}>
                Click to send email directly &rarr;
              </div>
            </div>
          </a>

          {/* Phone Direct */}
          <a
            href="tel:+918848241519"
            className="glass-panel"
            style={{
              padding: '28px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(79, 172, 254, 0.1)',
                border: '1px solid rgba(79, 172, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={22} color="var(--accent-blue)" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Phone & WhatsApp
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '4px 0' }}>
                +91 8848241519
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--accent-blue)' }}>
                Direct call & WhatsApp support &rarr;
              </div>
            </div>
          </a>

          {/* SLA & Time */}
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Clock size={22} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Client Desk Response Time
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '4px 0' }}>
                Under 2 Hours
              </div>
              <div style={{ fontSize: '0.825rem', color: '#10b981' }}>
                Mon &ndash; Sat: 9:00 AM &ndash; 8:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Main Interactive Form */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 100px',
          }}
        >
          <ContactForm defaultSubject={defaultSubject} />
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', color: '#fff' }}>
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{ padding: '24px 28px', borderRadius: '16px' }}
              >
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <HelpCircle size={18} color="var(--accent-cyan)" />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
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
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px', color: '#94a3b8' }}>Loading contact desk...</div>}>
      <ContactContent />
    </Suspense>
  );
}
