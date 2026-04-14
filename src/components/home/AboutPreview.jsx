import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const aboutImage = '/6 images/our story.jpeg';

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <AboutSection ref={ref}>
      {/* Decorative leaf on right */}
      <LeafDecoration>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C100 20 180 100 180 200C180 300 100 380 100 380" stroke="#d4e5d6" strokeWidth="1.5" fill="none"/>
          <path d="M100 60C100 60 150 120 150 200C150 280 100 340 100 340" stroke="#d4e5d6" strokeWidth="1" fill="none"/>
          <path d="M100 100C100 100 130 140 130 200C130 260 100 300 100 300" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M60 120C60 120 100 160 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M140 120C140 120 100 160 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M50 180C50 180 100 200 100 200" stroke="#d4e5d6" strokeWidth="0.6" fill="none"/>
          <path d="M150 180C150 180 100 200 100 200" stroke="#d4e5d6" strokeWidth="0.6" fill="none"/>
          <path d="M60 260C60 260 100 240 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M140 260C140 260 100 240 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
        </svg>
      </LeafDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Left Column - Image with premium professional design */}
        <ImageColumn as={motion.div} variants={imageVariants}>
          {/* Layered background shapes for depth */}
          <BackgroundShape className="primary" />
          <BackgroundShape className="secondary" />
          
          {/* Elegant corner ornaments */}
          <CornerOrnament className="top-left">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#C4B5FD" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <circle cx="4" cy="4" r="2" fill="#C4B5FD"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="top-right">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#C4B5FD" strokeWidth="2"/>
              <line x1="40" y1="0" x2="40" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <circle cx="36" cy="4" r="2" fill="#C4B5FD"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="bottom-left">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="40" x2="40" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <circle cx="4" cy="36" r="2" fill="#C4B5FD"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="bottom-right">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="40" x2="40" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <line x1="40" y1="0" x2="40" y2="40" stroke="#C4B5FD" strokeWidth="2"/>
              <circle cx="36" cy="36" r="2" fill="#C4B5FD"/>
            </svg>
          </CornerOrnament>

          {/* Decorative accent lines */}
          <AccentLine className="vertical-left" />
          <AccentLine className="vertical-right" />
          <AccentLine className="horizontal-top" />
          
          {/* Floating badge */}
          <FloatingBadge>
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="#EDE9FE" opacity="0.95"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.35"/>
              <text x="40" y="35" textAnchor="middle" fill="#2D1B4E" fontSize="12" fontWeight="600">12+</text>
              <text x="40" y="48" textAnchor="middle" fill="#2D1B4E" fontSize="8">Years</text>
            </svg>
          </FloatingBadge>

          {/* Main Image Container with premium styling */}
          <ImageContainer>
            <ImageBorder />
            <ImageInnerFrame>
              <AboutImage 
                src={aboutImage} 
                alt="About BK Shikha - Yoga & Wellness"
              />
              <ImageOverlay />
            </ImageInnerFrame>
          </ImageContainer>
        </ImageColumn>

        {/* Right Column - Text Content */}
        <TextColumn>
          <motion.div variants={textVariants}>
            <SectionLabel>Philosophy</SectionLabel>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <SectionTitle>Our Story</SectionTitle>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <SubTitle>Discover the journey behind BK Shikha's wellness mission</SubTitle>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <Description>
              BK Shikha is a dedicated Holistic Wellness Coach with over 12 years in Yoga and 
              15 years in Meditation. As a certified NLP Practitioner, Gut Health Expert, and 
              Counselor, she specializes in mind-body healing, supporting children, teenagers, 
              and adults through stress, anxiety, emotional wellness, and relationship challenges.
            </Description>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <Description>
              Her holistic approach combines ancient wisdom with modern science. True healing 
              begins with the mind — when calm and balanced, the body naturally transforms, 
              empowering long-term physical, mental, and emotional well-being.
            </Description>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <CTAButton to="/philosophy">
              Learn about our holistic approach
            </CTAButton>
          </motion.div>
        </TextColumn>
      </Container>
    </AboutSection>
  );
};

