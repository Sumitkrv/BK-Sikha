import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiStar, FiUsers, FiAward, FiCheck, FiPlay, FiTarget, FiZap, FiFeather, FiSun, FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// HD Images
const aboutImages = {
  hero: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&q=80",
  founder: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop&q=80",
  meditation: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&h=600&fit=crop&q=80",
  yoga: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop&q=80",
  nature: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&q=80",
  wellness: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=600&fit=crop&q=80",
  studio: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop&q=80",
};

const heroVideo = "https://cdn.pixabay.com/video/2024/02/08/199847-912188425_large.mp4";

const milestones = [
  { year: '2009', title: 'The Beginning', description: 'Started the journey into meditation and self-discovery practices.' },
  { year: '2012', title: 'Yoga Mastery', description: 'Completed advanced yoga teacher training and began instructing.' },
  { year: '2015', title: 'NLP Certification', description: 'Became a certified NLP practitioner to enhance coaching methods.' },
  { year: '2018', title: 'Holistic Expansion', description: 'Integrated gut health and nutrition into wellness programs.' },
  { year: '2021', title: 'Global Reach', description: 'Launched online programs reaching students worldwide.' },
  { year: '2024', title: 'Community Impact', description: 'Transformed 5000+ lives through holistic wellness coaching.' },
];

const credentials = [
  { icon: <FiAward />, title: 'Certified Yoga Instructor', org: 'Yoga Alliance International' },
  { icon: <FiStar />, title: 'NLP Master Practitioner', org: 'Society of NLP' },
  { icon: <FiHeart />, title: 'Meditation Guide', org: 'Brahma Kumaris World Spiritual University' },
  { icon: <FiTarget />, title: 'Gut Health Expert', org: 'Institute of Integrative Nutrition' },
  { icon: <FiZap />, title: 'Wellness Counselor', org: 'NIMHANS Certified' },
  { icon: <FiFeather />, title: 'Breathwork Facilitator', org: 'Art of Living Foundation' },
];

const values = [
  {
    icon: <FiHeart />,
    title: 'Root-Cause Healing',
    description: 'We address underlying causes, not just symptoms, for lasting transformation.',
    color: '#5a8a62',
  },
  {
    icon: <FiSun />,
    title: 'Mind-First Approach',
    description: 'True healing begins with the mind. When calm, the body naturally transforms.',
    color: '#cec5ad',
  },
  {
    icon: <FiUsers />,
    title: 'Holistic Integration',
    description: 'Combining ancient yogic wisdom with modern science for complete well-being.',
    color: '#8ecfb3',
  },
  {
    icon: <FiFeather />,
    title: 'Compassionate Care',
    description: 'Every journey is unique. We provide personalized guidance with empathy.',
    color: '#22371b',
  },
];

