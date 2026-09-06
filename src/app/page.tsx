'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  usePortfolioItems,
  useWorkCategories,
  useTeamMembers,
  useSiteContent,
} from '@/lib/firestoreHooks';
import { servicesData } from '@/lib/seedData';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioModal from '@/components/PortfolioModal';
import TeamCard from '@/components/TeamCard';
import { PortfolioItem } from '@/types';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Layout,
  Smartphone,
  Search,
  Image as ImageIcon,
  Film,
  PlayCircle,
  ShieldCheck,
  Star,
  CheckCircle,
  ExternalLink,
  Users,
} from 'lucide-react';

// Icon mapper for services
const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={24} color="#00f2fe" />,
  Globe: <Globe size={24} color="#4facfe" />,
  Layout: <Layout size={24} color="#a855f7" />,
  Image: <ImageIcon size={24} color="#ec4899" />,
  Sparkles: <Sparkles size={24} color="#8b5cf6" />,
  PlayCircle: <PlayCircle size={24} color="#f43f5e" />,
  Film: <Film size={24} color="#e11d48" />,
  Smartphone: <Smartphone size={24} color="#10b981" />,
};

export default function HomePage() {
  const { items: portfolioItems, loading: portfolioLoading } = usePortfolioItems();
  const { categories } = useWorkCategories();
  const { members } = useTeamMembers();
  const { content } = useSiteContent();

  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);

  const featuredPortfolio = portfolioItems.filter((i) => i.featured).slice(0, 6);
  const featuredTeam = members.slice(0, 3);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          paddingTop: '60px',
          paddingBottom: '100px',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Tag Badge */}
            <div className="badge">
              <span className="badge-dot" />
              <span>Digital Services Startup &bull; Real-time Cloud Sync</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              We Build <span className="text-gradient">High-Impact</span> Websites, Custom Apps & Iconic Branding.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '36px',
                maxWidth: '720px',
              }}
            >
              {content.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '60px',
              }}
            >
              <Link href="/contact" className="btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Key Metrics / Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '20px',
                width: '100%',
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(16, 22, 36, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {(content.stats || []).map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#00f2fe',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div className="badge">
              <span>What We Do</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              Full-Spectrum <span className="text-gradient">Digital Services</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              From search engine domination and custom retail software to hypnotic 3D animations and full-stack web builds.
            </p>
          </div>

          <div className="grid-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="glass-panel"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {ICON_MAP[service.iconName] || <Zap size={24} color="#00f2fe" />}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#fff',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {service.tagline}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginTop: 'auto',
                  }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services" className="btn-secondary">
              <span>View All 8 Specialized Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO SECTION (Dynamic from Firestore) */}
      <section
        style={{
          padding: '90px 0',
          background: 'rgba(11, 15, 25, 0.6)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            <div>
              <div className="badge">
                <span>Dynamic Case Studies</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                Featured <span className="text-gradient">Work & Prototypes</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Synced directly from Firebase Firestore with Cloudinary auto-optimization.
              </p>
            </div>

            <Link href="/portfolio" className="btn-secondary btn-sm">
              <span>Explore All Projects</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {portfolioLoading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
              Loading dynamic portfolio from Firestore...
            </div>
          ) : (
            <div className="grid-3">
              {featuredPortfolio.map((item) => {
                const category = categories.find((c) => c.id === item.categoryId);
                return (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    categoryName={category?.name || 'Showcase'}
                    onOpenModal={(item) => setSelectedPortfolio(item)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section style={{ padding: '90px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div className="badge">
              <span>Client Endorsements</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              Trusted by <span className="text-gradient">Ambitious Founders</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Real feedback from clients who accelerated their businesses with Zynthax Digital Solutions.
            </p>
          </div>

          <div className="grid-3">
            {content.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-panel"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#00f2fe" color="#00f2fe" />
                    ))}
                  </div>

                  <p
                    style={{
                      color: '#e2e8f0',
                      fontSize: '0.975rem',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                      fontStyle: 'italic',
                    }}
                  >
                    “{testimonial.content}”
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {testimonial.avatarUrl && (
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(0, 242, 254, 0.4)',
                      }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM HIGHLIGHT */}
      <section
        style={{
          padding: '80px 0',
          background: 'rgba(7, 10, 16, 0.4)',
          borderTop: '1px solid var(--border-subtle)',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            <div>
              <div className="badge">
                <span>The Minds Behind Zynthax</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                Meet Our <span className="text-gradient">Leadership & Engineers</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                Passionate builders with expertise across engineering, design, and multimedia.
              </p>
            </div>

            <Link href="/team" className="btn-secondary btn-sm">
              <span>View Full Team</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(40px, 6vw, 70px)',
              borderRadius: '28px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(13, 17, 27, 0.95) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.35)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.15)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                marginBottom: '20px',
                color: '#fff',
              }}
            >
              Have a Vision in Mind? Let’s <span className="text-gradient">Build It Together</span>.
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.15rem',
                maxWidth: '620px',
                margin: '0 auto 36px',
                lineHeight: 1.6,
              }}
            >
              Whether you need a full-stack Next.js web application, an Android retail billing app, or a complete brand overhaul, our team delivers with speed and precision.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">
                <span>Get a Free Project Estimate</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+918848241519" className="btn-secondary">
                <span>Call +91 8848241519</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <PortfolioModal
        item={selectedPortfolio}
        categoryName={
          categories.find((c) => c.id === selectedPortfolio?.categoryId)?.name
        }
        onClose={() => setSelectedPortfolio(null)}
      />
    </div>
  );
}
