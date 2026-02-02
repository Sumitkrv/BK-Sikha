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
          <path d="M75 0C75 0 15 75 15 150C15 225 75 300 75 300C75 300 135 225 135 150C135 75 75 0 75 0Z" fill="#e8f0e9" />
          <path d="M75 30V270" stroke="#c5ddc8" strokeWidth="1.5" />
          <path d="M75 80L40 120" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M75 140L45 180" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M75 200L50 240" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M75 80L110 120" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M75 140L105 180" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M75 200L100 240" stroke="#c5ddc8" strokeWidth="1" />
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
                <circle cx="100" cy="100" r="80" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" stroke="#5a8a62" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
                <circle cx="100" cy="100" r="40" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
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
  0%, 100% { box-shadow: 0 0 20px rgba(201, 162, 39, 0.3), 0 0 40px rgba(90, 138, 98, 0.2); }
  25% { box-shadow: 0 0 25px rgba(90, 138, 98, 0.4), 0 0 50px rgba(201, 162, 39, 0.3); }
  50% { box-shadow: 0 0 30px rgba(142, 207, 179, 0.4), 0 0 60px rgba(90, 138, 98, 0.3); }
  75% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.4), 0 0 50px rgba(142, 207, 179, 0.3); }
`;

// Styled Components
const CommunitySection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f8f9f7 50%, #FAF8F5 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 120px;
  height: 250px;
  opacity: 0.5;
  pointer-events: none;

  &.left {
    left: -20px;
    top: 20%;
    transform: rotate(-15deg);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  z-index: 1;

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

  @media (max-width: ${theme.breakpoints.tablet}) {
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
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
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: #21371a;
  opacity: 0.8;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.75;
`;

const InstagramSection = styled.div`
  margin-bottom: 4rem;
`;

const InstagramContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2.5rem;
    min-height: auto;
  }
`;

const InstagramTextSide = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
  color: #22371b;
  line-height: 0.9;
  margin-bottom: 1.5rem;
`;

const InstagramHandle = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  color: #22371b;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.875rem 1.75rem;
  background: rgba(206, 197, 173, 0.2);
  border-radius: 50px;
  border: 2px solid transparent;

  svg {
    font-size: 1.375rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(131, 58, 180, 0.3);

    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const InstagramCTA = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
  opacity: 0.7;
  margin-top: 0.875rem;
  max-width: 200px;
  line-height: 1.65;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: none;
  }
`;

const InstagramImagesSide = styled.div`
  flex: 1;
  position: relative;
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 650px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
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

  &.item-1 {
    transform: translateY(0);
    animation-delay: 0s;
  }

  &.item-2 {
    transform: translateY(20px);
    animation-delay: 1s;
  }

  &.item-3 {
    transform: translateY(0);
    animation-delay: 2s;
  }

  &.item-4 {
    transform: translateY(0);
    animation-delay: 3s;
  }

  &.item-5 {
    transform: translateY(-20px);
    animation-delay: 4s;
  }

  &.item-6 {
    transform: translateY(0);
    animation-delay: 5s;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    z-index: 10;
    animation: ${chakraGlow} 2s ease-in-out infinite;
    border-color: rgba(201, 162, 39, 0.5);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &.item-2, &.item-5 {
      transform: translateY(0);
    }
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${GridItem}:hover & {
    transform: scale(1.1);
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

  svg {
    width: 80%;
    height: 80%;
    animation: ${rotateGeometry} 20s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }

  ${GridItem}:hover & {
    opacity: 1;
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

  ${GridItem}:hover & {
    opacity: 1;
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

  svg {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

const OverlayStats = styled.div`
  display: flex;
  gap: 1rem;
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 500;

  svg {
    font-size: 0.875rem;
  }
`;

const ZenRipple = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  opacity: 0;

  ${GridItem}:hover & {
    animation: ${ripple} 1.2s ease-out infinite;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2.25rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 6px 30px rgba(34, 55, 27, 0.06);
  border: 1px solid rgba(206, 197, 173, 0.15);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(34, 55, 27, 0.1);
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

  &.green {
    background: linear-gradient(135deg, rgba(34, 55, 27, 0.12), rgba(34, 55, 27, 0.05));
    color: #22371b;
    color: #5a8a62;
  }

  &.golden {
    background: linear-gradient(135deg, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.05));
    color: #c9a227;
  }

  &.mint {
    background: linear-gradient(135deg, rgba(142, 207, 179, 0.2), rgba(142, 207, 179, 0.08));
    color: #5a9a72;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
`;

const FeatureDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #21371a;
  opacity: 0.8;
`;

const CTASection = styled.div``;

const CTACard = styled.div`
  background: linear-gradient(135deg, #22371b 0%, #2d4a24 100%);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 2rem;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const CTATitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9375rem 2rem;
  background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(131, 58, 180, 0.4);

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(131, 58, 180, 0.5);
  }
`;

const JourneyButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: #cec5ad;
  border: 2px solid #cec5ad;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #cec5ad;
    color: #22371b;

    svg {
      transform: translateX(4px);
    }
  }
`;

const CTADecor = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
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
    from { transform: translateY(-50%) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg); }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default CommunityInvite;
