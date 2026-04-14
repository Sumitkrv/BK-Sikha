import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiInstagram, FiHeart, FiArrowRight } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const instagramPhotos = [
  {
    id: 1,
    image: "/6 images/ig 1.heic.jpeg",
    alt: "Best Morning Routine Recipe"
  },
  {
    id: 2,
    image: "/6 images/ig 2.jpg.jpeg",
    alt: "Create your Destiny - BK Shikha"
  },
  {
    id: 3,
    image: "/6 images/ig 6.jpg.jpeg",
    alt: "Where do you feel tension"
  },
  {
    id: 4,
    image: "/6 images/ig 4.jpg.jpeg",
    alt: "Myth vs Fact - Healthy Food"
  },
  {
    id: 5,
    image: "/6 images/ig 5.jpg.jpeg",
    alt: "Create Your Destiny"
  },
  {
    id: 6,
    image: "/6 images/ig 3.jpg.jpeg",
    alt: "How to rewire your Mind"
  }
];

const CommunityInvite = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <CommunitySection ref={ref}>
      <DecorativeLeaf className="left">
        <svg viewBox="0 0 150 300" fill="none">
          <path d="M75 0C75 0 15 75 15 150C15 225 75 300 75 300C75 300 135 225 135 150C135 75 75 0 75 0Z" fill="#F3EEFF" />
          <path d="M75 30V270" stroke="#C4B5FD" strokeWidth="1.5" />
          <path d="M75 80L40 120" stroke="#C4B5FD" strokeWidth="1" />
          <path d="M75 140L45 180" stroke="#C4B5FD" strokeWidth="1" />
          <path d="M75 200L50 240" stroke="#C4B5FD" strokeWidth="1" />
          <path d="M75 80L110 120" stroke="#C4B5FD" strokeWidth="1" />
          <path d="M75 140L105 180" stroke="#C4B5FD" strokeWidth="1" />
          <path d="M75 200L100 240" stroke="#C4B5FD" strokeWidth="1" />
        </svg>
      </DecorativeLeaf>

      <DotsDecoration className="top-left">
        {[...Array(12)].map((_, i) => (
          <Dot key={i} style={{ 
            left: `${(i % 4) * 14}px`, 
            top: `${Math.floor(i / 4) * 14}px` 
          }} />
        ))}
      </DotsDecoration>

      <DotsDecoration className="bottom-right">
        {[...Array(15)].map((_, i) => (
          <Dot key={i} style={{ 
            left: `${(i % 5) * 14}px`, 
            top: `${Math.floor(i / 5) * 14}px` 
          }} />
        ))}
      </DotsDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Header>
          <motion.div variants={itemVariants}>
            <SectionLabel>Community</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>Join Our Wellness Family</SectionTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>
              Connect with like-minded souls on the path to inner peace and holistic wellbeing
            </SectionSubtitle>
          </motion.div>
        </Header>

        <InstagramSection as={motion.div} variants={itemVariants}>
          <InstagramContent>
            <InstagramTextSide>
              <InstagramBigText>INSTAGRAM</InstagramBigText>
              <InstagramHandle 
                href="https://www.instagram.com/cyd_bkshikha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
                <span>@cyd_bkshikha</span>
              </InstagramHandle>
              <InstagramCTA>Follow for daily wellness inspiration</InstagramCTA>
            </InstagramTextSide>

            <InstagramImagesSide>
              <InstagramGrid>
                {instagramPhotos.map((photo, index) => (
                  <GridItem
                    key={photo.id}
                    as={motion.a}
                    href="https://www.instagram.com/cyd_bkshikha"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ '--delay': `${index * 0.1}s` }}
                    className={`item-${index + 1}`}
                  >
                    <GridImage src={photo.image} alt={photo.alt} loading="lazy" />
                    <SacredGeometry>
                      <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                        <path d="M50,20 L65,35 L65,65 L50,80 L35,65 L35,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                      </svg>
                    </SacredGeometry>
                    <ImageOverlay>
                      <OverlayIcon>
                        <FiInstagram />
                      </OverlayIcon>
                      <OverlayStats>
                        <StatItem><FiHeart /> 234</StatItem>
                      </OverlayStats>
                      <ZenRipple className="ripple" />
                    </ImageOverlay>
                  </GridItem>
                ))}
              </InstagramGrid>
            </InstagramImagesSide>
          </InstagramContent>
        </InstagramSection>

        <FeaturesGrid as={motion.div} variants={itemVariants}>
          <FeatureCard>
            <FeatureIconWrapper className="green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </FeatureIconWrapper>
            <FeatureTitle>Daily Inspiration</FeatureTitle>
            <FeatureDesc>Wellness tips, yoga motivation & emotional healing guidance every day</FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureIconWrapper className="golden">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </FeatureIconWrapper>
            <FeatureTitle>Supportive Circle</FeatureTitle>
            <FeatureDesc>Connect with like-minded individuals on similar wellness journeys</FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureIconWrapper className="mint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
              </svg>
            </FeatureIconWrapper>
            <FeatureTitle>Exclusive Events</FeatureTitle>
            <FeatureDesc>Access workshops, group sessions, and special wellness challenges</FeatureDesc>
          </FeatureCard>
        </FeaturesGrid>

        <CTASection as={motion.div} variants={itemVariants}>
          <CTACard>
            <CTAContent>
              <CTATitle>Ready to Start Your Journey?</CTATitle>
              <CTADescription>
                Join thousands who have transformed their lives through yoga, 
                mindfulness, and holistic wellness practices.
              </CTADescription>
              <CTAButtons>
                <InstagramButton 
                  href="https://www.instagram.com/cyd_bkshikha" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram />
                  Follow on Instagram
                </InstagramButton>
                <JourneyButton to="/contact">
                  Book a Session
                  <FiArrowRight />
                </JourneyButton>
              </CTAButtons>
            </CTAContent>
            <CTADecor>
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#A78BFA" strokeWidth="1" strokeDasharray="4 4" opacity="0.35"/>
                <circle cx="100" cy="100" r="60" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
                <circle cx="100" cy="100" r="40" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
              </svg>
            </CTADecor>
          </CTACard>
        </CTASection>
      </Container>
    </CommunitySection>
  );
};

