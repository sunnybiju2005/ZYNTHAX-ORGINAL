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
  Globe,
  Layout,
  Smartphone,
  Search,
  Image as ImageIcon,
  Film,
  PlayCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={22} color="#2563eb" />,
  Globe: <Globe size={22} color="#2563eb" />,
  Layout: <Layout size={22} color="#2563eb" />,
  Image: <ImageIcon size={22} color="#2563eb" />,
  Sparkles: <Sparkles size={22} color="#2563eb" />,
  PlayCircle: <PlayCircle size={22} color="#2563eb" />,
  Film: <Film size={22} color="#2563eb" />,
  Smartphone: <Smartphone size={22} color="#2563eb" />,
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
          paddingTop: '64px',
          paddingBottom: '80px',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '840px',
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
              <span>Digital Services Agency &bull; Web &bull; Apps &bull; Media</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              We Build High-Performance <span className="text-gradient">Websites</span>, Custom Software & Dynamic Brands.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '32px',
                maxWidth: '680px',
              }}
            >
              {content.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                marginBottom: '56px',
              }}
            >
              <Link href="/contact" className="btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Stats Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '16px',
                width: '100%',
                padding: '24px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {(content.stats || []).map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: '#2563eb',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.775rem',
                      color: '#64748b',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginTop: '2px',
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

      {/* 2. SERVICES OVERVIEW */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div className="badge">
              <span>What We Do</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '12px' }}>
              Full-Spectrum Digital Services
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
              Comprehensive technical and creative solutions designed to help your business operate efficiently and scale rapidly.
            </p>
          </div>

          <div className="grid-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="card-panel"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {ICON_MAP[service.iconName] || <Globe size={22} color="#2563eb" />}
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginTop: 'auto',
                  }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/services" className="btn-secondary">
              <span>View All 8 Services in Detail</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK (Dynamic from Firestore) */}
      <section
        style={{
          padding: '80px 0',
          background: '#f8fafc',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div className="badge">
                <span>Case Studies</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '6px' }}>
                Featured Projects & Systems
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.975rem' }}>
                Recent client deliverables across web development, retail billing apps, and creative media.
              </p>
            </div>

            <Link href="/portfolio" className="btn-secondary btn-sm">
              <span>View Full Portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {portfolioLoading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
              Loading portfolio from database...
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
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div className="badge">
              <span>Client Reviews</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '12px' }}>
              Trusted by Growing Businesses
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
              Direct feedback from founders and managers who partner with Zynthax Digital Solutions.
            </p>
          </div>

          <div className="grid-3">
            {content.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card-panel"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#eab308" color="#eab308" />
                    ))}
                  </div>

                  <p
                    style={{
                      color: '#334155',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      marginBottom: '20px',
                    }}
                  >
                    “{testimonial.content}”
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                  {testimonial.avatarUrl && (
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '0.775rem', color: '#64748b' }}>
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
          background: '#f8fafc',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div className="badge">
                <span>Our Leadership</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', color: '#0f172a', marginBottom: '6px' }}>
                Meet the Core Team
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.975rem' }}>
                Experienced software engineers, visual designers, and digital specialists.
              </p>
            </div>

            <Link href="/team" className="btn-secondary btn-sm">
              <span>View Entire Team</span>
              <ArrowRight size={14} />
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
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              padding: 'clamp(36px, 5vw, 60px)',
              borderRadius: '16px',
              textAlign: 'center',
              background: '#2563eb',
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                marginBottom: '14px',
                color: '#ffffff',
              }}
            >
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p
              style={{
                color: '#dbeafe',
                fontSize: '1.05rem',
                maxWidth: '600px',
                margin: '0 auto 28px',
                lineHeight: 1.6,
              }}
            >
              Whether you need a custom retail billing app, a fast Next.js website, or high-impact video branding, our team is ready to deliver.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#1d4ed8',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span>Request a Free Estimate</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+918848241519"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
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
