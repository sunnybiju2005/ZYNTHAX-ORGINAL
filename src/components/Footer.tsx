'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES = [
  'Web & System Development',
  'Retail Billing & POS Apps',
  'UI/UX Architecture',
  'SEO & Search Visibility',
  'Brand & Logo Systems',
  'Logo Animation & Motion',
  'Video Post-Production',
  'Commercial Graphic Retouching',
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#f8fafc',
        borderTop: '1px solid #1e293b',
        position: 'relative',
        zIndex: 1,
        marginTop: '60px',
      }}
    >
      {/* ── MOBILE FOOTER ── */}
      <div className="footer-mobile">
        <div className="container" style={{ paddingTop: '28px', paddingBottom: '20px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <img
              src="https://res.cloudinary.com/dqhn8wq7k/image/upload/f_auto,q_auto/v1788722645/klbk6xthte9ldhnp0uuf.png"
              alt="Zynthax"
              style={{ height: '30px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: '#ffffff',
                letterSpacing: '0.03em',
              }}
            >
              ZYNTHAX
            </span>
          </div>

          {/* Nav links — two columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px 20px',
              marginBottom: '18px',
            }}
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact row */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
            <a
              href="mailto:zynthax13@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.825rem' }}
            >
              <Mail size={14} color="#94a3b8" />
              zynthax13@gmail.com
            </a>
            <a
              href="tel:+918848241519"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.825rem' }}
            >
              <Phone size={14} color="#94a3b8" />
              +91 8848241519
            </a>
          </div>

          {/* Copyright */}
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '14px', fontSize: '0.75rem', color: '#475569' }}>
            © {new Date().getFullYear()} Zynthax Digital Solutions. All rights reserved.
          </div>
        </div>
      </div>

      {/* ── DESKTOP FOOTER ── */}
      <div className="footer-desktop">
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '40px',
              marginBottom: '48px',
            }}
          >
            {/* Brand Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <img
                  src="https://res.cloudinary.com/dqhn8wq7k/image/upload/f_auto,q_auto/v1788722645/klbk6xthte9ldhnp0uuf.png"
                  alt="Zynthax Digital Solutions"
                  style={{ height: '38px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.03em', color: '#ffffff', lineHeight: 1.1 }}>
                    ZYNTHAX
                  </span>
                  <span style={{ fontSize: '0.625rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1, marginTop: '3px' }}>
                    Digital Solutions
                  </span>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px', maxWidth: '320px' }}>
                Custom web platforms, offline-capable retail billing applications, brand identity systems, and multimedia post-production.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Services
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {SERVICES.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Direct Contacts
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:zynthax13@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem' }}>
                  <Mail size={15} color="#94a3b8" />
                  zynthax13@gmail.com
                </a>
                <a href="tel:+918848241519" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem' }}>
                  <Phone size={15} color="#94a3b8" />
                  +91 8848241519
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', fontSize: '0.8rem', color: '#64748b' }}>
            © {new Date().getFullYear()} Zynthax Digital Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
