'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePortfolioItems, useWorkCategories } from '@/lib/firestoreHooks';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioModal from '@/components/PortfolioModal';
import { PortfolioItem } from '@/types';
import { AlertCircle } from 'lucide-react';

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
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 44px', textAlign: 'center' }}>
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
            Portfolio
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0f172a', marginBottom: '14px', fontWeight: 800 }}>
            Selected Deliverables
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Browse projects across web applications, retail billing software, branding, and video post-production.
          </p>
        </div>

        {/* Filter Category Tabs — Desktop: buttons, Mobile: dropdown */}

        {/* Mobile dropdown */}
        <div className="portfolio-filter-dropdown" style={{ marginBottom: '28px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter portfolio by category"
          >
            <option value="all">All Work ({items.length})</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Desktop button row */}
        <div
          className="portfolio-filter-buttons touch-scroll-row"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            gap: '8px',
            marginBottom: '36px',
            paddingBottom: '4px',
            paddingLeft: '2px',
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              border: selectedCategory === 'all'
                ? '1px solid #0f172a'
                : '1px solid #e2e8f0',
              background: selectedCategory === 'all'
                ? '#0f172a'
                : '#ffffff',
              color: selectedCategory === 'all' ? '#ffffff' : '#475569',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            All Work ({items.length})
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  border: isSelected
                    ? '1px solid #0f172a'
                    : '1px solid #e2e8f0',
                  background: isSelected
                    ? '#0f172a'
                    : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Portfolio Items Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            Loading portfolio items...
          </div>
        ) : items.length === 0 ? (
          <div
            style={{
              padding: '44px',
              textAlign: 'center',
              maxWidth: '460px',
              margin: '0 auto',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
            }}
          >
            <AlertCircle size={32} color="#2563eb" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '6px' }}>
              No Projects in this Category
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Select another category above or check back shortly.
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
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px 20px', color: '#64748b' }}>Loading portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
