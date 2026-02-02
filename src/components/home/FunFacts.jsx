import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiPlay } from 'react-icons/fi';

// Counter hook for animated numbers
const useCounter = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const stats = [
  { number: 20, suffix: "+", label: "Yoga Style", sublabel: "Workout" },
  { number: 50, suffix: "+", label: "Professionals", sublabel: "Trainer" },
  { number: 25, suffix: "+", label: "Year", sublabel: "Experience" },
  { number: 90, suffix: "%", label: "Happy", sublabel: "Customer" },
];

const FunFacts = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <FunFactsSection ref={ref}>
      {/* Decorative Monstera Leaf - Left Side */}
      <MonsteraLeaf>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 380C80 380 20 300 30 200C40 100 100 40 100 40" stroke="#a8c5a4" strokeWidth="3" fill="none"/>
          <path d="M100 40C100 40 140 80 150 140C160 200 140 280 100 340" stroke="#a8c5a4" strokeWidth="2" fill="none"/>
          <path d="M50 120C50 120 80 140 100 140" stroke="#a8c5a4" strokeWidth="2" fill="none"/>
          <path d="M40 180C40 180 70 180 100 160" stroke="#a8c5a4" strokeWidth="2" fill="none"/>
          <path d="M50 240C50 240 80 220 100 200" stroke="#a8c5a4" strokeWidth="2" fill="none"/>
          <path d="M60 300C60 300 85 270 100 250" stroke="#a8c5a4" strokeWidth="2" fill="none"/>
          <ellipse cx="100" cy="120" rx="40" ry="60" stroke="#a8c5a4" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <ellipse cx="90" cy="200" rx="35" ry="50" stroke="#a8c5a4" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <ellipse cx="85" cy="280" rx="30" ry="45" stroke="#a8c5a4" strokeWidth="1.5" fill="none" opacity="0.3"/>
        </svg>
      </MonsteraLeaf>

      {/* Background yoga silhouette */}
      <YogaSilhouette>
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="50" r="25" stroke="#e8efe9" strokeWidth="1" fill="none"/>
          <path d="M150 75V120" stroke="#e8efe9" strokeWidth="1"/>
          <path d="M150 120L100 180" stroke="#e8efe9" strokeWidth="1"/>
          <path d="M150 120L200 180" stroke="#e8efe9" strokeWidth="1"/>
          <path d="M120 100L180 100" stroke="#e8efe9" strokeWidth="1"/>
          <path d="M100 180L80 250" stroke="#e8efe9" strokeWidth="1"/>
          <path d="M200 180L220 250" stroke="#e8efe9" strokeWidth="1"/>
        </svg>
      </YogaSilhouette>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ContentGrid>
          {/* Left Column - Text */}
          <TextColumn>
            <motion.div variants={itemVariants}>
              <SectionLabel>Fun Facts</SectionLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SectionTitle>Why We Are Better</SectionTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Description>
                With years of experience in yogic practices and holistic wellness, 
                we bring authentic teachings that transform lives. Our approach combines 
                ancient wisdom with modern understanding to create lasting positive change 
                in your journey to wellness.
              </Description>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTAButton to="/contact">
                Join Now
              </CTAButton>
            </motion.div>
          </TextColumn>

          {/* Right Column - Image with organic shape */}
          <ImageColumn as={motion.div} variants={imageVariants}>
            {/* Golden dots decoration */}
            <DotsDecoration className="top">
              {[...Array(15)].map((_, i) => (
                <Dot key={i} style={{ 
                  left: `${(i % 5) * 14}px`, 
                  top: `${Math.floor(i / 5) * 14}px` 
                }} />
              ))}
            </DotsDecoration>

            {/* Organic blob shape */}
            <OrganicBlob>
              <svg viewBox="0 0 500 500" preserveAspectRatio="none">
                <path 
                  d="M400,250Q420,350,350,420Q280,490,180,450Q80,410,60,310Q40,210,100,130Q160,50,260,70Q360,90,400,170Q440,250,400,250Z" 
                  fill="#3d5a40"
                />
              </svg>
            </OrganicBlob>

            {/* Small accent blob */}
            <AccentBlob>
              <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                <circle cx="100" cy="100" r="80" fill="#8ecfb3" />
              </svg>
            </AccentBlob>

            {/* Main Video */}
            <ImageWrapper>
              <MainVideo 
                src="/yoga-gallery/another video.mp4" 
                autoPlay
                muted
                loop
                playsInline
              />
            </ImageWrapper>

            {/* Bottom dots */}
            <DotsDecoration className="bottom">
              {[...Array(12)].map((_, i) => (
                <Dot key={i} style={{ 
                  left: `${(i % 4) * 14}px`, 
                  top: `${Math.floor(i / 4) * 14}px` 
                }} />
              ))}
            </DotsDecoration>
          </ImageColumn>
        </ContentGrid>

        {/* Stats Section */}
        <StatsSection ref={statsRef}>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>
                <Counter end={stat.number} isInView={statsInView} />
                <StatSuffix>{stat.suffix}</StatSuffix>
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatSublabel>{stat.sublabel}</StatSublabel>
            </StatItem>
          ))}
        </StatsSection>
      </Container>
    </FunFactsSection>
  );
};

// Counter Component
const Counter = ({ end, isInView }) => {
  const count = useCounter(end, 2000, isInView);
  return <>{count}</>;
};

// Styled Components
const FunFactsSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const MonsteraLeaf = styled.div`
  position: absolute;
  left: -30px;
  bottom: 10%;
  width: 150px;
  height: 350px;
  opacity: 0.7;
  pointer-events: none;
  transform: rotate(-10deg);

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const YogaSilhouette = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
  width: 200px;
  height: 200px;
  opacity: 0.4;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 5rem;
    margin-bottom: 5rem;
  }
`;

const TextColumn = styled.div`
  max-width: 480px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.25rem;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;
  margin-bottom: 2.25rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: #22371b;
  color: #FAF8F5;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  letter-spacing: 0.02em;

  &:hover {
    background: #1a2b15;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(34, 55, 27, 0.35);
  }
`;

const ImageColumn = styled.div`
  position: relative;
  height: 450px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 400px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 350px;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  z-index: 3;

  &.top {
    top: 0;
    right: 10%;
    width: 70px;
    height: 45px;
  }

  &.bottom {
    bottom: 10%;
    left: 20%;
    width: 55px;
    height: 45px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #cec5ad;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(206, 197, 173, 0.4);
`;

const OrganicBlob = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  width: 90%;
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
`;

const AccentBlob = styled.div`
  position: absolute;
  top: -5%;
  right: 5%;
  width: 100px;
  height: 100px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }

  svg circle {
    fill: #cec5ad;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 70px;
    height: 70px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  width: 75%;
  height: 70%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 85%;
    height: 75%;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
  background: rgba(255, 255, 255, 0.98);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 12px 45px rgba(34, 55, 27, 0.25);
  transition: all 0.3s ease;

  svg {
    font-size: 1.75rem;
    color: #22371b;
    margin-left: 4px;
  }

  &:hover {
    background: #cec5ad;
    transform: translate(-50%, -50%) scale(1.08);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(206, 197, 173, 0.4);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const StatSuffix = styled.span`
  font-size: 1.5rem;
  color: #cec5ad;
  font-weight: 600;
  margin-left: 2px;
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #22371b;
`;

const StatSublabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
  opacity: 0.7;
`;

export default FunFacts;
