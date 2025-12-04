# Contact Form Email Setup — Complete Guide

## What You Have Now

✅ Contact form at `/contact` page  
✅ Backend API at `/api/send-email.js` (automatically sends emails)  
✅ No `mailto:` popup — emails go directly to your inbox  
✅ Ready for free tier (100 emails/day)

---

## Step-by-Step Setup

### Step 1: Create Free Resend Account

1. Visit **https://resend.com**
2. Click "Sign up" (free forever tier available)
3. Verify your email

### Step 2: Get Your API Key

1. After login, go to **API Keys** section
2. You'll see a key like: `re_abc123xyz789abc123xyz789abc123`
3. Copy it

### Step 3: Configure Environment Variables

#### For Local Development

Open `.env.local` file (already created) and fill:

```env
RESEND_API_KEY=re_YOUR_API_KEY_HERE
CONTACT_EMAIL=creative.code.palette@gmail.com
```

Replace:
- `re_YOUR_API_KEY_HERE` with your actual Resend API key
- `your-email@gmail.com` with your actual email

#### For Vercel (Production)

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Add two variables:
   - Key: `RESEND_API_KEY` → Value: your API key
   - Key: `CONTACT_EMAIL` → Value: your email
3. Save and redeploy

---

## Testing

### Local Test

1. Run: `npm run dev`
2. Go to `http://localhost:5173/contact` (or 5174 if port is taken)
3. Fill the form
4. Click "Send Message"
5. Check your email inbox (arrives in ~5 seconds)

### What You'll Receive

Email arrives with:
- **From**: Code Palette <onboarding@resend.dev> (or your verified `FROM_EMAIL`)
- **Subject**: Custom subject from form
- **Body**: User's name, their email, and message
- **Reply-To**: User's email (you can reply directly)

---

## Verifying Email Domain (Optional)

By default, Resend will send from a Resend-owned address (for example `onboarding@resend.dev`) until you verify your own sending domain.

To send from your own domain (e.g., `hello@yoursite.com`):

1. In Resend dashboard, go to **Domains**
2. Add your domain
3. Follow DNS setup instructions
4. Wait for verification

---

## Troubleshooting

### "Failed to send email"
- Check `.env.local` has both `RESEND_API_KEY` and `CONTACT_EMAIL`
- Restart dev server: `npm run dev`

### Email arrives from a Resend address
- This is expected when your domain is not verified. To send from your own address, verify your domain in Resend (see "Verifying Email Domain" above).

### 100 emails/day limit exceeded
- Upgrade Resend plan (cheap) or ask to reset quota

### Can't receive test emails
- Check spam folder
- Verify email in Resend is correct
- Try a different email address

---

## What Happens Behind the Scenes

1. **User fills form** → fills: name, email, message
2. **Clicks "Send Message"** → data sent to `/api/send-email.js`
3. **API receives request** → validates data
4. **Resend service** → sends email to your inbox
5. **You receive email** → with user's contact info

All without opening email client!

---

## Files Modified/Created

- ✅ `/api/send-email.js` — new API function
- ✅ `/src/pages/Contact.jsx` — updated with new form
- ✅ `.env.local` — new (add your API key here!)
- ✅ `.env.example` — reference file
- ✅ `package.json` — added `resend` package
- ✅ `vercel.json` — updated for API routes

---

## Next Steps

1. **Sign up**: resend.com
2. **Get API key** from dashboard
3. **Update `.env.local`** with your key
4. **Test locally**: `npm run dev` → `/contact`
5. **Deploy**: `git push` to Vercel

Questions? Check `.env.example` or re-read the setup steps.