const stats = [
  { number: '15+', label: 'Years Experience', icon: <FiCalendar /> },
  { number: '5000+', label: 'Lives Transformed', icon: <FiUsers /> },
  { number: '12+', label: 'Years in Yoga', icon: <FiSun /> },
  { number: '98%', label: 'Satisfaction', icon: <FiHeart /> },
];

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const credentialsRef = useRef(null);
  const missionRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const credentialsInView = useInView(credentialsRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <PageWrapper>
      {/* Cinematic Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroVideoWrapper style={{ y: heroY }}>
          <HeroVideo autoPlay muted loop playsInline poster={aboutImages.hero}>
            <source src={heroVideo} type="video/mp4" />
          </HeroVideo>
          <VideoOverlay />
        </HeroVideoWrapper>

        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />

        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <HeroContent
          as={motion.div}
          style={{ opacity: heroOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <HeroLabel>
              <FiFeather /> Discover Our Story
            </HeroLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroTitle>
              Where Ancient Wisdom<br />
              <HeroTitleAccent>Meets Modern Healing</HeroTitleAccent>
            </HeroTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroDescription>
              A journey of 15+ years in holistic wellness, dedicated to transforming lives 
              through the profound connection of mind, body, and soul.
            </HeroDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroStats>
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <StatDivider />}
                  <StatItem>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                </React.Fragment>
              ))}
            </HeroStats>
          </motion.div>
        </HeroContent>

        <ScrollIndicator>
          <ScrollText>Scroll to Explore</ScrollText>
          <ScrollLine />
        </ScrollIndicator>

        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Founder Story Section */}
      <StorySection ref={storyRef}>
        <Container>
          <StoryGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <StoryImageColumn as={motion.div} variants={itemVariants}>
              <StoryImageWrapper>
                <BlobBackground>
                  <svg viewBox="0 0 500 600" preserveAspectRatio="none">
                    <path 
                      d="M380,100Q420,180,400,280Q380,380,300,450Q220,520,140,460Q60,400,80,300Q100,200,160,120Q220,40,300,60Q380,80,380,100Z" 
                      fill="#22371b"
                    />
                  </svg>
                </BlobBackground>
                
                <SecondaryBlob>
                  <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                    <circle cx="100" cy="100" r="90" fill="#8ecfb3" />
                  </svg>
                </SecondaryBlob>

                <AccentBlob>
                  <svg viewBox="0 0 150 150" preserveAspectRatio="none">
                    <circle cx="75" cy="75" r="70" fill="#5a8a62" opacity="0.6" />
                  </svg>
                </AccentBlob>

                <GoldenDots className="top">
                  {[...Array(15)].map((_, i) => (
                    <Dot key={i} style={{ 
                      left: `${(i % 5) * 14}px`, 
                      top: `${Math.floor(i / 5) * 14}px` 
                    }} />
                  ))}
                </GoldenDots>

                <GoldenDots className="bottom">
                  {[...Array(12)].map((_, i) => (
                    <Dot key={i} style={{ 
                      left: `${(i % 4) * 14}px`, 
                      top: `${Math.floor(i / 4) * 14}px` 
                    }} />
                  ))}
                </GoldenDots>

                <FounderImage 
                  src={aboutImages.founder}
                  alt="BK Shikha - Holistic Wellness Coach"
                  loading="lazy"
                />

                <FloatingBadge>
                  <BadgeIcon><FiAward /></BadgeIcon>
                  <BadgeText>15+ Years Experience</BadgeText>
                </FloatingBadge>
              </StoryImageWrapper>
            </StoryImageColumn>

            <StoryTextColumn as={motion.div} variants={itemVariants}>
              <SectionLabel>Meet Your Guide</SectionLabel>
              <SectionTitle>The Soul Behind the Journey</SectionTitle>
              <StorySubtitle>BK Shikha — Holistic Wellness Coach & Spiritual Mentor</StorySubtitle>
              
              <Description>
                BK Shikha is a dedicated Holistic Wellness Coach, Yoga Instructor, Meditation Guide, 
                NLP Practitioner, Gut Health Expert, and Counselor. With over <strong>12 years of experience 
                in Yoga</strong> and <strong>15 years in Meditation</strong>, she brings a profound understanding of mind-body 
                healing to every individual she works with.
              </Description>
              
              <Description>
                Her approach is holistic, compassionate, and root-cause oriented. She specializes in 
                supporting children, teenagers, and adults through stress, anxiety, depression, emotional 
                imbalance, relationship issues, gut health correction, and sustainable weight management.
              </Description>

              <HighlightQuote>
                "True healing begins with the mind — when calm and balanced, the body naturally transforms."
              </HighlightQuote>

              <SpecializationTags>
                <SpecTag><FiCheck /> Stress & Anxiety</SpecTag>
                <SpecTag><FiCheck /> Emotional Balance</SpecTag>
                <SpecTag><FiCheck /> Gut Health</SpecTag>
                <SpecTag><FiCheck /> Weight Management</SpecTag>
                <SpecTag><FiCheck /> Relationship Healing</SpecTag>
                <SpecTag><FiCheck /> NLP Coaching</SpecTag>
              </SpecializationTags>

              <StoryButtons>
                <PrimaryButton to="/contact">
                  Begin Your Journey
                  <FiArrowRight />
                </PrimaryButton>
                <SecondaryButton to="/services">
                  Explore Services
                </SecondaryButton>
              </StoryButtons>
            </StoryTextColumn>
          </StoryGrid>
        </Container>

        <StoryDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e8f0e9" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
          </svg>
        </StoryDecor>
      </StorySection>

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
                <SectionLabel className="center">Wellness Philosophy</SectionLabel>
                <SectionTitle className="center">Our Core Values</SectionTitle>
                <ValuesDescription>
                  These foundational principles guide every aspect of our approach to holistic wellness.
                </ValuesDescription>
              </ValuesHeader>
            </motion.div>

            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 25px 60px rgba(34, 55, 27, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <ValueIconWrapper style={{ background: value.color }}>
                    {value.icon}
                  </ValueIconWrapper>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesContent>
        </Container>

        <ValuesDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e8f0e9" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
          </svg>
        </ValuesDecor>
      </ValuesSection>

      {/* Timeline Section */}
      <TimelineSection ref={timelineRef}>
        <Container>
          <TimelineContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <TimelineHeader>
                <SectionLabel className="center light">The Journey</SectionLabel>
                <SectionTitle className="center light">Milestones of Transformation</SectionTitle>
              </TimelineHeader>
            </motion.div>

            <TimelineTrack>
              {milestones.map((milestone, index) => (
                <TimelineItem 
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  className={index % 2 === 0 ? 'left' : 'right'}
                >
                  <TimelineYear>{milestone.year}</TimelineYear>
                  <TimelineCard
                    as={motion.div}
                    whileHover={{ scale: 1.02 }}
                  >
                    <TimelineCardTitle>{milestone.title}</TimelineCardTitle>
                    <TimelineDesc>{milestone.description}</TimelineDesc>
                  </TimelineCard>
                  <TimelineDot />
                </TimelineItem>
              ))}
              <TimelineLine />
            </TimelineTrack>
          </TimelineContent>
        </Container>

        <TimelineOrb className="orb1" />
        <TimelineOrb className="orb2" />
      </TimelineSection>

      {/* Credentials Section */}
      <CredentialsSection ref={credentialsRef}>
        <Container>
          <CredentialsContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={credentialsInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <CredentialsHeader>
                <SectionLabel className="center">Certifications</SectionLabel>
                <SectionTitle className="center">Credentials & Expertise</SectionTitle>
                <CredentialsDesc>
                  Backed by internationally recognized certifications and years of dedicated practice.
                </CredentialsDesc>
              </CredentialsHeader>
            </motion.div>

            <CredentialsGrid>
              {credentials.map((cred, index) => (
                <CredentialCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <CredentialIcon>{cred.icon}</CredentialIcon>
                  <CredentialTitle>{cred.title}</CredentialTitle>
                  <CredentialOrg>{cred.org}</CredentialOrg>
                </CredentialCard>
              ))}
            </CredentialsGrid>
          </CredentialsContent>
        </Container>
      </CredentialsSection>

      {/* Studio Image Section */}
      <StudioSection>
        <StudioImageWrapper>
          <StudioImage src={aboutImages.studio} alt="Wellness Studio" loading="lazy" />
          <StudioOverlay />
          <StudioContent>
            <StudioBadge>
              <FiPlay /> Virtual & In-Person Sessions
            </StudioBadge>
            <StudioTitle>A Sacred Space for Healing</StudioTitle>
            <StudioDesc>
              Whether you join us in our serene studio or connect virtually, 
              every session is designed to create a sanctuary for your transformation.
            </StudioDesc>
          </StudioContent>
        </StudioImageWrapper>
      </StudioSection>

      {/* Quote Section */}
      <QuoteSection>
        <QuoteContent>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            The greatest wealth is health. When we nurture our mind, 
            the body follows, and the soul finds its true purpose.
          </QuoteText>
          <QuoteAuthor>— BK Shikha</QuoteAuthor>
        </QuoteContent>
        <QuoteOrb className="left" />
        <QuoteOrb className="right" />
      </QuoteSection>

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
            <CTAGrid>
              <CTAContent>
                <CTALabel>Begin Your Transformation</CTALabel>
                <CTATitle>Ready to Experience True Wellness?</CTATitle>
                <CTADescription>
                  Whether you seek stress relief, emotional balance, gut health improvement, 
                  or sustainable weight management, BK Shikha is here to guide you with 
                  compassion and expertise.
                </CTADescription>
                <CTAFeatures>
                  <CTAFeature><FiCheck /> Personalized Approach</CTAFeature>
                  <CTAFeature><FiCheck /> 15+ Years Experience</CTAFeature>
                  <CTAFeature><FiCheck /> Virtual & In-Person</CTAFeature>
                  <CTAFeature><FiCheck /> Holistic Healing</CTAFeature>
                </CTAFeatures>
                <CTAButtons>
                  <PrimaryButton to="/contact">
                    Book Free Consultation
                    <FiArrowRight />
                  </PrimaryButton>
                  <SecondaryButton to="/services">
                    Explore Programs
                  </SecondaryButton>
                </CTAButtons>
              </CTAContent>
              <CTAImageSide>
                <CTAImage src={aboutImages.meditation} alt="Start your wellness journey" />
                <CTAImageOverlay />
              </CTAImageSide>
            </CTAGrid>
          </CTACard>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 10rem;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 90vh;
    padding: 6rem 0 8rem;
  }
`;

const HeroVideoWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(33, 55, 26, 0.7) 50%,
    rgba(34, 55, 27, 0.85) 100%
  );
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 10s ease-in-out infinite;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 3s;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: #8ecfb3;
    top: 40%;
    left: 20%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.05); }
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.8;
  pointer-events: none;
  z-index: 1;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 2rem;
`;

const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
`;

const HeroTitleAccent = styled.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`;

const HeroDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const StatDivider = styled.div`
  width: 1px;
  height: 50px;
  background: rgba(206, 197, 173, 0.3);

  @media (max-width: 600px) {
    height: 40px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
`;

const ScrollText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(206, 197, 173, 0.8), transparent);
  animation: scrollPulse 2s ease-in-out infinite;

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; transform: scaleY(1); }
    50% { opacity: 0.5; transform: scaleY(0.8); }
  }
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Story Section
const StorySection = styled.section`
  padding: 7rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryImageColumn = styled.div`
  position: relative;
