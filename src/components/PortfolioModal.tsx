'use client';

import React, { useEffect } from 'react';
import { PortfolioItem } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { X, ExternalLink, Calendar, Building } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  categoryName?: string;
  onClose: () => void;
}

export default function PortfolioModal({ item, categoryName, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const highResUrl = getOptimizedCloudinaryUrl(item.imageUrl, {
    width: 1400,
    quality: 'auto',
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          border: '1px solid var(--border-subtle)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#334155';
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '360px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}
        >
          <img
            src={highResUrl}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            {categoryName && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '4px',
                  background: '#eff6ff',
                  color: '#1d4ed8',
                  border: '1px solid #bfdbfe',
                }}
              >
                {categoryName}
              </span>
            )}
            {item.client && (
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Building size={14} color="#2563eb" />
                Client: <strong style={{ color: '#334155' }}>{item.client}</strong>
              </span>
            )}
            {item.createdAt && (
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Calendar size={14} />
                {item.createdAt}
              </span>
            )}
          </div>

          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '14px',
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '24px',
            }}
          >
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h4
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#64748b',
                  marginBottom: '8px',
                  fontWeight: 600,
                }}
              >
                Technologies & Deliverables
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: '#f1f5f9',
                      color: '#334155',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '20px',
            }}
          >
            <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
              Optimized by Cloudinary (f_auto, q_auto)
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink size={14} />
                </a>
              )}
              <button onClick={onClose} className="btn-secondary btn-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
