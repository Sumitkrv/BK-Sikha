import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaCheck } from 'react-icons/fa';

const leftExpertiseData = [
  {
    title: "Yoga & Meditation",
    description: "12+ years of Yoga and 15+ years of Meditation expertise",
  },
  {
    title: "NLP Coaching",
    description: "Mind coaching using Neuro-Linguistic Programming tools",
  },
  {
    title: "Counseling",
    description: "Professional support for children, teenagers, and adults",
  },
  {
    title: "Stress & Anxiety Relief",
    description: "Holistic approach to emotional wellness and balance",
  }
];

const rightExpertiseData = [
  {
    title: "Gut Health Expert",
    description: "Digestive wellness and metabolism improvement programs",
  },
  {
    title: "Weight Management",
    description: "Sustainable, healthy weight loss and transformation",
  },
  {
    title: "Relationship Healing",
    description: "Emotional wellness and relationship counseling support",
  },
  {
    title: "Lifestyle Transformation",
    description: "Mindful nutrition and habit correction guidance",
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
          <Subtitle>Areas of Expertise</Subtitle>
          <Title>Comprehensive Wellness Services</Title>
          <Description>
            BK Shikha offers a complete range of holistic wellness services combining yoga, 
            meditation, mindfulness practices, NLP tools, stress management, counseling, 
            gut health correction, and sustainable weight management. Her approach empowers 
            long-term physical, mental, and emotional well-being.
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
              src="src/assets/bkim/yoga_center.png" 
              alt="BK Shikha Yoga Pose" 
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
      </Container>
    </Section>
  );
};

export default AreasOfExpertise;

// Styled Components
const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(165deg, #FAF8F5 0%, #f5f7f4 50%, #f0f3ef 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(206, 197, 173, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #cec5ad;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 500;
  color: #22371b;
  margin-bottom: 24px;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    max-width: 1400px;
    gap: 80px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    order: 3;
  }
`;

const CenterImageWrapper = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 300px;
    height: 450px;
  }

  @media (max-width: 768px) {
    order: 1;
    width: 250px;
    height: 375px;
    margin: 0 auto;
  }
`;

const YogaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
`;

const ExpertiseItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ItemContent = styled.div`
  text-align: ${props => props.$align};
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ItemDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.65;
  color: #21371a;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CheckIcon = styled(motion.div)`
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22371b 0%, #2d4a24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(34, 55, 27, 0.3);
  color: white;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    min-width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;
