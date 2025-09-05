# 🚀 Alps Experience Quick Start Guide

## ⚡ Run Development Server on Port 3005

### Option 1: Using NPM Script (Recommended)
```bash
cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
npm run dev:3005
```

### Option 2: Using Next.js CLI
```bash
cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
npm run dev -- --port 3005
```

### Option 3: Direct Next Command
```bash
cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
npx next dev --port 3005 --turbopack
```

**✅ Server will be available at:** [http://localhost:3005](http://localhost:3005)

---

## 🌐 Deploy to Vercel (5 Minutes)

### Method 1: One-Command Deploy
```bash
# Install Vercel CLI (one-time setup)
npm install -g vercel

# Login to Vercel (one-time setup)
vercel login

# Deploy to production
cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse
vercel --prod
```

### Method 2: Git + Vercel Dashboard
1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Alps Experience website ready for deployment"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy via Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Click "Deploy" (auto-detects Next.js)

**✅ Your site will be live in ~2 minutes!**

---

## 📋 Pre-Deployment Checklist

### ✅ Verify Everything Works
```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Test production build
npm run start

# 4. Check for type errors
npm run type-check

# 5. Run linting
npm run lint
```

### ✅ Required Environment Variables (Production)
Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
RESEND_API_KEY=your_api_key_here (optional)
EMAIL_TO=info@alps-experience.com (optional)
```

---

## 🎯 What You Get

### 📱 **Fully Functional Website**
- ✅ **Homepage** with hero, packages, testimonials
- ✅ **Booking Wizard** (5-step process)
- ✅ **Package Browser** with filtering
- ✅ **Contact Forms** with validation
- ✅ **B2B Agent Portal** 
- ✅ **Content Pages** (Services, About, FAQ, Legal)

### 🛠️ **Technical Features**
- ✅ **Mobile Responsive** design
- ✅ **Currency Toggle** (USD/EUR)
- ✅ **SEO Optimized** with meta tags
- ✅ **Type-Safe** TypeScript
- ✅ **Modern UI** with Tailwind + shadcn/ui

### 📊 **Business Ready**
- ✅ **Lead Generation** forms
- ✅ **Analytics Ready** (Vercel + GA4)
- ✅ **Commission Tracking** for agents
- ✅ **Email Integration** ready
- ✅ **Payment Ready** (Stripe scaffold)

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Port 3000
npm run dev:3005         # Port 3005
npm run dev -- --port XXXX  # Custom port

# Production
npm run build            # Build for production
npm run start            # Run production server
npm run type-check       # Check TypeScript

# Deployment
vercel                   # Deploy preview
vercel --prod           # Deploy to production
vercel logs             # View deployment logs
```

---

## 📞 Need Help?

- **Full Documentation:** `./README.md`
- **Deployment Guide:** `./DEPLOYMENT.md`
- **Component Documentation:** Inline code comments
- **Vercel Help:** [vercel.com/docs](https://vercel.com/docs)

---

**🎿 Ready to launch your premium ski booking platform!**

Your Alps Experience website is production-ready with all features implemented according to the original specifications.
