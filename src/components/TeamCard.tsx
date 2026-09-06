'use client';

import React from 'react';
import { TeamMember } from '@/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { GraduationCap, ExternalLink, Mail, Award, CheckCircle2 } from 'lucide-react';

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
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        border: isLeadership
          ? '1px solid rgba(0, 242, 254, 0.35)'
          : '1px solid var(--border-subtle)',
        boxShadow: isLeadership ? '0 10px 30px rgba(0, 242, 254, 0.12)' : 'var(--shadow-sm)',
      }}
    >
      {/* Top Banner Accent for Founder/CEO */}
      {isLeadership && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 4,
            padding: '4px 10px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.9), rgba(138, 43, 226, 0.9))',
            color: '#07090e',
            fontSize: '0.725rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
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
          paddingTop: '80%', // 5:4 aspect ratio
          backgroundColor: '#0a0e17',
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
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(16, 22, 36, 0.95) 0%, rgba(16, 22, 36, 0.2) 60%, transparent 100%)',
          }}
        />

        {/* Member Name and Role in Header Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '20px',
            right: '20px',
            zIndex: 3,
          }}
        >
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '4px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            {member.name}
          </h3>
          <div
            style={{
              fontSize: '0.875rem',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
            }}
          >
            {member.role}
          </div>
        </div>
      </div>

      {/* Details Body */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Qualification Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8rem',
            color: '#cbd5e1',
            marginBottom: '16px',
            width: 'fit-content',
          }}
        >
          <GraduationCap size={14} color="var(--accent-blue)" />
          <span>{member.qualification}</span>
        </div>

        {/* Bio */}
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '20px',
            flexGrow: 1,
          }}
        >
          {member.bio}
        </p>

        {/* Portfolio & Social Samples Links */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                  }}
                >
                  <span>{plink.label}</span>
                  <ExternalLink size={11} />
                </a>
              ))}
          </div>

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                color: 'var(--text-muted)',
                padding: '6px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              title={`Email ${member.name}`}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
