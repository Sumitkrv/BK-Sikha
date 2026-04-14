// 🎨 BK Shikha Brand Design System
// Inspired by Instagram aesthetic: calm, earthy, feminine, premium wellness

export const theme = {
  // Color Palette - Mindfully curated for wellness and trust
  colors: {
    // Primary Purple system
    primary: '#8B5CF6',
    primaryLight: '#C4B5FD',
    primaryDark: '#7C3AED',
    primaryMuted: '#6D4BCB',
    
    // Secondary / support purples
    secondary: '#C4B5FD',
    secondaryLight: '#EDE9FE',
    secondaryDark: '#A78BFA',
    
    // Accent tones
    accent: '#EDE9FE',
    accentLight: '#F8F5FF',
    accentDark: '#DDD6FE',
    accentMuted: 'rgba(196, 181, 253, 0.45)',
    
    // Backgrounds
    background: '#FFFFFF',
    backgroundAlt: '#F8F5FF',
    backgroundDark: '#F3EEFF',
    backgroundGreen: '#F8F5FF',
    
    // Typography colors
    text: '#4B5563',
    textLight: '#6B7280',
    textDark: '#2D1B4E',
    textMuted: 'rgba(75, 85, 99, 0.82)',
    
    // CTA
    cta: '#8B5CF6',
    ctaHover: '#7C3AED',
    ctaLight: '#A78BFA',
    
    // Semantic colors
    success: '#8B5CF6',
    warning: '#A78BFA',
    error: '#C084FC',
    info: '#C4B5FD',
  },
  
  // Typography - Serene, premium, highly readable
  fonts: {
    heading: "'Cormorant Garamond', serif", // Elegant, spiritual, premium
    body: "'Montserrat', sans-serif", // Clean, modern, calming
    accent: "'Cormorant Garamond', serif", // For special text
  },
  
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Spacing - Breathable, mindful
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px
    '5xl': '12rem',  // 192px
  },
  
  // Border Radius - Soft, organic, welcoming
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Shadows - Subtle, elevated, premium
  shadows: {
    sm: '0 2px 10px rgba(139, 92, 246, 0.10)',
    md: '0 10px 24px rgba(139, 92, 246, 0.14)',
    lg: '0 16px 36px rgba(139, 92, 246, 0.16)',
    xl: '0 24px 60px rgba(139, 92, 246, 0.20)',
    inner: 'inset 0 2px 4px rgba(139, 92, 246, 0.08)',
  },
  
  // Transitions - Slow, mindful, luxurious
  transitions: {
    fast: '0.15s ease-in-out',
    base: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    slower: '0.8s ease-in-out',
  },
  
  // Breakpoints - Comprehensive responsive design for all devices
  breakpoints: {
    // Mobile breakpoints
    xs: '360px',        // Extra small phones (iPhone SE, Galaxy Fold)
    sm: '480px',        // Small phones
    mobile: '768px',    // Mobile (phones) - max
    
    // Tablet breakpoints
    md: '768px',        // Tablet start
    tablet: '1024px',   // Tablet max
    
    // Desktop breakpoints
    lg: '1024px',       // Laptop/Desktop start
    desktop: '1280px',  // Desktop
    xl: '1440px',       // Large desktop
    
    // Ultra-wide breakpoints
    wide: '1536px',     // Wide screens
    xxl: '1920px',      // 2K screens
    ultra: '2560px',    // 4K screens
  },
  
  // Z-index layers
  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    tooltip: 500,
  },
  
  // Animation timing functions - Smooth, natural, organic
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    entrance: 'cubic-bezier(0, 0, 0.2, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

// Framer Motion animation variants for consistent motion design
export const motionVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  
  slideDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  
  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  
  // Stagger children animations
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

// Transition configurations
export const transitions = {
  smooth: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  
  slow: {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1],
  },
  
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  
  bounce: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
};

export default theme;
