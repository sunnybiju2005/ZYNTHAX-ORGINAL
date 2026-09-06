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
  Users,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  const { content } = useSiteContent();

  const values = [
    {
      title: 'Architectural Elegance',
      desc: 'We write clean, modular, and maintainable code backed by modern serverless infrastructure like Next.js, Firebase, and Cloudinary.',
      icon: <Cpu size={24} color="#00f2fe" />,
    },
    {
      title: 'Sub-Second Velocity',
      desc: 'From page loads to project milestones, speed is in our DNA. We eliminate latency in user experiences and delivery pipelines.',
      icon: <Zap size={24} color="#4facfe" />,
    },
    {
      title: 'Obsession with Detail',
      desc: 'Every pixel, frame, and micro-interaction is polished. We reject generic templates in favor of bespoke, high-converting digital assets.',
      icon: <Sparkles size={24} color="#a855f7" />,
    },
    {
      title: 'Uncompromised Transparency',
      desc: 'No hidden clauses or tech debt. We work in close lockstep with founders and business teams from day zero through post-launch scaling.',
      icon: <ShieldCheck size={24} color="#10b981" />,
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 70px' }}>
          <div className="badge">
            <span>About Zynthax Digital Solutions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', marginBottom: '20px' }}>
            Empowering Modern Brands with <span className="text-gradient">Engineering Mastery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.65 }}>
            A fast-growing digital solutions startup bridging the gap between heavy software engineering and magnetic creative storytelling.
          </p>
        </div>

        {/* Company Story */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 60px)',
            borderRadius: '24px',
            marginBottom: '60px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '850px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              Our Story & Founding Vision
            </h2>
            <p
              style={{
                color: '#cbd5e1',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              {content.aboutText}
            </p>
            <p
              style={{
                color: '#cbd5e1',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              Founded by <strong>Sunny Biju</strong>, Zynthax was created to solve a pressing challenge that modern businesses face: the fragmentation between technical development and creative branding. Instead of hiring separate agencies for development, graphic design, and video editing, Zynthax provides an integrated, elite partner capable of building your billing application, designing your corporate identity, deploying your web platform, and driving high-converting organic SEO under one roof.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid-2" style={{ marginBottom: '60px' }}>
          {/* Mission */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid rgba(0, 242, 254, 0.25)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Target size={26} color="#00f2fe" />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', color: '#fff' }}>
              Our Mission
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7 }}>
              {content.aboutMission}
            </p>
          </div>

          {/* Vision */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid rgba(138, 43, 226, 0.25)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(138, 43, 226, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Compass size={26} color="#a855f7" />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', color: '#fff' }}>
              Our Vision
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7 }}>
              {content.aboutVision}
            </p>
          </div>
        </div>

        {/* Founder & CEO Message */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(36px, 5vw, 64px)',
            borderRadius: '24px',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, rgba(16, 22, 36, 0.9) 0%, rgba(20, 28, 48, 0.9) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              <Award size={18} />
              <span>Founder & Leadership Note</span>
            </div>

            <blockquote
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                lineHeight: 1.6,
                color: '#ffffff',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--accent-cyan)',
                paddingLeft: '24px',
              }}
            >
              {content.founderMessage}
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>Sunny Biju</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Founder & Head of Innovation &bull; Zynthax Digital Solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
            <div className="badge">
              <span>Core Advantages</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '14px' }}>
              Why Choose <span className="text-gradient">Zynthax</span>?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              We combine startup agility with enterprise reliability to deliver measurable results.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/contact" className="btn-primary">
              <span>Collaborate With Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
