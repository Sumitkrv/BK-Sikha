import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiArrowRight } from 'react-icons/fi';

const classes = [
  {
    image: "/new images/online meditation (2).png",
    title: "Online Meditation & NLP Techniques",
    description: "Meditation and guided NLP tools to calm the mind and reframe limiting patterns.",
  },
  {
    image: "/new images/yoga at home (2).png",
    title: "Yoga at Home",
    description: "Personalized at-home yoga routines for flexibility, energy, and everyday balance.",
    imagePosition: "center 20%",
  },
  {
    image: "/new images/private session (2).png",
    title: "Private Wellness Sessions",
    description: "One-on-one wellness sessions focused on your emotional, physical, and lifestyle goals.",
  },
  {
    image: "/new images/stress relief (2).png",
    title: "Stress-Free Healing Sessions",
    description: "Restorative breathwork and healing practices to reduce stress and restore inner calm.",
  },
  {
    image: "/new images/begin your transformation.png",
    title: "Eye Opening Mindfulness Sessions",
    description: "Awareness-based mindfulness sessions that deepen clarity, presence, and self-connection.",
  },
  {
    image: "/new images/holistic healing (3).png",
    title: "Cure & Healing Yoga",
    description: "Targeted therapeutic yoga support for recovery, resilience, and holistic healing.",
  },
  {
    image: "/new images/self love (2).png",
    title: "Health Fiesta Programs",
    description: "High-energy wellness programs that make healthy living enjoyable and sustainable.",
  },
  {
    image: "/new images/yoga busy days.png",
    title: "Mind Boosting Sessions for Students",
    description: "Focus-building sessions to improve confidence, concentration, and emotional strength.",
  },
  {
    image: "/new images/sacred healing space (2).png",
    title: "Upcoming Wellness Sessions",
    description: "Explore upcoming curated sessions designed for complete mind-body wellbeing.",
  },
  {
    image: "/new images/personalized yoga (2).png",
    title: "Monthly Healthy Lifestyle Program",
    description: "Monthly guided framework to build healthy habits and long-term lifestyle discipline.",
  },
  {
    image: "/new images/meditation.png",
    title: "Wellness Parlour Monthly Pack",
    description: "A premium monthly blend of wellness therapies, lifestyle coaching, and support.",
  },
  {
    image: "/new images/holistic healing.png",
    title: "Mind Zumba",
    description: "Rhythmic movement sessions to boost mood, release tension, and energize your day.",
  },
];

const CoachingJourney = () => {
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
    <ClassesSection ref={ref}>
      {/* Decorative leaf */}
      <LeafDecoration>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C100 20 180 100 180 200C180 300 100 380 100 380" stroke="#DDD6FE" strokeWidth="1.5" fill="none"/>
          <path d="M100 60C100 60 150 120 150 200C150 280 100 340 100 340" stroke="#DDD6FE" strokeWidth="1" fill="none"/>
          <path d="M100 100C100 100 130 140 130 200C130 260 100 300 100 300" stroke="#DDD6FE" strokeWidth="0.8" fill="none"/>
          <path d="M60 120C60 120 100 160 100 200" stroke="#DDD6FE" strokeWidth="0.8" fill="none"/>
          <path d="M140 120C140 120 100 160 100 200" stroke="#DDD6FE" strokeWidth="0.8" fill="none"/>
          <path d="M50 180C50 180 100 200 100 200" stroke="#DDD6FE" strokeWidth="0.6" fill="none"/>
          <path d="M150 180C150 180 100 200 100 200" stroke="#DDD6FE" strokeWidth="0.6" fill="none"/>
          <path d="M60 260C60 260 100 240 100 200" stroke="#DDD6FE" strokeWidth="0.8" fill="none"/>
          <path d="M140 260C140 260 100 240 100 200" stroke="#DDD6FE" strokeWidth="0.8" fill="none"/>
        </svg>
      </LeafDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <HeaderContent>
          <motion.div variants={itemVariants}>
            <SectionLabel>Our Classes</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>Our Signature Wellness Programs</SectionTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionDescription>
              Discover our most popular yoga and wellness classes designed to 
              nurture your mind, body, and spirit on your journey to inner peace.
            </SectionDescription>
          </motion.div>
        </HeaderContent>

        <ClassesGrid>
          {classes.map((item, index) => (
            <ClassCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <CardImageWrapper>
                <CardImage
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectPosition: item.imagePosition ?? 'center' }}
                />
              </CardImageWrapper>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <BookNowLink to="/contact">
                  Book Now <FiArrowRight />
                </BookNowLink>
              </CardContent>
            </ClassCard>
          ))}
        </ClassesGrid>
      </Container>
    </ClassesSection>
  );
};

// Styled Components - Exact Anayoga Style
const ClassesSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F5FF 100%);
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

