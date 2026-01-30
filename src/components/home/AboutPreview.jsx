import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import aboutImage from '../../assets/bkim/2.jpeg';

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
              src={aboutImage} 
              alt="About BK Shikha - Yoga & Wellness"
            />
          </ImageWrapper>
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
  background: #cec5ad;
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
    filter: drop-shadow(0 15px 40px rgba(34, 55, 27, 0.2));
  }

  svg path {
    fill: #22371b;
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

  svg circle {
    fill: #cec5ad;
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

  svg circle {
    fill: #21371a;
    opacity: 0.5;
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
