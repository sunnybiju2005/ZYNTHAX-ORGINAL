'use client';

import React from 'react';
import { PortfolioItem } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { ExternalLink, Eye, Tag } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  categoryName?: string;
  onOpenModal: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, categoryName, onOpenModal }: PortfolioCardProps) {
  const optimizedUrl = getOptimizedCloudinaryUrl(item.imageUrl, {
    width: 800,
    quality: 'auto',
  });

  return (
    <div
      className="glass-panel"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
      }}
      onClick={() => onOpenModal(item)}
    >
      {/* Thumbnail Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '62%', // 16:10 Aspect Ratio
          overflow: 'hidden',
          backgroundColor: '#0d121d',
        }}
      >
        <img
          src={optimizedUrl}
          alt={item.title}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Category Overlay Tag */}
        {categoryName && (
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(7, 9, 14, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent-cyan)',
              zIndex: 2,
            }}
          >
            {categoryName}
          </div>
        )}

        {/* Hover Action Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(7, 9, 14, 0.5)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'opacity 0.25s ease',
            zIndex: 3,
          }}
          className="card-overlay"
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.95)',
              color: '#07090e',
              fontWeight: 700,
              fontSize: '0.85rem',
            }}
          >
            <Eye size={15} />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Body Info */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '8px',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: 'var(--text-muted)',
                padding: '4px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              title="Open Live URL"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: 1.55,
            marginBottom: '20px',
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.description}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginTop: 'auto',
            }}
          >
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        div:hover :global(.card-overlay) {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
