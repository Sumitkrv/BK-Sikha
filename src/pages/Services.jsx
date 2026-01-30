import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiTarget,
  FiZap,
  FiSun,
  FiCompass,
  FiSmile,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiStar,
} from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// HD Images from Unsplash - 4K Quality Unique Images
const heroVideo = "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4";
const serviceImages = {
  yoga: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1600&h=1200&fit=crop&q=100",
  meditation: "https://images.unsplash.com/photo-1512291313931-d4291c8475c4?w=1600&h=1200&fit=crop&q=100",
  mindset: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1600&h=1200&fit=crop&q=100",
  stress: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=1200&fit=crop&q=100",
  wellness: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=1600&h=1200&fit=crop&q=100",
  confidence: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=1600&h=1200&fit=crop&q=100",
};

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const journeyRef = useRef(null);
  const ctaRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
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

  const services = [
    {
      icon: <FiTarget />,
      image: serviceImages.yoga,
      title: 'Personalized Yoga',
      tagline: 'Move, Breathe, Transform',
      shortDesc: 'One-on-one sessions tailored to your body and goals',
      features: ['Custom practice design', 'Flexibility & strength', 'Mind-body connection', 'Daily routine building'],
      price: 'From ₹999',
      duration: '60 min sessions',
      color: '#22371b',
    },
    {
      icon: <FiHeart />,
      image: serviceImages.meditation,
      title: 'Emotional Wellness',
      tagline: 'Heal Your Heart, Find Peace',
      shortDesc: 'Deep emotional healing and mental balance coaching',
      features: ['Stress & anxiety relief', 'Emotional clarity', 'Healthy coping skills', 'Inner peace cultivation'],
      price: 'From ₹1,499',
      duration: '90 min sessions',
      color: '#5a8a62',
    },
    {
      icon: <FiZap />,
      image: serviceImages.mindset,
      title: 'Mindset Coaching',
      tagline: 'Reprogram Your Mind',
      shortDesc: 'NLP techniques for breakthrough success',
      features: ['Limiting beliefs release', 'Confidence building', 'Goal clarity', 'Success mindset'],
      price: 'From ₹1,999',
      duration: '75 min sessions',
      color: '#8ecfb3',
    },
    {
      icon: <FiSun />,
      image: serviceImages.stress,
      title: 'Stress Relief',
      tagline: 'Release Tension, Embrace Calm',
      shortDesc: 'Guided meditation and breathwork for deep relaxation',
      features: ['Deep relaxation', 'Better sleep', 'Worry release', 'Grounded state'],
      price: 'From ₹799',
      duration: '45 min sessions',
      color: '#cec5ad',
    },
    {
      icon: <FiCompass />,
      image: serviceImages.wellness,
      title: 'Holistic Transformation',
      tagline: 'Complete Life Redesign',
      shortDesc: 'Comprehensive program for total mind-body-spirit wellness',
      features: ['Lifestyle redesign', 'Energy & vitality', 'Purpose discovery', 'Lasting change'],
      price: 'From ₹4,999',
      duration: '3-12 month programs',
      color: '#21371a',
    },
    {
      icon: <FiSmile />,
      image: serviceImages.confidence,
      title: 'Self-Love Journey',
      tagline: 'Become Your Best Self',
      shortDesc: 'Build unshakeable confidence and self-acceptance',
      features: ['Self-esteem boost', 'Boundary setting', 'Authentic expression', 'Self-acceptance'],
      price: 'From ₹1,299',
      duration: '60 min sessions',
      color: '#7fb88a',
    },
  ];

  const journeySteps = [
    { number: '01', title: 'Discovery Call', desc: 'Free 15-min consultation to understand your needs' },
    { number: '02', title: 'Personalized Plan', desc: 'Custom program designed for your unique journey' },
    { number: '03', title: 'Begin Practice', desc: 'Start your transformation with guided sessions' },
    { number: '04', title: 'Evolve & Grow', desc: 'Ongoing support as you blossom into your best self' },
  ];

  return (
    <PageWrapper>
      {/* Immersive Hero Section */}
      <HeroSection ref={heroRef}>
        {/* Decorative Elements */}
        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />
        
        <LeafDecoration className="left">
          <svg viewBox="0 0 120 400" fill="none">
            <path d="M60 0C60 0 10 80 10 200C10 320 60 400 60 400" stroke="#cec5ad" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <path d="M60 50C60 50 30 100 30 200C30 300 60 350 60 350" stroke="#cec5ad" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M20 120C20 120 60 160 60 200" stroke="#cec5ad" strokeWidth="0.8" fill="none" opacity="0.3"/>
            <path d="M100 120C100 120 60 160 60 200" stroke="#cec5ad" strokeWidth="0.8" fill="none" opacity="0.3"/>
            <path d="M30 280C30 280 60 240 60 200" stroke="#cec5ad" strokeWidth="0.8" fill="none" opacity="0.3"/>
            <path d="M90 280C90 280 60 240 60 200" stroke="#cec5ad" strokeWidth="0.8" fill="none" opacity="0.3"/>
          </svg>
        </LeafDecoration>

        <LeafDecoration className="right">
          <svg viewBox="0 0 120 400" fill="none">
            <path d="M60 0C60 0 110 80 110 200C110 320 60 400 60 400" stroke="#cec5ad" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <path d="M60 50C60 50 90 100 90 200C90 300 60 350 60 350" stroke="#cec5ad" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
        </LeafDecoration>

        {/* Video Background */}
        <HeroVideoWrapper style={{ y: heroY }}>
          <HeroVideo autoPlay muted loop playsInline>
            <source src={heroVideo} type="video/mp4" />
          </HeroVideo>
          <VideoOverlay />
        </HeroVideoWrapper>

        <HeroContent
          as={motion.div}
          style={{ opacity: heroOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <HeroLabel>Transformational Services</HeroLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroTitle>
              Your Path to
              <br />
              <HeroTitleAccent>Wellness Awaits</HeroTitleAccent>
            </HeroTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroDescription>
              Discover personalized yoga, meditation, and holistic wellness programs 
              designed to transform your mind, body, and spirit.
            </HeroDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroButtons>
              <HeroPrimaryBtn as={Link} to="/contact">
                Start Your Journey <FiArrowRight />
              </HeroPrimaryBtn>
              <HeroSecondaryBtn onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </HeroSecondaryBtn>
            </HeroButtons>
          </motion.div>
        </HeroContent>

        {/* Wave Separator */}
        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#f8f9f6" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Services Showcase Section */}
      <ServicesShowcase id="services-grid" ref={servicesRef}>
        <Container>
          <SectionHeader
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>Our Services</SectionLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SectionTitle>Transform Every Aspect of Your Being</SectionTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SectionDescription>
                Whether you're seeking physical vitality, emotional balance, or complete life transformation,
                there's a path designed specifically for you.
              </SectionDescription>
            </motion.div>
          </SectionHeader>

          {/* Interactive Service Selector */}
          <ServicesTabs>
            {services.map((service, index) => (
              <ServiceTab
                key={index}
                $active={activeService === index}
                onClick={() => setActiveService(index)}
                as={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TabIcon $active={activeService === index}>{service.icon}</TabIcon>
                <TabTitle>{service.title}</TabTitle>
              </ServiceTab>
            ))}
          </ServicesTabs>

          {/* Active Service Display */}
          <ActiveServiceCard
            as={motion.div}
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceImageSide>
              <ServiceImageWrapper>
                <ServiceImage src={services[activeService].image} alt={services[activeService].title} />
                <ImageBlobBg style={{ backgroundColor: services[activeService].color }} />
              </ServiceImageWrapper>
              <FloatingBadge>
                <BadgeIcon><FiStar /></BadgeIcon>
                <BadgeText>Popular Choice</BadgeText>
              </FloatingBadge>
            </ServiceImageSide>

            <ServiceDetailsSide>
              <ServiceIcon style={{ backgroundColor: services[activeService].color }}>
                {services[activeService].icon}
              </ServiceIcon>
              <ServiceTagline>{services[activeService].tagline}</ServiceTagline>
              <ServiceName>{services[activeService].title}</ServiceName>
              <ServiceShortDesc>{services[activeService].shortDesc}</ServiceShortDesc>

              <FeaturesGrid>
                {services[activeService].features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FeatureCheck><FiCheck /></FeatureCheck>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </FeaturesGrid>

              <ServiceMeta>
                <MetaItem>
                  <MetaLabel>Investment</MetaLabel>
                  <MetaValue>{services[activeService].price}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Duration</MetaLabel>
                  <MetaValue>{services[activeService].duration}</MetaValue>
                </MetaItem>
              </ServiceMeta>

              <ServiceCTA as={Link} to="/contact">
                Book This Service <FiArrowRight />
              </ServiceCTA>
            </ServiceDetailsSide>
          </ActiveServiceCard>

          {/* All Services Grid */}
          <AllServicesGrid>
            {services.map((service, index) => (
              <ServiceMiniCard
                key={index}
                as={motion.div}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(34, 55, 27, 0.15)' }}
                onClick={() => setActiveService(index)}
              >
                <MiniCardImage>
                  <img src={service.image} alt={service.title} />
                  <MiniCardOverlay style={{ backgroundColor: service.color }} />
                </MiniCardImage>
                <MiniCardContent>
                  <MiniCardIcon style={{ color: service.color }}>{service.icon}</MiniCardIcon>
                  <MiniCardTitle>{service.title}</MiniCardTitle>
                  <MiniCardTagline>{service.tagline}</MiniCardTagline>
                  <MiniCardPrice>{service.price}</MiniCardPrice>
                </MiniCardContent>
              </ServiceMiniCard>
            ))}
          </AllServicesGrid>
        </Container>
      </ServicesShowcase>

      {/* Journey Section */}
      <JourneySection ref={journeyRef}>
        <JourneyBgPattern>
          <svg viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="100" r="150" fill="#22371b" opacity="0.03"/>
            <circle cx="700" cy="300" r="200" fill="#cec5ad" opacity="0.05"/>
            <circle cx="400" cy="50" r="100" fill="#5a8a62" opacity="0.04"/>
          </svg>
        </JourneyBgPattern>

        <Container>
          <JourneyContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel className="center">How It Works</SectionLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
              <JourneyTitle>Your Transformation Journey</JourneyTitle>
            </motion.div>

            <JourneySteps>
              {journeySteps.map((step, index) => (
                <JourneyStep
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                >
                  <StepNumber>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepContent>
                  {index < journeySteps.length - 1 && <StepConnector />}
                </JourneyStep>
              ))}
            </JourneySteps>
          </JourneyContent>
        </Container>
      </JourneySection>

      {/* Testimonial Quote */}
      <QuoteSection>
        <QuoteContainer>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            The journey of a thousand miles begins with a single step. 
            Let that step be towards your own well-being.
          </QuoteText>
          <QuoteAuthor>— BK Shikha</QuoteAuthor>
        </QuoteContainer>
      </QuoteSection>

      {/* CTA Section */}
      <CTASection ref={ctaRef}>
        <CTABlob className="left" />
        <CTABlob className="right" />
        
        <Container>
          <CTAContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <CTALabel>Ready to Begin?</CTALabel>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTATitle>Not Sure Which Path Is Right for You?</CTATitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTADescription>
                Let's have a heartfelt conversation about your goals, challenges, and dreams. 
                I'll help you discover the perfect service that aligns with your unique journey.
              </CTADescription>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTAButtons>
                <CTAPrimaryBtn as={Link} to="/contact">
                  Schedule Free Consultation <FiArrowRight />
                </CTAPrimaryBtn>
                <CTASecondaryBtn as={Link} to="/about">
                  Learn More About Me
                </CTASecondaryBtn>
              </CTAButtons>
            </motion.div>
          </CTAContent>
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 0 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    max-width: 1600px;
  }
`;

// Hero Section Styles
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  
  /* Extra small phones */
  @media (max-width: 360px) {
    min-height: auto;
    padding: 5rem 0 6rem;
  }
  
  /* Landscape mobile */
  @media (max-width: 896px) and (orientation: landscape) {
    min-height: auto;
    padding: 4rem 0 5rem;
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
  opacity: 0.4;
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
  filter: blur(60px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: #cec5ad;
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: #5a8a62;
    bottom: 10%;
    left: -50px;
    animation-delay: 2s;
  }

  &.orb3 {
    width: 200px;
    height: 200px;
    background: #8ecfb3;
    top: 40%;
    right: 20%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  width: 120px;
  height: 400px;
  z-index: 1;
  
  &.left {
    left: 2%;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    right: 2%;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
  }

  @media (max-width: \${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
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
  font-family: \${theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`;

const HeroTitleAccent = styled.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`;

const HeroDescription = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: \${theme.breakpoints.mobile}) {
    font-size: 1.0625rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroPrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #cec5ad;
  color: #22371b;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0d9c7;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(206, 197, 173, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const HeroSecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #ffffff;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cec5ad;
    color: #cec5ad;
  }
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Services Showcase Styles
const ServicesShowcase = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #22371b;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;

  &.center {
    display: block;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
  line-height: 1.2;
`;

const SectionDescription = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0;
`;

const ServicesTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const ServiceTab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: \${props => props.$active ? '#22371b' : 'white'};
  color: \${props => props.$active ? '#cec5ad' : '#22371b'};
  border: 2px solid \${props => props.$active ? '#22371b' : '#e8efe9'};
  border-radius: 100px;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #22371b;
    background: \${props => props.$active ? '#22371b' : 'rgba(34, 55, 27, 0.05)'};
  }
`;

const TabIcon = styled.span`
  font-size: 1rem;
  display: flex;
  color: \${props => props.$active ? '#cec5ad' : '#5a8a62'};
`;

const TabTitle = styled.span`
  @media (max-width: \${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ActiveServiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: white;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(34, 55, 27, 0.08);
  margin-bottom: 5rem;

  @media (max-width: \${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`;

const ServiceImageSide = styled.div`
  position: relative;
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const ImageBlobBg = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.3;
  z-index: 1;
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: -15px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #22371b;
  color: #cec5ad;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  z-index: 10;
`;

const BadgeIcon = styled.span`
  display: flex;
`;

const BadgeText = styled.span``;

const ServiceDetailsSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceTagline = styled.span`
  font-family: \${theme.fonts.heading};
  font-size: 1rem;
  font-style: italic;
  color: #5a8a62;
  margin-bottom: 0.5rem;
`;

const ServiceName = styled.h3`
  font-family: \${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
`;

const ServiceShortDesc = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  margin: 0 0 1.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FeatureCheck = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 138, 98, 0.15);
  color: #5a8a62;
  border-radius: 50%;
  font-size: 0.75rem;
`;

const FeatureText = styled.span`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
`;

const ServiceMeta = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div``;

const MetaLabel = styled.span`
  display: block;
  font-family: \${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`;

const MetaValue = styled.span`
  font-family: \${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
`;

const ServiceCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const AllServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: \${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceMiniCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #cec5ad;
  }
`;

const MiniCardImage = styled.div`
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  \${ServiceMiniCard}:hover & img {
    transform: scale(1.1);
  }
`;

const MiniCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  \${ServiceMiniCard}:hover & {
    opacity: 0.2;
  }
`;

const MiniCardContent = styled.div`
  padding: 1.5rem;
`;

const MiniCardIcon = styled.span`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const MiniCardTitle = styled.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.25rem;
`;

const MiniCardTagline = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-style: italic;
  color: #5a8a62;
  margin: 0 0 0.75rem;
`;

const MiniCardPrice = styled.span`
  font-family: \${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #cec5ad;
  background: #22371b;
  padding: 0.375rem 0.875rem;
  border-radius: 100px;
`;

// Journey Section Styles
const JourneySection = styled.section`
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const JourneyBgPattern = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const JourneyContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const JourneyTitle = styled.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 4rem;
`;

const JourneySteps = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: \${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const JourneyStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  position: relative;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22371b 0%, #5a8a62 100%);
  color: #cec5ad;
  font-family: \${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
`;

const StepContent = styled.div``;

const StepTitle = styled.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.5rem;
`;

const StepDesc = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  margin: 0;
`;

const StepConnector = styled.div`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #cec5ad, transparent);

  @media (max-width: \${theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Quote Section Styles
const QuoteSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
`;

const QuoteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const QuoteMark = styled.span`
  display: block;
  font-family: \${theme.fonts.heading};
  font-size: 6rem;
  color: #cec5ad;
  opacity: 0.3;
  line-height: 0.5;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  font-family: \${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`;

const QuoteAuthor = styled.span`
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.1em;
`;

// CTA Section Styles
const CTASection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const CTABlob = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;

  &.left {
    background: #22371b;
    top: -100px;
    left: -100px;
  }

  &.right {
    background: #cec5ad;
    bottom: -100px;
    right: -100px;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTALabel = styled.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`;

const CTATitle = styled.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
`;

const CTADescription = styled.p`
  font-family: \${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0 0 2.5rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAPrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: #22371b;
  color: #cec5ad;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const CTASecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: transparent;
  color: #22371b;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #22371b;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`;

export default Services;
