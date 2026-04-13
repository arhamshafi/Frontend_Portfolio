# 🚀 Deployment Guide

Complete guide to deploying your portfolio to various platforms.

## Pre-Deployment Checklist

- [ ] All contact information updated
- [ ] Project links added
- [ ] No console errors
- [ ] Tested on mobile, tablet, desktop
- [ ] Build runs successfully (`npm run build`)
- [ ] All placeholder text replaced

---

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Automatic deployments
- Free for personal projects
- Perfect for React/Vite
- Custom domain support
- HTTPS by default

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!**
   - Your site is live at: `your-project.vercel.app`
   - Add custom domain in settings (optional)

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (5-30 minutes)

---

## Option 2: Netlify

**Why Netlify?**
- Easy drag-and-drop
- Free tier available
- Form handling
- Continuous deployment

### Steps:

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to Netlify
   - Done!

### Or Deploy via Git:

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

## Option 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting
- Integrated with GitHub
- Good for open-source portfolios

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default {
     base: '/portfolio/', // Your repo name
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages section
   - Source: gh-pages branch
   - Save

---

## Option 4: Render

**Why Render?**
- Free tier
- Automatic deployments
- Easy setup

### Steps:

1. **Push to GitHub**

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - New → Static Site
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Create Static Site

---

## Option 5: Firebase Hosting

**Why Firebase?**
- Google infrastructure
- Fast CDN
- Free tier

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select: Use existing project or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub deploys: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Post-Deployment Tasks

### 1. Test Your Live Site
- [ ] All pages load correctly
- [ ] All links work
- [ ] Images display properly
- [ ] Responsive on all devices
- [ ] No console errors

### 2. Add to Your Profiles
- [ ] Update LinkedIn profile with portfolio link
- [ ] Add to GitHub profile README
- [ ] Add to resume/CV
- [ ] Share on social media

### 3. SEO & Analytics

**Add Google Analytics** (Optional)

In `index.html`, add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Submit to Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap

### 4. Performance Optimization

**Check Performance**
- Run Lighthouse audit in Chrome DevTools
- Aim for 90+ scores

**Optimize Images**
- Use WebP format
- Compress images
- Use appropriate sizes

**Enable Caching**
- Most platforms handle this automatically
- Vercel/Netlify have built-in CDN

---

## Custom Domain Setup

### Buy a Domain
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Connect Domain

**For Vercel:**
1. Project Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**For Netlify:**
1. Domain Settings → Add custom domain
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## Continuous Deployment

Once set up with Vercel/Netlify:
1. Make changes locally
2. Commit and push to GitHub
3. Automatic deployment triggers
4. Live site updates in 1-2 minutes

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh
- Ensure SPA redirect is configured
- Vercel/Netlify handle this automatically
- For others, add `_redirects` or `.htaccess`

### Images Not Loading
- Check image paths (use `/` for public folder)
- Ensure images are in `public/` directory
- Check case sensitivity in filenames

### Slow Loading
- Optimize images
- Enable compression
- Use CDN (automatic on Vercel/Netlify)

---

## Maintenance

### Regular Updates
- Add new projects as you complete them
- Update skills section
- Keep experience current
- Fix any broken links

### Monitoring
- Check analytics monthly
- Monitor for broken links
- Update dependencies quarterly
- Refresh content every 3-6 months

---

## Cost Breakdown

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| Vercel | ✅ Unlimited | $20/mo for team |
| Netlify | ✅ 100GB bandwidth | $19/mo for pro |
| GitHub Pages | ✅ Unlimited | Free |
| Render | ✅ Limited | $7/mo for starter |
| Firebase | ✅ 10GB storage | Pay as you go |

**Recommendation**: Start with Vercel free tier. It's more than enough for a portfolio.

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live and accessible to the world.

**Next Steps:**
1. Share your portfolio link
2. Apply to jobs with confidence
3. Keep it updated
4. Monitor analytics
5. Iterate and improve

---

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

Good luck! 🚀
