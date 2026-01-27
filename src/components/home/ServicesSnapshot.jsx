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
  background: linear-gradient(180deg, #eef4ef 0%, #f5f9f5 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 6rem 0 4rem;
  }
`;

const CurvedTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 60px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 4rem;
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
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ServiceItem = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  color: #c9a227;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 64px;
    height: 64px;
  }
`;

const ServiceTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
  max-width: 280px;
  margin: 0 auto;
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: #5a8a62;
  color: #ffffff;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(90, 138, 98, 0.25);

  &:hover {
    background: #4a7a52;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(90, 138, 98, 0.3);
  }
`;

export default ServicesSnapshot;