import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { FiInstagram, FiFacebook, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const trainer = {
  image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1600&h=2000&fit=crop&q=100",
  name: "BK Shikha",
  title: "Founder & Lead Mentor",
  philosophy: "Guiding souls toward inner peace through the ancient wisdom of Raja Yoga and mindful living.",
  credentials: ["Certified Raja Yoga Teacher", "20+ Years Experience", "10,000+ Lives Transformed"],
  social: { instagram: "https://www.instagram.com/cyd_bkshikha", facebook: "https://www.facebook.com", linkedin: "https://www.linkedin.com" }
};

const TrainersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <TrainersWrapper ref={ref}>
      {/* Ambient background elements */}
      <AmbientOrb className="left" />
      <AmbientOrb className="right" />
      
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ContentGrid>
          {/* Image Side */}
          <ImageSection as={motion.div} variants={imageVariants}>
            <ImageFrame>
              <ImageInner>
                <TrainerImage src={trainer.image} alt={trainer.name} loading="lazy" />
              </ImageInner>
              <FloatingBadge>
                <BadgeIcon>🧘</BadgeIcon>
                <BadgeText>Your Guide</BadgeText>
              </FloatingBadge>
              <DecorativeRing />
            </ImageFrame>
          </ImageSection>

          {/* Content Side */}
          <ContentSection as={motion.div} variants={contentVariants}>
            <LabelWrapper as={motion.div} variants={itemVariants}>
              <SectionLabel>Meet Your Mentor</SectionLabel>
              <LabelLine />
            </LabelWrapper>

            <motion.div variants={itemVariants}>
              <TrainerName>{trainer.name}</TrainerName>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrainerTitle>{trainer.title}</TrainerTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Philosophy>"{trainer.philosophy}"</Philosophy>
            </motion.div>

            <CredentialsList as={motion.div} variants={itemVariants}>
              {trainer.credentials.map((credential, index) => (
                <CredentialItem key={index}>
                  <CredentialDot />
                  <span>{credential}</span>
                </CredentialItem>
              ))}
            </CredentialsList>

            <BottomRow as={motion.div} variants={itemVariants}>
              <SocialLinks>
                <SocialLink href={trainer.social.instagram} aria-label="Instagram">
                  <FiInstagram />
                </SocialLink>
                <SocialLink href={trainer.social.facebook} aria-label="Facebook">
                  <FiFacebook />
                </SocialLink>
                <SocialLink href={trainer.social.linkedin} aria-label="LinkedIn">
                  <FiLinkedin />
                </SocialLink>
              </SocialLinks>

              <CTAButton to="/about">
                <span>Discover My Journey</span>
                <ArrowIcon><FiArrowRight /></ArrowIcon>
              </CTAButton>
            </BottomRow>
          </ContentSection>
        </ContentGrid>
      </Container>
    </TrainersWrapper>
  );
};

// Keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.15; }
`;

// Styled Components
const TrainersWrapper = styled.section`
  padding: 8rem 0;
  background: ${theme.colors.primary};
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const AmbientOrb = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  animation: ${breathe} 8s ease-in-out infinite;

  &.left {
    top: -200px;
    left: -300px;
    background: radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 60%);
  }

  &.right {
    bottom: -200px;
    right: -300px;
    background: radial-gradient(circle, ${theme.colors.secondary}10 0%, transparent 60%);
    animation-delay: -4s;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 400px;
    height: 400px;
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
  gap: 5rem;
  align-items: center;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 6rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const ImageFrame = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 350px;
  }
`;

const ImageInner = styled.div`
  position: relative;
  border-radius: 200px 200px 40px 40px;
  overflow: hidden;
  box-shadow: 
    0 25px 80px rgba(34, 55, 27, 0.15),
    0 10px 30px rgba(34, 55, 27, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 60%,
      ${theme.colors.primary}40 100%
    );
    z-index: 1;
    pointer-events: none;
  }
`;

const TrainerImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;

  ${ImageFrame}:hover & {
    transform: scale(1.03);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 450px;
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  top: 30px;
  right: -20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.15);
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: ${theme.breakpoints.mobile}) {
    right: 0;
    top: 20px;
  }
`;

const BadgeIcon = styled.span`
  font-size: 1.25rem;
`;

const BadgeText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
  letter-spacing: 0.02em;
`;

const DecorativeRing = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  top: 50%;
  left: 50%;
  border: 1px solid ${theme.colors.accent}30;
  border-radius: 50%;
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;
`;

const ContentSection = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SectionLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`;

const LabelLine = styled.div`
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, ${theme.colors.accent}, transparent);

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const TrainerName = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 500;
  color: ${theme.colors.secondary};
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

const TrainerTitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  color: ${theme.colors.accent};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Philosophy = styled.blockquote`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid ${theme.colors.accent}40;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-left: none;
    padding-left: 0;
    padding: 0 1rem;
    border-top: 3px solid ${theme.colors.accent}40;
    border-bottom: 3px solid ${theme.colors.accent}40;
    padding: 1rem 0;
  }
`;

const CredentialsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const CredentialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${theme.colors.secondary}08;
  border-radius: 50px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: ${theme.colors.secondary};
`;

const CredentialDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${theme.colors.accent};
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${theme.colors.secondary};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-radius: 50%;
  border: 1px solid ${theme.colors.secondary}20;

  &:hover {
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${theme.colors.secondary}30;
  }
`;

const ArrowIcon = styled.span`
  display: flex;
  transition: transform 0.3s ease;

  ${CTAButton}:hover & {
    transform: translateX(4px);
  }
`;

export default TrainersSection;
