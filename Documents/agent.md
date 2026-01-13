# PROJECT IDENTITY: CLEAN GOLD
**Goal:** Build a high-security, exclusive investor portal for a $25M Private Equity Gold Mining Fund.
**Vibe:** "Digital Fortress," "Terminal-Grade," "High-Net-Worth."
**Core Function:** Authenticated investors access proprietary geological data, financial reports, and legal docs.

---

## 🎨 STRICT DESIGN SYSTEM
* **Palette:**
    * `bg-slate-950` (Deep Void) for pages.
    * `bg-slate-900` (Surface) for cards.
    * `#D4AF37` (Metallic Gold) for accents/buttons only.
    * `#10b981` (Emerald) for positive financial deltas only.
* **Typography:**
    * `Playfair Display` for Headers (Luxury/Traditional).
    * `Inter` for UI (Clean/Modern).
    * `Geist Mono` or `Monospace` for data tables (Technical).
* **Visuals:** Use abstract topographical maps (`linear-gradient` grid patterns), subtle glows, and watermarks. No "friendly" SaaS illustrations.

---

## 🛠 TECH STACK & ARCHITECTURE
* **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide-React.
* **Backend:** Firebase (Client SDK + Server Actions).
* **Auth:** Firebase Auth (Email/Password).
* **Database (Firestore):**
    * `users/{uid}` -> `{ role: 'admin' | 'investor', nda_signed: boolean }`
    * `audit_logs` -> `{ user_id, action, timestamp, metadata }`
* **Storage:** Google Cloud Storage bucket `secure-docs` for sensitive PDFs.

---

## 🤖 AGENT DIRECTIVES (ANTIGRAVITY SPECIFIC)
1.  **Artifact First:** Before writing code, ALWAYS generate an `Implementation Plan` artifact detailing the files you will touch.
2.  **MCP Usage:** Use the **Firebase MCP** to verify buckets and collections exist before writing code that depends on them. Do not hallucinate bucket names.
3.  **Security First:** Every database read/write must be protected by RBAC checks (`request.auth != null`).
4.  **Mock vs. Real:** We are currently transitioning from "Mock Mode" to "Production." Prefer real Firebase calls over `setTimeout` mocks unless explicitly told otherwise.