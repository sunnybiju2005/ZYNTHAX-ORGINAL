'use client';

import React from 'react';
import { PortfolioItem } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

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
      className="card-panel"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        background: '#ffffff',
      }}
      onClick={() => onOpenModal(item)}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '60%', // 16:9.6 Aspect Ratio
          overflow: 'hidden',
          backgroundColor: '#f1f5f9',
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
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {categoryName && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              padding: '4px 10px',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#1d4ed8',
              zIndex: 2,
            }}
          >
            {categoryName}
          </div>
        )}
      </div>

      {/* Body Info */}
      <div
        className="portfolio-card-body"
        style={{
          padding: '22px',
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
            gap: '10px',
            marginBottom: '8px',
          }}
        >
          <h3
            className="portfolio-card-title"
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.35,
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
                color: '#64748b',
                padding: '4px',
                borderRadius: '4px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              title="Open Project Link"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p
          className="portfolio-card-desc"
          style={{
            color: '#475569',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            marginBottom: '18px',
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
                  fontSize: '0.725rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: '#f1f5f9',
                  color: '#475569',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
