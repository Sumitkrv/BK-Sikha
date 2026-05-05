import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

const classes = [
  {
    title: "Online Meditation & NLP Techniques",
    description: "Meditation and guided NLP tools to calm the mind and reframe limiting patterns.",
  },
  {
    title: "Yoga at Home",
    description: "Personalized at-home yoga routines for flexibility, energy, and everyday balance.",
  },
  {
    title: "Private Wellness Sessions",
    description: "One-on-one wellness sessions focused on your emotional, physical, and lifestyle goals.",
  },
  {
    title: "Stress-Free Healing Sessions",
    description: "Restorative breathwork and healing practices to reduce stress and restore inner calm.",
  },
  {
    title: "Eye Opening Mindfulness Sessions",
    description: "Awareness-based mindfulness sessions that deepen clarity, presence, and self-connection.",
  },
  {
    title: "Health Fiesta Programs",
    description: "High-energy wellness programs that make healthy living enjoyable and sustainable.",
  },
  {
    title: "Mind Boosting Sessions for Students",
    description: "Focus-building sessions to improve confidence, concentration, and emotional strength.",
  },
  {
    title: "Upcoming Wellness Sessions",
    description: "Explore upcoming curated sessions designed for complete mind-body wellbeing.",
  },
  {
    title: "Monthly Healthy Lifestyle Program",
    description: "Monthly guided framework to build healthy habits and long-term lifestyle discipline.",
  },
  {
    title: "Wellness Parlour Monthly Pack",
    description: "A premium monthly blend of wellness therapies, lifestyle coaching, and support.",
  },
  {
    title: "Mind Zumba",
    description: "Rhythmic movement sessions to boost mood, release tension, and energize your day.",
  },
];

const CoachingJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <path d="M100 20C100 20 180 100 180 200C180 300 100 380 100 380" stroke="#F5C5CA" strokeWidth="1.5" fill="none"/>
          <path d="M100 60C100 60 150 120 150 200C150 280 100 340 100 340" stroke="#F5C5CA" strokeWidth="1" fill="none"/>
          <path d="M100 100C100 100 130 140 130 200C130 260 100 300 100 300" stroke="#F5C5CA" strokeWidth="0.8" fill="none"/>
          <path d="M60 120C60 120 100 160 100 200" stroke="#F5C5CA" strokeWidth="0.8" fill="none"/>
          <path d="M140 120C140 120 100 160 100 200" stroke="#F5C5CA" strokeWidth="0.8" fill="none"/>
          <path d="M50 180C50 180 100 200 100 200" stroke="#F5C5CA" strokeWidth="0.6" fill="none"/>
          <path d="M150 180C150 180 100 200 100 200" stroke="#F5C5CA" strokeWidth="0.6" fill="none"/>
          <path d="M60 260C60 260 100 240 100 200" stroke="#F5C5CA" strokeWidth="0.8" fill="none"/>
          <path d="M140 260C140 260 100 240 100 200" stroke="#F5C5CA" strokeWidth="0.8" fill="none"/>
        </svg>
      </LeafDecoration>

        <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
          animate={isInView || isMobile ? "visible" : "hidden"}
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

        <ScrollArea>
          <CardsRow>
            {classes.map((item, index) => (
              <ClassCard
                key={index}
                as={motion.div}
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
              >
                <IconCircle>
                  <FiHeart />
                </IconCircle>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </ClassCard>
            ))}
          </CardsRow>
        </ScrollArea>

        <CTAWrapper>
          <CTAButton to="/contact">
            Explore More <FiArrowRight />
          </CTAButton>
        </CTAWrapper>
      </Container>
    </ClassesSection>
  );
};

// Styled Components - Exact Anayoga Style
const ClassesSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF3F5 100%);
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
    stroke: #F5C5CA;
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
  max-width: 520px;
  margin-bottom: 2.5rem;

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
  color: #C25964;
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
  font-size: clamp(1.625rem, 5vw, 2.5rem);
  font-weight: 500;
  color: #3A1F23;
  line-height: 1.25;
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
  line-height: 1.65;
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

const ScrollArea = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 1rem;
  padding-bottom: 1rem;
  margin: 0 -1rem;
  touch-action: pan-x;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 0.875rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 0;
  }
`;

const ClassCard = styled.div`
  flex: 0 0 86%;
  max-width: 320px;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.375rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(194, 89, 100, 0.08);
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 768px) {
    flex: 0 0 320px;
  }

  @media (min-width: 1200px) {
    flex: 0 0 340px;
  }

  @media (hover: none) and (pointer: coarse) {
    transition: transform 0.2s ease;
  }
`;

const IconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(194, 89, 100, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #C25964;
  margin-bottom: 1rem;

  svg {
    font-size: 1.25rem;
  }
`;

const CardDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: #3A1F23;
  letter-spacing: 0.01em;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  background: #C25964;
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(194, 89, 100, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  svg {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(194, 89, 100, 0.3);
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export default CoachingJourney;
