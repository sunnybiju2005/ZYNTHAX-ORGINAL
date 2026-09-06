'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#f8fafc',
        borderTop: '1px solid #1e293b',
        paddingTop: '70px',
        paddingBottom: '36px',
        position: 'relative',
        zIndex: 1,
        marginTop: '80px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontSize: '1.2rem',
                }}
              >
                Z
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ZYNTHAX
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.65rem',
                    color: '#93c5fd',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Digital Solutions
                </span>
              </div>
            </div>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Professional digital partner for modern businesses. Specializing in high-performance websites, custom retail billing apps, brand identity, and media post-production.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '6px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.775rem',
                color: '#34d399',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#34d399',
                }}
              />
              Available for New Projects
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Our Work', href: '/portfolio' },
                { label: 'Meet the Team', href: '/team' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} opacity={0.6} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Search Engine Optimization (SEO)',
                'Website & Web Development',
                'UI/UX Design & Prototyping',
                'Retail Billing & Desktop Apps',
                'Logo Design & Brand Guidelines',
                'Logo Animation & Motion',
                'Video Editing & Reels',
                'Photoshop & Commercial Graphics',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:zynthax13@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#93c5fd',
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Email Support</div>
                  <div style={{ fontWeight: 600 }}>zynthax13@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+918848241519"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#93c5fd',
                  }}
                >
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Phone & WhatsApp</div>
                  <div style={{ fontWeight: 600 }}>+91 8848241519</div>
                </div>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#93c5fd',
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Location</div>
                  <div style={{ fontWeight: 600 }}>Kerala, India (Global Remote)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.825rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Zynthax Digital Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>Powered by Firebase Firestore & Cloudinary</span>
            <span>&bull;</span>
            <span style={{ color: '#60a5fa' }}>Real-time Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
