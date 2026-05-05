import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiHeart, FiMessageCircle, FiTarget, FiUserCheck } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';
import { CircularTestimonials } from '../components/ui/CircularTestimonials';

const benefits = [
  {
    title: 'Stress Reduction',
    description: 'Release emotional pressure with practical NLP tools that calm thought loops and overthinking.',
    icon: <FiHeart />,
  },
  {
    title: 'Confidence Building',
    description: 'Reframe limiting beliefs and build a grounded self-image for daily life and relationships.',
    icon: <FiUserCheck />,
  },
  {
    title: 'Mental Clarity',
    description: 'Get clear on goals, decisions, and next steps through focused coaching conversations.',
    icon: <FiTarget />,
  },
  {
    title: 'Emotional Healing',
    description: 'Process unresolved emotional patterns with gentle, structured transformation work.',
    icon: <FiCheckCircle />,
  },
  {
    title: 'Emotional Balance',
    description: 'Train your nervous system for stability, calm responses, and mindful self-regulation.',
    icon: <FiHeart />,
  },
  {
    title: 'Communication Growth',
    description: 'Improve expression, listening, and relational confidence in personal and professional settings.',
    icon: <FiMessageCircle />,
  },
];

const processSteps = [
  { number: '01', title: 'Consultation', description: 'A compassionate first conversation to understand your goals and emotional patterns.' },
  { number: '02', title: 'Analysis', description: 'We identify core triggers, beliefs, language loops, and behavioral anchors.' },
  { number: '03', title: 'Therapy Process', description: 'Guided NLP techniques and emotional rewiring sessions tailored to your story.' },
  { number: '04', title: 'Transformation', description: 'You experience practical inner shifts in confidence, calmness, and daily behavior.' },
  { number: '05', title: 'Follow-Up', description: 'Structured reinforcement to sustain growth and prevent pattern relapse.' },
];

const testimonials = [
  {
    quote: 'I came with panic, self-doubt, and emotional fatigue. NLP sessions helped me reset my thought patterns and feel in control again.',
    name: 'Neha Gupta',
    designation: 'Working Professional',
    location: 'Delhi NCR',
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&auto=format&fit=crop&q=80',
  },
  {
    quote: 'My communication and confidence improved in just a few weeks. The process felt gentle, practical, and deeply healing.',
    name: 'Ritika Jain',
    designation: 'Business Owner',
    location: 'Jaipur',
    src: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&auto=format&fit=crop&q=80',
  },
  {
    quote: 'I had years of emotional blocks. This approach gave me clarity and helped me move forward without fear.',
    name: 'Aman Verma',
    designation: 'Student',
    location: 'Pune',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80',
  },
];

