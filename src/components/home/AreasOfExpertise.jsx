import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaCheck } from 'react-icons/fa';

const leftExpertiseData = [
  {
    title: "Sleep Disorders",
    description: "Support for irregular sleep cycles, poor rest quality, and nighttime overthinking.",
  },
  {
    title: "Stress",
    description: "Holistic methods to lower daily stress and build calm inner resilience.",
  },
  {
    title: "Anxiety",
    description: "Mind-body practices to soothe anxiety and improve emotional stability.",
  },
  {
    title: "Autoimmune Challenges",
    description: "Lifestyle and wellness guidance that supports immune balance and recovery.",
  }
];

const rightExpertiseData = [
  {
    title: "Weight Issues",
    description: "Sustainable support for healthy weight correction and body confidence.",
  },
  {
    title: "Relationship Problems",
    description: "Compassionate coaching for communication, harmony, and emotional healing.",
  },
  {
    title: "Negative Thought Patterns",
    description: "NLP-based reframing to break repetitive negative thinking loops.",
  },
  {
    title: "Repeated Failures in Life",
    description: "Transform limiting beliefs and rebuild confidence through guided mindset work.",
  }
];

const AreasOfExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section ref={ref}>
      <Container>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Subtitle>Pain Points We Address</Subtitle>
          <Title>Why Choose Us</Title>
          <Description>
            A focused support system for common emotional, lifestyle, and health challenges — 
            approached through yoga, mindfulness, and practical NLP techniques.
          </Description>
        </Header>

        <ExpertiseGrid>
          {/* Left Column */}
          <LeftColumn>
            {leftExpertiseData.map((item, index) => (
              <ExpertiseItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <ItemContent $align="right">
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
                <CheckIcon
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <FaCheck />
                </CheckIcon>
              </ExpertiseItem>
            ))}
          </LeftColumn>

          {/* Center Image */}
          <CenterImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <YogaImage 
              src="/st/why%20choose%20us.png" 
              alt="Why Choose Us" 
            />
          </CenterImageWrapper>

          {/* Right Column */}
          <RightColumn>
            {rightExpertiseData.map((item, index) => (
              <ExpertiseItem
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <CheckIcon
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <FaCheck />
                </CheckIcon>
                <ItemContent $align="left">
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </ExpertiseItem>
            ))}
          </RightColumn>
        </ExpertiseGrid>

        <SupportiveLine>
          Feeling stuck in stress, health concerns, or emotional imbalance? We are here to guide your transformation journey.
        </SupportiveLine>
      </Container>
    </Section>
  );
};

export default AreasOfExpertise;

// Styled Components
const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(165deg, #FFFFFF 0%, #FFF7F8 50%, #FFF0F2 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateZ(0);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(245, 197, 202, 0.14) 0%, transparent 60%);
    pointer-events: none;
    will-change: auto;
  }

  @media (min-width: 1920px) {
    padding: 140px 0;
  }

  @media (max-width: 1440px) {
    padding: 100px 0;
  }

  @media (max-width: 1200px) {
    padding: 90px 0;
  }

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 70px 0;
    overflow: visible;
  }

  @media (max-width: 640px) {
    padding: 60px 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 50px 0;
  }

  @media (max-width: 390px) {
    padding: 40px 0;
  }

  @media (max-width: 375px) {
    padding: 35px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1920px) {
    max-width: 1600px;
    padding: 0 40px;
  }

  @media (max-width: 1440px) {
    padding: 0 30px;
  }

  @media (max-width: 1200px) {
    padding: 0 25px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 20px;
  }

  @media (max-width: 640px) {
    padding: 0 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 16px;
  }

  @media (max-width: 390px) {
    padding: 0 12px;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;

  @media (min-width: 1920px) {
    max-width: 900px;
    margin-bottom: 120px;
  }

  @media (max-width: 1200px) {
    margin-bottom: 80px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 70px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 60px;
    max-width: 700px;
  }

  @media (max-width: 640px) {
    margin-bottom: 50px;
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 40px;
  }

  @media (max-width: 390px) {
    margin-bottom: 35px;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #C25964;
  margin-bottom: 16px;

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 0.875rem;
    letter-spacing: 2px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.8125rem;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.6875rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    letter-spacing: 1.2px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 500;
  color: #3A1F23;
  margin-bottom: 24px;
  line-height: 1.15;

  @media (min-width: 1920px) {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 28px;
  }

  @media (max-width: 1440px) {
    font-size: clamp(2rem, 5vw, 3.25rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.875rem, 5vw, 3rem);
    margin-bottom: 22px;
  }

  @media (max-width: 1024px) {
    font-size: clamp(1.75rem, 5vw, 2.75rem);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(1.625rem, 5vw, 2.5rem);
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    font-size: clamp(1.5rem, 5vw, 2.25rem);
    margin-bottom: 18px;
    line-height: 1.2;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(1.375rem, 5vw, 2rem);
    margin-bottom: 16px;
  }

  @media (max-width: 390px) {
    font-size: clamp(1.25rem, 5vw, 1.875rem);
    margin-bottom: 14px;
  }

  @media (max-width: 375px) {
    font-size: clamp(1.125rem, 5vw, 1.75rem);
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.85;
  color: #4B5563;
  opacity: 0.85;

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    line-height: 1.9;
  }

  @media (max-width: 1200px) {
    font-size: 1.0625rem;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    font-size: 1.0313rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.65;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.6;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 80px;
  }

  @media (min-width: ${theme.breakpoints.wide}) {
    max-width: 1400px;
    gap: 80px;
  }

  @media (max-width: 1440px) {
    gap: 50px;
  }

  @media (max-width: 1200px) {
    gap: 45px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  /* Tablet: 2-column card grid, image hidden */
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 14px;
  }

  @media (max-width: 390px) {
    gap: 12px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1920px) {
    gap: 24px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    gap: 16px;
  }

  @media (max-width: 640px) {
    gap: 14px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1920px) {
    gap: 24px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
    gap: 16px;
  }

  @media (max-width: 640px) {
    gap: 14px;
  }
`;

const CenterImageWrapper = styled(motion.div)`
  position: relative;
  width: 440px;
  height: 595px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    width: 500px;
    height: 676px;
  }

  @media (max-width: 1440px) {
    width: 410px;
    height: 553px;
  }

  @media (max-width: 1200px) {
    width: 370px;
    height: 500px;
  }

  @media (max-width: 1024px) {
    width: 330px;
    height: 446px;
  }

  /* Hide center image on tablet and below — cards take full grid */
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const YogaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Scale up slightly to fill the wrapper more naturally */
  transform: scale(1.18) translateZ(0);
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  background: transparent;
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  transition: transform 0.4s ease;

  @media (max-width: ${theme.breakpoints.tablet}) {
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.08));
  }

  @media (max-width: 390px) {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
  }
