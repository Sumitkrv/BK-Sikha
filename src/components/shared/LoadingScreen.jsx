import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasCalledComplete = useRef(false);

  const handleComplete = () => {
    setIsExiting(true);
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

  // Automatic completion timing
  useEffect(() => {
    const timeout = prefersReducedMotion ? 1200 : (isMobile ? 1600 : 2400);
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, timeout);

    return () => clearTimeout(fallbackTimer);
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    if (!isExiting) return;
    const exitTimer = setTimeout(() => {
      if (!hasCalledComplete.current) {
        hasCalledComplete.current = true;
        onLoadingComplete();
      }
    }, 900);

    return () => clearTimeout(exitTimer);
  }, [isExiting, onLoadingComplete]);

  return (
    <AnimatePresence>
        <LoadingContainer
          as={motion.div}
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1, filter: isExiting ? 'blur(10px)' : 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          onAnimationComplete={() => {
            if (isExiting && !hasCalledComplete.current) {
              hasCalledComplete.current = true;
              onLoadingComplete();
            }
          }}
        >
          {isMobile ? (
            // Simple mobile loading
            <MobileLoadingWrapper>
              <LogoText>BK Shikha</LogoText>
              <Tagline>Yogic Lifestyle & Wellness</Tagline>
              <Subtitle>ALIGN • HEAL • EVOLVE</Subtitle>
              <ChakraLoader $reducedMotion={prefersReducedMotion}>
                <ChakraRing $reducedMotion={prefersReducedMotion} />
                <ChakraRing className="delay" $reducedMotion={prefersReducedMotion} />
                <ChakraCore $reducedMotion={prefersReducedMotion} />
              </ChakraLoader>
              <BreathingText $reducedMotion={prefersReducedMotion}>
                <span>Inhale...</span>
                <span>Exhale...</span>
              </BreathingText>
              <LoadingText>Preparing your sacred wellness space...</LoadingText>
            </MobileLoadingWrapper>
          ) : (
            // Desktop: Branded animation with decorations
            <>
              <BackdropGlow />
              <BlurBlob className="blob1" />
              <BlurBlob className="blob2" />
              <BlurBlob className="blob3" />
              <PetalField>
                {[...Array(10)].map((_, i) => (
                  <Petal key={i} style={{
                    left: `${(i * 11) % 100}%`,
                    top: `${(i * 17) % 100}%`,
                    animationDelay: `${i * 1.2}s`,
                  }} />
                ))}
              </PetalField>
              <ParticleField>
                {[...Array(18)].map((_, i) => (
                  <Particle key={i} style={{
                    left: `${(i * 13) % 100}%`,
                    top: `${(i * 19) % 100}%`,
                    animationDelay: `${i * 0.35}s`,
                  }} />
                ))}
              </ParticleField>
              {/* Decorative Yoga Elements */}
          <YogaLeaf className="leaf1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(194, 89, 100, 0.3)" strokeWidth="2" fill="rgba(194, 89, 100, 0.12)" />
              <path d="M60 30V270" stroke="rgba(194, 89, 100, 0.3)" strokeWidth="2" />
              <path d="M60 60L30 100" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
              <path d="M60 120L35 160" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
              <path d="M60 180L40 220" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
              <path d="M60 60L90 100" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
              <path d="M60 120L85 160" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
              <path d="M60 180L80 220" stroke="rgba(194, 89, 100, 0.25)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <YogaLeaf className="leaf2" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(245, 197, 202, 0.3)" strokeWidth="2" fill="rgba(245, 197, 202, 0.1)" />
              <path d="M60 30V270" stroke="rgba(245, 197, 202, 0.3)" strokeWidth="2" />
              <path d="M60 80L25 120" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
              <path d="M60 140L30 180" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
              <path d="M60 200L35 240" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
              <path d="M60 80L95 120" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
              <path d="M60 140L90 180" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
              <path d="M60 200L85 240" stroke="rgba(245, 197, 202, 0.25)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <YogaLeaf className="leaf3" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 120 300" fill="none">
              <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" 
                stroke="rgba(163, 64, 75, 0.25)" strokeWidth="2" fill="rgba(163, 64, 75, 0.08)" />
              <path d="M60 40V260" stroke="rgba(163, 64, 75, 0.25)" strokeWidth="2" />
              <path d="M60 70L32 110" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
              <path d="M60 130L38 170" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
              <path d="M60 190L42 230" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
              <path d="M60 70L88 110" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
              <path d="M60 130L82 170" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
              <path d="M60 190L78 230" stroke="rgba(163, 64, 75, 0.2)" strokeWidth="1.5" />
            </svg>
          </YogaLeaf>

          <LotusFlower className="lotus1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="140" rx="35" ry="50" fill="rgba(194, 89, 100, 0.16)" />
              <ellipse cx="70" cy="130" rx="30" ry="45" fill="rgba(194, 89, 100, 0.12)" transform="rotate(-30 70 130)" />
              <ellipse cx="130" cy="130" rx="30" ry="45" fill="rgba(194, 89, 100, 0.12)" transform="rotate(30 130 130)" />
              <ellipse cx="50" cy="120" rx="25" ry="40" fill="rgba(194, 89, 100, 0.1)" transform="rotate(-50 50 120)" />
              <ellipse cx="150" cy="120" rx="25" ry="40" fill="rgba(194, 89, 100, 0.1)" transform="rotate(50 150 120)" />
              <circle cx="100" cy="130" r="20" fill="rgba(245, 197, 202, 0.22)" />
              <circle cx="100" cy="130" r="10" fill="rgba(245, 197, 202, 0.32)" />
            </svg>
          </LotusFlower>

          <LotusFlower className="lotus2" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="140" rx="30" ry="45" fill="rgba(245, 197, 202, 0.12)" />
              <ellipse cx="75" cy="132" rx="25" ry="40" fill="rgba(245, 197, 202, 0.1)" transform="rotate(-25 75 132)" />
              <ellipse cx="125" cy="132" rx="25" ry="40" fill="rgba(245, 197, 202, 0.1)" transform="rotate(25 125 132)" />
              <ellipse cx="55" cy="125" rx="20" ry="35" fill="rgba(245, 197, 202, 0.08)" transform="rotate(-45 55 125)" />
              <ellipse cx="145" cy="125" rx="20" ry="35" fill="rgba(245, 197, 202, 0.08)" transform="rotate(45 145 125)" />
              <circle cx="100" cy="135" r="15" fill="rgba(194, 89, 100, 0.2)" />
            </svg>
          </LotusFlower>

          <OmSymbol className="om1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M50 20C40 20 35 25 35 35C35 45 45 50 50 50C55 50 65 45 65 35C65 25 60 20 50 20Z" 
                stroke="rgba(194, 89, 100, 0.25)" strokeWidth="2" fill="rgba(194, 89, 100, 0.08)" />
              <path d="M30 50C30 50 25 60 35 65C45 70 55 65 55 55" 
                stroke="rgba(194, 89, 100, 0.25)" strokeWidth="2" fill="none" />
              <path d="M70 50C70 50 75 60 65 65C55 70 45 65 45 55" 
                stroke="rgba(194, 89, 100, 0.25)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="75" r="3" fill="rgba(194, 89, 100, 0.3)" />
            </svg>
          </OmSymbol>

          <MandalaPattern className="mandala1" $reducedMotion={prefersReducedMotion}>
            <svg viewBox="0 0 150 150" fill="none">
              <circle cx="75" cy="75" r="50" stroke="rgba(194, 89, 100, 0.18)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="40" stroke="rgba(194, 89, 100, 0.14)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="30" stroke="rgba(194, 89, 100, 0.12)" strokeWidth="1" fill="none" />
              <circle cx="75" cy="75" r="20" stroke="rgba(194, 89, 100, 0.1)" strokeWidth="1" fill="none" />
              {[...Array(8)].map((_, i) => (
                <line 
                  key={i}
                  x1="75" y1="75" 
                  x2={75 + 50 * Math.cos((i * Math.PI) / 4)} 
                  y2={75 + 50 * Math.sin((i * Math.PI) / 4)} 
                  stroke="rgba(194, 89, 100, 0.1)" 
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

          <CenterStage>
            <BrandMark $reducedMotion={prefersReducedMotion}>
              <PulseRing $reducedMotion={prefersReducedMotion} />
              <PulseRing className="delay" $reducedMotion={prefersReducedMotion} />
              <SacredGeometry $reducedMotion={prefersReducedMotion}>
                <svg viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="72" stroke="rgba(255, 240, 242, 0.45)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="58" stroke="rgba(212, 175, 55, 0.45)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="42" stroke="rgba(245, 197, 202, 0.55)" strokeWidth="1" />
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="28"
                      x2="100"
                      y2="172"
                      stroke="rgba(255, 240, 242, 0.2)"
                      strokeWidth="1"
                      transform={`rotate(${i * 30} 100 100)`}
                    />
                  ))}
                </svg>
              </SacredGeometry>
              <CoreGlow $reducedMotion={prefersReducedMotion} />
              <LotusIcon $reducedMotion={prefersReducedMotion}>
                <svg viewBox="0 0 200 200" fill="none">
                  <path d="M100 32C86 52 84 84 100 112C116 84 114 52 100 32Z" fill="rgba(255, 240, 242, 0.8)" />
                  <path d="M52 74C62 98 84 120 100 124C84 96 66 78 52 74Z" fill="rgba(212, 175, 55, 0.5)" />
                  <path d="M148 74C134 78 116 96 100 124C116 120 138 98 148 74Z" fill="rgba(212, 175, 55, 0.5)" />
                  <path d="M70 108C84 136 96 154 100 160C104 154 116 136 130 108C116 116 104 122 100 122C96 122 84 116 70 108Z" fill="rgba(255, 240, 242, 0.75)" />
                </svg>
              </LotusIcon>
              <OrbitRing $reducedMotion={prefersReducedMotion}>
                <OrbitDot />
              </OrbitRing>
              <OrbitRing className="slow" $reducedMotion={prefersReducedMotion}>
                <OrbitDot className="alt" />
              </OrbitRing>
            </BrandMark>
            <LogoText>BK Shikha</LogoText>
            <Tagline>Yogic Lifestyle & Wellness</Tagline>
            <Subtitle>ALIGN • HEAL • EVOLVE</Subtitle>
            <ChakraLoader $reducedMotion={prefersReducedMotion}>
              <ChakraRing $reducedMotion={prefersReducedMotion} />
              <ChakraRing className="delay" $reducedMotion={prefersReducedMotion} />
              <ChakraCore $reducedMotion={prefersReducedMotion} />
            </ChakraLoader>
            <BreathingText $reducedMotion={prefersReducedMotion}>
              <span>Inhale...</span>
              <span>Exhale...</span>
            </BreathingText>
            <Quote>“The body benefits from movement, the mind benefits from stillness.”</Quote>
            <LoadingText>Preparing your sacred wellness space...</LoadingText>
          </CenterStage>
            </>
          )}
        </LoadingContainer>
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
  background: radial-gradient(circle at 50% 40%, rgba(255, 247, 248, 0.4) 0%, rgba(194, 89, 100, 0.28) 40%, rgba(122, 37, 48, 0.82) 70%),
    linear-gradient(135deg, rgba(194, 89, 100, 0.96) 0%, rgba(163, 64, 75, 0.94) 50%, rgba(194, 89, 100, 0.96) 100%);
  backdrop-filter: blur(8px);
  z-index: 10000;
  overflow: hidden;
  
  @media (max-width: 768px) {
    background: radial-gradient(circle at 50% 40%, rgba(255, 247, 248, 0.4) 0%, rgba(194, 89, 100, 0.28) 40%, rgba(122, 37, 48, 0.82) 70%),
      linear-gradient(135deg, rgba(194, 89, 100, 0.96) 0%, rgba(163, 64, 75, 0.94) 50%, rgba(194, 89, 100, 0.96) 100%);
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
  font-size: 3.4rem;
  font-weight: 600;
  color: #F4EEFF;
  text-shadow: 0 10px 30px rgba(12, 6, 30, 0.45);
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

const Tagline = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 240, 242, 0.85);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
  }