const NLP = () => {
  useEffect(() => {
    document.title = 'NLP Coaching | BK Shikha';
  }, []);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroMedia>
          <HeroImage
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1800&auto=format&fit=crop&q=80"
            alt="Mindset coaching and emotional wellness"
            loading="eager"
          />
          <HeroOverlay />
        </HeroMedia>

        <div className="container">
          <HeroContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <HeroLabel>NLP Transformation</HeroLabel>
            <HeroTitle>Neuro-Linguistic Programming for Deep Inner Shift</HeroTitle>
            <HeroDescription>
              Premium mindset coaching to heal emotional patterns, rewire limiting beliefs,
              and create clarity, confidence, and calm from within.
            </HeroDescription>
            <HeroActions>
              <PrimaryCTA to="/contact">
                Book Consultation <FiArrowRight />
              </PrimaryCTA>
              <SecondaryCTA to="/services">Explore All Services</SecondaryCTA>
            </HeroActions>
          </HeroContent>
        </div>
      </HeroSection>

      <AboutSection className="section">
        <div className="container">
          <AboutGrid>
            <AboutCopy>
              <SectionTitle subtitle="About NLP" align="left">
                Rewriting the Story Your Mind Repeats
              </SectionTitle>
              <AboutText>
                NLP (Neuro-Linguistic Programming) is a therapeutic coaching approach that studies how your language,
                thought patterns, and emotional memory shape behavior. Through personalized sessions, BK Shikha helps you
                shift internal patterns that keep you stuck in stress, self-doubt, fear, and emotional overwhelm.
              </AboutText>
              <AboutText>
                The process focuses on emotional transformation, mindset rewiring, confidence development, and healing-led
                growth. It is practical, compassionate, and designed to integrate into real daily life.
              </AboutText>
            </AboutCopy>
            <AboutImageWrap>
              <AboutImage
                src="https://images.unsplash.com/photo-1474418397713-5dd5f6f39a5e?w=1200&auto=format&fit=crop&q=80"
                alt="Meditation and emotional healing session"
                loading="lazy"
              />
            </AboutImageWrap>
          </AboutGrid>
        </div>
      </AboutSection>

      <BenefitsSection className="section">
        <div className="container">
          <SectionTitle subtitle="Benefits">What You Experience Through NLP</SectionTitle>
          <BenefitsGrid>
            {benefits.map((item) => (
              <BenefitCard
                key={item.title}
                as={motion.div}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <BenefitIcon>{item.icon}</BenefitIcon>
                <BenefitTitle>{item.title}</BenefitTitle>
                <BenefitDescription>{item.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </div>
      </BenefitsSection>

      <ProcessSection className="section">
        <div className="container">
          <SectionTitle subtitle="How It Works">Your NLP Journey in 5 Steps</SectionTitle>
          <ProcessGrid>
            {processSteps.map((step) => (
              <StepCard
                key={step.number}
                as={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            ))}
          </ProcessGrid>
        </div>
      </ProcessSection>

      <TestimonialsSection className="section">
        <div className="container">
          <SectionTitle subtitle="Client Voices">Transformation Stories</SectionTitle>
          <CircularTestimonials testimonials={testimonials} autoplay={true} autoplayInterval={5500} />
        </div>
      </TestimonialsSection>

      <BannerCTASection>
        <div className="container">
          <BannerCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <BannerTitle>Ready to Feel Emotionally Strong, Clear, and Aligned?</BannerTitle>
            <BannerText>
              Start your guided NLP journey with BK Shikha and experience powerful internal change that lasts.
            </BannerText>
            <PrimaryCTA to="/contact">
              Start My NLP Journey <FiArrowRight />
            </PrimaryCTA>
          </BannerCard>
        </div>
      </BannerCTASection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  position: relative;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: calc(85vh - 65px);
  }
`;

const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(58, 31, 35, 0.84) 10%, rgba(109, 75, 203, 0.5) 55%, rgba(194, 89, 100, 0.22) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  padding: 7rem 0 5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 5.5rem 0 3.5rem;
  }
`;

const HeroLabel = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #FFF0F2;
  margin: 0 0 1rem;
  font-weight: 600;
`;

const HeroTitle = styled.h1`
  color: white;
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.4rem, 5vw, 4.3rem);
  line-height: 1.1;
  margin: 0 0 1.25rem;
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.075rem;
  line-height: 1.85;
  max-width: 640px;
  margin: 0;
`;

const HeroActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.9rem 1.8rem;
  border-radius: ${theme.borderRadius.full};
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
  box-shadow: 0 6px 20px rgba(109, 75, 203, 0.35);
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(109, 75, 203, 0.4);
  }
`;

const SecondaryCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.6rem;
  border-radius: ${theme.borderRadius.full};
  border: 1.5px solid rgba(255, 255, 255, 0.65);
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all ${theme.transitions.base};

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #000000;
  }
`;

const AboutSection = styled.section`
  background: ${theme.colors.background};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutCopy = styled.div``;

const AboutText = styled.p`
  color: ${theme.colors.text};
  line-height: 1.85;
  margin-bottom: 1.1rem;
`;

const AboutImageWrap = styled.div`
  border-radius: ${theme.borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
`;

const AboutImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center;
`;

const BenefitsSection = styled.section`
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: white;
  padding: 2rem 1.6rem;
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid rgba(245, 197, 202, 0.35);
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.md};
  }
`;

const BenefitIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #3A1F23;
  background: rgba(245, 197, 202, 0.32);
  margin-bottom: 0.95rem;
  font-size: 1.15rem;
`;

const BenefitTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.45rem;
  color: #3A1F23;
  margin: 0 0 0.55rem;
`;

const BenefitDescription = styled.p`
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.75;
  color: ${theme.colors.text};
`;

const ProcessSection = styled.section`
  background: white;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: ${theme.colors.background};
  border: 1px solid rgba(245, 197, 202, 0.35);
  border-radius: ${theme.borderRadius.lg};
  padding: 1.4rem 1.2rem;
`;

const StepNumber = styled.span`
  font-family: ${theme.fonts.body};
  color: #F5C5CA;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  font-weight: 700;
`;

const StepTitle = styled.h4`
  margin: 0.4rem 0 0.5rem;
  font-size: 1.2rem;
  font-family: ${theme.fonts.heading};
  color: #3A1F23;
`;

const StepDescription = styled.p`
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.7;
  color: ${theme.colors.text};
`;

const TestimonialsSection = styled.section`
  background: ${theme.colors.background};
`;

const BannerCTASection = styled.section`
  padding: 0 0 6rem;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
`;

const BannerCard = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #C25964 0%, #A3404B 100%);
  border-radius: ${theme.borderRadius['2xl']};
  padding: 3.2rem 2rem;
  box-shadow: ${theme.shadows.lg};
`;

const BannerTitle = styled.h2`
  color: white;
  margin: 0 0 0.75rem;
  font-size: clamp(1.9rem, 4vw, 3rem);
`;

const BannerText = styled.p`
  max-width: 700px;
  margin: 0 auto 1.65rem;
  color: rgba(255, 255, 255, 0.9);
`;

export default NLP;
