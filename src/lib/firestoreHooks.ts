'use client';

import { useState, useEffect } from 'react';
import { db, isFirebaseConfigured } from './firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  addDoc,
  serverTimestamp,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import {
  WorkCategory,
  PortfolioItem,
  TeamMember,
  SiteContent,
  ClientMessage,
} from '@/types';
import {
  initialWorkCategories,
  initialPortfolioItems,
  initialTeamMembers,
  initialSiteContent,
} from './seedData';

/**
 * Hook for real-time Work Categories sync via onSnapshot
 */
export function useWorkCategories() {
  const [categories, setCategories] = useState<WorkCategory[]>(initialWorkCategories);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setLoading(false);
      return;
    }

    try {
      const colRef = collection(db, 'workCategories');
      const q = query(colRef, orderBy('order', 'asc'));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const data = snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({
              id: d.id,
              ...d.data(),
            })) as WorkCategory[];
            setCategories(data);
          } else {
            // Keep fallback if collection is empty yet
            setCategories(initialWorkCategories);
          }
          setLoading(false);
        },
        (err) => {
          console.warn('Firestore categories onSnapshot error, using fallback data:', err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.warn('Error setting up categories listener:', err);
      setLoading(false);
    }
  }, []);

  return { categories, loading, error };
}

/**
 * Hook for real-time Portfolio Items sync via onSnapshot
 */
export function usePortfolioItems(categoryId?: string) {
  const [items, setItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setLoading(false);
      return;
    }

    try {
      const colRef = collection(db, 'portfolioItems');

      const unsubscribe = onSnapshot(
        colRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const data = snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({
              id: d.id,
              ...d.data(),
            })) as PortfolioItem[];
            setItems(data);
          } else {
            setItems(initialPortfolioItems);
          }
          setLoading(false);
        },
        (err) => {
          console.warn('Firestore portfolio onSnapshot error, using fallback data:', err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.warn('Error setting up portfolio listener:', err);
      setLoading(false);
    }
  }, []);

  const filteredItems = categoryId && categoryId !== 'all'
    ? items.filter((item) => item.categoryId === categoryId)
    : items;

  return { items: filteredItems, rawItems: items, loading, error };
}

/**
 * Hook for real-time Team Members sync via onSnapshot
 */
export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setLoading(false);
      return;
    }

    try {
      const colRef = collection(db, 'teamMembers');
      const q = query(colRef, orderBy('order', 'asc'));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const data = snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({
              id: d.id,
              ...d.data(),
            })) as TeamMember[];
            setMembers(data);
          } else {
            setMembers(initialTeamMembers);
          }
          setLoading(false);
        },
        (err) => {
          console.warn('Firestore team onSnapshot error, using fallback data:', err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.warn('Error setting up team listener:', err);
      setLoading(false);
    }
  }, []);

  return { members, loading, error };
}

/**
 * Hook for real-time Site Content sync via onSnapshot
 */
export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(initialSiteContent);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(db, 'siteContent', 'main');

      const unsubscribe = onSnapshot(
        docRef,
        (snapshot) => {
          if (snapshot.exists()) {
            setContent(snapshot.data() as SiteContent);
          } else {
            setContent(initialSiteContent);
          }
          setLoading(false);
        },
        (err) => {
          console.warn('Firestore siteContent onSnapshot error, using fallback data:', err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.warn('Error setting up siteContent listener:', err);
      setLoading(false);
    }
  }, []);

  return { content, loading, error };
}

/**
 * Submit client inquiry message to Firestore clientMessages collection
 */
export async function submitClientMessage(
  payload: Omit<ClientMessage, 'id' | 'status' | 'timestamp'>
): Promise<{ success: boolean; id?: string; message: string }> {
  try {
    if (isFirebaseConfigured && db) {
      const docRef = await addDoc(collection(db, 'clientMessages'), {
        ...payload,
        status: 'new',
        timestamp: serverTimestamp(),
      });
      return {
        success: true,
        id: docRef.id,
        message: 'Your inquiry has been transmitted directly to our client desk! We will reply within 2 hours.',
      };
    } else {
      // Offline / Demo mode storage
      if (typeof window !== 'undefined') {
        const stored = JSON.parse(localStorage.getItem('zynthax_client_messages') || '[]');
        const fakeId = 'msg-' + Date.now();
        stored.push({
          id: fakeId,
          ...payload,
          status: 'new',
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('zynthax_client_messages', JSON.stringify(stored));
      }
      return {
        success: true,
        message: 'Message received! (Saved locally in demo mode until Firebase credentials are provided).',
      };
    }
  } catch (error: any) {
    console.error('Error submitting message to Firestore:', error);
    return {
      success: false,
      message: error?.message || 'Failed to submit message. Please try emailing us directly at zynthax13@gmail.com.',
    };
  }
}
