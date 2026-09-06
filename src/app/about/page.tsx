import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Zynthax Digital Solutions',
  description: 'The story behind Zynthax Digital Solutions — founded by Sunny Biju and Irene Sabu.',
};

export default function AboutPage() {
  const founders = [
    {
      name: 'Sunny Biju',
      title: 'Co-Founder',
      qualification: 'BSc Computer Science',
      initials: 'SB',
    },
    {
      name: 'Irene Sabu',
      title: 'Co-Founder',
      qualification: 'Computer Science Engineering',
      initials: 'IS',
    },
  ];

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '44px' }}>
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
            About Us
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#0f172a',
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Our Story
          </h1>
        </div>

        {/* Narrative Story */}
        <div
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#334155',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            marginBottom: '64px',
          }}
        >
          <p>
            Zynthax Digital Solutions started the way most good ideas do — with two engineering students who couldn&apos;t stop talking about the products they wanted to build.
          </p>

          <p>
            Sunny Biju was studying for his BSc in Computer Science. Irene Sabu was a few semesters into her Computer Science Engineering degree. Both were the kind of students who spent more time building side projects than doing assignments, and somewhere in that overlap they realized they wanted to build something real, not just for grades.
          </p>

          <p>
            What started as late-night conversations about design, code, and clients they hoped to have one day eventually became Zynthax — founded with a group of equally driven friends who believed a small team could offer something most agencies couldn&apos;t: one point of contact for a business&apos;s entire digital presence, done properly.
          </p>

          <p>
            That&apos;s still the core of what we do. A shop owner shouldn&apos;t need three different vendors for a website, a billing system, and a logo. We handle all of it under one roof, with the same standard of care whether it&apos;s a thermal-printer billing app for a local store or a full brand identity for a company going national.
          </p>

          <p>
            We&apos;re based in India and work with clients across borders, but the way we operate hasn&apos;t changed since the two of us were sketching ideas in a college notebook: build it properly, be honest about timelines and cost, and treat every project like it&apos;s going to be someone&apos;s first impression of a business they&apos;ve put everything into.
          </p>
        </div>

        {/* Founders Section */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '48px', marginBottom: '56px' }}>
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
              }}
            >
              Leadership
            </div>
            <h2
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}
            >
              Founders
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {founders.map((founder) => (
              <div
                key={founder.name}
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
                {/* Photo Placeholder Slot */}
                <div
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
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                  title="Photo slot (manageable via admin)"
                >
                  <User size={28} color="#94a3b8" />
                </div>

                <div>
                  <h3
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
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#2563eb',
                      marginBottom: '3px',
                    }}
                  >
                    {founder.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748b',
                    }}
                  >
                    {founder.qualification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          style={{
            padding: '32px',
            background: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a', marginBottom: '4px' }}>
              Have a project in mind?
            </div>
            <div style={{ color: '#475569', fontSize: '0.9rem' }}>
              Let&apos;s discuss scope, timelines, and technical requirements.
            </div>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
