'use client';

import React from 'react';
import Link from 'next/link';
import { useTeamMembers } from '@/lib/firestoreHooks';
import TeamCard from '@/components/TeamCard';
import { Users, Award, ShieldCheck, ArrowRight, HeartHandshake } from 'lucide-react';

export default function TeamPage() {
  const { members, loading } = useTeamMembers();

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="badge">
            <span>Dynamic Firestore Team Grid</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', marginBottom: '18px' }}>
            Meet the <span className="text-gradient">Architects of Zynthax</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.65 }}>
            A multidisciplinary collective of visionary founders, senior software engineers, UI/UX researchers, and motion designers.
          </p>
        </div>

        {/* Dynamic Team Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
            Loading team members from Firestore...
          </div>
        ) : (
          <div className="grid-3" style={{ marginBottom: '80px' }}>
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Culture & Hiring Strip */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            border: '1px solid rgba(0, 242, 254, 0.25)',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              <HeartHandshake size={18} />
              <span>Join Our Collective</span>
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>
              Want to Build the Future with Zynthax?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We are constantly seeking brilliant software engineers, Flutter developers, 3D animators, and growth strategists. Work remotely with global impact.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
            <Link href="/contact?subject=Career Inquiry" className="btn-primary">
              <span>Send Your Portfolio</span>
              <ArrowRight size={16} />
            </Link>
            <a href="mailto:zynthax13@gmail.com" className="btn-secondary">
              <span>Email HR Directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