const LeafDecoration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 180px;
  height: 400px;
  opacity: 0.4;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  svg {
    width: 100%;
    height: 100%;
  }

  svg path {
    stroke: #C4B5FD;
  }

  @media (max-width: 1024px) {
    width: 150px;
    opacity: 0.35;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
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

const HeaderContent = styled.div`
  max-width: 500px;
  margin-bottom: 3.5rem;

  @media (min-width: 1920px) {
    max-width: 600px;
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2.75rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 2.5rem;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    margin-bottom: 2.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 1.75rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8B5CF6;
  margin-bottom: 0.75rem;

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    letter-spacing: 0.06em;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2D1B4E;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (min-width: 1920px) {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1.25rem;
  }

  @media (max-width: 1024px) {
    line-height: 1.25;
  }

  @media (max-width: 640px) {
    margin-bottom: 0.875rem;
    line-height: 1.3;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 390px) {
    line-height: 1.35;
  }
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: #4B5563;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.75;
  }

  @media (max-width: 1024px) {
    font-size: 0.9688rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.25rem 2rem;
  
  @media (min-width: 1920px) {
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    gap: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: 1.5rem;
  }

  @media (max-width: 430px) {
    max-width: 360px;
    gap: 1.375rem;
  }

  @media (max-width: 390px) {
    max-width: 340px;
    gap: 1.25rem;
  }

  @media (max-width: 375px) {
    max-width: 320px;
    gap: 1.125rem;
  }
`;

const ClassCard = styled.div`
  position: relative;
  padding-bottom: 176px;
  transition: transform 0.3s ease, box-shadow 0.35s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  border-radius: 18px;

  &:hover {
    transform: translateY(-8px) translateZ(0);
    box-shadow: 0 24px 44px rgba(34, 55, 27, 0.14);
  }

  @media (min-width: 1920px) {
    padding-bottom: 190px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 170px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: 176px;
    transition: all 0.25s ease;
    
    &:hover {
      transform: translateY(-6px) translateZ(0);
    }
  }

  @media (max-width: 640px) {
    padding-bottom: 166px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-bottom: 160px;
    
    &:hover {
      transform: translateY(-4px) translateZ(0);
    }
  }

  @media (max-width: 390px) {
    padding-bottom: 152px;
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
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 260px;
  margin-top: 0;
  overflow: hidden;
  border-radius: 18px;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    height: 320px;
    margin-top: 0.625rem;
    border-radius: 14px;
  }

  @media (max-width: 1200px) {
    height: 260px;
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    height: 240px;
    margin-top: 0.4375rem;
    border-radius: 11px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 260px;
    margin-top: 0.4375rem;
  }

  @media (max-width: 640px) {
    height: 240px;
    margin-top: 0.375rem;
    border-radius: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 220px;
    margin-top: 0.3125rem;
  }

  @media (max-width: 430px) {
    height: 200px;
    margin-top: 0.3125rem;
    border-radius: 9px;
  }

  @media (max-width: 390px) {
    height: 190px;
    margin-top: 0.25rem;
  }

  @media (max-width: 375px) {
    height: 180px;
    margin-top: 0.25rem;
    border-radius: 8px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${ClassCard}:hover & {
    transform: scale(1.05) translateZ(0);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    transition: transform 0.4s ease;
    
    ${ClassCard}:hover & {
      transform: scale(1.04) translateZ(0);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    transition: transform 0.3s ease;
    
    ${ClassCard}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${ClassCard}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${ClassCard}:hover & {
      transform: translateZ(0);
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  padding: 1.1rem 1.2rem;
  border-radius: 14px;
  border: 1px solid rgba(209, 213, 219, 0.45);
  box-shadow: 0 10px 30px rgba(31, 41, 55, 0.12);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    padding: 1.5rem 1.75rem;
    border-radius: 10px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.13);
  }

  @media (max-width: 1200px) {
    padding: 1.125rem 1.375rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 1.25rem;
    border-radius: 7px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 640px) {
    padding: 0.95rem 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.875rem 1rem;
    border-radius: 6px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 390px) {
    left: 8px;
    right: 8px;
    padding: 0.8125rem 0.9375rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0.875rem;
  }
`;

const CardPrice = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: #8B5CF6;
  margin-bottom: 0.35rem;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    margin-bottom: 0.4375rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9688rem;
    margin-bottom: 0.3125rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const CardDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.55;
  color: #475569;
  margin-bottom: 0.7rem;

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.7813rem;
    margin-bottom: 0.625rem;
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 600;
  color: #22371b;
  letter-spacing: 0.01em;
  line-height: 1.35;
  margin-bottom: 0.45rem;

  @media (min-width: 1920px) {
    font-size: 1.375rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.1875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.125rem;
    margin-bottom: 0.4375rem;
  }

  @media (max-width: 640px) {
    font-size: 1.0625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 0.375rem;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    margin-bottom: 0.3125rem;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
`;

const BookNowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #8B5CF6;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transform: translateZ(0);

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover {
    color: #7C3AED;
    
    svg {
      transform: translateX(4px);
    }
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
    
    svg {
      font-size: 0.9375rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    padding: 0.4375rem 0;
    
    svg {
      font-size: 0.8125rem;
    }
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    padding: 0.375rem 0;
    
    svg {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    gap: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 0.3125rem 0;
    border-bottom-width: 1.5px;
    
    svg {
      font-size: 0.6875rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover svg {
      transform: translateX(0);
    }

    &:active {
      opacity: 0.7;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
    
    &:hover svg {
      transform: translateX(0);
    }
  }
`;

export default CoachingJourney;
