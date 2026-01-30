import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&auto=format&fit=crop&q=100',
    category: 'Yoga',
    title: 'Morning Yoga Flow',
  },
  {
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&auto=format&fit=crop&q=100',
    category: 'Meditation',
    title: 'Mindful Meditation',
  },
  {
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop&q=100',
    category: 'Wellness',
    title: 'Holistic Healing',
  },
  {
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=1200&auto=format&fit=crop&q=100',
    category: 'Breathing',
    title: 'Pranayama Practice',
  },
  {
    image: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=1200&auto=format&fit=crop&q=100',
    category: 'Retreat',
    title: 'Weekend Wellness Retreat',
  },
  {
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1200&auto=format&fit=crop&q=100',
    category: 'Lifestyle',
    title: 'Yogic Lifestyle Coaching',
  },
];

const ProgramCardsCarousel = () => {
  return (
    <CarouselSection>
      <SectionHeader>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Transform Your Life
        </motion.h2>
      </SectionHeader>

      <CarouselContainer
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Gradient Overlays */}
        <GradientOverlayLeft />
        <GradientOverlayRight />

        {/* Scrolling Container */}
        <ScrollingWrapper
          as={motion.div}
          animate={{
            x: [0, -((programs.length * 380) / 2)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: programs.length * 4,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate programs for seamless loop */}
          {[...programs, ...programs].map((program, index) => (
            <ProgramCard
              key={index}
              as={motion.div}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CardImage src={program.image} alt={program.title} loading="lazy" />
              <CardOverlay />
              <CardContent>
                <CardCategory>{program.category}</CardCategory>
                <CardTitle>{program.title}</CardTitle>
              </CardContent>
            </ProgramCard>
          ))}
        </ScrollingWrapper>
      </CarouselContainer>
    </CarouselSection>
  );
};

// Styled Components
const CarouselSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.backgroundDark} 100%);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;

  span {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    color: #cec5ad;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['4xl']};
    font-weight: 500;
    color: #22371b;
    margin: 0;

    @media (max-width: ${theme.breakpoints?.tablet || '768px'}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 0;
`;

const GradientOverlayLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(90deg, ${theme.colors.background} 0%, rgba(250, 248, 245, 0) 100%);
  z-index: 10;
  pointer-events: none;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 40px;
  }

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const GradientOverlayRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(270deg, ${theme.colors.backgroundDark} 0%, rgba(245, 242, 237, 0) 100%);
  z-index: 10;
  pointer-events: none;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 40px;
  }

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-left: 24px;
`;

const ProgramCard = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 420px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.12);
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 240px;
    height: 320px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    width: 360px;
    height: 480px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardCategory = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
`;

export default ProgramCardsCarousel;
