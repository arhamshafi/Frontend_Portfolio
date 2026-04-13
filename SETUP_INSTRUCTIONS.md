# Portfolio Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`

## Immediate Customization Steps

### 1. Update Contact Information (PRIORITY)

Replace placeholder contact info in these files:

**src/components/Contact.jsx**
- Line 8: Update email
- Line 13: Update GitHub URL
- Line 18: Update LinkedIn URL

**src/components/FooterSection.jsx**
- Line 42: Update email
- Line 49-50: Update social links

### 2. Add Project Links

**src/Data.js**
- Add `liveLink` URLs for deployed projects
- Add `githubLink` URLs for repositories
- Add project images (optional)

Example:
```javascript
{
  id: 1,
  title: "ARHAFI Platform",
  // ... other fields
  liveLink: "https://arhafi.com",
  githubLink: "https://github.com/yourusername/arhafi",
  image: "/projects/arhafi.png"
}
```

### 3. Update Personal Details

**src/components/Hero.jsx**
- Verify name and title are correct
- Adjust tagline if needed

**src/components/About.jsx**
- Review and personalize the about text
- Update statistics if needed

### 4. Add Resume/CV

Add a download resume button in the Contact or Hero section:

```jsx
<a 
  href="/newcv.pdf"
  download
  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
>
  Download Resume
</a>
```

### 5. Customize Skills

**src/Data.js**
- Adjust skill levels (0-100)
- Add or remove skills
- Update icons if desired

### 6. Add Project Images

1. Place images in `public/projects/` folder
2. Update `image` field in projectsData
3. Images will automatically display in project cards

## Optional Enhancements

### Add Google Analytics

Add to `index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Meta Tags for SEO

Update `index.html`:
```html
<meta name="description" content="Muhammad Arham Shafi - Full Stack Developer specializing in MERN stack and Next.js">
<meta name="keywords" content="Full Stack Developer, MERN Stack, Next.js, React, Node.js">
<meta property="og:title" content="Muhammad Arham Shafi - Portfolio">
<meta property="og:description" content="Full Stack Developer with 1 year experience">
<meta property="og:image" content="/og-image.png">
```

### Add Favicon

Replace `public/vite.svg` with your own favicon and update `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic configuration for Vite)

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## Testing Checklist

- [ ] All links work correctly
- [ ] Contact information is updated
- [ ] Projects display properly
- [ ] Responsive on mobile devices
- [ ] Smooth animations work
- [ ] No console errors
- [ ] Fast loading time
- [ ] All sections are visible

## Support

For issues or questions, refer to:
- [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md) - Detailed customization guide
- [README.md](./README.md) - Project overview

---

Good luck with your portfolio! 🚀
