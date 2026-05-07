import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const programs = [
  {
    image: '/st/t1.jpeg',
    category: 'Yoga',
    title: 'Personalized Yoga',
  },
  {
    image: '/st/t2.jpg.jpeg',
    category: 'Meditation',
    title: 'Mindful Meditation',
  },
  {
    image: '/st/t3.jpeg',
    category: 'Gut Health',
    title: 'Gut Healing',
  },
  {
    image: '/st/t4.jpeg',
    category: 'NLP',
    title: 'NLP Coaching',
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
              <CardImage
                src={program.image}
                alt={program.title}
                loading="lazy"
                $objectPosition={program.objectPosition}
              />
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
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 7rem 0;
  }

  @media (max-width: 1440px) {
    padding: 5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 4.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 3.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 3rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2rem 0;
  }

  @media (max-width: 375px) {
    padding: 1.75rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;
  transform: translateZ(0);

  span {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    font-family: ${theme.fonts.body};
    font-size: 0.84rem;
    font-weight: 600;
    color: #3A1F23;
    background: rgba(194, 89, 100, 0.18);
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['4xl']};
    font-weight: 500;
    color: #22371b;
    margin: 0;
    transform: translateZ(0);

    @media (max-width: ${theme.breakpoints?.tablet || '768px'}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }

  @media (min-width: 1920px) {
    margin-bottom: 4.5rem;
    padding: 0 2rem;

    span {
      font-size: 1rem;
      letter-spacing: 0.16em;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: clamp(2.5rem, 4.5vw, 3.75rem);
    }
  }

  @media (max-width: 1440px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 3.25rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 2.75rem;
    padding: 0 1.25rem;

    span {
      font-size: 0.875rem;
      letter-spacing: 0.13em;
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
    padding: 0 1rem;

    span {
      font-size: 0.8125rem;
      letter-spacing: 0.12em;
      margin-bottom: 0.625rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
    padding: 0 1rem;

    span {
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 390px) {
    margin-bottom: 1.75rem;
    padding: 0 0.875rem;

    span {
      font-size: 0.6875rem;
      letter-spacing: 0.09em;
    }
  }

  @media (max-width: 375px) {
    margin-bottom: 1.5rem;
    padding: 0 0.75rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 0;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem 0;
  }

  @media (max-width: 390px) {
    padding: 0.875rem 0;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0;
  }
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
  transform: translateZ(0);
  will-change: auto;

  @media (min-width: 1920px) {
    width: 180px;
  }

  @media (max-width: 1440px) {
    width: 140px;
  }

  @media (max-width: 1200px) {
    width: 120px;
  }

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 80px;
  }

  @media (max-width: 640px) {
    width: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 50px;
  }

  @media (max-width: 390px) {
    width: 40px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 30px;
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
  transform: translateZ(0);
  will-change: auto;

  @media (min-width: 1920px) {
    width: 180px;
  }

  @media (max-width: 1440px) {
    width: 140px;
  }

  @media (max-width: 1200px) {
    width: 120px;
  }

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 80px;
  }

  @media (max-width: 640px) {
    width: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 50px;
  }

  @media (max-width: 390px) {
    width: 40px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 30px;
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-left: 24px;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    gap: 32px;
    padding-left: 32px;
  }

  @media (max-width: 1440px) {
    gap: 24px;
    padding-left: 24px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
    padding-left: 20px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 18px;
    padding-left: 18px;
  }

  @media (max-width: 640px) {
    gap: 16px;
    padding-left: 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 14px;
    padding-left: 14px;
  }

  @media (max-width: 390px) {
    gap: 12px;
    padding-left: 12px;
  }

  @media (max-width: 360px) {
    gap: 10px;
    padding-left: 10px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    width: 380px;
    height: 500px;
    border-radius: 28px;
    box-shadow: 0 12px 48px rgba(34, 55, 27, 0.14);
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    width: 360px;
    height: 480px;
    border-radius: 26px;
  }

  @media (max-width: 1440px) {
    width: 320px;
    height: 420px;
  }

  @media (max-width: 1200px) {
    width: 310px;
    height: 400px;
    border-radius: 22px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 380px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(34, 55, 27, 0.1);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 280px;
    height: 360px;
    border-radius: 18px;
  }

  @media (max-width: 640px) {
    width: 270px;
    height: 350px;
    border-radius: 18px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 260px;
    height: 340px;
    border-radius: 16px;
    box-shadow: 0 6px 24px rgba(34, 55, 27, 0.08);
  }

  @media (max-width: 430px) {
    width: 250px;
    height: 330px;
  }

  @media (max-width: 390px) {
    width: 240px;
    height: 320px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 220px;
    height: 300px;
    border-radius: 14px;
  }

  @media (max-width: 375px) {
    width: 230px;
    height: 310px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.$objectPosition || 'center'};
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  transform: translateZ(0);
  backface-visibility: hidden;
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
  transform: translateZ(0);

  @media (min-width: 1920px) {
    padding: 2rem;
    gap: 10px;
  }

  @media (max-width: 1440px) {
    padding: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.375rem;
    gap: 7px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.25rem;
    gap: 6px;
  }

  @media (max-width: 640px) {
    padding: 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem;
    gap: 5px;
  }

  @media (max-width: 390px) {
    padding: 0.875rem;
  }

  @media (max-width: 360px) {
    padding: 0.75rem;
    gap: 4px;
  }
`;

const CardCategory = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 12px;
    letter-spacing: 0.16em;
  }

  @media (max-width: 1024px) {
    font-size: 10.5px;
    letter-spacing: 0.14em;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 10px;
    letter-spacing: 0.13em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 9.5px;
    letter-spacing: 0.12em;
  }

  @media (max-width: 390px) {
    font-size: 9px;
    letter-spacing: 0.11em;
  }

  @media (max-width: 360px) {
    font-size: 8.5px;
    letter-spacing: 0.1em;
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.35;
  }

  @media (max-width: 1440px) {
    font-size: 22px;
  }

  @media (max-width: 1200px) {
    font-size: 21px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 1.28;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 19px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 1.25;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 17px;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }

  @media (max-width: 390px) {
    font-size: 15px;
    line-height: 1.2;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export default ProgramCardsCarousel;
