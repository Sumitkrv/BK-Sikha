# 🧘‍♀️ BK Shikha Website - Setup & Customization Guide

## 📋 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 **BRAND DESIGN SYSTEM**

### Color Palette (from Instagram aesthetic)

```javascript
Primary: #8B7355   // Warm Earth - grounding, trust, natural
Secondary: #A8C5A4 // Sage Green - calm, healing, growth
Accent: #D4A574    // Golden Sand - premium, wisdom, transformation
Background: #FAF8F5 // Warm Cream - peaceful, spacious, elegant
Text: #4A4A4A      // Charcoal - sophistication, clarity
CTA: #7A9B76       // Deep Moss - action, vitality, nature
```

**Design Philosophy:**
- Calm & earthy tones inspired by nature
- Feminine yet strong aesthetic
- Premium wellness brand feel
- NOT flashy - elegant and serene

### Typography

```javascript
Headings: 'Cormorant Garamond' - Serene, premium, spiritual
Body: 'Montserrat' - Clean, readable, modern, calming
```

**Google Fonts loaded in index.html**

---

## 📁 **PROJECT STRUCTURE**

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        // Fixed navigation with smooth scroll
│   │   ├── Footer.jsx        // Brand info, links, social, color palette
│   │   └── Layout.jsx        // Main layout wrapper with page transitions
│   ├── home/
│   │   ├── Hero.jsx          // Hero section with CTA
│   │   ├── ServicesSnapshot.jsx  // Services overview
│   │   ├── TestimonialsPreview.jsx // Featured testimonials
│   │   └── CommunityInvite.jsx    // Instagram community section
│   └── shared/
│       ├── Button.jsx        // Reusable button component
│       ├── SectionTitle.jsx  // Consistent section headings
│       └── AnimatedSection.jsx // Scroll-based animation wrapper
├── pages/
│   ├── Home.jsx          // Landing page
│   ├── About.jsx         // BK Shikha's story & philosophy
│   ├── Services.jsx      // Detailed service offerings with pricing
│   ├── Blog.jsx          // Wellness insights & articles
│   ├── Testimonials.jsx  // Client transformation stories
│   └── Contact.jsx       // Contact form & booking info
├── styles/
│   ├── theme.js          // Design system (colors, spacing, animations)
│   └── global.css        // Global styles & utilities
├── App.jsx               // Main app with routing
└── main.jsx              // Entry point
```

---

## ✨ **ANIMATION SYSTEM**

All animations use **Framer Motion** for elegant, mindful movement.

### Animation Principles:
- **Slow & mindful** - not techy or aggressive
- **Elegant entrance** - components fade and slide in
- **Scroll-based reveals** - content appears as you scroll
- **Subtle hover effects** - gentle scale and color changes
- **Smooth page transitions** - seamless navigation

### Key Animation Features:
- Page transitions on route changes
- Scroll-triggered section reveals
- Staggered item animations
- Floating/parallax decorative elements
- Smooth hover states on cards & buttons

---

## 🖼️ **IMAGE REPLACEMENT GUIDE**

### Current Status:
All images are **placeholder emojis/gradients**. Replace with real Instagram content.

### Image Requirements by Section:

#### **Hero Section (Home Page)**
- **Type:** Serene yoga pose
- **Style:** Natural lighting, calm expression, earth tones
- **Background:** Nature or minimal studio with plants
- **Aspect Ratio:** 3:4 (portrait)
- **File:** Replace in `src/components/home/Hero.jsx`

#### **About Page Personal Photo**
- **Type:** Warm, welcoming portrait
- **Style:** Yoga attire, natural setting
- **Mood:** Approachable, trustworthy
- **Aspect Ratio:** 3:4 (portrait)
- **File:** Replace in `src/pages/About.jsx`

#### **Community Grid (Home Page)**
- **Type:** 4 Instagram photos
- **Subjects:** Yoga poses, wellness moments, community events
- **Style:** Diverse, engaging, lifestyle
- **Aspect Ratio:** 1:1 (square)
- **File:** Replace in `src/components/home/CommunityInvite.jsx`

#### **Blog Article Images**
- **Type:** Lifestyle wellness imagery
- **Style:** Morning routines, yoga practice, mindfulness
- **Aspect Ratio:** 16:10
- **File:** Replace in `src/pages/Blog.jsx`

### How to Replace Images:

**Option 1: Direct Image URLs**
```javascript
<img src="https://instagram.com/path/to/image.jpg" alt="Description" />
```

**Option 2: Local Images**
```javascript
// 1. Create src/assets/images folder
// 2. Add images to folder
// 3. Import in component:
import heroImage from '../assets/images/hero.jpg';
<img src={heroImage} alt="Description" />
```

---

## 📝 **CONTENT CUSTOMIZATION**

### Contact Information

**Update in:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

```javascript
Email: contact@bkshikha.com
Phone: +91 XXX XXX XXXX
Instagram: @cyd_bkshikha
```

### Service Pricing

**Update in:** `src/pages/Services.jsx`

Each service has 3 pricing tiers. Modify:
```javascript
pricing: [
  { tier: 'Starter', sessions: '4 sessions', price: '$199', period: '/month' },
  { tier: 'Growth', sessions: '8 sessions', price: '$349', period: '/month', popular: true },
  { tier: 'Transformation', sessions: '12 sessions', price: '$489', period: '/month' },
]
```

### Testimonials

**Update in:** `src/pages/Testimonials.jsx`

Add real client testimonials:
```javascript
{
  name: 'Client Name',
  role: 'Their Profession',
  location: 'City',
  image: '🧘', // Replace with photo
  text: 'Full testimonial text...',
  transformation: 'Brief transformation summary',
  rating: 5,
}
```

### Blog Articles

**Update in:** `src/pages/Blog.jsx`

Add real blog content or link to external blog posts.

---

## 🎯 **KEY FEATURES**

### ✅ Implemented Features:

1. **Premium Design System**
   - Custom color palette based on Instagram aesthetic
   - Premium typography (Cormorant Garamond + Montserrat)
   - Consistent spacing & layout

2. **Smooth Animations**
   - Framer Motion integration
   - Scroll-based reveals
   - Page transitions
   - Hover effects

3. **Responsive Design**
   - Mobile-first approach
   - Tablet breakpoints
   - Desktop optimization

4. **Complete Pages**
   - Home with hero, services, testimonials, community
   - About with story, philosophy, credentials
   - Services with 6 detailed offerings + pricing
   - Blog with 5 wellness articles
   - Testimonials with 9+ client stories
   - Contact with form & booking info

5. **Navigation**
   - Fixed header with scroll effect
   - Mobile hamburger menu
   - Smooth scroll to sections

6. **SEO & Accessibility**
   - Semantic HTML
   - Alt text placeholders
   - Focus states
   - ARIA labels

---

## 🚀 **DEPLOYMENT**

### Deploy to Netlify (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Custom Domain

After deployment, add custom domain in hosting platform settings.

---

## 🎨 **CUSTOMIZATION TIPS**

### Change Colors

Edit `src/styles/theme.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ...
}
```

### Add New Page

1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="new-page" element={<NewPage />} />
```
3. Add navigation link in `src/components/layout/Header.jsx`

