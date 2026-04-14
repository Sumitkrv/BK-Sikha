import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef(null);
  const hasCalledComplete = useRef(false);

  const handleComplete = () => {
    if (hasCalledComplete.current) return;
    hasCalledComplete.current = true;
    setIsExiting(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 800);
  };

  const handleVideoEnd = () => {
    // Wait for the full video to finish before completing
    handleComplete();
  };

  // Handle video load error - fallback after timeout
  const handleVideoError = () => {
    console.warn('Video failed to load, completing loading screen');
    handleComplete();
  };

  // Detect mobile device and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Fallback timeout - 3s on mobile, 15s desktop
  useEffect(() => {
    const timeout = isMobile ? 3000 : 15000;
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, timeout);

    return () => clearTimeout(fallbackTimer);
  }, [isMobile]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <LoadingContainer
          as={motion.div}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {isMobile ? (
            // Simple mobile loading
            <MobileLoadingWrapper>
              <LogoText>BK Shikha</LogoText>
              <SpinnerContainer>
                <Spinner />
              </SpinnerContainer>
              <LoadingText>Loading your wellness journey...</LoadingText>
            </MobileLoadingWrapper>
          ) : (
            // Desktop: Full video with decorations
            <>
              {/* Decorative Yoga Elements */}
          <YogaLeaf className="leaf1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(142, 207, 179, 0.3)" strokeWidth="2" fill="rgba(142, 207, 179, 0.1)" />
              <path d="M60 30V270" stroke="rgba(142, 207, 179, 0.3)" strokeWidth="2" />
              <path d="M60 60L30 100" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
              <path d="M60 120L35 160" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
              <path d="M60 180L40 220" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
              <path d="M60 60L90 100" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
              <path d="M60 120L85 160" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
              <path d="M60 180L80 220" stroke="rgba(142, 207, 179, 0.25)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <YogaLeaf className="leaf2" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(206, 197, 173, 0.3)" strokeWidth="2" fill="rgba(206, 197, 173, 0.1)" />
              <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="2" />
              <path d="M60 80L25 120" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
              <path d="M60 140L30 180" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
              <path d="M60 200L35 240" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
              <path d="M60 80L95 120" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
              <path d="M60 140L90 180" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
              <path d="M60 200L85 240" stroke="rgba(206, 197, 173, 0.25)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <YogaLeaf className="leaf3" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(90, 138, 98, 0.25)" strokeWidth="2" fill="rgba(90, 138, 98, 0.08)" />
              <path d="M60 40V260" stroke="rgba(90, 138, 98, 0.25)" strokeWidth="2" />
              <path d="M60 70L32 110" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
              <path d="M60 130L38 170" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
              <path d="M60 190L42 230" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
              <path d="M60 70L88 110" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
              <path d="M60 130L82 170" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
              <path d="M60 190L78 230" stroke="rgba(90, 138, 98, 0.2)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <LotusFlower className="lotus1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="140" rx="35" ry="50" fill="rgba(142, 207, 179, 0.15)" />
              <ellipse cx="70" cy="130" rx="30" ry="45" fill="rgba(142, 207, 179, 0.12)" transform="rotate(-30 70 130)" />
              <ellipse cx="130" cy="130" rx="30" ry="45" fill="rgba(142, 207, 179, 0.12)" transform="rotate(30 130 130)" />
              <ellipse cx="50" cy="120" rx="25" ry="40" fill="rgba(142, 207, 179, 0.1)" transform="rotate(-50 50 120)" />
              <ellipse cx="150" cy="120" rx="25" ry="40" fill="rgba(142, 207, 179, 0.1)" transform="rotate(50 150 120)" />
              <circle cx="100" cy="130" r="20" fill="rgba(206, 197, 173, 0.2)" />
              <circle cx="100" cy="130" r="10" fill="rgba(206, 197, 173, 0.3)" />
            </svg>
          </LotusFlower>

          <LotusFlower className="lotus2" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="140" rx="30" ry="45" fill="rgba(206, 197, 173, 0.12)" />
              <ellipse cx="75" cy="132" rx="25" ry="40" fill="rgba(206, 197, 173, 0.1)" transform="rotate(-25 75 132)" />
              <ellipse cx="125" cy="132" rx="25" ry="40" fill="rgba(206, 197, 173, 0.1)" transform="rotate(25 125 132)" />
              <ellipse cx="55" cy="125" rx="20" ry="35" fill="rgba(206, 197, 173, 0.08)" transform="rotate(-45 55 125)" />
              <ellipse cx="145" cy="125" rx="20" ry="35" fill="rgba(206, 197, 173, 0.08)" transform="rotate(45 145 125)" />
              <circle cx="100" cy="135" r="15" fill="rgba(142, 207, 179, 0.2)" />
            </svg>
          </LotusFlower>

          <OmSymbol className="om1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M50 20C40 20 35 25 35 35C35 45 45 50 50 50C55 50 65 45 65 35C65 25 60 20 50 20Z" 
                stroke="rgba(142, 207, 179, 0.25)" strokeWidth="2" fill="rgba(142, 207, 179, 0.08)" />
              <path d="M30 50C30 50 25 60 35 65C45 70 55 65 55 55" 
                stroke="rgba(142, 207, 179, 0.25)" strokeWidth="2" fill="none" />
              <path d="M70 50C70 50 75 60 65 65C55 70 45 65 45 55" 
                stroke="rgba(142, 207, 179, 0.25)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="75" r="3" fill="rgba(142, 207, 179, 0.3)" />
            </svg>
          </OmSymbol>

          <MandalaPattern className="mandala1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 150 150" fill="none">
              <circle cx="75" cy="75" r="50" stroke="rgba(90, 138, 98, 0.15)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="40" stroke="rgba(90, 138, 98, 0.12)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="30" stroke="rgba(90, 138, 98, 0.1)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="20" stroke="rgba(90, 138, 98, 0.08)" strokeWidth="1" fill="none" />
              {[...Array(8)].map((_, i) => (
                <line 
                  key={i}
                  x1="75" y1="75" 
                  x2={75 + 50 * Math.cos((i * Math.PI) / 4)} 
                  y2={75 + 50 * Math.sin((i * Math.PI) / 4)} 
                  stroke="rgba(90, 138, 98, 0.1)" 
                  strokeWidth="1" 
                />
              ))}
            </svg>
          </MandalaPattern>

          <FloatingDots className="dots1" $reducedMotion={prefersReducedMotion}>
            {[...Array(12)].map((_, i) => (
              <Dot key={i} style={{ 
                left: `${(i % 4) * 25}px`, 
                top: `${Math.floor(i / 4) * 25}px`,
                animationDelay: `${i * 0.3}s`
              }} />
            ))}
          </FloatingDots>

          <FloatingDots className="dots2" $reducedMotion={prefersReducedMotion}>
            {[...Array(9)].map((_, i) => (
              <Dot key={i} style={{ 
                left: `${(i % 3) * 20}px`, 
                top: `${Math.floor(i / 3) * 20}px`,
                animationDelay: `${i * 0.4}s`
              }} />
            ))}
          </FloatingDots>

          <FullScreenVideo
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            onCanPlay={() => {
              if (videoRef.current) {
                videoRef.current.play().catch(() => {});
              }
            }}
          >
            <source src="/logo-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </FullScreenVideo>
            </>
          )}
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: 10000;
  overflow: hidden;
  
  @media (max-width: 768px) {
    background: linear-gradient(135deg, #22371b 0%, #3a5a34 100%);
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
  }
`;

const MobileLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
`;

const LogoText = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 600;
  color: #A8C5A4;
  letter-spacing: 0.1em;
  text-align: center;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(168, 197, 164, 0.2);
  border-top: 4px solid #A8C5A4;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

const FullScreenVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
  }
  
  @media (max-width: 390px) {
    width: 100vw;
    height: 100vh;
  }
  
  @media (max-width: 375px) {
    width: 100vw;
    height: 100vh;
  }
  
  @media (max-width: 360px) {
    width: 100vw;
    height: 100vh;
  }
