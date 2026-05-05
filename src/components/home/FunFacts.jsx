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
  { number: 5000, suffix: "+", label: "Lives", sublabel: "Transformed" },
  { number: 12, suffix: "+", label: "Year", sublabel: "Experience" },
  { number: 98, suffix: "%", label: "Happy", sublabel: "Customer" },
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
              <SectionTitle>Why Choose Our Wellness Approach</SectionTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Description>
                With years of experience in yogic psychology, wellness, meditation, and NLP techniques, we bring authentic healing methods that transform lives. Our approach combines ancient wisdom with modern scientific understanding to create lasting positive change in your wellness journey.
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
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: 10rem 0;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6.5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 6rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.75rem 0;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 360px) {
    padding: 2.25rem 0;
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
  transform: rotate(-10deg) translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 130px;
    height: 300px;
  }

  @media (max-width: 1024px) {
    width: 110px;
    height: 260px;
    left: -20px;
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
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1440px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 1200px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 1024px) {
    width: 140px;
    height: 140px;
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
  transform: translateZ(0);
  backface-visibility: hidden;

  /* 4K screens */
  @media (min-width: 2560px) {
    max-width: 1600px;
    padding: 0 3rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    padding: 0 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 0 1.125rem;
  }

  @media (max-width: 360px) {
    padding: 0 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* 4K screens */
  @media (min-width: 2560px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    gap: 5rem;
    margin-bottom: 5rem;
  }

  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1440px) {
    gap: 4rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 640px) {
    gap: 2.5rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 2.25rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 390px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 375px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

const TextColumn = styled.div`
  max-width: 480px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    max-width: 600px;
  }

  @media (min-width: 1920px) {
    max-width: 540px;
  }

  @media (max-width: 1200px) {
    max-width: 450px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    max-width: 90%;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C25964;
  margin-bottom: 0.75rem;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #3A1F23;
  line-height: 1.15;
  margin-bottom: 1.25rem;

  @media (min-width: 2560px) {
    font-size: clamp(3.5rem, 5vw, 4rem);
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1920px) {
    font-size: clamp(3rem, 4.75vw, 3.5rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    font-size: clamp(2rem, 4vw, 2.25rem);
    margin-bottom: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 4vw, 2rem);
    margin-bottom: 0.875rem;
  }

  @media (max-width: 375px) {
    font-size: clamp(1.625rem, 4vw, 1.875rem);
    margin-bottom: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 4vw, 1.75rem);
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.06rem;
  font-weight: 500;
  line-height: 1.92;
  letter-spacing: 0.01em;
  color: #374151;
  opacity: 0.92;
  max-width: 38rem;
  margin-bottom: 2.25rem;

  @media (min-width: 2560px) {
    font-size: 1.375rem;
    line-height: 1.9;
    margin-bottom: 3rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    line-height: 1.875;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.65;
  }

  @media (max-width: 375px) {
    font-size: 0.8125rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(194, 89, 100, 0.28);
  letter-spacing: 0.02em;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1.25rem 3.5rem;
    font-size: 1.125rem;
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 3rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 2.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.8125rem 2rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.8125rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #A3404B;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(163, 64, 75, 0.35);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #A3404B;
      transform: scale(0.98) translateZ(0);
    }
  }
`;

const ImageColumn = styled.div`
  position: relative;
  height: 450px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    height: 600px;
  }

  @media (min-width: 1920px) {
    height: 520px;
  }

  @media (max-width: 1440px) {
    height: 420px;
  }

  @media (max-width: 1200px) {
    height: 400px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 400px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 640px) {
    height: 360px;
    max-width: 450px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 350px;
    max-width: 400px;
  }

  @media (max-width: 390px) {
    height: 320px;
  }

  @media (max-width: 375px) {
    height: 300px;
  }

  @media (max-width: 360px) {
    height: 280px;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  z-index: 3;
  transform: translateZ(0);

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

  @media (min-width: 2560px) {
    &.top {
      width: 90px;
      height: 60px;
    }

    &.bottom {
      width: 70px;
      height: 55px;
    }
  }

  @media (max-width: 1024px) {
    &.top {
      width: 60px;
      height: 40px;
    }

    &.bottom {
      width: 48px;
      height: 40px;
    }
  }

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #F5C5CA;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(245, 197, 202, 0.45);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 1024px) {
    width: 7px;
    height: 7px;
  }
`;

const OrganicBlob = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  width: 90%;
  height: 90%;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 15px 40px rgba(194, 89, 100, 0.22));
  }

  svg path {
    fill: #C25964;
  }

  @media (min-width: 2560px) {
    svg {
      filter: drop-shadow(0 20px 50px rgba(194, 89, 100, 0.26));
    }
  }

  @media (max-width: 640px) {
    width: 92%;
    height: 92%;

    svg {
      filter: drop-shadow(0 12px 30px rgba(194, 89, 100, 0.22));
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 94%;
    height: 94%;

    svg {
      filter: drop-shadow(0 10px 25px rgba(194, 89, 100, 0.2));
    }
  }

  @media (max-width: 360px) {
    svg {
      filter: drop-shadow(0 8px 20px rgba(194, 89, 100, 0.18));
    }
  }
`;

const AccentBlob = styled.div`
  position: absolute;
  top: -5%;
  right: 5%;
  width: 100px;
  height: 100px;
  z-index: 2;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  svg circle {
    fill: #FFF0F2;
  }

  @media (min-width: 2560px) {
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1920px) {
    width: 115px;
    height: 115px;
  }

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 640px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 360px) {
    width: 55px;
    height: 55px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%) translateZ(0);
  width: 75%;
  height: 70%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    border-radius: 28px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
  }

  @media (min-width: 1920px) {
    border-radius: 24px;
    box-shadow: 0 28px 65px rgba(0, 0, 0, 0.17);
  }

  @media (max-width: 1024px) {
    width: 78%;
    height: 72%;
  }

  @media (max-width: 640px) {
    width: 82%;
    height: 74%;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 85%;
    height: 75%;
    border-radius: 14px;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 390px) {
    width: 88%;
    height: 78%;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    width: 90%;
    height: 80%;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`;

const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 75px;
  height: 75px;
  background: rgba(255, 255, 255, 0.98);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 12px 45px rgba(194, 89, 100, 0.24);
  transition: all 0.3s ease;
  backface-visibility: hidden;
  will-change: transform;

  svg {
    font-size: 1.75rem;
    color: #C25964;
    margin-left: 4px;
  }

  @media (min-width: 2560px) {
    width: 95px;
    height: 95px;

    svg {
      font-size: 2.25rem;
      margin-left: 5px;
    }
  }

  @media (min-width: 1920px) {
    width: 85px;
    height: 85px;

    svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;

    svg {
      font-size: 1.625rem;
    }
  }

  @media (max-width: 640px) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 390px) {
    width: 58px;
    height: 58px;

    svg {
      font-size: 1.375rem;
      margin-left: 3px;
    }
  }

  @media (max-width: 375px) {
    width: 55px;
    height: 55px;

    svg {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 360px) {
    width: 52px;
    height: 52px;

    svg {
      font-size: 1.125rem;
    }
  }

  &:hover {
    background: #FFF0F2;
    transform: translate(-50%, -50%) scale(1.08) translateZ(0);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #FFF0F2;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(233, 213, 255, 0.7);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    gap: 3rem;
    padding-top: 4.5rem;
  }

  @media (min-width: 1920px) {
    gap: 2.5rem;
    padding-top: 3.75rem;
  }

  @media (max-width: 1440px) {
    gap: 2rem;
    padding-top: 3rem;
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    padding-top: 2.75rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  }

  @media (max-width: 640px) {
    gap: 1.75rem 2.5rem;
    padding-top: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding-top: 2.25rem;
  }

  @media (max-width: 390px) {
    gap: 1.5rem 2rem;
    padding-top: 2rem;
  }

  @media (max-width: 375px) {
    gap: 1.25rem 1.75rem;
  }

  @media (max-width: 360px) {
    gap: 1.25rem 1.5rem;
    padding-top: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: left;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  font-weight: 500;
  color: #3A1F23;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;

  @media (min-width: 2560px) {
    font-size: clamp(4rem, 6vw, 5rem);
    margin-bottom: 0.75rem;
  }

  @media (min-width: 1920px) {
    font-size: clamp(3.5rem, 5.5vw, 4.5rem);
    margin-bottom: 0.625rem;
  }

  @media (max-width: 640px) {
    font-size: clamp(2.25rem, 5vw, 2.75rem);
    margin-bottom: 0.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.875rem, 5vw, 2.25rem);
  }

  @media (max-width: 375px) {
    font-size: clamp(1.75rem, 5vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.625rem, 5vw, 1.875rem);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const StatSuffix = styled.span`
  font-size: 1.5rem;
  color: #C25964;
  font-weight: 600;
  margin-left: 2px;

  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.75rem;
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
  }
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #3A1F23;

  @media (min-width: 2560px) {
    font-size: 1.375rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

const StatSublabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #4B5563;
  opacity: 0.7;

  @media (min-width: 2560px) {
    font-size: 1.1875rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }
`;

export default FunFacts;