`;

const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(224, 197, 144, 0.88);
  text-shadow: 0 8px 18px rgba(76, 44, 16, 0.35);
  margin: 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    letter-spacing: 0.25em;
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
  border: 4px solid rgba(245, 197, 202, 0.25);
  border-top: 4px solid #C25964;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 240, 242, 0.75);
  text-shadow: 0 8px 18px rgba(12, 6, 30, 0.4);
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;
  margin-top: 1.2rem;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

const Quote = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  color: rgba(255, 240, 242, 0.85);
  font-style: italic;
  margin: 0;
  max-width: 560px;
  text-align: center;
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

const drift = keyframes`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { transform: translateY(-18px) scale(1.05); opacity: 0.85; }
`;

const floatPetal = keyframes`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.35; }
  50% { transform: translate3d(10px, -18px, 0) rotate(6deg); opacity: 0.5; }
  100% { transform: translate3d(0, -36px, 0) rotate(12deg); opacity: 0.25; }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.08); opacity: 1; }
`;

const chakraSpin = keyframes`
  0% { transform: rotate(0deg); opacity: 0.6; }
  100% { transform: rotate(360deg); opacity: 1; }
`;

const ripple = keyframes`
  0% { transform: scale(0.85); opacity: 0.6; }
  100% { transform: scale(1.25); opacity: 0; }
