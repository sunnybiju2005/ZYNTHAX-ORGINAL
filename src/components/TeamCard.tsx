'use client';

import React from 'react';
import { TeamMember } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { GraduationCap, ExternalLink, Mail } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const optimizedPhoto = getOptimizedCloudinaryUrl(member.photoUrl, {
    width: 600,
    height: 650,
    crop: 'fill',
    quality: 'auto',
  });

  const isLeadership = member.role.toLowerCase().includes('founder') || member.role.toLowerCase().includes('ceo');

  return (
    <div
      className="card-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        background: '#ffffff',
        border: isLeadership ? '1px solid #bfdbfe' : '1px solid var(--border-subtle)',
        boxShadow: isLeadership ? '0 4px 12px rgba(37, 99, 235, 0.08)' : 'var(--shadow-sm)',
        position: 'relative',
      }}
    >
      {/* Leadership Tag */}
      {isLeadership && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 4,
            padding: '3px 10px',
            borderRadius: '4px',
            background: '#2563eb',
            color: '#ffffff',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Leadership
        </div>
      )}

      {/* Photo Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '75%', // 4:3 aspect ratio
          backgroundColor: '#f1f5f9',
          overflow: 'hidden',
        }}
      >
        <img
          src={optimizedPhoto}
          alt={member.name}
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
      </div>

      {/* Details */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '4px',
          }}
        >
          {member.name}
        </h3>
        <div
          style={{
            fontSize: '0.875rem',
            color: '#2563eb',
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          {member.role}
        </div>

        {/* Qualification Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 8px',
            borderRadius: '4px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            fontSize: '0.775rem',
            color: '#475569',
            marginBottom: '14px',
            width: 'fit-content',
          }}
        >
          <GraduationCap size={13} color="#2563eb" />
          <span>{member.qualification}</span>
        </div>

        {/* Bio */}
        <p
          style={{
            color: '#475569',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            marginBottom: '20px',
            flexGrow: 1,
          }}
        >
          {member.bio}
        </p>

        {/* Portfolio & Sample Links */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {member.portfolioLinks &&
              member.portfolioLinks.map((plink, idx) => (
                <a
                  key={idx}
                  href={plink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.775rem',
                    fontWeight: 600,
                    color: '#2563eb',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: '#eff6ff',
                    textDecoration: 'none',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#dbeafe')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#eff6ff')}
                >
                  <span>{plink.label}</span>
                  <ExternalLink size={10} />
                </a>
              ))}
          </div>

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                color: '#64748b',
                padding: '4px',
                borderRadius: '4px',
                transition: 'color 0.15s ease',
              }}
              title={`Email ${member.name}`}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              <Mail size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
