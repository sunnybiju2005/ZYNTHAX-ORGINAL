'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Work', href: '/portfolio' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.2s ease',
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.96)'
          : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo & Company Name */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <img
            src="https://res.cloudinary.com/dqhn8wq7k/image/upload/f_auto,q_auto/v1788722645/klbk6xthte9ldhnp0uuf.png"
            alt="Zynthax Digital Solutions Logo"
            style={{
              height: '38px',
              width: 'auto',
              maxHeight: '40px',
              objectFit: 'contain',
              display: 'block',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                letterSpacing: '0.03em',
                color: '#0f172a',
                lineHeight: 1.1,
              }}
            >
              ZYNTHAX
            </span>
            <span
              style={{
                fontSize: '0.625rem',
                color: '#64748b',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                lineHeight: 1,
                marginTop: '3px',
              }}
            >
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#0f172a' : '#64748b',
                  background: isActive ? '#f1f5f9' : 'transparent',
                  transition: 'color 0.15s ease, background 0.15s ease',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Link
            href="/contact"
            className="btn-primary btn-sm desktop-cta"
            id="nav-cta-btn"
          >
            Start a Project
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '8px',
              color: '#0f172a',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 98,
            }}
            aria-hidden="true"
          />
          <div
            className="mobile-drawer-anim"
            style={{
              position: 'absolute',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              background: '#ffffff',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '16px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 12px 24px -4px rgba(0,0,0,0.12)',
              zIndex: 99,
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#2563eb' : '#1e293b',
                    background: isActive ? '#eff6ff' : 'transparent',
                    borderLeft: isActive ? '3px solid #2563eb' : '3px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                marginTop: '12px',
                width: '100%',
                padding: '13px 20px',
                fontSize: '0.95rem',
                justifyContent: 'center',
              }}
            >
              Start a Project
            </Link>
          </div>
        </>
      )}

    </header>
  );
}
