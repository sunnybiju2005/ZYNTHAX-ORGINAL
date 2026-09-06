'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/seedData';
import { ServiceItem } from '@/types';
import ContactForm from '@/components/ContactForm';
import {
  Globe,
  Search,
  Layout,
  Image as ImageIcon,
  Sparkles,
  PlayCircle,
  Film,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Send,
  X,
  Layers,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={28} color="#00f2fe" />,
  Globe: <Globe size={28} color="#4facfe" />,
  Layout: <Layout size={28} color="#a855f7" />,
  Image: <ImageIcon size={28} color="#ec4899" />,
  Sparkles: <Sparkles size={28} color="#8b5cf6" />,
  PlayCircle: <PlayCircle size={28} color="#f43f5e" />,
  Film: <Film size={28} color="#e11d48" />,
  Smartphone: <Smartphone size={28} color="#10b981" />,
};

export default function ServicesPage() {
  const [activeRequestService, setActiveRequestService] = useState<string | null>(null);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px' }}>
          <div className="badge">
            <span>Specialized Capabilities</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', marginBottom: '20px' }}>
            Engineered for Impact, <span className="text-gradient">Tailored to Scale</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.65 }}>
            Explore our dedicated services across software development, digital systems, branding, and multimedia production.
          </p>
        </div>

        {/* Services List - Dedicated Section Per Service */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.id}
                className="glass-panel"
                style={{
                  padding: 'clamp(32px, 5vw, 56px)',
                  borderRadius: '28px',
                  border: `1px solid ${service.accentColor}33`,
                  boxShadow: `0 16px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${service.accentColor}15`,
                  scrollMarginTop: '100px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left / Info Column */}
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '18px',
                      }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          background: `${service.accentColor}18`,
                          border: `1px solid ${service.accentColor}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {ICON_MAP[service.iconName] || <Globe size={28} color={service.accentColor} />}
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: service.accentColor,
                          }}
                        >
                          Service #{index + 1}
                        </span>
                        <h2 style={{ fontSize: '1.85rem', color: '#fff', lineHeight: 1.2 }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--accent-cyan)',
                        marginBottom: '16px',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.tagline}
                    </p>

                    <p
                      style={{
                        color: '#cbd5e1',
                        fontSize: '0.975rem',
                        lineHeight: 1.7,
                        marginBottom: '28px',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Action Button */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                      <button
                        onClick={() => setActiveRequestService(service.title)}
                        className="btn-primary btn-sm"
                        style={{
                          background: `linear-gradient(135deg, ${service.accentColor} 0%, #00f2fe 100%)`,
                        }}
                      >
                        <span>Request This Service</span>
                        <Send size={14} />
                      </button>

                      <Link
                        href={`/portfolio?category=${service.categorySlug}`}
                        className="btn-secondary btn-sm"
                      >
                        <span>View Sample Work</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Right / Features & Deliverables Column */}
                  <div
                    style={{
                      background: 'rgba(7, 10, 16, 0.75)',
                      borderRadius: '20px',
                      padding: '32px',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#fff',
                        marginBottom: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Layers size={16} color={service.accentColor} />
                      <span>Key Capabilities Included</span>
                    </h3>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        marginBottom: '28px',
                      }}
                    >
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.925rem',
                            color: '#e2e8f0',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color={service.accentColor}
                            style={{ marginTop: '3px', flexShrink: 0 }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Deliverables Pills */}
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.775rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--text-muted)',
                          marginBottom: '10px',
                          fontWeight: 600,
                        }}
                      >
                        Standard Deliverables
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              fontSize: '0.8rem',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: '#94a3b8',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Service Request Modal */}
      {activeRequestService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(3, 5, 8, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto',
          }}
          onClick={() => setActiveRequestService(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '650px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveRequestService(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#0c111c',
                border: '1px solid var(--border-hover)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>
            <ContactForm defaultSubject={activeRequestService} />
          </div>
        </div>
      )}
    </div>
  );
}