`;

const CenterStage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.9rem;
  text-align: center;
  padding: 2rem;
`;

const BreathingText = styled.div`
  display: grid;
  gap: 0.4rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 240, 242, 0.8);
  text-align: center;

  span {
    display: block;
    animation: ${props => props.$reducedMotion ? 'none' : breathe} 4.2s ease-in-out infinite;
  }

  span:last-child {
    animation-delay: 2.1s;
  }
`;

const BackdropGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 45%, rgba(255, 240, 242, 0.22) 0%, rgba(194, 89, 100, 0.08) 45%, rgba(0, 0, 0, 0) 70%);
  filter: blur(0px);
  opacity: 0.9;
`;

const BlurBlob = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 197, 202, 0.6), rgba(194, 89, 100, 0));
  filter: blur(40px);
  opacity: 0.65;
  animation: ${drift} 9s ease-in-out infinite;

  &.blob1 {
    top: 10%;
    left: 12%;
    animation-delay: 0s;
  }

  &.blob2 {
    bottom: 8%;
    right: 10%;
    width: 280px;
    height: 280px;
    animation-delay: 1.5s;
  }

  &.blob3 {
    top: 55%;
    left: 60%;
    width: 220px;
    height: 220px;
    animation-delay: 3s;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ParticleField = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const Particle = styled.span`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 240, 242, 0.55);
  box-shadow: 0 0 14px rgba(245, 197, 202, 0.6);
  animation: ${twinkle} 4s ease-in-out infinite;
