import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiStar, FiUsers, FiAward, FiCheck } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const whyUsRef = useRef(null);
  const valuesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const whyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const leftServices = [
    {
      title: 'Vinyasa Yoga',
      description: 'Flow through dynamic sequences connecting breath with movement',
    },
    {
      title: 'Slow Yoga',
      description: 'Gentle practice focusing on deep relaxation and mindful movement',
    },
    {
      title: 'Intuitive Yoga',
      description: 'Listen to your body and move with inner guidance',
    },
    {
      title: 'Aroma Yoga',
      description: 'Enhanced practice with therapeutic essential oils',
    },
  ];

  const rightServices = [
    {
      title: 'Kundalini Yoga',
      description: 'Awaken your spiritual energy through breath and mantras',
    },
    {
      title: 'Bikram Yoga',
      description: 'Detoxifying practice in a heated environment',
    },
    {
      title: 'Mindfulness Training',
      description: 'Cultivate present-moment awareness for daily peace',
    },
    {
      title: 'Workout Routines',
      description: 'Strength and flexibility focused fitness sessions',
    },
  ];

  const values = [
    {
      icon: <FiHeart />,
      title: 'Compassionate Care',
      description: 'Every session begins with understanding and acceptance of where you are right now.',
    },
    {
      icon: <FiStar />,
      title: 'Holistic Approach',
      description: 'We address mind, body, and spirit as interconnected aspects of your wellbeing.',
    },
    {
      icon: <FiUsers />,
      title: 'Personalized Journey',
      description: 'Your path is unique, and our guidance adapts to your individual needs and goals.',
    },
    {
      icon: <FiAward />,
      title: 'Expert Guidance',
      description: 'Years of training and experience ensure you receive the highest quality instruction.',
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        {/* Decorative elements */}
        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#d0dcd2" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="#d0dcd2" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="#d0dcd2" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#d0dcd2" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="#d0dcd2" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="#d0dcd2" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="#d0dcd2" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <Container>
          <HeroContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <HeroTitle>About Us</HeroTitle>
            </motion.div>
          </HeroContent>
        </Container>

        {/* Wave Separator */}
        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* How We Started Section */}
      <StorySection ref={storyRef}>
        <Container>
          <StoryGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <StoryImageColumn as={motion.div} variants={itemVariants}>
              <ImageWrapper>
                {/* Organic blob background */}
                <BlobBackground>
                  <svg viewBox="0 0 400 450" fill="none">
                    <path d="M350,225 C350,350 275,425 175,425 C75,425 25,350 25,225 C25,100 100,25 200,25 C300,25 350,100 350,225 Z" fill="#8ecfb3" />
                  </svg>
                </BlobBackground>
                
                {/* Secondary blob */}
                <SecondaryBlob>
                  <svg viewBox="0 0 150 150" fill="none">
                    <circle cx="75" cy="75" r="70" fill="#5a8a62" opacity="0.3" />
                  </svg>
                </SecondaryBlob>

                {/* Golden dots */}
                <GoldenDots className="top">
                  {[...Array(15)].map((_, i) => (
                    <Dot key={i} style={{ 
                      left: `${(i % 5) * 16}px`, 
                      top: `${Math.floor(i / 5) * 16}px` 
                    }} />
                  ))}
                </GoldenDots>

                <GoldenDots className="bottom">
                  {[...Array(12)].map((_, i) => (
                    <Dot key={i} style={{ 
                      left: `${(i % 4) * 16}px`, 
                      top: `${Math.floor(i / 4) * 16}px` 
                    }} />
                  ))}
                </GoldenDots>

                <MainImage 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=600&fit=crop"
                  alt="Yoga meditation practice"
                  loading="lazy"
                />
              </ImageWrapper>
            </StoryImageColumn>

            <StoryTextColumn as={motion.div} variants={itemVariants}>
              <SectionLabel>About Us</SectionLabel>
              <SectionTitle>How We Started</SectionTitle>
              <Description>
                Our journey began with a simple belief: that every person deserves 
                access to tools for inner peace and holistic wellness. What started 
                as personal practice evolved into a mission to guide others toward 
                their own transformation.
              </Description>
              <Description>
                Today, we combine ancient yogic wisdom with modern understanding 
                of mind-body connection. Our approach honors tradition while 
                embracing innovation, creating a unique path for each individual 
                who walks through our doors.
              </Description>
              <LookMoreButton to="/contact">
                Look more
              </LookMoreButton>
            </StoryTextColumn>
          </StoryGrid>
        </Container>

        {/* Decorative monstera leaf */}
        <MonsteraDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e0e8e1" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,260 Q55,300 35,260" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,80 Q140,120 160,100" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q145,180 170,150" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q150,240 175,200" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
            <path d="M100,260 Q145,300 165,260" stroke="#e0e8e1" strokeWidth="1.5" fill="none" />
          </svg>
        </MonsteraDecor>
      </StorySection>

      {/* Why Choose Us Section */}
      <WhyUsSection ref={whyUsRef}>
        {/* Top wave */}
        <TopWave>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,120 1440,60 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </TopWave>

        {/* Decorative leaf on right */}
        <WhyUsLeafDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#d5e0d7" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,260 Q55,300 35,260" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,80 Q140,120 160,100" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q145,180 170,150" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q150,240 175,200" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
            <path d="M100,260 Q145,300 165,260" stroke="#d5e0d7" strokeWidth="1.5" fill="none" />
          </svg>
        </WhyUsLeafDecor>

        <Container>
          <WhyUsContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <WhyUsHeader>
                <WhyUsTitle>Why Choose Us</WhyUsTitle>
                <WhyUsDescription>
                  We believe wellness isn't about perfection — it's about presence. Our approach 
                  combines ancient yogic wisdom with modern understanding, creating a transformative 
                  experience that honors your unique journey.
                </WhyUsDescription>
              </WhyUsHeader>
            </motion.div>

            <WhyUsGrid>
              {/* Left Services */}
              <LeftServicesColumn>
                {leftServices.map((service, index) => (
                  <ServiceItem
                    key={index}
                    as={motion.div}
                    variants={itemVariants}
                    className="left"
                  >
                    <ServiceText className="left">
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDesc>{service.description}</ServiceDesc>
                    </ServiceText>
                    <ServiceIcon>
                      <FiCheck />
                    </ServiceIcon>
                  </ServiceItem>
                ))}
              </LeftServicesColumn>

              {/* Center Yoga Silhouette */}
              <CenterSilhouette as={motion.div} variants={itemVariants}>
                <YogaSilhouette>
                  <svg viewBox="0 0 300 500" fill="none">
                    {/* Yoga pose silhouette - person in tree pose with arms up */}
                    <defs>
                      <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#b8ceba" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8ecfb3" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Head */}
                    <ellipse cx="150" cy="45" rx="28" ry="32" fill="url(#silhouetteGradient)" />
                    {/* Neck */}
                    <path d="M140,75 L140,95 L160,95 L160,75" fill="url(#silhouetteGradient)" />
                    {/* Left arm raised */}
                    <path d="M140,100 Q100,60 85,20 Q82,10 90,8 Q98,6 102,15 Q115,55 145,95" fill="url(#silhouetteGradient)" />
                    {/* Right arm raised */}
                    <path d="M160,100 Q200,60 215,20 Q218,10 210,8 Q202,6 198,15 Q185,55 155,95" fill="url(#silhouetteGradient)" />
                    {/* Torso */}
                    <path d="M125,95 L175,95 L180,200 L120,200 Z" fill="url(#silhouetteGradient)" />
                    {/* Left leg (standing) */}
                    <path d="M120,200 L115,380 Q113,420 130,480 L145,480 Q148,420 140,380 L145,200" fill="url(#silhouetteGradient)" />
                    {/* Right leg (bent in tree pose) */}
                    <path d="M155,200 L160,230 Q200,240 210,280 Q215,300 195,310 Q175,320 160,280 Q155,250 155,220" fill="url(#silhouetteGradient)" />
                    {/* Decorative curved lines */}
                    <path d="M80,120 Q60,200 70,300" stroke="#c5ddc8" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    <path d="M220,120 Q240,200 230,300" stroke="#c5ddc8" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  </svg>
                </YogaSilhouette>
              </CenterSilhouette>

              {/* Right Services */}
              <RightServicesColumn>
                {rightServices.map((service, index) => (
                  <ServiceItem
                    key={index}
                    as={motion.div}
                    variants={itemVariants}
                    className="right"
                  >
                    <ServiceIcon>
                      <FiCheck />
                    </ServiceIcon>
                    <ServiceText className="right">
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDesc>{service.description}</ServiceDesc>
                    </ServiceText>
                  </ServiceItem>
                ))}
              </RightServicesColumn>
            </WhyUsGrid>
          </WhyUsContent>
        </Container>

        {/* Bottom wave */}
        <BottomWave>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </BottomWave>
      </WhyUsSection>

      {/* Values Section */}
      <ValuesSection ref={valuesRef}>
        <Container>
          <ValuesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <ValuesHeader>
                <SectionLabel className="center">Our Values</SectionLabel>
                <ValuesTitle>What Makes Us Different</ValuesTitle>
              </ValuesHeader>
            </motion.div>

            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesContent>
        </Container>

        {/* Decorative leaf */}
        <DecorLeafRight>
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M60 30V270" stroke="#e8f0e9" strokeWidth="1" />
          </svg>
        </DecorLeafRight>
      </ValuesSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTACard
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTAContent>
              <CTALabel>Start Your Journey</CTALabel>
              <CTATitle>Ready to Transform Your Life?</CTATitle>
              <CTADescription>
                Take the first step toward inner peace and holistic wellness. 
                We're here to guide you every step of the way.
              </CTADescription>
              <CTAButtons>
                <PrimaryButton to="/contact">
                  Book a Session
                  <FiArrowRight />
                </PrimaryButton>
                <SecondaryButton to="/services">
                  Explore Services
                </SecondaryButton>
              </CTAButtons>
            </CTAContent>

            <CTADecor>
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                <circle cx="100" cy="100" r="40" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
              </svg>
            </CTADecor>
          </CTACard>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 50vh;
  background: linear-gradient(180deg, #eef4ef 0%, #dce8de 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 40vh;
    padding: 6rem 0 4rem;
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.6;
  pointer-events: none;

  &.left {
    left: 2%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 2%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 400;
  color: #2a3a2e;
  font-style: italic;
  margin: 0;
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Story Section
const StorySection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryImageColumn = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`;

const BlobBackground = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SecondaryBlob = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  left: -30px;
  bottom: -20px;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const GoldenDots = styled.div`
  position: absolute;
  z-index: 3;

  &.top {
    top: -20px;
    left: -40px;
    width: 80px;
    height: 50px;
  }

  &.bottom {
    bottom: 40px;
    right: -30px;
    width: 65px;
    height: 50px;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #c9a227;
  border-radius: 50%;
`;

const MainImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border-radius: 0 80px 0 80px;
  object-fit: cover;
  aspect-ratio: 5/6;
`;

const StoryTextColumn = styled.div``;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.02em;
  color: #c9a227;
  margin-bottom: 0.75rem;

  &.center {
    display: block;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const LookMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2.5rem;
  background: transparent;
  color: #c9a227;
  border: 1.5px solid #c9a227;
  border-radius: 0;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #c9a227;
    color: #ffffff;
  }
`;

const MonsteraDecor = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Why Us Section
const WhyUsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #f0f5f1 0%, #e8f0e9 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const WhyUsLeafDecor = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const TopWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const BottomWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const WhyUsContent = styled.div``;

const WhyUsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const WhyUsTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const WhyUsDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  max-width: 750px;
  margin: 0 auto;
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    order: 2;
  }
`;

const RightServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    order: 3;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  &.left {
    flex-direction: row;
    text-align: right;

    @media (max-width: 1024px) {
      flex-direction: row-reverse;
      text-align: left;
    }
  }

  &.right {
    flex-direction: row;
    text-align: left;
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: #5a8a62;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ServiceText = styled.div`
  &.left {
    @media (max-width: 1024px) {
      text-align: left;
    }
  }
`;

const ServiceTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 500;
  color: #2a3a2e;
  margin-bottom: 0.35rem;
`;

const ServiceDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #6b7c6f;
  margin: 0;
`;

const CenterSilhouette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const YogaSilhouette = styled.div`
  width: 100%;
  max-width: 280px;
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 200px;
  }
`;

// Values Section
const ValuesSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const ValuesContent = styled.div``;

const ValuesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ValuesTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: #f8f9f6;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #5a8a62, #8ecfb3);
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.75rem;
`;

const ValueTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: #2a3a2e;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
`;

const DecorLeafRight = styled.div`
  position: absolute;
  right: -20px;
  bottom: 10%;
  width: 100px;
  height: 280px;
  opacity: 0.4;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 4rem 0 6rem;
  background: #f8f9f6;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 3rem 0 4rem;
  }
`;

const CTACard = styled.div`
  background: linear-gradient(135deg, #2a3a2e 0%, #3d5a40 100%);
  border-radius: 28px;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2.5rem 2rem;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const CTALabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9375rem 2rem;
  background: #5a8a62;
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #4a7a52;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9375rem 2rem;
  background: transparent;
  color: #c9a227;
  border: 1.5px solid #c9a227;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #c9a227;
    color: #ffffff;
  }
`;

const CTADecor = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  height: 250px;
  opacity: 0.3;
  pointer-events: none;
  animation: spin 25s linear infinite;

  @keyframes spin {
    from { transform: translateY(-50%) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg); }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default About;
