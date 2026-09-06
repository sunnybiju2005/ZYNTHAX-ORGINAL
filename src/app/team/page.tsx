'use client';

import React from 'react';
import Link from 'next/link';
import { useTeamMembers } from '@/lib/firestoreHooks';
import TeamCard from '@/components/TeamCard';
import { Users, ArrowRight, Briefcase } from 'lucide-react';

export default function TeamPage() {
  const { members, loading } = useTeamMembers();

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge">
            <span>Our Team</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: '#0f172a', marginBottom: '14px' }}>
            Meet the Team Behind <span className="text-gradient">Zynthax</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            A skilled group of software engineers, user interface designers, and video editors committed to delivering measurable results.
          </p>
        </div>

        {/* Team Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            Loading team members...
          </div>
        ) : (
          <div className="grid-3" style={{ marginBottom: '64px' }}>
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Careers & Hiring Banner */}
        <div
          className="card-panel"
          style={{
            padding: 'clamp(28px, 4vw, 44px)',
            borderRadius: '16px',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <Briefcase size={15} />
              <span>Career Opportunities</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '8px' }}>
              Interested in Working with Us?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>
              We are frequently expanding our developer, designer, and video editing roster. If you have passion and technical discipline, reach out.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/contact?subject=Career Inquiry" className="btn-primary">
              <span>Send Your Portfolio</span>
              <ArrowRight size={15} />
            </Link>
            <a href="mailto:zynthax13@gmail.com" className="btn-secondary">
              <span>Email HR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
