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
              <line x1="0" y1="0" x2="40" y2="0" stroke="#cec5ad" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <circle cx="4" cy="4" r="2" fill="#cec5ad"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="top-right">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#cec5ad" strokeWidth="2"/>
              <line x1="40" y1="0" x2="40" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <circle cx="36" cy="4" r="2" fill="#cec5ad"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="bottom-left">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="40" x2="40" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <circle cx="4" cy="36" r="2" fill="#cec5ad"/>
            </svg>
          </CornerOrnament>
          
          <CornerOrnament className="bottom-right">
            <svg viewBox="0 0 40 40" fill="none">
              <line x1="0" y1="40" x2="40" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <line x1="40" y1="0" x2="40" y2="40" stroke="#cec5ad" strokeWidth="2"/>
              <circle cx="36" cy="36" r="2" fill="#cec5ad"/>
            </svg>
          </CornerOrnament>

          {/* Decorative accent lines */}
          <AccentLine className="vertical-left" />
          <AccentLine className="vertical-right" />
          <AccentLine className="horizontal-top" />
          
          {/* Floating badge */}
          <FloatingBadge>
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="#cec5ad" opacity="0.95"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#22371b" strokeWidth="1" opacity="0.3"/>
              <text x="40" y="35" textAnchor="middle" fill="#22371b" fontSize="12" fontWeight="600">12+</text>
              <text x="40" y="48" textAnchor="middle" fill="#22371b" fontSize="8">Years</text>
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
  background: linear-gradient(180deg, #f8f9f6 0%, #f3f5f2 50%, #eef1ec 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: radial-gradient(ellipse at 20% 50%, rgba(206, 197, 173, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 400px;
  opacity: 0.6;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
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

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 0 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 500px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 420px;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  &.primary {
    transform: translate(-50%, -50%) rotate(-2deg);
    width: 420px;
    height: 520px;
    background: linear-gradient(135deg, #1a2817 0%, #22371b 50%, #2d4a24 100%);
    border-radius: 16px;
    box-shadow: 
      0 30px 80px rgba(34, 55, 27, 0.4),
      0 15px 40px rgba(34, 55, 27, 0.3);
  }

  &.secondary {
    transform: translate(-48%, -52%) rotate(2deg);
    width: 410px;
    height: 510px;
    background: linear-gradient(135deg, rgba(206, 197, 173, 0.15) 0%, rgba(206, 197, 173, 0.08) 100%);
    border-radius: 16px;
    border: 1px solid rgba(206, 197, 173, 0.3);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &.primary {
      width: 380px;
      height: 480px;
    }
    &.secondary {
      width: 370px;
      height: 470px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    &.primary {
      width: 320px;
      height: 400px;
    }
    &.secondary {
      width: 310px;
      height: 390px;
    }
  }
`;

const CornerOrnament = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 4;
  opacity: 0.9;

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

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 30px;
    height: 30px;
    
    svg {
      line {
        strokeWidth: 1.5;
      }
    }
  }
`;

const AccentLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, transparent 0%, #cec5ad 50%, transparent 100%);
  z-index: 1;
  opacity: 0.4;

  &.vertical-left {
    left: 5%;
    top: 15%;
    width: 2px;
    height: 120px;
    background: linear-gradient(180deg, transparent 0%, #cec5ad 50%, transparent 100%);
  }

  &.vertical-right {
    right: 5%;
    bottom: 15%;
    width: 2px;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, #cec5ad 50%, transparent 100%);
  }

  &.horizontal-top {
    top: 10%;
    right: 10%;
    width: 80px;
    height: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
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
  filter: drop-shadow(0 4px 12px rgba(206, 197, 173, 0.5));

  @keyframes floatBadge {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
    top: -5px;
    right: -5px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    
    text {
      font-size: 10px;
      
      &:nth-child(3) {
        y: 32;
      }
      
      &:nth-child(4) {
        y: 44;
        font-size: 7px;
      }
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  z-index: 3;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 360px;
    height: 460px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 300px;
    height: 380px;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(135deg, #cec5ad 0%, #d4cdb3 50%, #cec5ad 100%);
  border-radius: 24px;
  z-index: -1;
  box-shadow: 
    0 8px 32px rgba(206, 197, 173, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 20px;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
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

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 35px 80px rgba(0, 0, 0, 0.3),
      0 18px 40px rgba(0, 0, 0, 0.22),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-width: 4px;
    border-radius: 16px;
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
    rgba(34, 55, 27, 0.03) 0%,
    transparent 20%,
    transparent 80%,
    rgba(34, 55, 27, 0.08) 100%
  );
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.4s ease;

  ${ImageInnerFrame}:hover & {
    opacity: 0.5;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${ImageInnerFrame}:hover & {
    transform: scale(1.08);
  }
`;

const TextColumn = styled.div`
  max-width: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #22371b;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 4.5vw, 3.25rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 400;
  color: #21371a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #21371a;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background: #22371b;
    color: #FAF8F5;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 55, 27, 0.25);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export default AboutPreview;
