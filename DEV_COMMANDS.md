# 🚀 Development Commands Guide

## 🔧 Starting Development Server

### Primary Command (Port 3005)
```bash
npm run dev:3005
```

### Alternative Commands
```bash
# Default port 3000
npm run dev

# Custom port (replace XXXX with desired port)
npm run dev -- --port XXXX

# Using npx directly
npx next dev --port 3005 --turbopack
```

## 🛠️ Port Troubleshooting

### If Port 3005 is Already in Use

**1. Kill processes on port 3005:**
```bash
lsof -ti:3005 | xargs kill -9
```

**2. Then restart:**
```bash
npm run dev:3005
```

**3. Alternative - Use different port:**
```bash
npm run dev -- --port 3006
npm run dev -- --port 3007
# etc.
```

### Check What's Using a Port
```bash
lsof -i :3005
```

### Kill All Node Processes (Nuclear Option)
```bash
pkill -f node
```

## 🎯 Quick Commands

```bash
# Navigate to project
cd /Users/simolamine/Documents/Work_Projects/github/Portes_du_Soleil_Experiences/pdse

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🌐 Access URLs

- **Development**: [http://localhost:3005](http://localhost:3005)
- **Alternative**: [http://127.0.0.1:3005](http://127.0.0.1:3005)

## 📋 Troubleshooting Steps

1. **Port in use**: Run `lsof -ti:3005 | xargs kill -9`
2. **Dependencies**: Run `npm install`
3. **Cache issues**: Delete `.next` folder and rebuild
4. **Permission issues**: Check file permissions
5. **Node version**: Ensure Node.js 18+ is installed

---

**✅ Your dev server should now be running on port 3005!**

You can now see the updated button styling for "Talk to a Concierge" - it should now have the same solid background appearance as "Plan Your Trip" for better text visibility.
