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
  Globe,
  Layout,
  Smartphone,
  Search,
  Image as ImageIcon,
  Film,
  PlayCircle,
  Sparkles,
  Star,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={20} color="#2563eb" />,
  Globe: <Globe size={20} color="#2563eb" />,
  Layout: <Layout size={20} color="#2563eb" />,
  Image: <ImageIcon size={20} color="#2563eb" />,
  Sparkles: <Sparkles size={20} color="#2563eb" />,
  PlayCircle: <PlayCircle size={20} color="#2563eb" />,
  Film: <Film size={20} color="#2563eb" />,
  Smartphone: <Smartphone size={20} color="#2563eb" />,
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
      {/* 1. HERO SECTION (Clean, confident, zero generic badges, zero stats bar) */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '88px',
          background: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            {/* Plain text kicker without any pill, border, or dot */}
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Digital Services & Engineering
            </div>

            {/* Headline: One consistent color and weight throughout */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '22px',
              }}
            >
              Full-stack software engineering, retail billing apps, and digital branding for growing companies.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '36px',
                maxWidth: '680px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {content.heroSubtitle}
            </p>

            {/* Actions: Clean plain text buttons, zero arrows */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Recent Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Varied architectural styling) */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
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
              Capabilities
            </div>
            <h2 style={{ fontSize: '2.1rem', color: '#0f172a', fontWeight: 800 }}>
              Services Built for Real Business Needs
            </h2>
          </div>

          <div className="grid-4">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderTop: idx % 2 === 0 ? '3px solid #2563eb' : '1px solid #e2e8f0',
                  borderRadius: '4px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.15s ease',
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
                    marginBottom: '16px',
                  }}
                >
                  {ICON_MAP[service.iconName] || <Globe size={20} color="#2563eb" />}
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#0f172a',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                    marginBottom: '18px',
                    flexGrow: 1,
                  }}
                >
                  {service.tagline}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginTop: 'auto',
                  }}
                >
                  Learn details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '16px',
              marginBottom: '36px',
            }}
          >
            <div>
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
                Portfolio
              </div>
              <h2 style={{ fontSize: '2.1rem', color: '#0f172a', fontWeight: 800 }}>
                Selected Deliverables
              </h2>
            </div>

            <Link href="/portfolio" className="btn-secondary btn-sm">
              All Projects
            </Link>
          </div>

          {portfolioLoading ? (
            <div style={{ padding: '40px 0', color: '#64748b' }}>
              Loading portfolio data...
            </div>
          ) : (
            <div className="grid-3">
              {featuredPortfolio.map((item) => {
                const category = categories.find((c) => c.id === item.categoryId);
                return (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    categoryName={category?.name || 'Project'}
                    onOpenModal={(item) => setSelectedPortfolio(item)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
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
              Client Feedback
            </div>
            <h2 style={{ fontSize: '2.1rem', color: '#0f172a', fontWeight: 800 }}>
              What Founders & Business Owners Say
            </h2>
          </div>

          <div className="grid-3">
            {content.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <p
                    style={{
                      color: '#334155',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    “{testimonial.content}”
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: '#64748b' }}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM HIGHLIGHT */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '16px',
              marginBottom: '36px',
            }}
          >
            <div>
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
                Team
              </div>
              <h2 style={{ fontSize: '2.1rem', color: '#0f172a', fontWeight: 800 }}>
                Leadership & Engineering
              </h2>
            </div>

            <Link href="/team" className="btn-secondary btn-sm">
              Full Directory
            </Link>
          </div>

          <div className="grid-3">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section
        style={{
          padding: '64px 0',
          background: '#0f172a',
          color: '#ffffff',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Discuss your upcoming project
            </h2>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '1rem',
                lineHeight: 1.6,
                marginBottom: '28px',
              }}
            >
              From custom retail billing apps to modern corporate web platforms, get in touch with our team for scope and pricing.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <Link
                href="/contact"
                className="btn-primary"
              >
                Contact Our Team
              </Link>
              <a
                href="tel:+918848241519"
                className="btn-secondary"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  borderColor: '#334155',
                }}
              >
                Call +91 8848241519
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