// Keyframes
const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const rotateGeometry = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const chakraGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.32), 0 0 40px rgba(139, 92, 246, 0.22); }
  25% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(167, 139, 250, 0.3); }
  50% { box-shadow: 0 0 30px rgba(196, 181, 253, 0.4), 0 0 60px rgba(139, 92, 246, 0.3); }
  75% { box-shadow: 0 0 25px rgba(167, 139, 250, 0.4), 0 0 50px rgba(196, 181, 253, 0.3); }
`;

// Styled Components
const CommunitySection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F5FF 50%, #FFFFFF 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }

  @media (max-width: 820px) {
    padding: 4rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.25rem 0;
  }

  @media (max-width: 375px) {
    padding: 2rem 0;
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 120px;
  height: 250px;
  opacity: 0.5;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  &.left {
    left: -20px;
    top: 20%;
    transform: rotate(-15deg) translateZ(0);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 100px;
    height: 210px;
    opacity: 0.4;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  z-index: 1;
  transform: translateZ(0);

  &.top-left {
    top: 8%;
    left: 8%;
    width: 55px;
    height: 45px;
  }

  &.bottom-right {
    bottom: 10%;
    right: 8%;
    width: 70px;
    height: 45px;
  }

  @media (max-width: 1024px) {
    &.top-left {
      width: 48px;
      height: 40px;
    }

    &.bottom-right {
      width: 60px;
      height: 40px;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #C4B5FD;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(196, 181, 253, 0.45);
  transform: translateZ(0);

  @media (max-width: 1024px) {
    width: 7px;
    height: 7px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1200px) {
    padding: 0 1.75rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1920px) {
    margin-bottom: 4.5rem;
  }

  @media (max-width: 1440px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 2.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #A78BFA;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    letter-spacing: 0.06em;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #2D1B4E;
  line-height: 1.15;
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(2.75rem, 5vw, 3.5rem);
  }

  @media (max-width: 640px) {
    line-height: 1.2;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
    line-height: 1.25;
  }
`;

const SectionSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.75;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.125rem;
    max-width: 600px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }
`;

const InstagramSection = styled.div`
  margin-bottom: 4rem;

  @media (min-width: 1920px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
  }
`;

const InstagramContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 500px;

  @media (min-width: 1920px) {
    gap: 5rem;
    min-height: 550px;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    min-height: 450px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2.5rem;
    min-height: auto;
  }

  @media (max-width: 640px) {
    gap: 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

const InstagramTextSide = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    flex: 0 0 350px;
  }

  @media (max-width: 1200px) {
    flex: 0 0 280px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex: none;
    align-items: center;
    text-align: center;
  }
`;

const InstagramBigText = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: #2D1B4E;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(3.5rem, 8vw, 5rem);
  }

  @media (max-width: 640px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
    line-height: 0.95;
  }
`;

const InstagramHandle = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  color: #2D1B4E;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.875rem 1.75rem;
  background: rgba(196, 181, 253, 0.24);
  border-radius: 50px;
  border: 2px solid transparent;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1.375rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
    border-color: transparent;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.34);

    svg {
      transform: scale(1.1);
    }
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    padding: 1rem 2rem;
    
    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.0625rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9375rem;
    
    svg {
      font-size: 1.25rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateY(0) translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }
`;

const InstagramCTA = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: ${theme.colors.text};
  opacity: 0.7;
  margin-top: 0.875rem;
  max-width: 200px;
  line-height: 1.65;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    max-width: 240px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
  }
`;

const InstagramImagesSide = styled.div`
  flex: 1;
  position: relative;
  transform: translateZ(0);
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 650px;

  @media (min-width: 1920px) {
    max-width: 750px;
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    max-width: 580px;
    gap: 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.625rem;
  }
