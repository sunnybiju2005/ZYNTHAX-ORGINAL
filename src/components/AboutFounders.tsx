'use client';

import React from 'react';
import { useTeamMembers } from '@/lib/firestoreHooks';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import { User } from 'lucide-react';

const FALLBACK_FOUNDERS = [
  {
    name: 'Sunny Biju',
    role: 'Co-Founder',
    qualification: 'BSc Computer Science',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Irene Sabu',
    role: 'Co-Founder',
    qualification: 'Computer Science Engineering',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AboutFounders() {
  const { members, loading } = useTeamMembers();

  // Find leadership / founders from Firestore real-time data
  const leadership = members.filter(
    (m) =>
      m.role.toLowerCase().includes('founder') ||
      m.role.toLowerCase().includes('ceo') ||
      m.name.toLowerCase().includes('sunny') ||
      m.name.toLowerCase().includes('irene')
  );

  const displayFounders = leadership.length > 0 ? leadership : FALLBACK_FOUNDERS;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}
    >
      {displayFounders.map((founder) => {
        const photoUrl = founder.photoUrl
          ? getOptimizedCloudinaryUrl(founder.photoUrl, {
              width: 200,
              height: 200,
              crop: 'fill',
              quality: 'auto',
            })
          : null;

        return (
          <div
            key={founder.name}
            className="about-founder-card"
            style={{
              padding: '24px',
              background: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* Photo Avatar */}
            <div
              className="about-founder-avatar"
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '8px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                flexShrink: 0,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt={founder.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    // Fallback to icon if image URL fails to load
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <User size={28} color="#94a3b8" />
              )}
            </div>

            <div>
              <h3
                className="about-founder-name"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '3px',
                }}
              >
                {founder.name}
              </h3>
              <div
                className="about-founder-title"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  marginBottom: '3px',
                }}
              >
                {'role' in founder ? founder.role : (founder as any).title}
              </div>
              <div
                className="about-founder-qual"
                style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                }}
              >
                {founder.qualification}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