`;

const StoryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: 580px;

  @media (max-width: 768px) {
    height: 450px;
    max-width: 380px;
  }
`;

const BlobBackground = styled.div`
  position: absolute;
  top: 5%;
  left: 8%;
  width: 90%;
  height: 95%;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SecondaryBlob = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  width: 140px;
  height: 140px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const AccentBlob = styled.div`
  position: absolute;
  bottom: 20px;
  left: -20px;
  width: 100px;
  height: 100px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const GoldenDots = styled.div`
  position: absolute;
  z-index: 4;

  &.top {
    top: 0;
    left: -30px;
    width: 70px;
    height: 45px;
  }

  &.bottom {
    bottom: 60px;
    right: -20px;
    width: 55px;
    height: 45px;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  background: #cec5ad;
  border-radius: 50%;
`;

const FounderImage = styled.img`
  position: absolute;
  top: 10%;
  left: 15%;
  width: 75%;
  height: 85%;
  object-fit: cover;
  border-radius: 0 100px 0 100px;
  z-index: 3;
  box-shadow: 0 30px 60px rgba(34, 55, 27, 0.2);
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #22371b;
  color: #cec5ad;
  padding: 0.875rem 1.5rem;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 10;
  box-shadow: 0 15px 40px rgba(34, 55, 27, 0.25);
`;

