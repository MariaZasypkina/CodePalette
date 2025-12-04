# 🚀 Contact Form — TL;DR (Quick Start)

## 3 Steps to Make It Work

### Step 1: Get Free API Key (2 min)
1. Go to https://resend.com → Sign up (free)
2. Copy your API key from "API Keys" section

### Step 2: Add API Key to Project (1 min)
Open `.env.local` and replace:
```env
RESEND_API_KEY=YOUR_API_KEY_HERE
CONTACT_EMAIL=your-email@gmail.com
```

### Step 3: Test & Deploy (5 min)
```bash
# Test locally
npm run dev
# Visit http://localhost:5174/contact and submit form

# Deploy to Vercel
git add . && git commit -m "Add email" && git push
# Add same 2 env vars to Vercel → Settings → Environment Variables
```

---

## That's It! 🎉

Your contact form now sends emails automatically. No email client popup. Clean, professional.

---

## What You Have

✅ Form at `/contact`  
✅ Auto-sends to your email  
✅ User gets success message  
✅ You can reply directly to user's email  
✅ Free (100 emails/day)

---

Need help? See `SETUP_CONTACT_FORM.md` or `CONTACT_FORM_CHECKLIST.md`
