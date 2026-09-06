# Zynthax Digital Solutions — Official Web Platform

Welcome to the official repository for **Zynthax Digital Solutions**, a modern digital services startup providing Web Development, Custom Mobile & Retail Billing Applications, UI/UX Design, Logo Design & Animation, 4K Video Editing, Photoshop Graphics, and Search Engine Optimization (SEO).

---

## 🚀 Technology Stack

- **Frontend**: Next.js 14 (React 18, TypeScript) with modern App Router.
- **Design System**: Vanilla CSS tokens, glassmorphism (`backdrop-filter`), neon gradients (cyan, purple, blue), micro-animations, and responsive layout primitives.
- **Database / Backend**: **Firebase Firestore** with real-time listeners (`onSnapshot`) for instant dynamic sync without redeployment.
- **Media Delivery & CDN**: **Cloudinary** with automatic format & quality optimization (`f_auto,q_auto`) built into every asset render pipeline.
- **Icons**: Lucide React.

---

## 📁 Firestore Database Collections

Structured for compatibility with both this web portal and a future administrative mobile app:

1. **`workCategories`**
   - Fields: `id`, `name`, `description`, `order`, `slug`, `icon`
2. **`portfolioItems`**
   - Fields: `id`, `categoryId`, `title`, `description`, `imageUrl`, `imagePublicId`, `link`, `tags[]`, `client`, `featured`, `createdAt`, `timestamp`
3. **`teamMembers`**
   - Fields: `id`, `name`, `role`, `qualification`, `bio`, `photoUrl`, `photoPublicId`, `portfolioLinks[{ label, url }]`, `order`, `email`
4. **`clientMessages`**
   - Fields: `id`, `name`, `email`, `phone`, `subject`, `message`, `status` (`new` | `read` | `in-progress` | `replied`), `timestamp`
5. **`siteContent`**
   - Document: `siteContent/main`
   - Fields: `heroTitle`, `heroSubtitle`, `heroImageUrl`, `aboutText`, `aboutMission`, `aboutVision`, `founderMessage`, `testimonials[]`, `stats[]`

---

## 🔒 Firestore Security Rules

See [firestore.rules](file:///c:/Users/sunny/Documents/GitHub/ZYNTHAX-ORGINAL/firestore.rules):
- **Public Read Access**: `workCategories`, `portfolioItems`, `teamMembers`, `siteContent` can be read by any client without authentication.
- **Public Write-Only Access**: `clientMessages` allows `create` for any visitor submitting an inquiry, but denies public read/update/delete.
- **Admin Write Access**: All modifications to categories, items, and site content require admin authorization (`request.auth != null`), ready for Firebase Auth integration with the upcoming admin mobile app.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=zynthax

# Contact Info
NEXT_PUBLIC_CONTACT_EMAIL=zynthax13@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+91 8848241519
```

> **Fallback Demo Mode**: If Firebase credentials are not provided or during local testing, the application automatically runs in fallback demo mode using curated seed datasets and local storage simulation, ensuring zero downtime or broken views.

---

## ⚡ Initial Firestore Seeding (1-Click)

The site includes built-in seed datasets for `workCategories`, `portfolioItems`, `teamMembers`, and `siteContent`:

1. Start the dev server (`npm run dev`) with your Firebase keys in `.env.local`.
2. Look at the bottom-left corner of any page for the **Firestore: Live** status badge.
3. Click the badge to open the backend status card.
4. Click **"Seed Collections to Firestore"** to automatically populate your Firestore database with the verified Zynthax datasets in one batch!
5. Once seeded, real-time listeners (`onSnapshot`) instantly reflect the live data across all pages without requiring a page refresh or redeployment.

---

## 🛠️ Development & Running Locally

```powershell
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📞 Company Details

- **Company Name**: Zynthax Digital Solutions
- **Email**: [zynthax13@gmail.com](mailto:zynthax13@gmail.com)
- **Phone / WhatsApp**: [+91 8848241519](tel:+918848241519)
- **Founder & Head of Innovation**: Sunny Biju