const BadgeIcon = styled.span`
  display: flex;
  font-size: 1rem;
`;

const BadgeText = styled.span``;

const StoryTextColumn = styled.div``;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;

  &.center {
    display: block;
    text-align: center;
  }

  &.light {
    color: #cec5ad;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;

  &.center {
    text-align: center;
  }

  &.light {
    color: #ffffff;
  }
`;

const StorySubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  font-weight: 500;
  color: #5a8a62;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;

  strong {
    color: #22371b;
    font-weight: 600;
  }
`;

const HighlightQuote = styled.blockquote`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-style: italic;
  color: #22371b;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  background: linear-gradient(135deg, rgba(206, 197, 173, 0.15), rgba(142, 207, 179, 0.1));
  border-left: 4px solid #cec5ad;
  border-radius: 0 16px 16px 0;
`;

const SpecializationTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const SpecTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: rgba(90, 138, 98, 0.1);
  color: #5a8a62;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    font-size: 0.75rem;
  }
`;

const StoryButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StoryDecor = styled.div`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.6;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Mission Section
const MissionSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 15px 50px rgba(34, 55, 27, 0.08);
  text-align: center;

  &.vision {
    background: #22371b;
    
    h3, p {
      color: white;
    }
    
    p {
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const MissionIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.75rem;

  &.mission {
    background: linear-gradient(135deg, #22371b, #5a8a62);
    color: #cec5ad;
  }

  &.vision {
    background: rgba(206, 197, 173, 0.2);
    color: #cec5ad;
  }
`;

const MissionTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`;

const MissionText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
`;

// Values Section
const ValuesSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const ValuesContent = styled.div``;

const ValuesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ValuesDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: #f8f9f6;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`;

const ValueIconWrapper = styled.div`
  width: 65px;
  height: 65px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
`;

const ValuesDecor = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.6;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Timeline Section
const TimelineSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const TimelineContent = styled.div``;

const TimelineHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const TimelineTrack = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #cec5ad, #cec5ad, transparent);
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  &.left {
    flex-direction: row;
    padding-right: calc(50% + 40px);
    text-align: right;

    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }

  &.right {
    flex-direction: row-reverse;
    padding-left: calc(50% + 40px);

    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #cec5ad;
  border: 3px solid #22371b;
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineYear = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: #cec5ad;
  min-width: 70px;

  @media (max-width: 768px) {
    position: absolute;
    left: 50px;
    top: -25px;
    font-size: 0.875rem;
  }
`;

const TimelineCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(206, 197, 173, 0.2);
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const TimelineCardTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const TimelineDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`;

const TimelineOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: #cec5ad;
    top: -100px;
    left: -100px;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: #8ecfb3;
    bottom: -50px;
    right: -50px;
  }
`;

// Credentials Section
const CredentialsSection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const CredentialsContent = styled.div``;

const CredentialsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CredentialsDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`;

const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CredentialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`;

const CredentialIcon = styled.div`
  width: 55px;
  height: 55px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  border-radius: 50%;
  color: #cec5ad;
  font-size: 1.25rem;
`;

const CredentialTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`;

const CredentialOrg = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
  margin: 0;
`;

// Studio Section
const StudioSection = styled.section`
  position: relative;
`;

const StudioImageWrapper = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const StudioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StudioOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(34, 55, 27, 0.9) 0%,
    rgba(34, 55, 27, 0.7) 50%,
    rgba(34, 55, 27, 0.4) 100%
  );
`;

const StudioContent = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StudioBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const StudioTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const StudioDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
`;

// Quote Section
const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const QuoteContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const QuoteMark = styled.span`
  display: block;
  font-family: ${theme.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`;

const QuoteAuthor = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const QuoteOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;

  &.left {
    background: #cec5ad;
    left: -100px;
    bottom: -100px;
  }

  &.right {
    background: #5a8a62;
    right: -100px;
    top: -100px;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const CTACard = styled.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
`;

const CTAGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CTAContent = styled.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const CTALabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`;

const CTAFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CTAFeature = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 0.875rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CTAImageSide = styled.div`
  position: relative;
  min-height: 400px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CTAImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CTAImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.2), rgba(90, 138, 98, 0.1));
`;

// Buttons
const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);

    svg {
      transform: translateX(4px);
    }
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`;

export default About;
