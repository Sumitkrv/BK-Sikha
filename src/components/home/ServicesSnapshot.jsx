import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Custom SVG icons matching Anayoga style
const FlexibleTimeIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M32 8v8M32 48v8M8 32h8M48 32h8" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="20"/>
    <path d="M32 20v12l8 8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12l4 4M44 12l-4 4M20 52l4-4M44 52l-4-4" strokeLinecap="round"/>
  </svg>
);

const ReduceStressIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="16" r="8"/>
    <path d="M32 24v8" strokeLinecap="round"/>
    <path d="M24 36c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round"/>
    <path d="M20 44h24" strokeLinecap="round"/>
    <path d="M16 52h32" strokeLinecap="round"/>
    <circle cx="32" cy="36" r="4" fill="currentColor" opacity="0.3"/>
  </svg>
);

const YogaStylesIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="12" r="6"/>
    <path d="M32 18v14" strokeLinecap="round"/>
    <path d="M32 32l-16 20" strokeLinecap="round"/>
    <path d="M32 32l16 20" strokeLinecap="round"/>
    <path d="M20 28l12 4l12-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LifeBalancingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="32" cy="52" rx="12" ry="4"/>
    <ellipse cx="32" cy="40" rx="10" ry="3.5"/>
    <ellipse cx="32" cy="30" rx="8" ry="3"/>
    <ellipse cx="32" cy="22" rx="5" ry="2"/>
  </svg>
);

const HealthTipsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 56h24c2 0 4-2 4-4V28c0-8-8-16-16-16S16 20 16 28v24c0 2 2 4 4 4z"/>
    <path d="M24 56v-8c0-2 2-4 4-4h8c2 0 4 2 4 4v8"/>
    <path d="M28 20c-4 4-4 8 0 12" strokeLinecap="round"/>
    <path d="M36 20c4 4 4 8 0 12" strokeLinecap="round"/>
  </svg>
);

const LifeConsultationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="14" r="6"/>
    <path d="M32 20v6" strokeLinecap="round"/>
    <path d="M22 32c0-5.5 4.5-10 10-10s10 4.5 10 10" strokeLinecap="round"/>
    <path d="M22 32v8c0 6 4 12 10 12s10-6 10-12v-8" strokeLinecap="round"/>
    <circle cx="32" cy="38" r="6" fill="currentColor" opacity="0.2"/>
  </svg>
);

const services = [
  {
    icon: FlexibleTimeIcon,
    title: 'Flexible Time',
    description: 'Practice yoga at your own pace with sessions designed to fit your busy lifestyle and schedule.',
  },
  {
    icon: ReduceStressIcon,
    title: 'Reduce Stress',
    description: 'Learn powerful techniques to calm your mind, release tension, and find inner peace.',
  },
  {
    icon: YogaStylesIcon,
    title: 'Many Yoga Styles',
    description: 'Explore various yoga traditions from gentle Hatha to dynamic Vinyasa and restorative practices.',
  },
  {
    icon: LifeBalancingIcon,
    title: 'Life Balancing',
    description: 'Achieve harmony between work, relationships, and personal growth through mindful living.',
  },
  {
    icon: HealthTipsIcon,
    title: 'Health Tips',
    description: 'Receive guidance on nutrition, sleep, and daily habits that support your wellness journey.',
  },
  {
    icon: LifeConsultationIcon,
    title: 'Life Consultation',
    description: 'Get personalized coaching to overcome challenges and align with your true purpose.',
  },
];

const ServicesSnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <ServicesSection ref={ref}>
      {/* Curved top decoration */}
      <CurvedTop>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" fill="#f8f9f6"/>
        </svg>
      </CurvedTop>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <HeaderContent>
          <motion.div variants={itemVariants}>
            <SectionLabel>Services</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>What we offer to you</SectionTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionDescription>
              Discover transformative practices that nurture your body, calm your mind, 
              and elevate your spirit on this beautiful journey of self-discovery.
            </SectionDescription>
          </motion.div>
        </HeaderContent>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              as={motion.div}
              variants={itemVariants}
            >
              <IconWrapper>
                <service.icon />
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </ServicesGrid>

        <CTAWrapper as={motion.div} variants={itemVariants}>
          <CTAButton to="/services">
            View All Services
          </CTAButton>
        </CTAWrapper>
      </Container>
    </ServicesSection>
  );
};