// Styled Components - Anayoga Style
const AboutSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F5FF 50%, #EDE9FE 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: radial-gradient(ellipse at 20% 50%, rgba(196, 181, 253, 0.14) 0%, transparent 50%);
    pointer-events: none;
    will-change: auto;
  }

  @media (min-width: 1920px) {
    padding: 9rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.5rem 0;
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 150px;
  height: 400px;
  opacity: 0.6;
  pointer-events: none;
  will-change: auto;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    opacity: 0.4;
    width: 120px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 8rem;
    padding: 0 5rem;
  }

  @media (max-width: 1440px) {
    gap: 5rem;
    padding: 0 3rem;
  }

  @media (max-width: 1200px) {
    gap: 4rem;
    padding: 0 2.5rem;
  }

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 0 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: 640px) {
    gap: 2.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 2rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 390px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.875rem;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    height: 650px;
  }

  @media (max-width: 1200px) {
    height: 550px;
  }

  @media (max-width: 1024px) {
    height: 520px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 500px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 820px) {
    height: 480px;
    max-width: 450px;
  }

  @media (max-width: 640px) {
    height: 450px;
    max-width: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 420px;
    max-width: 350px;
  }

  @media (max-width: 430px) {
    height: 400px;
    max-width: 320px;
  }

  @media (max-width: 390px) {
    height: 380px;
    max-width: 300px;
  }

  @media (max-width: 375px) {
    height: 360px;
    max-width: 280px;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.primary {
    transform: translate(-50%, -50%) rotate(-2deg) translateZ(0);
    width: 420px;
    height: 520px;
    background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%);
    border-radius: 16px;
    box-shadow: 
      0 30px 80px rgba(124, 58, 237, 0.32),
      0 15px 40px rgba(124, 58, 237, 0.24);
    will-change: transform;
  }

  &.secondary {
    transform: translate(-48%, -52%) rotate(2deg) translateZ(0);
    width: 410px;
    height: 510px;
    background: linear-gradient(135deg, rgba(196, 181, 253, 0.22) 0%, rgba(237, 233, 254, 0.16) 100%);
    border-radius: 16px;
    border: 1px solid rgba(233, 213, 255, 0.75);
  }

  @media (min-width: 1920px) {
    &.primary {
      width: 460px;
      height: 560px;
    }
    &.secondary {
      width: 450px;
      height: 550px;
    }
  }

  @media (max-width: 1200px) {
    &.primary {
      width: 400px;
      height: 500px;
    }
    &.secondary {
      width: 390px;
      height: 490px;
    }
  }

  @media (max-width: 1024px) {
    &.primary {
      width: 390px;
      height: 490px;
    }
    &.secondary {
      width: 380px;
      height: 480px;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &.primary {
      width: 380px;
      height: 480px;
      box-shadow: 
        0 20px 60px rgba(124, 58, 237, 0.28),
        0 10px 30px rgba(124, 58, 237, 0.2);
    }
    &.secondary {
      width: 370px;
      height: 470px;
    }
  }

  @media (max-width: 820px) {
    &.primary {
      width: 350px;
      height: 450px;
    }
    &.secondary {
      width: 340px;
      height: 440px;
    }
  }

  @media (max-width: 640px) {
    &.primary {
      width: 330px;
      height: 420px;
    }
    &.secondary {
      width: 320px;
      height: 410px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    &.primary {
      width: 300px;
      height: 380px;
      box-shadow: 
        0 15px 40px rgba(124, 58, 237, 0.24),
        0 8px 20px rgba(124, 58, 237, 0.16);
    }
    &.secondary {
      width: 290px;
      height: 370px;
    }
  }

  @media (max-width: 430px) {
    &.primary {
      width: 280px;
      height: 360px;
    }
    &.secondary {
      width: 270px;
      height: 350px;
    }
  }

  @media (max-width: 390px) {
    &.primary {
      width: 260px;
      height: 340px;
    }
    &.secondary {
      width: 250px;
      height: 330px;
    }
  }

  @media (max-width: 375px) {
    &.primary {
      width: 245px;
      height: 320px;
      box-shadow: 
        0 10px 30px rgba(124, 58, 237, 0.2),
        0 5px 15px rgba(124, 58, 237, 0.12);
    }
    &.secondary {
      width: 235px;
      height: 310px;
    }
  }
`;

const CornerOrnament = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 4;
  opacity: 0.9;
  transform: translateZ(0);

  &.top-left {
    top: 6%;
    left: 6%;
  }

  &.top-right {
    top: 6%;
    right: 6%;
  }

  &.bottom-left {
    bottom: 6%;
    left: 6%;
  }

  &.bottom-right {
    bottom: 6%;
    right: 6%;
  }

  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
    opacity: 0.85;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    
    svg line {
      stroke-width: 1.5;
    }
  }

  @media (max-width: 390px) {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    
    svg line {
      stroke-width: 1.3;
    }
    svg circle {
      r: 1.5;
    }
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

const AccentLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, transparent 0%, #C4B5FD 50%, transparent 100%);
  z-index: 1;
  opacity: 0.4;
  transform: translateZ(0);

  &.vertical-left {
    left: 5%;
    top: 15%;
    width: 2px;
    height: 120px;
    background: linear-gradient(180deg, transparent 0%, #C4B5FD 50%, transparent 100%);
  }

  &.vertical-right {
    right: 5%;
    bottom: 15%;
    width: 2px;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, #C4B5FD 50%, transparent 100%);
  }

  &.horizontal-top {
    top: 10%;
    right: 10%;
    width: 80px;
    height: 2px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 80px;
  height: 80px;
  z-index: 5;
  animation: floatBadge 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(196, 181, 253, 0.45));
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  @keyframes floatBadge {
    0%, 100% {
      transform: translateY(0) rotate(0deg) translateZ(0);
    }
    50% {
      transform: translateY(-10px) rotate(5deg) translateZ(0);
    }
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
    top: -12px;
    right: -12px;
  }

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
    top: -8px;
    right: -8px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
    top: -5px;
    right: -5px;
  }

  @media (max-width: 640px) {
    width: 65px;
    height: 65px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 58px;
    height: 58px;
    top: -3px;
    right: -3px;
  }

  @media (max-width: 390px) {
    width: 52px;
    height: 52px;
    animation: floatBadgeSimple 4s ease-in-out infinite;
    
    @keyframes floatBadgeSimple {
      0%, 100% {
        transform: translateY(0) translateZ(0);
      }
      50% {
        transform: translateY(-6px) translateZ(0);
      }
    }
  }

  @media (max-width: 375px) {
    width: 48px;
    height: 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  z-index: 3;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    width: 440px;
    height: 540px;
  }

  @media (max-width: 1200px) {
    width: 380px;
    height: 480px;
  }

  @media (max-width: 1024px) {
    width: 370px;
    height: 470px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 360px;
    height: 460px;
  }

  @media (max-width: 820px) {
    width: 340px;
    height: 440px;
  }

  @media (max-width: 640px) {
    width: 320px;
    height: 410px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 290px;
    height: 370px;
  }

  @media (max-width: 430px) {
    width: 270px;
    height: 350px;
  }

  @media (max-width: 390px) {
    width: 250px;
    height: 330px;
  }

  @media (max-width: 375px) {
    width: 235px;
    height: 310px;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%);
  border-radius: 24px;
  z-index: -1;
  box-shadow: 
    0 8px 32px rgba(139, 92, 246, 0.22),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transform: translateZ(0);

  @media (max-width: 1200px) {
    border-radius: 22px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 20px;
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 18px;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    box-shadow: 
      0 6px 24px rgba(139, 92, 246, 0.2),
      inset 0 2px 3px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 390px) {
    border-radius: 16px;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }

  @media (max-width: 375px) {
    border-radius: 14px;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
  }
`;

const ImageInnerFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 5px solid #FAF8F5;
  box-shadow: 
    0 30px 70px rgba(0, 0, 0, 0.25),
    0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 -2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.4s ease;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-4px) translateZ(0);
    box-shadow: 
      0 35px 80px rgba(0, 0, 0, 0.3),
      0 18px 40px rgba(0, 0, 0, 0.22),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1200px) {
    border-radius: 18px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 16px;
    border-width: 4px;
    box-shadow: 
      0 20px 50px rgba(0, 0, 0, 0.22),
      0 10px 25px rgba(0, 0, 0, 0.18),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    
    &:hover {
      transform: translateY(-3px) translateZ(0);
      box-shadow: 
        0 25px 60px rgba(0, 0, 0, 0.25),
        0 12px 30px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-width: 3px;
    border-radius: 14px;
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.2),
      0 8px 20px rgba(0, 0, 0, 0.15),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    
    &:hover {
      transform: translateY(-2px) translateZ(0);
    }
  }

  @media (max-width: 390px) {
    border-radius: 12px;
    border-width: 3px;
  }

  @media (max-width: 375px) {
    border-radius: 11px;
    border-width: 2px;
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.18),
      0 6px 15px rgba(0, 0, 0, 0.12);
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.2),
        0 8px 20px rgba(0, 0, 0, 0.15),
        inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(139, 92, 246, 0.06) 0%,
    transparent 20%,
    transparent 80%,
    rgba(139, 92, 246, 0.12) 100%
  );
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.4s ease;
  transform: translateZ(0);

  ${ImageInnerFrame}:hover & {
    opacity: 0.5;
  }

  @media (hover: none) and (pointer: coarse) {
    ${ImageInnerFrame}:hover & {
      opacity: 1;
    }
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${ImageInnerFrame}:hover & {
    transform: scale(1.08) translateZ(0);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    ${ImageInnerFrame}:hover & {
      transform: scale(1.05) translateZ(0);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    transition: transform 0.4s ease;
    
    ${ImageInnerFrame}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${ImageInnerFrame}:hover & {
      transform: translateZ(0);
    }
  }
`;

const TextColumn = styled.div`
  max-width: 500px;

  @media (min-width: 1920px) {
    max-width: 580px;
  }

  @media (max-width: 1200px) {
    max-width: 480px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #8B5CF6;
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 500;
  color: #2D1B4E;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;

  @media (min-width: 1920px) {
    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  @media (max-width: 390px) {
    margin-bottom: 0.875rem;
  }
`;

const SubTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;

  @media (min-width: 1920px) {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    font-size: 1.0625rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.55;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    margin-bottom: 0.875rem;
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #4B5563;
  margin-bottom: 2rem;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.85;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
    line-height: 1.75;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.65;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: transparent;
  color: #8B5CF6;
  border: 2px solid #8B5CF6;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #8B5CF6;
    color: #FFFFFF;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.28);
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 3rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0.9375rem 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 1rem 2.5rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 2.25rem;
    font-size: 0.875rem;
    white-space: normal;
    text-align: center;
    max-width: 280px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.8125rem 2rem;
    font-size: 0.8125rem;
    max-width: 260px;
    
    &:hover {
      transform: translateY(-1px) translateZ(0);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.25);
    }
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.75rem;
    max-width: 240px;
    border-width: 1.5px;
  }

  @media (max-width: 375px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.6875rem;
    max-width: 220px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }

    &:active {
      background: #8B5CF6;
      color: #FFFFFF;
      transform: scale(0.98) translateZ(0);
    }
  }
`;

export default AboutPreview;
