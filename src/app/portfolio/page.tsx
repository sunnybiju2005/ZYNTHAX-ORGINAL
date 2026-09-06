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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="badge">
            <span>Our Work & Case Studies</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: '#0f172a', marginBottom: '14px' }}>
            Proven Results & <span className="text-gradient">Deliverables</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Browse our completed projects across web applications, retail billing software, branding, and video post-production.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '6px',
              border: selectedCategory === 'all'
                ? '1px solid #2563eb'
                : '1px solid #e2e8f0',
              background: selectedCategory === 'all'
                ? '#eff6ff'
                : '#ffffff',
              color: selectedCategory === 'all' ? '#1d4ed8' : '#475569',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
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
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: isSelected
                    ? '1px solid #2563eb'
                    : '1px solid #e2e8f0',
                  background: isSelected
                    ? '#eff6ff'
                    : '#ffffff',
                  color: isSelected ? '#1d4ed8' : '#475569',
                  fontSize: '0.875rem',
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
            className="card-panel"
            style={{
              padding: '48px',
              textAlign: 'center',
              maxWidth: '480px',
              margin: '0 auto',
              background: '#ffffff',
            }}
          >
            <AlertCircle size={36} color="#2563eb" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '6px' }}>
              No Projects Found in this Category
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Select another category above or check back shortly as new work is added.
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