`;

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const floatSlow = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-15px) rotate(-3deg) scale(1.05); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`;

// Decorative Elements
const YogaLeaf = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$reducedMotion ? 'auto' : 'transform'};

  &.leaf1 {
    width: 100px;
    height: 250px;
    top: 10%;
    left: 5%;
    animation: ${props => props.$reducedMotion ? 'none' : float} 8s ease-in-out infinite;
  }

  &.leaf2 {
    width: 120px;
    height: 300px;
    top: 50%;
    right: 3%;
    animation: ${props => props.$reducedMotion ? 'none' : floatSlow} 10s ease-in-out infinite;
    animation-delay: 1s;
  }

  &.leaf3 {
    width: 90px;
    height: 220px;
    bottom: 15%;
    left: 8%;
    animation: ${props => props.$reducedMotion ? 'none' : float} 9s ease-in-out infinite;
    animation-delay: 2s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.leaf1 {
      width: 140px;
      height: 350px;
    }
    &.leaf2 {
      width: 160px;
      height: 400px;
    }
    &.leaf3 {
      width: 120px;
      height: 300px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.leaf1 {
      width: 120px;
      height: 300px;
    }
    &.leaf2 {
      width: 140px;
      height: 350px;
    }
    &.leaf3 {
      width: 110px;
      height: 270px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    opacity: 0.5;
    &.leaf1 {
      width: 80px;
      height: 200px;
    }
    &.leaf2 {
      width: 90px;
      height: 220px;
    }
    &.leaf3 {
      width: 70px;
      height: 170px;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    opacity: 0.4;
    &.leaf1 {
      width: 70px;
      height: 170px;
    }
    &.leaf2 {
      width: 80px;
      height: 200px;
    }
    &.leaf3 {
      width: 60px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`;

const LotusFlower = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${props => props.$reducedMotion ? 'none' : pulse} 6s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$reducedMotion ? 'auto' : 'transform, opacity'};

  &.lotus1 {
    width: 120px;
    height: 120px;
    top: 20%;
    right: 8%;
    animation-delay: 0.5s;
  }

  &.lotus2 {
    width: 100px;
    height: 100px;
    bottom: 25%;
    right: 12%;
    animation-delay: 1.5s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.lotus1 {
      width: 160px;
      height: 160px;
    }
    &.lotus2 {
      width: 140px;
      height: 140px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.lotus1 {
      width: 140px;
      height: 140px;
    }
    &.lotus2 {
      width: 120px;
      height: 120px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    &.lotus1 {
      width: 100px;
      height: 100px;
    }
    &.lotus2 {
      width: 85px;
      height: 85px;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    opacity: 0.8;
    &.lotus1 {
      width: 90px;
      height: 90px;
    }
    &.lotus2 {
      width: 75px;
      height: 75px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`;

const OmSymbol = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${props => props.$reducedMotion ? 'none' : float} 7s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$reducedMotion ? 'auto' : 'transform'};

  &.om1 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 15%;
    animation-delay: 1s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 120px;
    height: 120px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 100px;
    height: 100px;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  /* Tablets */
  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`;

const MandalaPattern = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${props => props.$reducedMotion ? 'none' : rotate} 40s linear infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$reducedMotion ? 'auto' : 'transform'};

  &.mandala1 {
    width: 150px;
    height: 150px;
    top: 35%;
    left: 10%;
    opacity: 0.4;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 200px;
    height: 200px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 180px;
    height: 180px;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    width: 130px;
    height: 130px;
  }

  /* Tablets */
  @media (max-width: 900px) {
    width: 110px;
    height: 110px;
    opacity: 0.35;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`;

const FloatingDots = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.dots1 {
    top: 15%;
    right: 20%;
    width: 100px;
    height: 80px;
  }

  &.dots2 {
    bottom: 30%;
    left: 20%;
    width: 60px;
    height: 60px;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.dots1 {
      width: 140px;
      height: 110px;
    }
    &.dots2 {
      width: 80px;
      height: 80px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.dots1 {
      width: 120px;
      height: 95px;
    }
    &.dots2 {
      width: 70px;
      height: 70px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    &.dots1 {
      width: 85px;
      height: 70px;
    }
    &.dots2 {
      width: 50px;
      height: 50px;
    }
  }

  /* Tablets and below */
  @media (max-width: 900px) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(142, 207, 179, 0.4);
  border-radius: 50%;
  animation: ${twinkle} 3s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: opacity;

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 8px;
    height: 8px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 7px;
    height: 7px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    will-change: auto;
    opacity: 0.4;
  }
`;

export default LoadingScreen;
