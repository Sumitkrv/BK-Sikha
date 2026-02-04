import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const AnimatedSection = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  ...props
}) => {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detect mobile device for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust viewport margin based on device size
  const viewportMargin = isMobile ? '-50px' : '-100px';
  const isInView = useInView(ref, { once: true, margin: viewportMargin });

  // Reduce animation distance on mobile devices for better performance
  const animationDistance = isMobile ? 20 : 40;

  const variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : direction === 'up' ? animationDistance : direction === 'down' ? -animationDistance : 0,
      x: prefersReducedMotion ? 0 : direction === 'left' ? animationDistance : direction === 'right' ? -animationDistance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: prefersReducedMotion 
        ? { duration: 0 }
        : {
            duration: isMobile ? Math.min(duration, 0.4) : duration,
            delay: isMobile ? Math.min(delay, 0.1) : delay,
            ease: [0.4, 0, 0.2, 1],
          },
    },
  };

  return (
    <AnimationWrapper
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      $prefersReducedMotion={prefersReducedMotion}
      {...props}
    >
      {children}
    </AnimationWrapper>
  );
};

// Styled component with GPU acceleration and performance optimizations
const AnimationWrapper = styled(motion.div)`
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$prefersReducedMotion ? 'auto' : 'transform, opacity'};
  isolation: isolate;
  
  /* Reset will-change after animation completes to free resources */
  &[data-projection-id] {
    @media (prefers-reduced-motion: reduce) {
      will-change: auto;
    }
  }

  /* Performance optimization for mobile devices */
  @media (max-width: 900px) {
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
  }

  /* Extra performance for small phones */
  @media (max-width: 480px) {
    will-change: ${props => props.$prefersReducedMotion ? 'auto' : 'opacity'};
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default AnimatedSection;
