# 🚀 Alps Experience Deployment Guide

## ✅ Step 1: Contact Email Updated
- ✅ Updated to `info@alps-experience.com` across all files
- ✅ Git repository initialized with simolamine@gmail.com
- ✅ Initial commit completed

## 📂 Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not already installed
brew install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create alps-experience --public --description "Premium ski booking platform for Alps Experience in Morzine, France"

# Add remote and push
git remote add origin https://github.com/simolamine/alps-experience.git
git branch -M main
git push -u origin main
```

### Option B: Manual GitHub Setup
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `alps-experience`
3. Description: "Premium ski booking platform for Alps Experience in Morzine, France"
4. Set to Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

Then run:
```bash
git remote add origin https://github.com/simolamine/alps-experience.git
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel

### Method 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your `alps-experience` repository
3. Project name: `alps-experience`
4. Framework: Next.js (auto-detected)
5. Click "Deploy"

## 🔗 Step 4: Configure Custom Domain

### In Vercel Dashboard:
1. Go to your project → Settings → Domains
2. Add domain: `alps-experience.com`
3. Add domain: `www.alps-experience.com`
4. Follow DNS configuration instructions

### DNS Configuration:
Add these records to your domain registrar:

**For alps-experience.com:**
- Type: `A`
- Name: `@`
- Value: `76.76.19.61` (Vercel IP)

**For www.alps-experience.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Environment Variables (Required):
Add these in Vercel → Project → Settings → Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://alps-experience.com
EMAIL_TO=info@alps-experience.com
```

### Optional Environment Variables:
```env
RESEND_API_KEY=your_resend_api_key_here
GA4_ID=G-XXXXXXXXXX
```

## ✅ Step 5: Verification Checklist

After deployment, verify:
- [ ] Site loads at https://alps-experience.com
- [ ] All pages work correctly
- [ ] Contact forms submit properly
- [ ] Currency toggle functions
- [ ] Mobile responsiveness
- [ ] SEO meta tags present
- [ ] Booking wizard flows work

## 🔧 Post-Deployment Tasks

### 1. Set up Email Service (Optional)
- Sign up for [Resend](https://resend.com)
- Add API key to Vercel environment variables
- Verify domain for sending emails

### 2. Analytics (Optional)
- Create Google Analytics 4 property
- Add GA4_ID to environment variables

### 3. Monitoring
- Monitor deployment logs in Vercel dashboard
- Check Lighthouse scores
- Test booking flows

## 📞 Support

- **Project**: Alps Experience
- **Email**: simolamine@gmail.com
- **Repository**: https://github.com/simolamine/alps-experience
- **Live Site**: https://alps-experience.com

---

**🎿 Ready to launch your premium Alpine booking platform!**
