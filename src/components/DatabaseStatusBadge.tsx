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

          {result && (
            <div
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                borderRadius: '6px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                fontSize: '0.75rem',
                color: '#1e40af',
              }}
            >
              {result}
            </div>
          )}

          {isFirebaseConfigured && (
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="btn-primary btn-sm"
              style={{
                width: '100%',
                marginTop: '12px',
                justifyContent: 'center',
                fontSize: '0.775rem',
              }}
            >
              <RefreshCw size={12} className={seeding ? 'animate-spin' : ''} />
              <span>{seeding ? 'Seeding...' : 'Seed Collections to Firestore'}</span>
            </button>
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
