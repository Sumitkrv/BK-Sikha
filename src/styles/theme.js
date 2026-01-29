// 🎨 BK Shikha Brand Design System
// Inspired by Instagram aesthetic: calm, earthy, feminine, premium wellness

export const theme = {
  // Color Palette - Mindfully curated for wellness and trust
  colors: {
    // Primary: Deep Forest Green - Grounding, natural, trustworthy
    primary: '#22371b',
    primaryLight: '#3a5a34',
    primaryDark: '#1a2b15',
    primaryMuted: '#21371a',
    
    // Secondary: Sage Green - Calm, healing, growth, balance
    secondary: '#A8C5A4',
    secondaryLight: '#C5DCC2',
    secondaryDark: '#8AA887',
    
    // Accent: Warm Beige - Premium, wisdom, transformation
    accent: '#cec5ad',
    accentLight: '#ddd6c3',
    accentDark: '#b8af97',
    accentMuted: 'rgba(206, 197, 173, 0.6)',
    
    // Background: Warm Cream - Peaceful, spacious, elegant
    background: '#FAF8F5',
    backgroundAlt: '#FFFFFF',
    backgroundDark: '#F5F2ED',
    backgroundGreen: '#f0f5f0',
    
    // Neutral: Deep Forest tones - Sophistication, clarity, grounding
    text: '#21371a',
    textLight: '#5a6b55',
    textDark: '#22371b',
    textMuted: 'rgba(33, 55, 26, 0.7)',
    
    // CTA: Deep Forest - Action, vitality, nature connection
    cta: '#22371b',
    ctaHover: '#1a2b15',
    ctaLight: '#3a5a34',
    
    // Semantic colors
    success: '#88B584',
    warning: '#D4A574',
    error: '#C07A6F',
    info: '#A8C5A4',
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
    sm: '0 1px 3px rgba(139, 115, 85, 0.08)',
    md: '0 4px 12px rgba(139, 115, 85, 0.1)',
    lg: '0 10px 30px rgba(139, 115, 85, 0.12)',
    xl: '0 20px 50px rgba(139, 115, 85, 0.15)',
    inner: 'inset 0 2px 4px rgba(139, 115, 85, 0.06)',
  },
  
  // Transitions - Slow, mindful, luxurious
  transitions: {
    fast: '0.15s ease-in-out',
    base: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    slower: '0.8s ease-in-out',
  },
  
  // Breakpoints - Responsive design
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1536px',
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
