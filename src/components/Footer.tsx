'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#04060a',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 1,
        marginTop: '100px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand Col */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #8a2be2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#07090e',
                  fontSize: '1.25rem',
                }}
              >
                Z
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ZYNTHAX
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.7rem',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Digital Solutions
                </span>
              </div>
            </div>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.925rem',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              Transforming businesses with custom Next.js web applications, retail billing & mobile software, magnetic brand identities, and high-impact multimedia editing.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.8rem',
                color: '#10b981',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
              Accepting New Global Projects
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home Overview', href: '/' },
                { label: 'About Our Story', href: '/about' },
                { label: 'Services Catalog', href: '/services' },
                { label: 'Portfolio & Case Studies', href: '/portfolio' },
                { label: 'Our Core Team', href: '/team' },
                { label: 'Contact Client Desk', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.925rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} opacity={0.6} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Search Engine Optimization (SEO)',
                'Website & Web App Development',
                'UI/UX Design & Prototyping',
                'Retail Billing & Desktop Apps',
                'Logo Design & Brand Guidelines',
                'Logo Animation & Motion Graphics',
                '4K Video Editing & Reels',
                'Photoshop Retouching & Graphics',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Direct */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <a
                href="mailto:zynthax13@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Mail size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Inquiries</div>
                  <div style={{ fontWeight: 600 }}>zynthax13@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+918848241519"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(79, 172, 254, 0.1)',
                    border: '1px solid rgba(79, 172, 254, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Phone size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone & WhatsApp</div>
                  <div style={{ fontWeight: 600 }}>+91 8848241519</div>
                </div>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#e2e8f0',
                  fontSize: '0.925rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(138, 43, 226, 0.1)',
                    border: '1px solid rgba(138, 43, 226, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                  }}
                >
                  <MapPin size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Headquarters</div>
                  <div style={{ fontWeight: 600 }}>Kerala, India (Serving Globally)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Zynthax Digital Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>Powered by Firebase Firestore & Cloudinary</span>
            <span>&bull;</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Real-time Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
