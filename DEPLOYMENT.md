# 🚀 Alps Experience Deployment & Development Guide

## 📋 Quick Start Commands

### Development Server (Port 3005)

1. **Navigate to project directory:**
   ```bash
   cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Run development server on port 3005:**
   ```bash
   npm run dev -- --port 3005
   ```
   
   **Alternative command:**
   ```bash
   npx next dev --port 3005 --turbopack
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3005](http://localhost:3005)

### Available Scripts

```bash
# Development server (default port 3000)
npm run dev

# Development server on custom port
npm run dev -- --port 3005

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 🌐 Vercel Deployment Guide

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project directory:**
   ```bash
   cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → **Y**
   - Which scope? → Choose your account
   - Link to existing project? → **N** (for first deployment)
   - What's your project's name? → **pdse** or **portes-du-soleil-experience**
   - In which directory is your code located? → **./** (current directory)

5. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard (Git Integration)

1. **Push code to Git repository:**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial Alps Experience website deployment"
   
   # Add remote repository
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click **"Add New Project"**
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure Project Settings:**
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install`

---

## ⚙️ Environment Variables for Production

### Required Environment Variables

Add these in Vercel Dashboard → Project → Settings → Environment Variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Email Configuration (Optional for MVP)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
EMAIL_TO=info@alps-experience.com

# Analytics (Optional)
GA4_ID=G-XXXXXXXXXX

# Future: Stripe Integration
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxx
```

### Setting Environment Variables in Vercel

1. **Via Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add each variable with appropriate environment (Production, Preview, Development)

2. **Via CLI:**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL production
   vercel env add RESEND_API_KEY production
   ```

---

## 🔧 Production Configuration

### 1. Update Site URL

In `config/site.ts`, ensure the URL is set correctly:
```typescript
export const siteConfig = {
  name: "Alps Experience",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pdse.vercel.app",
  // ... other settings
};
```

### 2. Custom Domain (Optional)

**Add Custom Domain in Vercel:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `pdse.com`)
3. Configure DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

### 3. Email Integration

**For production email functionality:**
1. Sign up for [Resend](https://resend.com) (recommended)
2. Add your API key to environment variables
3. Verify your domain for email sending

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)
- Automatically enabled for all Vercel projects
- View in Vercel Dashboard → Analytics

### Google Analytics 4 (Optional)
1. Create GA4 property
2. Add `GA4_ID` to environment variables
3. Analytics will be automatically tracked

### Performance Monitoring
```bash
# Check Lighthouse scores
npx lighthouse http://localhost:3005 --output=html --output-path=./lighthouse-report.html

# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

---

## 🚨 Troubleshooting

### Common Issues

**1. Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**2. Environment Variables Not Working:**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after adding variables
- Check Vercel deployment logs

**3. TypeScript Errors:**
```bash
# Check for type errors
npx tsc --noEmit

# Fix common issues
npm run lint -- --fix
```

**4. Port Already in Use:**
```bash
# Kill process on port 3005
lsof -ti:3005 | xargs kill -9

# Use different port
npm run dev -- --port 3006
```

### Deployment Logs

**View Vercel deployment logs:**
```bash
vercel logs YOUR_DEPLOYMENT_URL
```

**Check build output:**
- Go to Vercel Dashboard → Deployments
- Click on specific deployment
- View Function Logs and Build Logs

---

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to Git, Vercel automatically:
- **Deploys to production** on pushes to `main` branch
- **Creates preview deployments** for pull requests
- **Runs build checks** before deployment

### Manual Deployments

```bash
# Deploy current state
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
git checkout feature-branch
vercel
```

---

## 📈 Performance Optimization

### Pre-deployment Checklist

1. **Build Test:**
   ```bash
   npm run build
   npm run start
   ```

2. **Lighthouse Audit:**
   ```bash
   npx lighthouse http://localhost:3000 --output=html
   ```

3. **Bundle Analysis:**
   ```bash
   npm run build
   ```

### Production Optimizations

- ✅ **Image Optimization:** Next.js automatic optimization
- ✅ **Font Optimization:** Google Fonts with `next/font`
- ✅ **Code Splitting:** Automatic with Next.js App Router
- ✅ **Compression:** Automatic Vercel compression
- ✅ **CDN:** Global Vercel Edge Network

---

## 📞 Support & Resources

### Documentation
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Alps Experience Specific
- **Project README:** `./README.md`
- **Component Documentation:** Inline code comments
- **API Documentation:** `./README.md` API section

### Quick Commands Reference

```bash
# Development
npm run dev -- --port 3005

# Build & Test
npm run build && npm run start

# Deploy to Vercel
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## 🎯 Success Metrics

### Deployment Targets
- ✅ **Build Time:** < 2 minutes
- ✅ **Lighthouse Performance:** > 90
- ✅ **First Load JS:** < 250KB
- ✅ **Time to Interactive:** < 3 seconds

### Post-Deployment Verification
1. All pages load correctly
2. Forms submit successfully
3. Currency toggle works
4. Mobile responsiveness
5. SEO meta tags present
6. Analytics tracking active

---

**🚀 Ready to deploy your premium ski booking platform!**
