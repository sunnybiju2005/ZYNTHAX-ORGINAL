'use client';

import React, { useState } from 'react';
import { isFirebaseConfigured } from '@/lib/firebase';
import { seedFirestoreDatabase } from '@/lib/seedData';
import { Database, Cloud, RefreshCw, CheckCircle2, AlertTriangle, Shield } from 'lucide-react';

export default function DatabaseStatusBadge() {
  const [seeding, setSeeding] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSeed = async () => {
    setSeeding(true);
    setResult(null);
    try {
      const res = await seedFirestoreDatabase();
      setResult(res.message);
    } catch (err: any) {
      setResult(`Error: ${err?.message || err}`);
    } finally {
      setSeeding(false);
    }
  };

  return (
    <aside
      aria-label="Real-time data synchronization and media status"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 90,
      }}
    >
      {/* Trigger Pill */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '999px',
          background: 'rgba(7, 10, 16, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          cursor: 'pointer',
          color: '#fff',
          fontSize: '0.8rem',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)')}
        title="View Backend Sync Status"
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isFirebaseConfigured ? '#10b981' : '#00f2fe',
            boxShadow: `0 0 10px ${isFirebaseConfigured ? '#10b981' : '#00f2fe'}`,
          }}
        />
        <span>{isFirebaseConfigured ? 'Firestore: Connected' : 'Firestore: Ready / Demo'}</span>
      </button>

      {/* Popover Card */}
      {showDetails && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '0',
            width: '320px',
            padding: '20px',
            borderRadius: '16px',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            backgroundColor: '#0a0e18',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem' }}>
              <Database size={16} color="var(--accent-cyan)" />
              <span>Backend Architecture</span>
            </div>
            <button
              onClick={() => setShowDetails(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.1rem',
              }}
            >
              &times;
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.825rem', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Database Engine:</span>
              <strong style={{ color: 'var(--accent-cyan)' }}>Firebase Firestore</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Sync Listener:</span>
              <strong style={{ color: '#10b981' }}>onSnapshot (Active)</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Media CDN:</span>
              <strong style={{ color: 'var(--accent-blue)' }}>Cloudinary (f_auto,q_auto)</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Security Rules:</span>
              <strong style={{ color: '#a855f7' }}>Configured</strong>
            </div>
          </div>

          {result && (
            <div
              style={{
                marginTop: '12px',
                padding: '10px',
                borderRadius: '8px',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                fontSize: '0.78rem',
                color: '#e2e8f0',
              }}
            >
              {result}
            </div>
          )}

          {isFirebaseConfigured && (
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="btn-secondary btn-sm"
              style={{
                width: '100%',
                marginTop: '14px',
                justifyContent: 'center',
                fontSize: '0.8rem',
              }}
            >
              <RefreshCw size={13} className={seeding ? 'animate-spin' : ''} />
              <span>{seeding ? 'Seeding Firestore...' : '1-Click Seed Collections'}</span>
            </button>
          )}

          {!isFirebaseConfigured && (
            <p style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              To connect your live Firebase project, add your keys to <code style={{ color: 'var(--accent-cyan)' }}>.env.local</code>. Seed data is currently serving the UI in demo mode.
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
