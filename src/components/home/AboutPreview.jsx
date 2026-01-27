import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import heroImage from '../../assets/hero.png';

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
        {/* Left Column - Image with organic shapes */}
        <ImageColumn as={motion.div} variants={imageVariants}>
          {/* Golden dots decoration - top left */}
          <DotsDecoration className="top-left">
            {[...Array(12)].map((_, i) => (
              <Dot key={i} style={{ 
                left: `${(i % 4) * 12}px`, 
                top: `${Math.floor(i / 4) * 12}px` 
              }} />
            ))}
          </DotsDecoration>

          {/* Golden dots decoration - bottom right */}
          <DotsDecoration className="bottom-right">
            {[...Array(12)].map((_, i) => (
              <Dot key={i} style={{ 
                left: `${(i % 4) * 12}px`, 
                top: `${Math.floor(i / 4) * 12}px` 
              }} />
            ))}
          </DotsDecoration>

          {/* Large organic blob behind image */}
          <LargeBlob>
            <svg viewBox="0 0 500 600" preserveAspectRatio="none">
              <path 
                d="M380,100Q420,180,400,280Q380,380,300,450Q220,520,140,460Q60,400,80,300Q100,200,160,120Q220,40,300,60Q380,80,380,100Z" 
                fill="#3d5a40"
              />
            </svg>
          </LargeBlob>

          {/* Small mint blob */}
          <SmallBlob>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none">
              <circle cx="100" cy="100" r="80" fill="#8ecfb3" />
            </svg>
          </SmallBlob>

          {/* Accent blob at bottom */}
          <AccentBlob>
            <svg viewBox="0 0 150 150" preserveAspectRatio="none">
              <circle cx="75" cy="75" r="60" fill="#5a8a62" opacity="0.6" />
            </svg>
          </AccentBlob>

          {/* Main Image */}
          <ImageWrapper>
            <AboutImage 
              src={heroImage} 
              alt="About BK Shikha - Yoga & Wellness"
            />
          </ImageWrapper>
        </ImageColumn>

        {/* Right Column - Text Content */}
        <TextColumn>
          <motion.div variants={textVariants}>
            <SectionLabel>About Us</SectionLabel>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <SectionTitle>How We Started</SectionTitle>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <Description>
              My journey into yoga began as a personal quest for peace amid life's chaos. 
              What started as a simple practice on my mat transformed into a profound calling 
              to share the ancient wisdom of yogic living with others seeking balance, 
              clarity, and inner harmony.
            </Description>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <CTAButton to="/about">
              Look more
            </CTAButton>
          </motion.div>
        </TextColumn>
      </Container>
    </AboutSection>
  );
};

// Styled Components - Anayoga Style
const AboutSection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
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
  height: 550px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 450px;
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 380px;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  width: 50px;
  height: 40px;
  z-index: 3;

  &.top-left {
    top: 10%;
    left: 5%;
  }

  &.bottom-right {
    bottom: 15%;
    right: 15%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #c9a227;
  border-radius: 50%;
`;

const LargeBlob = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  width: 85%;
  height: 90%;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    left: 5%;
    width: 90%;
  }
`;

const SmallBlob = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  width: 120px;
  height: 120px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 80px;
    height: 80px;
    right: 0;
  }
`;

const AccentBlob = styled.div`
  position: absolute;
  bottom: 5%;
  left: 15%;
  width: 100px;
  height: 100px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 70px;
    height: 70px;
    left: 10%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  z-index: 2;
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 75%;
    height: 75%;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  color: #5a8a62;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4vw, 3rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #c9a227;
  border: 1.5px solid #c9a227;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c9a227;
    color: #ffffff;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export default AboutPreview;
