# ⚡ Quick Start Guide

Get your portfolio running in 3 minutes!

## 1️⃣ Install & Run (30 seconds)

```bash
npm install
npm run dev
```

Open browser: `http://localhost:5173`

## 2️⃣ Update Contact Info (2 minutes)

### File: `src/components/Contact.jsx`

Find and replace:
```javascript
// Line 8
value: "arhamshafi@example.com"  // ← Your real email

// Line 13
value: "github.com/arhamshafi"   // ← Your GitHub username

// Line 18
value: "linkedin.com/in/arhamshafi"  // ← Your LinkedIn username
```

### File: `src/components/FooterSection.jsx`

Find and replace:
```javascript
// Line 42
href="mailto:arhamshafi@example.com"  // ← Your real email

// Line 49-50
href='https://github.com/arhamshafi'     // ← Your GitHub
href='https://linkedin.com/in/arhamshafi' // ← Your LinkedIn
```

## 3️⃣ Add Project Links (30 seconds)

### File: `src/Data.js`

Update each project:
```javascript
{
  id: 1,
  title: "ARHAFI Platform",
  // ... other fields ...
  liveLink: "https://your-live-site.com",  // ← Add this
  githubLink: "https://github.com/you/repo", // ← Add this
}
```

## ✅ Done!

Your portfolio is now personalized and ready to deploy!

## 🚀 Deploy Now

### Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Deploy

---

## 📚 Need More Help?

- **Full Guide**: See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- **Checklist**: See [CUSTOMIZATION_CHECKLIST.md](./CUSTOMIZATION_CHECKLIST.md)
- **Details**: See [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)

---

**Pro Tip**: Update your contact info FIRST before sharing your portfolio!
