import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiSun, FiTarget, FiUsers, FiCheck, FiArrowRight, FiZap } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Philosophy = () => {
  const heroRef = useRef(null);
  const principlesRef = useRef(null);
  const approachRef = useRef(null);
  const beneficiariesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.3 });
  const approachInView = useInView(approachRef, { once: true, amount: 0.2 });
  const beneficiariesInView = useInView(beneficiariesRef, { once: true, amount: 0.3 });

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

  const principles = [
    {
      icon: <FiHeart />,
      title: 'Mind-First Healing',
      description: 'True healing begins with the mind. When the mind is calm and balanced, the body naturally heals and transforms.',
      gradient: 'linear-gradient(135deg, #C25964, #F5C5CA)',
      color: '#C25964'
    },
    {
      icon: <FiTarget />,
      title: 'Root-Cause Oriented',
      description: 'We address the underlying causes, not just symptoms, empowering sustainable transformation and lasting wellness.',
      gradient: 'linear-gradient(135deg, #D4848C, #F5C5CA)',
      color: '#C25964'
    },
    {
      icon: <FiSun />,
      title: 'Holistic Integration',
      description: 'Combining ancient yogic wisdom with modern NLP, gut health science, and mindful nutrition for complete well-being.',
      gradient: 'linear-gradient(135deg, #F5C5CA, #FFF0F2)',
      color: '#C25964'
    },
    {
      icon: <FiUsers />,
      title: 'Compassionate Guidance',
      description: 'Every individual\'s journey is unique. We provide personalized, compassionate support adapted to your needs.',
      gradient: 'linear-gradient(135deg, #C25964, #D4848C)',
      color: '#C25964'
    },
  ];

  const expertiseAreas = [
    {
      title: 'Yoga & Breathing',
      description: 'Improve flexibility and strength with yoga, stretching exercises, and breathing techniques.',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&h=600&fit=crop&q=100',
      icon: '🧘‍♀️'
    },
    {
      title: 'Meditation & Mindfulness',
      description: 'Cultivate peace and balance through meditation and mindfulness practices.',
      image: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&h=600&fit=crop&q=100',
      icon: '🪷'
    },
    {
      title: 'Mind Coaching (NLP)',
      description: 'Transform your mindset using powerful NLP tools and techniques.',
      image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&h=600&fit=crop&q=100',
      icon: '🧠'
    },
    {
      title: 'Emotional Wellness',
      description: 'Comprehensive support for stress, anxiety, and emotional well-being.',
      image: 'https://images.unsplash.com/photo-1499728603263-13571c13a2d7?w=800&h=600&fit=crop&q=100',
      icon: '💚'
    },
    {
      title: 'Counseling Services',
      description: 'Personalized counseling for children, adolescents, and adults.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=100',
      icon: '🤝'
    },
    {
      title: 'Relationship Healing',
      description: 'Restore harmony and emotional healing in your relationships.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=100',
      icon: '❤️'
    },
    {
      title: 'Gut Health',
      description: 'Restore your well-being with natural healing therapies and gut health correction.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=100',
      icon: '🌿'
    },
    {
      title: 'Weight Management',
      description: 'Guidance on nourishing your body and mind with healthy weight loss programs.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=100',
      icon: '🍊'
    },
    {
      title: 'Lifestyle Transformation',
      description: 'Deepen your practice with immersive lifestyle and habit transformation.',
      image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=600&fit=crop&q=100',
      icon: '⚖️'
    },
  ];

  const beneficiaries = [
    {
      title: 'Children & Students',
      description: 'Supporting young minds through emotional challenges, stress management, and building healthy habits early.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=100',
      emoji: '🎓'
    },
    {
      title: 'Working Professionals',
      description: 'Managing workplace stress, achieving work-life balance, and maintaining physical and mental wellness.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=100',
      emoji: '💼'
    },
    {
      title: 'Adults & Seniors',
      description: 'Navigating life transitions, relationship challenges, and maintaining vitality through holistic practices.',
      image: 'https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=1200&h=800&fit=crop&q=100',
      emoji: '🌟'
    },
    {
      title: 'Wellness Seekers',
      description: 'Anyone seeking digestive health, weight management, emotional balance, and a sustainable healthy lifestyle.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&h=800&fit=crop&q=100',
      emoji: '🧘'
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#F5C5CA" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="#F5C5CA" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="#F5C5CA" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#F5C5CA" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="#F5C5CA" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="#F5C5CA" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="#F5C5CA" strokeWidth="0.8" />
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
              <HeroTitle>Our Philosophy</HeroTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <HeroSubtitle>
                Learn about our holistic approach to health & wellbeing
              </HeroSubtitle>
            </motion.div>
          </HeroContent>
        </Container>

        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Our Story Section */}
      <OurStorySection>
        <Container>
          <OurStoryGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <OurStoryImageColumn as={motion.div} variants={itemVariants}>
              <OurStoryImageWrapper>
                <OurStoryBlobBackground>
                  <svg viewBox="0 0 400 500" fill="none">
                    <path d="M320,250 C350,380 280,470 180,480 C80,490 20,400 25,280 C30,160 90,40 200,30 C310,20 290,120 320,250 Z" fill="#FFF0F2" />
                  </svg>
                </OurStoryBlobBackground>
                <OurStoryImage 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=1500&fit=crop&q=100"
                  alt="BK Shikha - Holistic Wellness Coach"
                  loading="lazy"
                />
                <OurStoryFloatingBadge
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <span>12+</span>
                  <small>Years in Yoga</small>
                </OurStoryFloatingBadge>
                <OurStoryFloatingBadge2
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <span>15+</span>
                  <small>Years in Meditation</small>
                </OurStoryFloatingBadge2>
              </OurStoryImageWrapper>
            </OurStoryImageColumn>

            <OurStoryTextColumn as={motion.div} variants={itemVariants}>
              <SectionLabel>Our Story</SectionLabel>
              <OurStoryTitle>Discover the Journey Behind BK Shikha's Wellness Mission</OurStoryTitle>
              <OurStoryDescription>
                BK Shikha is a dedicated <strong>Holistic Wellness Coach</strong> with over 12 years in Yoga 
                and 15 years in Meditation. As a certified <strong>NLP Practitioner</strong>, <strong>Gut Health Expert</strong>, 
                and <strong>Counselor</strong>, she specializes in mind-body healing, supporting children, teenagers, 
                and adults through stress, anxiety, emotional wellness, and relationship challenges.
              </OurStoryDescription>
              <OurStoryDescription>
                Her holistic approach combines ancient wisdom with modern science. True healing begins 
                with the mind — when calm and balanced, the body naturally transforms, empowering 
                long-term physical, mental, and emotional well-being.
              </OurStoryDescription>
              <OurStoryStats>
                <OurStoryStat>
                  <OurStoryStatIcon><FiHeart /></OurStoryStatIcon>
                  <OurStoryStatText>
                    <span>Mind-Body</span>
                    <small>Healing Expert</small>
                  </OurStoryStatText>
                </OurStoryStat>
                <OurStoryStat>
                  <OurStoryStatIcon><FiZap /></OurStoryStatIcon>
                  <OurStoryStatText>
                    <span>NLP</span>
                    <small>Certified Practitioner</small>
                  </OurStoryStatText>
                </OurStoryStat>
                <OurStoryStat>
                  <OurStoryStatIcon><FiUsers /></OurStoryStatIcon>
                  <OurStoryStatText>
                    <span>All Ages</span>
                    <small>Children to Adults</small>
                  </OurStoryStatText>
                </OurStoryStat>
              </OurStoryStats>
            </OurStoryTextColumn>
          </OurStoryGrid>
        </Container>
      </OurStorySection>

      {/* Core Philosophy Section */}
      <CoreSection>
        <Container>
          <CoreGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CoreTextColumn as={motion.div} variants={itemVariants}>
              <SectionLabel>Wellness Philosophy</SectionLabel>
              <SectionTitle>True Healing Begins with the Mind</SectionTitle>
              <QuoteText>
                "When the mind is calm and balanced, the body naturally heals and transforms."
              </QuoteText>
              <Description>
                This fundamental principle guides everything we do at BK Shikha. We believe that 
                lasting wellness cannot be achieved by treating symptoms alone. True transformation 
                happens when we address the root causes — the thoughts, beliefs, emotions, and 
                patterns that shape our physical and mental state.
              </Description>
              <Description>
                Our holistic approach integrates ancient wisdom with modern science, combining yoga, 
                meditation, NLP techniques, gut health expertise, and lifestyle coaching to create 
                sustainable, meaningful change in your life.
              </Description>
            </CoreTextColumn>

            <CoreImageColumn as={motion.div} variants={itemVariants}>
              <ImageWrapper>
                <BlobBackground>
                  <svg viewBox="0 0 400 450" fill="none">
                    <path d="M350,225 C350,350 275,425 175,425 C75,425 25,350 25,225 C25,100 100,25 200,25 C300,25 350,100 350,225 Z" fill="#F5C5CA" />
                  </svg>
                </BlobBackground>
                <MainImage 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=1200&fit=crop&q=100"
                  alt="Meditation and mindfulness practice"
                  loading="lazy"
                />
              </ImageWrapper>
            </CoreImageColumn>
          </CoreGrid>
        </Container>
      </CoreSection>

      {/* Principles Section */}
      <PrinciplesSection ref={principlesRef}>
        <TopWave>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,120 1440,60 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </TopWave>

        <Container>
          <PrinciplesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={principlesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <PrinciplesHeader>
                <SectionLabel className="center">Core Principles</SectionLabel>
                <PrinciplesTitle>Our Approach to Wellness</PrinciplesTitle>
              </PrinciplesHeader>
            </motion.div>

            <PrinciplesGrid>
              {principles.map((principle, index) => (
                <PrincipleCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  $gradient={principle.gradient}
                >
                  <PrincipleGlassCard>
                    <PrincipleIconWrapper $color={principle.color}>
                      <PrincipleIcon>{principle.icon}</PrincipleIcon>
                    </PrincipleIconWrapper>
                    <PrincipleTitle>{principle.title}</PrincipleTitle>
                    <PrincipleDescription>{principle.description}</PrincipleDescription>
                    <PrincipleArrow>
                      <FiArrowRight />
                    </PrincipleArrow>
                  </PrincipleGlassCard>
                </PrincipleCard>
              ))}
            </PrinciplesGrid>
          </PrinciplesContent>
        </Container>

        <BottomWave>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </BottomWave>
      </PrinciplesSection>

      {/* Expertise Areas Section */}
      <ExpertiseSection ref={approachRef}>
        <ExpertiseBackground />
        <Container>
          <ExpertiseContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
          >
            <ExpertiseHeader as={motion.div} variants={itemVariants}>
              <ExpertiseTitleGroup>
                <SectionTitle className="centered">Our Offerings</SectionTitle>
                <LotusIcon>
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M20 8 C20 8 15 12 15 18 C15 24 20 28 20 28 C20 28 25 24 25 18 C25 12 20 8 20 8 Z" stroke="#C25964" strokeWidth="1" fill="none" />
                    <path d="M12 16 C12 16 8 18 8 22 C8 26 12 30 12 30" stroke="#C25964" strokeWidth="0.8" fill="none" />
                    <path d="M28 16 C28 16 32 18 32 22 C32 26 28 30 28 30" stroke="#C25964" strokeWidth="0.8" fill="none" />
                    <path d="M10 22 C10 22 6 24 6 27 C6 30 10 32 10 32" stroke="#C25964" strokeWidth="0.6" fill="none" />
                    <path d="M30 22 C30 22 34 24 34 27 C34 30 30 32 30 32" stroke="#C25964" strokeWidth="0.6" fill="none" />
                  </svg>
                </LotusIcon>
              </ExpertiseTitleGroup>
              <ExpertiseSubtitle>
                A gentle path towards balance, strength, and inner peace.
              </ExpertiseSubtitle>
              <ExpertiseDescription>
                BK Shikha brings together over 12 years of Yoga experience, 15 years of Meditation 
                practice, and 2+ years of NLP expertise, offering a complete spectrum of holistic 
                wellness services tailored to your unique needs.
              </ExpertiseDescription>
            </ExpertiseHeader>

            <ExpertiseGrid>
              {expertiseAreas.map((area, index) => (
                <ExpertiseCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <ExpertiseCardImage>
                    <img src={area.image} alt={area.title} loading="lazy" />
                    <ExpertiseCardOverlay>
                      <ExpertiseEmoji>{area.icon}</ExpertiseEmoji>
                    </ExpertiseCardOverlay>
                  </ExpertiseCardImage>
                  <ExpertiseCardContent>
                    <ExpertiseCardTitle>{area.title}</ExpertiseCardTitle>
                    <ExpertiseCardDescription>{area.description}</ExpertiseCardDescription>
                  </ExpertiseCardContent>
                </ExpertiseCard>
              ))}
            </ExpertiseGrid>
          </ExpertiseContent>
        </Container>
      </ExpertiseSection>

      {/* Who Can Benefit Section */}
      <BeneficiariesSection ref={beneficiariesRef}>
        <Container>
          <BeneficiariesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={beneficiariesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <BeneficiariesHeader>
                <SectionLabel className="center">Who We Serve</SectionLabel>
                <BeneficiariesTitle>Who Can Benefit</BeneficiariesTitle>
              </BeneficiariesHeader>
            </motion.div>

            <BeneficiariesGrid>
              {beneficiaries.map((group, index) => (
                <BeneficiaryCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <BeneficiaryImageWrapper>
                    <BeneficiaryImage src={group.image} alt={group.title} loading="lazy" />
                    <BeneficiaryOverlay>
                      <BeneficiaryEmoji>{group.emoji}</BeneficiaryEmoji>
                    </BeneficiaryOverlay>
                  </BeneficiaryImageWrapper>
                  <BeneficiaryContent>
                    <BeneficiaryTitle>{group.title}</BeneficiaryTitle>
                    <BeneficiaryDescription>{group.description}</BeneficiaryDescription>
                  </BeneficiaryContent>
                </BeneficiaryCard>
              ))}
            </BeneficiariesGrid>
          </BeneficiariesContent>
        </Container>
      </BeneficiariesSection>

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
              <CTALabel>Experience the Transformation</CTALabel>
              <CTATitle>Ready to Begin Your Wellness Journey?</CTATitle>
              <CTADescription>
                Discover how our holistic, mind-first approach can help you achieve lasting 
                physical, mental, and emotional well-being.
              </CTADescription>
              <CTAButton to="/contact">
                <span>Book Your Consultation</span>
                <FiArrowRight />
              </CTAButton>
            </CTAContent>
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
  min-height: 55vh;
  background: 
    linear-gradient(180deg, rgba(238, 244, 239, 0.88) 0%, rgba(220, 232, 222, 0.82) 100%),
    url('/2/4.jpg.jpeg');
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: calc(8rem + var(--navbar-h)) 0 6rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 45vh;
    padding: calc(6rem + var(--navbar-h)) 0 4rem;
    background-attachment: scroll;
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
  margin: 0 0 1rem 0;
`;

const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: #C25964;
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

// Our Story Section
const OurStorySection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const OurStoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const OurStoryImageColumn = styled.div`
  position: relative;
`;

const OurStoryImageWrapper = styled.div`
  position: relative;
  padding: 2rem;
`;

const OurStoryBlobBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const OurStoryImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 200px 200px 100px 100px;
  box-shadow: 0 25px 60px rgba(42, 58, 46, 0.15);
`;

const OurStoryFloatingBadge = styled.div`
  position: absolute;
  top: 15%;
  right: 0;
  background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(90, 138, 98, 0.3);
  z-index: 2;

  span {
    display: block;
    font-family: ${theme.fonts.heading};
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1;
  }

  small {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: 10%;
    right: 5%;
    padding: 0.75rem 1rem;
    
    span {
      font-size: 1.5rem;
    }
  }
`;

const OurStoryFloatingBadge2 = styled(OurStoryFloatingBadge)`
  top: auto;
  bottom: 20%;
  right: -10px;
  background: linear-gradient(135deg, #D4848C 0%, #F5C5CA 100%);
  box-shadow: 0 10px 30px rgba(201, 162, 39, 0.3);

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: 15%;
    right: 0;
  }
`;

const OurStoryTextColumn = styled.div``;

const OurStoryTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.25;
  margin-bottom: 1.5rem;
`;

const OurStoryDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;

  strong {
    color: #C25964;
    font-weight: 600;
  }
`;

const OurStoryStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #F5C5CA;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const OurStoryStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OurStoryStatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFF7F8 0%, #FFF0F2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C25964;
  font-size: 1rem;
`;

const OurStoryStatText = styled.div`
  span {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: 0.9375rem;
    font-weight: 600;
    color: #2a3a2e;
    line-height: 1.2;
  }

  small {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: 0.8125rem;
    color: #6b7c6f;
    margin-top: 0.125rem;
  }
`;

// Core Section
const CoreSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const CoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CoreTextColumn = styled.div``;

const CoreImageColumn = styled.div`
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: -1;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.02em;
  color: #C25964;
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

  &.centered {
    text-align: center;
    margin-bottom: 0;
  }
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  color: #C25964;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid #F5C5CA;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;
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

const MainImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border-radius: 0 80px 0 80px;
  object-fit: cover;
  aspect-ratio: 5/6;
`;

// Principles Section
const PrinciplesSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #f0f5f1 0%, #e8f0e9 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
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

const PrinciplesContent = styled.div``;

const PrinciplesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PrinciplesTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PrincipleCard = styled.div`
  background: ${props => props.$gradient};
  padding: 3px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$gradient};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }
`;

const PrincipleGlassCard = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: 2.5rem 2rem;
  border-radius: 22px;
  position: relative;
  height: 100%;
`;

const PrincipleIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${props => props.$color};
    border-radius: 50%;
    opacity: 0.15;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.1); opacity: 0.25; }
  }
