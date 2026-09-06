'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePortfolioItems, useWorkCategories } from '@/lib/firestoreHooks';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioModal from '@/components/PortfolioModal';
import { PortfolioItem } from '@/types';
import { Filter, Layers, Sparkles, AlertCircle } from 'lucide-react';

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialCategoryQuery = searchParams.get('category');

  const { categories } = useWorkCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // If query string has a slug, match with category id
  useEffect(() => {
    if (initialCategoryQuery && categories.length > 0) {
      const match = categories.find((c) => c.slug === initialCategoryQuery);
      if (match) {
        setSelectedCategory(match.id);
      }
    }
  }, [initialCategoryQuery, categories]);

  const { items, loading } = usePortfolioItems(selectedCategory);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge">
            <span>Dynamic Firestore Portfolio</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', marginBottom: '18px' }}>
            Our Work & <span className="text-gradient">Case Studies</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Explore our curated projects across web applications, retail billing systems, brand identities, and high-impact motion media.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: selectedCategory === 'all'
                ? '1px solid var(--accent-cyan)'
                : '1px solid var(--border-subtle)',
              background: selectedCategory === 'all'
                ? 'rgba(0, 242, 254, 0.15)'
                : 'rgba(255, 255, 255, 0.04)',
              color: selectedCategory === 'all' ? '#00f2fe' : '#94a3b8',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            All Projects ({items.length})
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: isSelected
                    ? '1px solid var(--accent-cyan)'
                    : '1px solid var(--border-subtle)',
                  background: isSelected
                    ? 'rgba(0, 242, 254, 0.15)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#00f2fe' : '#94a3b8',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Portfolio Items Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
            Loading dynamic portfolio items from Firestore...
          </div>
        ) : items.length === 0 ? (
          <div
            className="glass-panel"
            style={{
              padding: '60px',
              textAlign: 'center',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <AlertCircle size={40} color="var(--accent-cyan)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '8px' }}>
              No Projects Found in this Category
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
              Try selecting another category or check back soon as new projects are synced via Firestore!
            </p>
          </div>
        ) : (
          <div className="grid-3">
            {items.map((item) => {
              const category = categories.find((c) => c.id === item.categoryId);
              return (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  categoryName={category?.name || 'Project'}
                  onOpenModal={(selected) => setSelectedItem(selected)}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <PortfolioModal
        item={selectedItem}
        categoryName={
          categories.find((c) => c.id === selectedItem?.categoryId)?.name
        }
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px 20px', color: '#94a3b8' }}>Loading portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
