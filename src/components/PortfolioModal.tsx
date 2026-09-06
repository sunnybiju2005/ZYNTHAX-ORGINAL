'use client';

import React, { useEffect } from 'react';
import { PortfolioItem } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { X, ExternalLink, Calendar, Building, Sparkles } from 'lucide-react';

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
        backgroundColor: 'rgba(3, 5, 8, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0c111c',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.2)',
          borderRadius: '20px',
          padding: '0',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(7, 9, 14, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00f2fe';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(7, 9, 14, 0.8)';
            e.currentTarget.style.color = '#fff';
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Hero Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            backgroundColor: '#07090e',
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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0c111c 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Modal Content */}
        <div style={{ padding: '32px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            {categoryName && (
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  textTransform: 'uppercase',
                }}
              >
                {categoryName}
              </span>
            )}
            {item.client && (
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Building size={14} color="var(--accent-cyan)" />
                Client: <strong>{item.client}</strong>
              </span>
            )}
            {item.createdAt && (
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
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
              fontSize: '1.85rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#cbd5e1',
              marginBottom: '28px',
            }}
          >
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h4
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                }}
              >
                Technologies & Deliverables
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.85rem',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#f8fafc',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '24px',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Optimized by Cloudinary (WebP/AVIF auto format)
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink size={15} />
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
