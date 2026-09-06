'use client';

import React, { useState } from 'react';
import { isFirebaseConfigured } from '@/lib/firebase';
import { seedFirestoreDatabase } from '@/lib/seedData';
import { Database, RefreshCw } from 'lucide-react';

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
      aria-label="Real-time data synchronization status"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 90,
      }}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '999px',
          background: '#ffffff',
          border: '1px solid #cbd5e1',
          boxShadow: 'var(--shadow-md)',
          cursor: 'pointer',
          color: '#334155',
          fontSize: '0.775rem',
          fontWeight: 600,
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2563eb')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#cbd5e1')}
        title="View Backend Status"
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: isFirebaseConfigured ? '#10b981' : '#2563eb',
          }}
        />
        <span>{isFirebaseConfigured ? 'Firestore: Live' : 'Firestore: Ready (Demo)'}</span>
      </button>

      {/* Popover Card */}
      {showDetails && (
        <div
          className="card-panel"
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '0',
            width: '300px',
            padding: '18px',
            borderRadius: '12px',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
              <Database size={15} color="#2563eb" />
              <span>Backend Architecture</span>
            </div>
            <button
              onClick={() => setShowDetails(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              &times;
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#475569' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Database:</span>
              <strong style={{ color: '#0f172a' }}>Firebase Firestore</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Sync Listener:</span>
              <strong style={{ color: '#10b981' }}>onSnapshot (Active)</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Media Delivery:</span>
              <strong style={{ color: '#2563eb' }}>Cloudinary (f_auto,q_auto)</strong>
            </div>
          </div>

          {/* Auto-sync info notice */}
          <div
            style={{
              marginTop: '10px',
              padding: '8px 10px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '0.725rem',
              color: '#475569',
              lineHeight: 1.4,
            }}
          >
            <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>⚡ Real-Time Auto-Sync:</strong>
            Edits made in Firebase Console (photos, names, works) update the website automatically in real-time. You do <em>not</em> need to re-seed to see your changes.
          </div>

          {result && (
            <div
              style={{
                marginTop: '10px',
                padding: '10px 12px',
                borderRadius: '8px',
                background: result.includes('Failed') || result.includes('Error') ? '#fef2f2' : '#eff6ff',
                border: `1px solid ${result.includes('Failed') || result.includes('Error') ? '#fecaca' : '#bfdbfe'}`,
                fontSize: '0.75rem',
                color: result.includes('Failed') || result.includes('Error') ? '#991b1b' : '#1e40af',
                lineHeight: 1.5,
              }}
            >
              <div>{result}</div>
              {result.includes('permissions') && (
                <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #fee2e2', color: '#7f1d1d', fontSize: '0.72rem' }}>
                  <strong>How to fix in 30 seconds:</strong>
                  <ol style={{ paddingLeft: '16px', marginTop: '4px', marginBlockEnd: '4px' }}>
                    <li>Open <a href="https://console.firebase.google.com/project/zynthax-orginal/firestore/rules" target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>Firestore Rules</a> in console</li>
                    <li>Change rules to allow write during setup</li>
                    <li>Click Publish, then click &quot;Seed Collections&quot; again</li>
                  </ol>
                </div>
              )}
            </div>
          )}

          {isFirebaseConfigured && (
            <div style={{ marginTop: '12px' }}>
              <button
                onClick={handleSeed}
                disabled={seeding}
                className="btn-secondary btn-sm"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  padding: '7px 12px',
                }}
                title="Only fills in missing collections. Will never overwrite custom photos or edits."
              >
                <RefreshCw size={12} className={seeding ? 'animate-spin' : ''} />
                <span>{seeding ? 'Checking...' : 'Safe Seed (Protects Custom Edits)'}</span>
              </button>
              <div style={{ fontSize: '0.675rem', color: '#64748b', textAlign: 'center', marginTop: '4px' }}>
                Safe mode: skips existing photos &amp; details
              </div>
            </div>
          )}

          {!isFirebaseConfigured && (
            <p style={{ marginTop: '10px', fontSize: '0.725rem', color: '#64748b', lineHeight: 1.4 }}>
              Serving verified startup data. Add keys to <code>.env.local</code> to link your live Firestore project.
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
