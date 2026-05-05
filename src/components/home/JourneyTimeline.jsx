import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const milestones = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Started yoga practice with a passion for wellness and healing.',
  },
  {
    year: '2012',
    title: 'Certification',
    description: 'Completed advanced yoga and meditation certifications.',
  },
  {
    year: '2015',
    title: 'Expertise',
    description: 'Became certified NLP Practitioner and Gut Health Expert.',
  },
  {
    year: '2018',
    title: 'Expansion',
    description: 'Launched holistic wellness programs reaching hundreds of students.',
  },
  {
    year: '2020',
    title: 'Transformation',
    description: 'Pioneered online coaching, transforming thousands of lives globally.',
  },
  {
    year: '2023',
    title: 'Excellence',
    description: 'Established BK Shikha as a leading wellness authority.',
  },
  {
    year: '2026',
    title: 'Vision',
    description: 'Creating a global community of empowered, mindful beings.',
  },
];

const JourneyTimeline = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
        setScrollProgress(progress);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <TimelineSection ref={sectionRef}>
      {/* Gradient Background */}
      <BackgroundGradient />

      <Container>
        {/* Header */}
        <HeaderContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>My Wellness Journey</SectionLabel>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle>Years of Transformation & Growth</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionDescription>
              Witness the evolution of a wellness journey dedicated to healing, growth, and empowering lives worldwide.
            </SectionDescription>
          </motion.div>
        </HeaderContent>

        {/* Timeline Track */}
        <TimelineWrapper>
          {/* Progress Line */}
          <ProgressTrack>
            <ProgressFill style={{ width: `${scrollProgress}%` }} />
          </ProgressTrack>

          {/* Scrollable Cards Container */}
          <ScrollContainer ref={scrollContainerRef}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: 'flex', gap: '2rem', paddingRight: '2rem' }}
            >
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <TimelineCard
                    as={motion.div}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 50px rgba(194, 89, 100, 0.25)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect */}
                    <CardGlow />

                    {/* Card Content */}
                    <CardContent>
                      <Year>{milestone.year}</Year>
                      <Title>{milestone.title}</Title>
                      <Description>{milestone.description}</Description>
                    </CardContent>

                    {/* Accent Line */}
                    <AccentLine />
                  </TimelineCard>
                </motion.div>
              ))}
            </motion.div>
          </ScrollContainer>

          {/* Scroll Indicator */}
          <ScrollIndicator>
            <IndicatorText>← Scroll to explore →</IndicatorText>
          </ScrollIndicator>
        </TimelineWrapper>

        {/* Progress Dots */}
        <DotsContainer>
          {milestones.map((_, index) => (
            <ProgressDot
              key={index}
              $isActive={index === Math.floor((scrollProgress / 100) * milestones.length)}
              $progress={scrollProgress}
            />
          ))}
        </DotsContainer>
      </Container>
    </TimelineSection>
  );
};

// Styled Components
const TimelineSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  isolation: isolate;

  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #FFF8F9 0%, #FFF3E6 50%, #F9EFE0 100%);
  z-index: -1;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 800px 400px at 50% 0%,
      rgba(245, 197, 202, 0.2) 0%,
      transparent 70%
    );
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 600px 300px at 100% 100%,
      rgba(212, 132, 140, 0.12) 0%,
      transparent 60%
    );
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1920px) {
    max-width: 1600px;
    padding: 0 3rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2.5rem;
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  padding: 0.35rem 0.9rem;
  margin: 0 0 1rem;
  background: rgba(194, 89, 100, 0.18);
  border-radius: 2px;
  font-family: ${theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;
  color: #3A1F23;
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: #C25964;
  line-height: 1.2;
  margin: 0 0 1.5rem;
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #4B3235;
  opacity: 0.85;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ProgressTrack = styled.div`
  position: relative;
  height: 3px;
  background: rgba(194, 89, 100, 0.15);
  border-radius: 2px;
  margin-bottom: 2.5rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #C25964, #D4848C);
  border-radius: 2px;
  transition: width 0.15s ease-out;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(194, 89, 100, 0.08);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D4848C;
    border-radius: 3px;
    transition: background 0.3s ease;

    &:hover {
      background: #C25964;
    }
  }

  /* Firefox scrollbar */
  scrollbar-color: #D4848C rgba(194, 89, 100, 0.08);
  scrollbar-width: thin;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1.5rem;
    scroll-snap-align: start;
  }
`;

const TimelineCard = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 320px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: 0 8px 32px rgba(194, 89, 100, 0.12);
  overflow: hidden;

  &:hover {
    border-color: rgba(194, 89, 100, 0.3);
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 1200px) {
    width: 300px;
    padding: 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 280px;
    padding: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 260px;
    padding: 1.5rem;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px at 50% 50%,
    rgba(194, 89, 100, 0.08),
    transparent 80%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${TimelineCard}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Year = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #C25964;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
`;

const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #3A1F23;
  line-height: 1.3;
  margin: 0 0 1rem;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4B3235;
  opacity: 0.85;
  margin: 0;
`;

const AccentLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #C25964, #D4848C);
  transition: width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${TimelineCard}:hover & {
    width: 100%;
  }
`;

const ScrollIndicator = styled.div`
  text-align: center;
  margin-top: 2rem;
  opacity: 0.6;
  animation: fadeInOut 3s ease-in-out infinite;

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
  }
`;

const IndicatorText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #4B3235;
  margin: 0;
  letter-spacing: 0.05em;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.5rem;
    margin-top: 2.5rem;
  }
`;

const ProgressDot = styled.div`
  width: ${(props) => (props.$isActive ? '32px' : '8px')};
  height: 8px;
  background: ${(props) => {
    if (props.$isActive) return '#C25964';
    return `rgba(194, 89, 100, ${0.2 + (props.$progress / 100) * 0.4})`;
  }};
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #C25964;
    transform: scaleY(1.2);
  }
`;

export default JourneyTimeline;