`;

const PetalField = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const Petal = styled.span`
  position: absolute;
  width: 14px;
  height: 22px;
  border-radius: 60% 60% 60% 60% / 80% 80% 40% 40%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 248, 235, 0.6), rgba(212, 175, 55, 0.2));
  filter: blur(0.2px);
  animation: ${floatPetal} 14s ease-in-out infinite;
`;

const BrandMark = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 251, 242, 0.25) 0%, rgba(194, 89, 100, 0.28) 45%, rgba(0, 0, 0, 0) 70%);
  filter: drop-shadow(0 0 55px rgba(194, 89, 100, 0.4));
  animation: ${props => props.$reducedMotion ? 'none' : pulse} 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

const CoreGlow = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FFF0F2 40%, #D4848C 70%, #A3404B 100%);
  box-shadow: 0 0 28px rgba(255, 244, 228, 0.7), 0 0 70px rgba(163, 64, 75, 0.6);
  animation: ${props => props.$reducedMotion ? 'none' : breathe} 2.6s ease-in-out infinite;

  @media (max-width: 1024px) {
    width: 86px;
    height: 86px;
  }
`;

const PulseRing = styled.div`
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 248, 235, 0.65);
  box-shadow: 0 0 18px rgba(224, 197, 144, 0.2);
  animation: ${props => props.$reducedMotion ? 'none' : ripple} 4.2s ease-out infinite;

  &.delay {
    animation-delay: 1.2s;
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  border: 1px dashed rgba(224, 197, 144, 0.6);
  animation: ${props => props.$reducedMotion ? 'none' : rotate} 8s linear infinite;

  &.slow {
    inset: 30px;
    animation-duration: 12s;
  }
`;

