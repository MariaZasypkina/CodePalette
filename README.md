


<img width="1387" height="900" alt="Screenshot 2025-11-19 at 2 00 43 PM" src="https://github.com/user-attachments/assets/f9bf96fd-da01-432f-bdcd-e59af32c016a" />

<img width="1362" height="703" alt="Screenshot 2025-11-19 at 2 01 32 PM" src="https://github.com/user-attachments/assets/8d6afeb5-5814-4b83-b12b-3b9bf4e93635" />




<img width="671" height="673" alt="Screenshot 2025-11-19 at 2 00 01 PM" src="https://github.com/user-attachments/assets/6a42ee19-2aa4-4a3e-ae54-71501d68b763" />

===================================================================================================================================================================

## 📧 Contact Form Setup (Resend Email Service)

The contact form automatically sends emails to your inbox without opening a mail client.

### Quick Setup

1. **Sign up for Resend** (free):
   - Go to https://resend.com
   - Create a free account
   - Verify your email domain (or use the free test domain)

2. **Get your API Key**:
   - In Resend dashboard, go to "API Keys"
   - Copy your key (starts with `re_`)

3. **Add Environment Variables**:
   - Open `.env.local` in the project root
   - Replace `RESEND_API_KEY` with your actual API key
   - Replace `CONTACT_EMAIL` with your email address

   Example:
   ```
   RESEND_API_KEY=re_abc123xyz789
   CONTACT_EMAIL=creative.code.palette@gmail.com
   ```

4. **Test Locally**:
   - Run `npm run dev`
   - Go to `/contact` page
   - Fill and submit the form
   - Check your email inbox

### How It Works

- Frontend form: `/src/pages/Contact.jsx`
- Backend API: `/api/send-email.js` (Vercel Function)
- When user clicks "Send Message", data goes to Resend → arrives in your email
- No need to open email client!

### For Vercel Deployment

1. In Vercel Dashboard, add Environment Variables:
   - `RESEND_API_KEY` = your API key
   - `CONTACT_EMAIL` = your email

2. Deploy normally with `git push`

---