`;

const ExpertiseItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 1.375rem 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(194, 89, 100, 0.1);
  border-left: 4px solid #C25964;
  border-radius: 16px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(194, 89, 100, 0.06);
  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.28s ease,
              border-color 0.28s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  position: relative;
  cursor: default;

  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.06),
      0 20px 48px rgba(194, 89, 100, 0.14);
    border-left-color: #A3404B;
    border-color: rgba(194, 89, 100, 0.22);
  }

  @media (max-width: 1200px) {
    gap: 14px;
    padding: 1.25rem 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 13px;
    padding: 1.125rem 1.25rem;
    border-left-width: 3px;
  }

  @media (max-width: 640px) {
    gap: 12px;
    padding: 1rem 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 10px;
    padding: 0.9375rem 1rem;
  }
`;

const ItemContent = styled.div`
  text-align: ${props => props.$align};
  flex: 1;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const ItemTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  font-weight: 700;
  color: #3A1F23;
  margin-bottom: 5px;
  line-height: 1.3;
  letter-spacing: -0.01em;

  @media (min-width: 1920px) {
    font-size: 1.125rem;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9375rem;
    margin-bottom: 4px;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
  }
`;

const ItemDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.6;
  color: #6B7280;
  margin: 0;

  @media (min-width: 1920px) {
    font-size: 0.9375rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 640px) {
    font-size: 0.78rem;
    line-height: 1.5;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

const SupportiveLine = styled.p`
  max-width: 860px;
  margin: 2.75rem auto 0;
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: 1.02rem;
  line-height: 1.75;
  color: #374151;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(245, 197, 202, 0.32);
  border-radius: 14px;
  padding: 1rem 1.25rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 2.25rem;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 1.9rem;
    font-size: 0.875rem;
    padding: 0.875rem 1rem;
  }
`;

const CheckIcon = styled(motion.div)`
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(194, 89, 100, 0.1) 0%, rgba(212, 132, 140, 0.12) 100%);
  border: 1.5px solid rgba(194, 89, 100, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C25964;
  font-size: 1.05rem;
  transition: background 0.28s ease, border-color 0.28s ease, color 0.28s ease;
  transform: translateZ(0);

  ${ExpertiseItem}:hover & {
    background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
    border-color: #C25964;
    color: #ffffff;
  }

  @media (min-width: 1920px) {
    width: 46px;
    height: 46px;
    font-size: 1.125rem;
    border-radius: 13px;
  }

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 11px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    font-size: 0.95rem;
    border-radius: 10px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    border-radius: 9px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 34px;
    height: 34px;
    font-size: 0.875rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