// Styled Components - Anayoga Style
const ServicesSection = styled.section`
  padding: 8rem 0 6rem;
  background: linear-gradient(180deg, #f0f4f0 0%, #f5f8f5 40%, #FAF8F5 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(206, 197, 173, 0.4), transparent);
  }

  @media (min-width: 1920px) {
    padding: 10rem 0 8rem;
  }

  @media (max-width: 1440px) {
    padding: 7rem 0 5.5rem;
  }

  @media (max-width: 1200px) {
    padding: 6.5rem 0 5rem;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0 4.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5.5rem 0 4rem;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 4rem 0 3rem;
  }

  @media (max-width: 390px) {
    padding: 3rem 0 2.5rem;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 0 2rem;
  }
`;

const CurvedTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  pointer-events: none;
  transform: translateZ(0);

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 1920px) {
    height: 140px;
  }

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 40px;
  }

  @media (max-width: 375px) {
    height: 30px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1920px) {
    max-width: 1300px;
    padding: 0 3rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.75rem;
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

const HeaderContent = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 5rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    max-width: 750px;
    margin-bottom: 6rem;
  }

  @media (max-width: 1440px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 4.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin-bottom: 4rem;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 2.5rem;
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
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    letter-spacing: 0.07em;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(2.75rem, 4.5vw, 3.75rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
    line-height: 1.25;
  }
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.9;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.8;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.75;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.7;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;

  @media (min-width: 1920px) {
    gap: 5rem 4rem;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem 2.75rem;
  }

  @media (max-width: 1024px) {
    gap: 3.25rem 2.5rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: 640px) {
    gap: 2.75rem 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 390px) {
    gap: 2.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    gap: 2rem;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 5rem 4rem;
  }
`;

const ServiceItem = styled.div`
  text-align: center;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.75rem;
  color: #cec5ad;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }

  ${ServiceItem}:hover & {
    color: #22371b;
    transform: scale(1.05) translateZ(0);
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 72px;
    height: 72px;
  }

  @media (max-width: 640px) {
    width: 68px;
    height: 68px;
    margin-bottom: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 64px;
    height: 64px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  @media (max-width: 360px) {
    width: 56px;
    height: 56px;
  }

  @media (hover: none) and (pointer: coarse) {
    ${ServiceItem}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.3s ease;
    
    ${ServiceItem}:hover & {
      transform: translateZ(0);
    }
  }
`;

const ServiceTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }

  @media (max-width: 640px) {
    font-size: 1.1875rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (max-width: 390px) {
    font-size: 1.0625rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #21371a;
  opacity: 0.8;
  max-width: 280px;
  margin: 0 auto;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    max-width: 320px;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
    max-width: 270px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    line-height: 1.65;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    margin-top: 5rem;
  }

  @media (max-width: 1440px) {
    margin-top: 4rem;
  }

  @media (max-width: 1024px) {
    margin-top: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 2.5rem;
  }

  @media (max-width: 390px) {
    margin-top: 2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 3rem;
  background: #22371b;
  color: #FAF8F5;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  letter-spacing: 0.02em;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #1a2b15;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 10px 35px rgba(34, 55, 27, 0.35);
  }

  @media (min-width: 1920px) {
    padding: 1.25rem 3.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 1.0625rem 2.75rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 2.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 640px) {
    padding: 0.9375rem 2.25rem;
    font-size: 0.8125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.875rem 2rem;
    font-size: 0.75rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 390px) {
    padding: 0.8125rem 1.75rem;
    max-width: 260px;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.6875rem;
    max-width: 240px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
    }

    &:active {
      background: #1a2b15;
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

export default ServicesSnapshot;