`;

const GridItem = styled.a`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
  animation: ${breathe} 6s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0s));
  border: 2px solid transparent;
  background-clip: padding-box;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  &.item-1 {
    transform: translateY(0) translateZ(0);
    animation-delay: 0s;
  }

  &.item-2 {
    transform: translateY(20px) translateZ(0);
    animation-delay: 1s;
  }

  &.item-3 {
    transform: translateY(0) translateZ(0);
    animation-delay: 2s;
  }

  &.item-4 {
    transform: translateY(0) translateZ(0);
    animation-delay: 3s;
  }

  &.item-5 {
    transform: translateY(-20px) translateZ(0);
    animation-delay: 4s;
  }

  &.item-6 {
    transform: translateY(0) translateZ(0);
    animation-delay: 5s;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    z-index: 10;
    animation: ${chakraGlow} 2s ease-in-out infinite;
    border-color: rgba(167, 139, 250, 0.55);
  }

  @media (min-width: 1920px) {
    border-radius: 24px;
  }

  @media (max-width: 1024px) {
    border-radius: 18px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 16px;
    
    &.item-2, &.item-5 {
      transform: translateY(0) translateZ(0);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  }

  @media (hover: none) and (pointer: coarse) {
    animation: none;
    transform: translateY(0) translateZ(0) !important;
    
    &:hover {
      animation: none;
    }
    
    &:active {
      transform: scale(0.97) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translateY(0) translateZ(0) !important;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${GridItem}:hover & {
    transform: scale(1.1) translateZ(0);
  }

  @media (hover: none) and (pointer: coarse) {
    ${GridItem}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${GridItem}:hover & {
      transform: translateZ(0);
    }
  }
`;

const SacredGeometry = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  color: #ffffff;
  z-index: 2;
  transform: translateZ(0);

  svg {
    width: 80%;
    height: 80%;
    animation: ${rotateGeometry} 20s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }

  ${GridItem}:hover & {
    opacity: 1;
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateZ(0);

  ${GridItem}:hover & {
    opacity: 1;
  }

  @media (hover: none) and (pointer: coarse) {
    ${GridItem}:hover & {
      opacity: 0;
    }
  }
`;

const OverlayIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  svg {
    font-size: 1.5rem;
    color: #ffffff;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 45px;
    height: 45px;
    
    svg {
      font-size: 1.375rem;
    }
  }
`;

const OverlayStats = styled.div`
  display: flex;
  gap: 1rem;
  transform: translateZ(0);

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 500;
  transform: translateZ(0);

  svg {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    gap: 0.25rem;
    
    svg {
      font-size: 0.8125rem;
    }
  }
`;

const ZenRipple = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  opacity: 0;
  transform: translateZ(0);

  ${GridItem}:hover & {
    animation: ${ripple} 1.2s ease-out infinite;
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    ${GridItem}:hover & {
      animation: none;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 1920px) {
    gap: 2.5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    gap: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
    gap: 1rem;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2.25rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 6px 30px rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(196, 181, 253, 0.24);
  transition: all 0.4s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-8px) translateZ(0);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.18);
  }

  @media (min-width: 1920px) {
    padding: 2.5rem;
    border-radius: 26px;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 22px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.75rem;
    border-radius: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
    border-radius: 18px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow 0.3s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const FeatureIconWrapper = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transform: translateZ(0);

  &.green {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.08));
    color: #8B5CF6;
  }

  &.golden {
    background: linear-gradient(135deg, rgba(167, 139, 250, 0.24), rgba(167, 139, 250, 0.1));
    color: #7C3AED;
  }

  &.mint {
    background: linear-gradient(135deg, rgba(196, 181, 253, 0.28), rgba(196, 181, 253, 0.12));
    color: #6D4BCB;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1920px) {
    width: 70px;
    height: 70px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    
    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 55px;
    height: 55px;
    margin-bottom: 1.25rem;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #2D1B4E;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.375rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
  }
`;

const FeatureDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${theme.colors.text};
  opacity: 0.8;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
  }
`;

const CTASection = styled.div`
  transform: translateZ(0);
`;

const CTACard = styled.div`
  background: linear-gradient(135deg, #6D4BCB 0%, #8B5CF6 50%, #A78BFA 100%);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  isolation: isolate;

  @media (min-width: 1920px) {
    border-radius: 36px;
    padding: 5rem;
  }

  @media (max-width: 1200px) {
    padding: 3.5rem;
  }

  @media (max-width: 1024px) {
    border-radius: 28px;
    padding: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 24px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 2rem;
    border-radius: 20px;
  }

  @media (max-width: 390px) {
    padding: 2.5rem 1.5rem;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  transform: translateZ(0);
`;

const CTATitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
  }
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0 auto 2rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    max-width: 550px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9375rem 2rem;
  background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 55%, #A78BFA 100%);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.38);
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(124, 58, 237, 0.46);
  }

  @media (min-width: 1920px) {
    padding: 1rem 2.25rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.8125rem 1.5rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
    
    svg {
      font-size: 1.0625rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }
`;

const JourneyButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: #EDE9FE;
  border: 2px solid #EDE9FE;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #EDE9FE;
    color: #6D4BCB;

    svg {
      transform: translateX(4px);
    }
  }

  @media (min-width: 1920px) {
    padding: 1.0625rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.9375rem 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
    
    svg {
      font-size: 0.9375rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      
      svg {
        transform: translateX(0);
      }
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
      background: #EDE9FE;
      color: #6D4BCB;
    }
  }
`;

const CTADecor = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 300px;
  height: 300px;
  opacity: 0.3;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    from { transform: translateY(-50%) rotate(0deg) translateZ(0); }
    to { transform: translateY(-50%) rotate(360deg) translateZ(0); }
  }

  @media (min-width: 1920px) {
    width: 350px;
    height: 350px;
    right: -60px;
  }

  @media (max-width: 1200px) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: 1024px) {
    width: 220px;
    height: 220px;
    right: -40px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`;

export default CommunityInvite;
