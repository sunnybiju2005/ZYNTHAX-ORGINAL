'use client';

import React from 'react';
import Link from 'next/link';
import { useSiteContent } from '@/lib/firestoreHooks';
import {
  Target,
  Compass,
  Cpu,
  Zap,
  ShieldCheck,
  Award,
} from 'lucide-react';

export default function AboutPage() {
  const { content } = useSiteContent();

  const values = [
    {
      title: 'Engineering Quality',
      desc: 'We write robust, modular, and maintainable software utilizing dependable frameworks like Next.js, Firebase, and Cloudinary.',
      icon: <Cpu size={20} color="#2563eb" />,
    },
    {
      title: 'High Performance & Speed',
      desc: 'From sub-second page loads to prompt client communications, we prioritize efficiency and zero unnecessary friction.',
      icon: <Zap size={20} color="#2563eb" />,
    },
    {
      title: 'Practical Business Focus',
      desc: 'We solve real operational challenges — like high-speed retail checkout, inventory management, and search engine lead generation.',
      icon: <Target size={20} color="#2563eb" />,
    },
    {
      title: 'Clear Communication',
      desc: 'Transparent timelines, predictable pricing, and dedicated post-launch support for peace of mind.',
      icon: <ShieldCheck size={20} color="#2563eb" />,
    },
  ];

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 56px', textAlign: 'center' }}>
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
            About Zynthax
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0f172a', marginBottom: '16px', fontWeight: 800 }}>
            Dependable software and digital services for growing businesses.
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Zynthax Digital Solutions is an agile digital services agency built to deliver reliable websites, practical retail applications, and brand media.
          </p>
        </div>

        {/* Company Story */}
        <div
          style={{
            padding: 'clamp(28px, 4vw, 44px)',
            borderRadius: '4px',
            marginBottom: '40px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
          }}
        >
          <div style={{ maxWidth: '820px' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '14px', fontWeight: 800 }}>
              Background & Founding Purpose
            </h2>
            <p
              style={{
                color: '#334155',
                fontSize: '0.975rem',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              {content.aboutText}
            </p>
            <p
              style={{
                color: '#334155',
                fontSize: '0.975rem',
                lineHeight: 1.75,
              }}
            >
              Founded by <strong>Sunny Biju</strong>, Zynthax was created to provide business owners with a single, dependable partner capable of handling their complete digital footprint. Whether an entrepreneur needs a local retail billing application that prints thermal receipts, a fast corporate website that ranks on Google, or creative logo design and video production, Zynthax delivers with professional standards and transparent accountability.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid-2" style={{ marginBottom: '40px' }}>
          <div
            style={{
              padding: '32px',
              borderRadius: '4px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderLeft: '3px solid #2563eb',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px', fontWeight: 700 }}>
              Our Mission
            </h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65 }}>
              {content.aboutMission}
            </p>
          </div>

          <div
            style={{
              padding: '32px',
              borderRadius: '4px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderLeft: '3px solid #0f172a',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px', fontWeight: 700 }}>
              Our Vision
            </h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65 }}>
              {content.aboutVision}
            </p>
          </div>
        </div>

        {/* Founder Note */}
        <div
          style={{
            padding: 'clamp(28px, 4vw, 40px)',
            borderRadius: '4px',
            marginBottom: '56px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '800px',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                color: '#64748b',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Founder Note
            </div>

            <blockquote
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#0f172a',
                fontStyle: 'italic',
                borderLeft: '3px solid #2563eb',
                paddingLeft: '18px',
              }}
            >
              {content.founderMessage}
            </blockquote>

            <div style={{ marginTop: '6px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Sunny Biju</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Founder & Head of Innovation &bull; Zynthax Digital Solutions
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div>
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
              }}
            >
              Core Standards
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800 }}>
              How We Work
            </h2>
          </div>

          <div className="grid-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>{v.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px' }}>
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
