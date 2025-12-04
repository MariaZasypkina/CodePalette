# ✅ Contact Form Setup Checklist

## What's Been Done (✓ Complete)

- [x] Created Vercel Function API endpoint at `/api/send-email.js`
- [x] Updated Contact form in `/src/pages/Contact.jsx` to use new API
- [x] Added `resend` npm package
- [x] Created `.env.local` template file
- [x] Updated `vercel.json` to handle API routes
- [x] Added full documentation

## Your Action Items (⚠️ Required)

### 1️⃣ Sign Up for Resend (5 minutes)
- [ ] Visit https://resend.com
- [ ] Click "Sign Up"
- [ ] Create free account
- [ ] Verify your email

### 2️⃣ Get API Key (2 minutes)
- [ ] Log in to Resend dashboard
- [ ] Click "API Keys" in left menu
- [ ] Copy your API key (starts with `re_`)

### 3️⃣ Update `.env.local` (1 minute)
Open the file `/Users/maria/Desktop/CodeTheDream/CodePalette-1/.env.local`

Find this:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=creative.code.palette@gmail.com
```

Replace `re_your_api_key_here` with your actual Resend API key.
Keep `CONTACT_EMAIL=creative.code.palette@gmail.com` (or change if you want).

### 4️⃣ Test Locally (3 minutes)
- [ ] Dev server is already running at http://localhost:5174
- [ ] Navigate to `/contact` page
- [ ] Fill out the form (name, email, message)
- [ ] Click "Send Message"
- [ ] Check your email inbox (should arrive in ~5 seconds)

### 5️⃣ Deploy to Vercel (2 minutes)
- [ ] Push code to GitHub: `git add . && git commit -m "Add contact form email" && git push`
- [ ] Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- [ ] Add two variables:
  - `RESEND_API_KEY` = your API key from step 2
  - `CONTACT_EMAIL` = creative.code.palette@gmail.com
- [ ] Click "Save and Redeploy"
- [ ] Wait for deployment (~2 minutes)
- [ ] Test form on live site

---

## Files Summary

### New Files Created
1. `/api/send-email.js` — Backend API function (handles email sending)
2. `.env.local` — Local environment variables (add your API key here)
3. `.env.example` — Reference for what vars are needed
4. `SETUP_CONTACT_FORM.md` — Detailed technical docs

### Modified Files
1. `/src/pages/Contact.jsx` — Updated form to use new API instead of `mailto:`
2. `/package.json` — Added `resend` dependency
3. `/vercel.json` — Added API route configuration

---

## How It Works (Technical)

```
User fills form ↓
Clicks "Send Message" ↓
POST request to /api/send-email ↓
Vercel Function runs ↓
Resend API sends email ↓
Email arrives in your inbox ↓
Success message shown to user
```

No email client opens. No `mailto:` popup. Clean experience.

---

## Testing Commands

### Local dev
```bash
npm run dev
# Visit http://localhost:5174/contact
```

### Build for production
```bash
npm run build
```

### Check for errors
```bash
npm run lint
```

---

## Support

### If emails aren't arriving:
1. Check spam folder
2. Verify `.env.local` has correct `RESEND_API_KEY`
3. Verify `CONTACT_EMAIL` is your actual email
4. Restart dev server: `npm run dev`

### If you get "Failed to send email":
- Resend quota exceeded? Check Resend dashboard
- API key expired? Generate new one in Resend
- Email format wrong? Verify email address

### Once it's working:
- You'll get emails from form submissions
- Reply directly from your email (reply-to is set to user's email)
- Check Resend dashboard to see email logs

---

## Next Phase (Optional)

Once emails work, consider:
- [ ] Add success/error message animations
- [ ] Store form submissions in database
- [ ] Add file upload to contact form
- [ ] Create automated email responses ("We got your message...")

---

**Start here:** Open `.env.local` and add your Resend API key! 🚀