### Modify Animations

Edit animation variants in `src/styles/theme.js`:
```javascript
export const motionVariants = {
  fadeIn: { /* ... */ },
  slideUp: { /* ... */ },
  // Add your own
}
```

---

## 📱 **RESPONSIVE BREAKPOINTS**

```javascript
mobile: 768px
tablet: 1024px
desktop: 1280px
wide: 1536px
```

---

## 🔧 **TROUBLESHOOTING**

### Issue: Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`

### Issue: Fonts not loading
- Check internet connection (Google Fonts)
- Verify `index.html` has font links

### Issue: Routing not working
- Ensure `react-router-dom` is installed
- Check `BrowserRouter` is wrapping `Routes`

### Issue: Styles not applying
- Verify `global.css` is imported in `App.jsx`
- Check styled-components is installed

---

## 📞 **NEXT STEPS**

1. ✅ **Replace placeholder images** with Instagram content
2. ✅ **Update contact information** (email, phone, WhatsApp)
3. ✅ **Customize testimonials** with real client reviews
4. ✅ **Adjust pricing** to match actual service costs
5. ✅ **Add blog content** or link to existing blog
6. ✅ **Test all forms** and ensure they work
7. ✅ **Add analytics** (Google Analytics, Facebook Pixel)
8. ✅ **Set up email** for contact form submissions
9. ✅ **Test on mobile devices**
10. ✅ **Deploy to hosting platform**

---

## 💖 **BRAND ESSENCE**

This website embodies:
- **Calm & Serene** - Not busy or overwhelming
- **Premium & Elegant** - High-end wellness brand
- **Emotionally Rich** - Deep, meaningful copy
- **Trustworthy** - Professional yet approachable
- **Transformational** - Focus on client outcomes

Every design decision supports healing, growth, and authentic connection.

---

## 📚 **RESOURCES**

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)
- [Styled Components Docs](https://styled-components.com/)
- [Instagram: @cyd_bkshikha](https://www.instagram.com/cyd_bkshikha)

---

**Built with 💚 for wellness seekers everywhere**
