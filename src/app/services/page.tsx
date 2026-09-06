'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/seedData';
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
  Search: <Search size={24} color="#2563eb" />,
  Globe: <Globe size={24} color="#2563eb" />,
  Layout: <Layout size={24} color="#2563eb" />,
  Image: <ImageIcon size={24} color="#2563eb" />,
  Sparkles: <Sparkles size={24} color="#2563eb" />,
  PlayCircle: <PlayCircle size={24} color="#2563eb" />,
  Film: <Film size={24} color="#2563eb" />,
  Smartphone: <Smartphone size={24} color="#2563eb" />,
};

export default function ServicesPage() {
  const [activeRequestService, setActiveRequestService] = useState<string | null>(null);

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge">
            <span>Specialized Capabilities</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: '#0f172a', marginBottom: '16px' }}>
            Comprehensive <span className="text-gradient">Digital Services</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Explore our specialized offerings across website development, retail billing software, branding design, and media production.
          </p>
        </div>

        {/* Services List - Dedicated Section Per Service */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {servicesData.map((service, index) => {
            return (
              <section
                key={service.id}
                id={service.id}
                className="card-panel"
                style={{
                  padding: 'clamp(28px, 4vw, 48px)',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  scrollMarginTop: '100px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '36px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '8px',
                          background: '#eff6ff',
                          border: '1px solid #bfdbfe',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {ICON_MAP[service.iconName] || <Globe size={24} color="#2563eb" />}
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color: '#2563eb',
                          }}
                        >
                          Service #{index + 1}
                        </span>
                        <h2 style={{ fontSize: '1.65rem', color: '#0f172a', lineHeight: 1.25 }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#1d4ed8',
                        marginBottom: '14px',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.tagline}
                    </p>

                    <p
                      style={{
                        color: '#475569',
                        fontSize: '0.925rem',
                        lineHeight: 1.65,
                        marginBottom: '24px',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      <button
                        onClick={() => setActiveRequestService(service.title)}
                        className="btn-primary btn-sm"
                      >
                        <span>Request This Service</span>
                        <Send size={13} />
                      </button>

                      <Link
                        href={`/portfolio?category=${service.categorySlug}`}
                        className="btn-secondary btn-sm"
                      >
                        <span>View Sample Projects</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Deliverables */}
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '12px',
                      padding: '28px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '0.925rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: '#0f172a',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Layers size={15} color="#2563eb" />
                      <span>Key Capabilities</span>
                    </h3>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        marginBottom: '24px',
                      }}
                    >
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.875rem',
                            color: '#334155',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="#2563eb"
                            style={{ marginTop: '2px', flexShrink: 0 }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Deliverables */}
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: '#64748b',
                          marginBottom: '8px',
                          fontWeight: 600,
                        }}
                      >
                        Standard Deliverables
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {service.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              fontSize: '0.775rem',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              background: '#ffffff',
                              color: '#475569',
                              border: '1px solid #e2e8f0',
                              fontWeight: 500,
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
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
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
              maxWidth: '620px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveRequestService(null)}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <X size={16} />
            </button>
            <ContactForm defaultSubject={activeRequestService} />
          </div>
        </div>
      )}
    </div>
  );
}
