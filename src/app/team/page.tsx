'use client';

import React from 'react';
import Link from 'next/link';
import { useTeamMembers } from '@/lib/firestoreHooks';
import TeamCard from '@/components/TeamCard';
import { Briefcase } from 'lucide-react';

export default function TeamPage() {
  const { members, loading } = useTeamMembers();

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 48px', textAlign: 'center' }}>
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
            Team Directory
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0f172a', marginBottom: '14px', fontWeight: 800 }}>
            Leadership & Engineering
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Software engineers, visual designers, and multimedia specialists with proven technical discipline.
          </p>
        </div>

        {/* Team Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            Loading team directory...
          </div>
        ) : (
          <div className="grid-3" style={{ marginBottom: '56px' }}>
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Careers Banner */}
        <div
          style={{
            padding: 'clamp(24px, 3.5vw, 36px)',
            borderRadius: '4px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderLeft: '4px solid #0f172a',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                color: '#64748b',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              Careers
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '6px', fontWeight: 700 }}>
              Join Our Engineering & Design Roster
            </h3>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We regularly work with skilled contract and full-time developers, Flutter specialists, and motion designers.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Link href="/contact?subject=Career Inquiry" className="btn-primary btn-sm">
              Send Your Portfolio
            </Link>
            <a href="mailto:zynthax13@gmail.com" className="btn-secondary btn-sm">
              Email HR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