`;

const PrincipleIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.9));
  border-radius: 50%;
  color: ${props => props.theme?.colors?.primary || '#C25964'};
  font-size: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  border: 1px solid rgba(90, 138, 98, 0.1);
`;

const PrincipleTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const PrincipleDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin-bottom: 0;
`;

const PrincipleArrow = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 138, 98, 0.08);
  border-radius: 50%;
  color: #C25964;
  font-size: 1.125rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  ${PrincipleCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Expertise Section
const ExpertiseSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #faf7f2 0%, #f5ede4 50%, #f8f3eb 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const ExpertiseBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(200, 162, 39, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(90, 138, 98, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(142, 207, 179, 0.05) 0%, transparent 60%);
  pointer-events: none;
`;

const ExpertiseContent = styled.div``;

const ExpertiseHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const ExpertiseTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LotusIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ExpertiseSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-style: italic;
  color: #7a6f5d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ExpertiseDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.6);

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
    transform: translateY(-10px);
    border-color: rgba(200, 162, 39, 0.3);
  }
`;

const ExpertiseCardImage = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ExpertiseCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ExpertiseCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(42, 58, 46, 0.1) 0%, rgba(42, 58, 46, 0.4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExpertiseEmoji = styled.div`
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${ExpertiseCard}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`;

const ExpertiseCardContent = styled.div`
  padding: 1.75rem 1.5rem;
  text-align: center;
`;

const ExpertiseCardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: #2a3a2e;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const ExpertiseCardDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #6b7c6f;
  margin: 0;
`;

// Beneficiaries Section
const BeneficiariesSection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const BeneficiariesContent = styled.div``;

const BeneficiariesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BeneficiariesTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`;

const BeneficiariesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BeneficiaryCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(90, 138, 98, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    transform: translateY(-8px);
    border-color: rgba(90, 138, 98, 0.15);
  }
`;

const BeneficiaryImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const BeneficiaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${BeneficiaryCard}:hover & {
    transform: scale(1.1);
  }
`;

const BeneficiaryOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(42, 58, 46, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const BeneficiaryEmoji = styled.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${BeneficiaryCard}:hover & {
    transform: scale(1.2) rotate(10deg);
  }
`;

const BeneficiaryContent = styled.div`
  padding: 2rem 1.75rem;
`;

const BeneficiaryTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 0.875rem;
  line-height: 1.3;
`;

const BeneficiaryDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
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
  color: #C25964;
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

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.75rem;
  background: linear-gradient(135deg, #C25964, #D4848C);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #A3404B, #C25964);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(90, 138, 98, 0.3);

    &::before {
      opacity: 1;
    }
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export default Philosophy;
