# 🎨 CodePalette - Your Creative Portfolio

🚀 Check out the live project here: **[ccpalette.com](https://www.ccpalette.com)** | **[ccpalette.vercel.app](https://ccpalette.vercel.app)**

<img width="983" height="726" alt="Screenshot 2025-12-22 at 3 01 55 PM" src="https://github.com/user-attachments/assets/c5acc384-c48a-4162-9c77-e5b7ab150eca" />

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [📧 Contact Form Setup](#-contact-form-setup-resend-email-service)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 About

CodePalette is a modern, creative portfolio website showcasing web development projects and services. Built with React, Vite, and Tailwind CSS, it provides a fast, responsive, and visually stunning platform to display your work and connect with potential clients or collaborators.

---

## ✨ Features

- 🎯 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Beautiful, customizable interface with Tailwind CSS
- 📧 **Contact Form** - Integrated email functionality using Resend
- 🚀 **Easy Deployment** - One-click deployment to Vercel
- 📱 **React Router** - Smooth navigation between pages
- 🔧 **Developer Friendly** - ESLint configured for code quality
- 💾 **Environment Management** - Secure configuration with dotenv

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.0 - UI library
- **React Router DOM** 7.6.2 - Client-side routing
- **Vite** 6.3.5 - Build tool and dev server
- **Tailwind CSS** 3.4.3 - Utility-first CSS framework
- **PostCSS** 8.5.5 - CSS processing

### Backend
- **Express** 5.2.1 - Node.js web framework
- **Resend** 6.5.2 - Email service for contact form

### Development Tools
- **ESLint** - Code quality and style enforcement
- **Concurrently** - Run multiple npm scripts simultaneously
- **Autoprefixer** - Add vendor prefixes to CSS

---

## 📁 Project Structure

```
CodePalette/
├── api/                      # Backend API functions
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (Home, Contact, etc.)
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── server.js                # Express server configuration
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint rules
├── vercel.json              # Vercel deployment config
├── package.json             # Project dependencies
└── .env.local               # Environment variables (local)
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MariaZasypkina/CodePalette.git
cd CodePalette
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Copy the `.env.example` file and create `.env.local`:

```bash
cp .env.example .env.local
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Access the Application

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000` (if running separately)

---

## 📜 Available Scripts

```bash
# Start development server (Vite)
npm run dev

# Start backend API server (Node.js/Express)
npm start:api

# Run both frontend and backend simultaneously
npm run dev:all

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

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

### Troubleshooting

**Form not sending?**
- Verify your API key is correct
- Check that `CONTACT_EMAIL` is set
- Make sure backend server is running (`npm run dev:all`)
- Check browser console for error messages

**Emails going to spam?**
- Verify your domain in Resend dashboard
- Check spam/junk folder
- Use a branded domain instead of test domain

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Connect Your Repository**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your CodePalette repository

2. **Add Environment Variables**:
   - In Vercel Dashboard, go to your project settings
   - Click "Environment Variables"
   - Add the following:
     ```
     RESEND_API_KEY = your_api_key_here
     CONTACT_EMAIL = your_email@example.com
     ```

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your project

4. **Automatic Deployments**:
   - Every push to `main` branch triggers automatic deployment
   - Get a live URL immediately!

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy the 'dist' folder to your hosting provider
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Run `npm run lint` before committing
- Follow ESLint rules
- Use meaningful commit messages
- Keep components small and reusable

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for your own projects!

---

## 📞 Support & Feedback

- 💬 Have questions? Check the [GitHub Issues](https://github.com/MariaZasypkina/CodePalette/issues)
- 🐛 Found a bug? [Report it here](https://github.com/MariaZasypkina/CodePalette/issues/new)
- 💡 Have a feature idea? [Suggest it here](https://github.com/MariaZasypkina/CodePalette/discussions)

---

**Made with ❤️ by [MariaZasypkina](https://github.com/MariaZasypkina)**
