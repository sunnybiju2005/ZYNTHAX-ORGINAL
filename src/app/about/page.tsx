'use client';

import React from 'react';
import Link from 'next/link';
import { useSiteContent } from '@/lib/firestoreHooks';
import {
  Target,
  Compass,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  const { content } = useSiteContent();

  const values = [
    {
      title: 'Engineering Quality',
      desc: 'We write robust, modular, and maintainable software utilizing dependable frameworks like Next.js, Firebase, and Cloudinary.',
      icon: <Cpu size={22} color="#2563eb" />,
    },
    {
      title: 'High Performance & Speed',
      desc: 'From sub-second page loads to prompt client communications, we prioritize efficiency and zero unnecessary friction.',
      icon: <Zap size={22} color="#2563eb" />,
    },
    {
      title: 'Practical Business Focus',
      desc: 'We solve real operational challenges — like high-speed retail checkout, inventory management, and search engine lead generation.',
      icon: <Target size={22} color="#2563eb" />,
    },
    {
      title: 'Clear & Honest Communication',
      desc: 'Transparent timelines, predictable pricing, and dedicated post-launch support for peace of mind.',
      icon: <ShieldCheck size={22} color="#2563eb" />,
    },
  ];

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge">
            <span>About Our Company</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: '#0f172a', marginBottom: '16px' }}>
            Empowering Modern Businesses with <span className="text-gradient">Dependable Technology</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Zynthax Digital Solutions is an agile digital services agency built to deliver reliable websites, practical business applications, and distinctive visual branding.
          </p>
        </div>

        {/* Company Story */}
        <div
          className="card-panel"
          style={{
            padding: 'clamp(30px, 4vw, 48px)',
            borderRadius: '16px',
            marginBottom: '48px',
            background: '#ffffff',
          }}
        >
          <div style={{ maxWidth: '820px' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '16px' }}>
              Our Story & Background
            </h2>
            <p
              style={{
                color: '#334155',
                fontSize: '1rem',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              {content.aboutText}
            </p>
            <p
              style={{
                color: '#334155',
                fontSize: '1rem',
                lineHeight: 1.75,
              }}
            >
              Founded by <strong>Sunny Biju</strong>, Zynthax was created to provide business owners with a single, dependable partner capable of handling their complete digital footprint. Whether an entrepreneur needs a local retail billing application that prints thermal receipts, a fast corporate website that ranks on Google, or creative logo design and video production, Zynthax delivers with professional standards and transparent accountability.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid-2" style={{ marginBottom: '48px' }}>
          {/* Mission */}
          <div
            className="card-panel"
            style={{
              padding: '36px',
              borderRadius: '14px',
              background: '#ffffff',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Target size={22} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '10px' }}>
              Our Mission
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {content.aboutMission}
            </p>
          </div>

          {/* Vision */}
          <div
            className="card-panel"
            style={{
              padding: '36px',
              borderRadius: '14px',
              background: '#ffffff',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Compass size={22} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '10px' }}>
              Our Vision
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {content.aboutVision}
            </p>
          </div>
        </div>

        {/* Founder Note */}
        <div
          className="card-panel"
          style={{
            padding: 'clamp(32px, 4vw, 48px)',
            borderRadius: '16px',
            marginBottom: '64px',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '800px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              <Award size={16} />
              <span>Founder & Leadership Note</span>
            </div>

            <blockquote
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: '#0f172a',
                fontStyle: 'italic',
                borderLeft: '4px solid #2563eb',
                paddingLeft: '20px',
              }}
            >
              {content.founderMessage}
            </blockquote>

            <div style={{ marginTop: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>Sunny Biju</div>
              <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                Founder & Head of Innovation &bull; Zynthax Digital Solutions
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div className="badge">
              <span>Why Partner With Us</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '10px' }}>
              Built for Real Business Needs
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              We combine pragmatic software development with professional customer service.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="card-panel"
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#ffffff' }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{v.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/contact" className="btn-primary">
              <span>Talk to Our Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