const OrbitDot = styled.div`
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FFF4E4;
  box-shadow: 0 0 16px rgba(224, 197, 144, 0.7);

  &.alt {
    background: #C25964;
    box-shadow: 0 0 14px rgba(194, 89, 100, 0.75);
  }
`;

const SacredGeometry = styled.div`
  position: absolute;
  inset: 18px;
  animation: ${props => props.$reducedMotion ? 'none' : rotate} 20s linear infinite;
  opacity: 0.9;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const LotusIcon = styled.div`
  position: absolute;
  inset: 40px;
  display: grid;
  place-items: center;
  filter: drop-shadow(0 0 22px rgba(255, 244, 228, 0.65));
  animation: ${props => props.$reducedMotion ? 'none' : breathe} 5s ease-in-out infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ChakraLoader = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  display: grid;
  place-items: center;
  margin-top: 0.8rem;
  animation: ${props => props.$reducedMotion ? 'none' : breathe} 5.5s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 92px;
    height: 92px;
  }
`;

const ChakraRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 240, 242, 0.6);
  box-shadow: 0 0 30px rgba(224, 197, 144, 0.35), 0 0 28px rgba(245, 197, 202, 0.55);
  animation: ${props => props.$reducedMotion ? 'none' : chakraSpin} 8s linear infinite;

  &.delay {
    inset: 10px;
    border-color: rgba(224, 197, 144, 0.75);
    animation-duration: 10s;
    animation-direction: reverse;
  }
`;

const ChakraCore = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #FFF7E8;
  box-shadow: 0 0 18px rgba(224, 197, 144, 0.75);
  animation: ${props => props.$reducedMotion ? 'none' : breathe} 2.4s ease-in-out infinite;
`;

// Decorative Elements
const YogaLeaf = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0.82;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${props => props.$reducedMotion ? 'auto' : 'transform'};

  &.leaf1 {
    width: 100px;
    height: 250px;
    top: 12%;
    left: 6%;
    animation: ${props => props.$reducedMotion ? 'none' : float} 10s ease-in-out infinite;
  }

  &.leaf2 {
    width: 120px;
    height: 300px;
    top: 12%;
    right: 6%;
    animation: ${props => props.$reducedMotion ? 'none' : floatSlow} 10s ease-in-out infinite;
    animation-delay: 1s;
  }

  &.leaf3 {
    width: 90px;
    height: 220px;
    bottom: 12%;
    right: 8%;
    animation: ${props => props.$reducedMotion ? 'none' : float} 11s ease-in-out infinite;
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
  background: rgba(255, 240, 242, 0.45);
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
