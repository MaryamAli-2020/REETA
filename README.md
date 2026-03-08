# 🪶 Reeta — Where Stories Live

> A beautiful, vintage-aesthetic platform for writers to publish novels, poems, one-shots, and more — and for readers to discover, follow, and rate them.

---

## ✨ Overview

Reeta is a single-file web application built with vanilla HTML/CSS/JavaScript and powered by [Supabase](https://supabase.com) as the backend. It brings together everything a writer needs to share their work and everything a reader needs to enjoy it — wrapped in a warm, parchment-toned aesthetic inspired by classic bookshelf design.

---

## 📸 Pages at a Glance

| Page | Description |
|---|---|
| **Landing** | Animated hero with book spines, feature highlights |
| **Sign Up / Log In** | Email-based auth via Supabase |
| **Discover** | Browse all works with genre filters and search |
| **Book Detail** | Cover, description, chapter list, subscribe button |
| **Reader** | Clean, distraction-free reading with prev/next nav |
| **Dashboard** | Writer stats, my works, subscriptions, notifications |
| **Author Profile** | Public page showing an author's full catalogue |

---

## 🚀 Getting Started

### Step 1 — Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project** and fill in the details
3. Once created, go to **Project Settings → API** and copy:
   - **Project URL** (looks like `https://xxxxxxxxxxxx.supabase.co`)
   - **anon / public key** (long JWT string)

---

### Step 2 — Set Up the Database

In your Supabase dashboard, open the **SQL Editor** and run all the SQL found inside the `<!-- SUPABASE SQL SETUP -->` comment block at the very bottom of `index.html`.

This creates the following tables:

| Table | Purpose |
|---|---|
| `profiles` | Stores user display names, bios, and avatars |
| `books` | All published works (novels, poems, one-shots, etc.) |
| `chapters` | Individual chapters or entries per work |
| `ratings` | Per-user, per-chapter star ratings (1–5) |
| `subscriptions` | Reader → Author follow relationships |
| `notifications` | New chapter alerts sent to subscribers |

Row-Level Security (RLS) policies are included in the SQL — they ensure users can only edit and delete their own content.

---

### Step 3 — Connect Your Credentials

Open `index.html` in any text editor and find these two lines near the top of the `<script>` section (around line 10):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace both values with the ones you copied in Step 1.

---

### Step 4 — Enable Email Authentication

In your Supabase dashboard:

1. Go to **Authentication → Providers**
2. Make sure **Email** is toggled on
3. *(Optional for development)* Go to **Authentication → Settings** and disable **"Confirm email"** so you can sign up without verifying

---

### Step 5 — Deploy or Open Locally

Reeta is a single `index.html` file — no build step required.

- **Locally:** Just double-click `index.html` or serve with any static server
- **Netlify:** Drag and drop the file at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel:** Run `npx serve .` or connect your repo
- **GitHub Pages:** Push to a repo and enable Pages in repository settings

---

## 🗂️ Feature Breakdown

### For Writers
- **Publish works** with a title, type, genre, description, and optional cover image URL
- **Supported types:** Novel, Poem, One-shot, Short Story, Anthology, Essay, or any custom type you define
- **Add chapters** using the built-in rich text editor (Reeta.js) or by uploading a PDF, DOCX, or TXT file
- **Edit or delete** any work or chapter at any time from the Book Detail page or Dashboard
- **View stats** — subscriber count, total chapters, and works published

### For Readers
- **Discover** all works with genre filter pills and a live search bar
- **Subscribe to authors** to receive notifications when new chapters are published
- **Read chapters** in a clean, vintage-styled reader with previous/next navigation
- **Rate chapters** with a 1–5 star system (averaged and displayed to all readers)
- **Download chapters** as `.txt` files for offline reading
- **Browse author profiles** to see their full catalogue

### Notifications
- Subscribers are automatically notified whenever an author publishes a new chapter
- A bell icon in the nav shows an unread badge count
- A slide-in notification panel lists all alerts with links to the relevant book

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend / Database | [Supabase](https://supabase.com) (PostgreSQL + Auth) |
| Rich Text Editor | [Reeta.js](https://Reetajs.com) v2 |
| Fonts | Playfair Display, EB Garamond, Cinzel (Google Fonts) |
| Hosting | Any static host (Netlify, Vercel, GitHub Pages) |

---

## 📁 File Structure

```
Reeta/
├── index.html   ← The entire application (HTML + CSS + JS)
├── README.md    ← This file
└── SETUP.md     ← Quick-start reference card
```

---

## 🔒 Security Notes

- All database tables use **Row-Level Security (RLS)** — users can only modify their own data
- The Supabase `anon` key is safe to expose in frontend code; it only grants public read access and authenticated user actions as defined by your RLS policies
- Passwords are handled entirely by Supabase Auth — they are never stored or touched by the application code

---

## 🎨 Design Notes

Reeta uses a warm vintage palette inspired by old bookshelf aesthetics:

| Variable | Color | Usage |
|---|---|---|
| `--cream` | `#F5ECD7` | Page background |
| `--parchment` | `#EDD9A3` | Borders, subtle fills |
| `--warm-tan` | `#C9A96E` | Accents, labels |
| `--burnt-orange` | `#C4622D` | Primary actions, logo |
| `--deep-brown` | `#3D2B1F` | Text, dark surfaces |
| `--gold` | `#B8860B` | Stars, highlights |

Fonts used: **Cinzel** for headings/logo, **Playfair Display** for titles, **EB Garamond** for body text.

---

## 🐛 Troubleshooting

**Auth errors on sign up / log in**
→ Double-check your Supabase URL and anon key are correctly pasted in `index.html`

**Data not saving**
→ Make sure you ran all the SQL in Step 2, including the RLS policy statements

**"relation does not exist" errors in console**
→ One or more tables weren't created — re-run the full SQL block from `index.html`

**Notifications not appearing**
→ Confirm the `notifications` table was created and that the reader is subscribed to the author before a chapter is published

---

## 📄 License

Free to use, modify, and deploy for personal or commercial projects.

---

*Built with ☕ and a love of good stories.*
