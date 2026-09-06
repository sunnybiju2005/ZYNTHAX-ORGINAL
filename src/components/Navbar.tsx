'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 20);
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
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 9, 14, 0.85)'
          : 'rgba(7, 9, 14, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
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
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #8a2be2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.5)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.35rem',
                color: '#07090e',
              }}
            >
              Z
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              ZYNTHAX
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Digital
              </span>
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '-2px',
              }}
            >
              Digital Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#00f2fe' : '#94a3b8',
                  background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                  border: isActive
                    ? '1px solid rgba(0, 242, 254, 0.25)'
                    : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Contact Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Link
            href="/contact"
            className="btn-primary btn-sm"
            style={{ display: 'none' }}
            id="nav-cta-btn"
          >
            <span>Start Project</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '10px',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 14, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
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
                  padding: '12px 18px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#00f2fe' : '#e2e8f0',
                  background: isActive ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive
                    ? '1px solid rgba(0, 242, 254, 0.3)'
                    : '1px solid transparent',
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '12px', width: '100%' }}
          >
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 868px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(#nav-cta-btn) {
            display: inline-flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
