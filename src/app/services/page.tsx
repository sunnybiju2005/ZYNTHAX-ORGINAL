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
  X,
  Layers,
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

export default function ServicesPage() {
  const [activeRequestService, setActiveRequestService] = useState<string | null>(null);

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
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
            Services Catalog
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0f172a', marginBottom: '16px', fontWeight: 800 }}>
            Comprehensive Digital Services
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Detailed offerings across website development, retail billing applications, brand identity, and video post-production.
          </p>
        </div>

        {/* Services List */}
        <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {servicesData.map((service, index) => {
            return (
              <section
                key={service.id}
                id={service.id}
                className="service-card"
                style={{
                  padding: 'clamp(24px, 3.5vw, 40px)',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #2563eb',
                  borderRadius: '4px',
                  scrollMarginTop: '100px',
                }}
              >
                <div
                  className="service-inner-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Info */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '14px',
                      }}
                    >
                      <div className="service-icon-box"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '4px',
                          background: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {ICON_MAP[service.iconName] || <Globe size={22} color="#2563eb" />}
                      </div>
                      <div>
                        <div
                          className="service-number-label"
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color: '#64748b',
                          }}
                        >
                          Service {index + 1}
                        </div>
                        <h2 className="service-card-title" style={{ fontSize: '1.5rem', color: '#0f172a', lineHeight: 1.25, fontWeight: 800 }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p
                      className="service-card-tagline"
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#1d4ed8',
                        marginBottom: '12px',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.tagline}
                    </p>

                    <p
                      className="service-card-description"
                      style={{
                        color: '#475569',
                        fontSize: '0.9rem',
                        lineHeight: 1.65,
                        marginBottom: '22px',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="service-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <button
                        onClick={() => setActiveRequestService(service.title)}
                        className="btn-primary btn-sm"
                      >
                        Request This Service
                      </button>

                      <Link
                        href={`/portfolio?category=${service.categorySlug}`}
                        className="btn-secondary btn-sm service-samples-btn"
                      >
                        View Samples
                      </Link>
                    </div>
                  </div>

                  {/* Right Capabilities Box */}
                  <div
                    className="service-capabilities-box"
                    style={{
                      background: '#f8fafc',
                      padding: '24px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#0f172a',
                        marginBottom: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Layers size={14} color="#2563eb" />
                      <span>Capabilities Included</span>
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '20px',
                      }}
                    >
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.85rem',
                            color: '#334155',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color="#2563eb"
                            style={{ marginTop: '2px', flexShrink: 0 }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.725rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: '#64748b',
                          marginBottom: '6px',
                          fontWeight: 600,
                        }}
                      >
                        Deliverables
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {service.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              fontSize: '0.75rem',
                              padding: '2px 7px',
                              borderRadius: '3px',
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
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 90,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'flex-start',
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
              marginTop: '12px',
              marginBottom: '24px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 16px',
                background: '#f1f5f9',
                borderRadius: '8px 8px 0 0',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                {activeRequestService}
              </span>
              <button
                onClick={() => setActiveRequestService(null)}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>
            <ContactForm defaultSubject={activeRequestService} />
          </div>
        </div>
      )}
    </div>
  );
}
