import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiTarget,
  FiZap,
  FiSun,
  FiCompass,
  FiSmile,
  FiCheck,
} from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';
import Button from '../components/shared/Button';

const Services = () => {
  const services = [
    {
      icon: <FiTarget />,
      title: 'Personalized Yoga Coaching',
      tagline: 'Move, Breathe, Transform',
      whoFor: 'Beginners to advanced practitioners, anyone seeking physical wellness',
      problems: [
        'Stiffness and lack of flexibility',
        'Physical stress and tension',
        'Poor posture and body awareness',
        'Disconnect between mind and body',
      ],
      outcomes: [
        'Improved flexibility and strength',
        'Better posture and alignment',
        'Deep mind-body connection',
        'Sustainable daily practice',
      ],
      format: 'One-on-one sessions (online/in-person) • 60-minute sessions • Customized practice',
      pricing: [
        { tier: 'Starter', sessions: '4 sessions', price: '$199', period: '/month' },
        { tier: 'Growth', sessions: '8 sessions', price: '$349', period: '/month', popular: true },
        { tier: 'Transformation', sessions: '12 sessions', price: '$489', period: '/month' },
      ],
    },
    {
      icon: <FiHeart />,
      title: 'Emotional & Mental Wellness Mentoring',
      tagline: 'Heal Your Heart, Find Your Peace',
      whoFor: 'Anyone dealing with stress, anxiety, emotional overwhelm, or seeking inner balance',
      problems: [
        'Chronic stress and anxiety',
        'Emotional burnout and exhaustion',
        'Difficulty processing emotions',
        'Feeling stuck or lost',
      ],
      outcomes: [
        'Emotional clarity and balance',
        'Reduced stress and anxiety',
        'Healthy coping mechanisms',
        'Renewed sense of purpose',
      ],
      format: 'Private coaching sessions • 90-minute deep-dive sessions • Guided practices',
      pricing: [
        { tier: 'Healing Path', sessions: '4 sessions', price: '$299', period: '/month' },
        { tier: 'Emotional Freedom', sessions: '8 sessions', price: '$549', period: '/month', popular: true },
        { tier: 'Complete Balance', sessions: '12 sessions', price: '$789', period: '/month' },
      ],
    },
    {
      icon: <FiZap />,
      title: 'Mindset & NLP Coaching',
      tagline: 'Reprogram Your Mind for Success',
      whoFor: 'Goal-oriented individuals, entrepreneurs, professionals seeking breakthrough',
      problems: [
        'Limiting beliefs holding you back',
        'Self-doubt and imposter syndrome',
        'Lack of clarity on goals',
        'Negative thought patterns',
      ],
      outcomes: [
        'Powerful confidence and self-belief',
        'Clear vision and actionable goals',
        'Breakthrough mindset shifts',
        'Sustainable success habits',
      ],
      format: 'Strategic coaching sessions • 75-minute intensive sessions • NLP techniques',
      pricing: [
        { tier: 'Clarity', sessions: '4 sessions', price: '$399', period: '/month' },
        { tier: 'Breakthrough', sessions: '8 sessions', price: '$699', period: '/month', popular: true },
        { tier: 'Mastery', sessions: '12 sessions', price: '$999', period: '/month' },
      ],
    },
    {
      icon: <FiSun />,
      title: 'Guided Stress Relief Sessions',
      tagline: 'Release Tension, Embrace Calm',
      whoFor: 'Busy professionals, students, parents, anyone experiencing daily stress',
      problems: [
        'Overwhelm and burnout',
        'Poor sleep quality',
        'Racing mind and constant worry',
        'Physical tension and headaches',
      ],
      outcomes: [
        'Deep relaxation and calm',
        'Better sleep patterns',
        'Stress management tools',
        'Peaceful, grounded state',
      ],
      format: 'Group or private sessions • 45-minute guided practices • Meditation & breathwork',
      pricing: [
        { tier: 'Weekly Relief', sessions: '4 sessions', price: '$149', period: '/month' },
        { tier: 'Deep Peace', sessions: '8 sessions', price: '$269', period: '/month', popular: true },
        { tier: 'Serenity Path', sessions: '12 sessions', price: '$379', period: '/month' },
      ],
    },
    {
      icon: <FiCompass />,
      title: 'Holistic Wellness Transformation',
      tagline: 'Complete Life Redesign',
      whoFor: 'Those ready for total transformation in mind, body, and lifestyle',
      problems: [
        'Feeling disconnected from purpose',
        'Unhealthy habits and patterns',
        'Lack of energy and vitality',
        'Desire for complete life change',
      ],
      outcomes: [
        'Sustainable wellness lifestyle',
        'Vibrant energy and vitality',
        'Purpose-driven living',
        'Lasting transformation',
      ],
      format: 'Comprehensive program • Weekly sessions + daily support • All modalities combined',
      pricing: [
        { tier: 'Foundation', sessions: '3 months', price: '$1,499', period: '' },
        { tier: 'Evolution', sessions: '6 months', price: '$2,699', period: '', popular: true },
        { tier: 'Complete Rebirth', sessions: '12 months', price: '$4,999', period: '' },
      ],
    },
    {
      icon: <FiSmile />,
      title: 'Confidence & Self-Love Building',
      tagline: 'Become the Best Version of You',
      whoFor: 'Anyone struggling with self-esteem, people-pleasing, or lack of boundaries',
      problems: [
        'Low self-esteem and self-worth',
        'People-pleasing and weak boundaries',
        'Fear of judgment and rejection',
        'Hiding authentic self',
      ],
      outcomes: [
        'Unshakeable self-confidence',
        'Strong, healthy boundaries',
        'Authentic self-expression',
        'Self-love and acceptance',
      ],
      format: 'Empowerment coaching • 60-minute transformative sessions • Practice exercises',
      pricing: [
        { tier: 'Self-Discovery', sessions: '6 sessions', price: '$349', period: '' },
        { tier: 'Confidence Boost', sessions: '10 sessions', price: '$549', period: '', popular: true },
        { tier: 'Empowerment Journey', sessions: '16 sessions', price: '$849', period: '' },
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <div className="container">
          <HeroContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Subtitle>Transformational Services</Subtitle>
            <HeroTitle>Your Personalized Path to Wellness Awaits</HeroTitle>
            <HeroDescription>
              Whether you're seeking physical vitality, emotional balance, mental
              clarity, or complete life transformation, there's a path designed
              specifically for you.
            </HeroDescription>
          </HeroContent>
        </div>
      </HeroSection>

      {/* Services */}
      <ServicesSection className="section">
        <div className="container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              $reverse={index % 2 !== 0}
            >
              <ServiceHeader>
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitleSection>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceTagline>{service.tagline}</ServiceTagline>
                </ServiceTitleSection>
              </ServiceHeader>

              <ServiceContent>
                <ContentBlock>
                  <BlockTitle>Who This Is For</BlockTitle>
                  <BlockText>{service.whoFor}</BlockText>
                </ContentBlock>

                <ProblemsOutcomes>
                  <Column>
                    <BlockTitle>Problems We Address</BlockTitle>
                    <List>
                      {service.problems.map((problem, i) => (
                        <ListItem key={i}>
                          <ListDot $color="error" />
                          {problem}
                        </ListItem>
                      ))}
                    </List>
                  </Column>

                  <Column>
                    <BlockTitle>Outcomes You'll Experience</BlockTitle>
                    <List>
                      {service.outcomes.map((outcome, i) => (
                        <ListItem key={i}>
                          <CheckIcon>
                            <FiCheck />
                          </CheckIcon>
                          {outcome}
                        </ListItem>
                      ))}
                    </List>
                  </Column>
                </ProblemsOutcomes>

                <FormatInfo>{service.format}</FormatInfo>

                <PricingSection>
                  <PricingTitle>Investment Options</PricingTitle>
                  <PricingGrid>
                    {service.pricing.map((tier, i) => (
                      <PricingCard key={i} $popular={tier.popular}>
                        {tier.popular && <PopularBadge>Most Popular</PopularBadge>}
                        <PricingTier>{tier.tier}</PricingTier>
                        <PricingSessions>{tier.sessions}</PricingSessions>
                        <PricingPrice>
                          {tier.price}
                          <PricingPeriod>{tier.period}</PricingPeriod>
                        </PricingPrice>
                      </PricingCard>
                    ))}
                  </PricingGrid>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
          ))}
        </div>
      </ServicesSection>

      {/* CTA */}
      <CTASection className="section">
        <div className="container">
          <CTAContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Not Sure Which Path Is Right for You?</CTATitle>
            <CTAText>
              Let's have a heartfelt conversation about your goals, challenges, and
              dreams. I'll help you discover the perfect service that aligns with your
              unique journey.
            </CTAText>
            <CTAButtons>
              <Button as={Link} to="/contact" size="large">
                Schedule Free Consultation
              </Button>
              <Button as={Link} to="/testimonials" variant="outline" size="large">
                Read Success Stories
              </Button>
            </CTAButtons>
          </CTAContent>
        </div>
      </CTASection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div``;

const HeroSection = styled.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    ${theme.colors.background} 0%,
    ${theme.colors.backgroundAlt} 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0 0 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;
`;

const ServicesSection = styled.section`
  background: ${theme.colors.backgroundAlt};
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius['2xl']};
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: ${theme.shadows.lg};
  border: 2px solid ${theme.colors.backgroundDark};

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 2px solid ${theme.colors.backgroundDark};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  color: white;
  font-size: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
`;

const ServiceTitleSection = styled.div``;

const ServiceTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 0.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

const ServiceTagline = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 400;
  color: ${theme.colors.secondary};
  font-style: italic;
  margin: 0;
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContentBlock = styled.div``;

const BlockTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 1rem;
`;

const BlockText = styled.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;
`;

const ProblemsOutcomes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div``;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  display: flex;
  align-items: start;
  gap: 0.75rem;
`;

const ListDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.colors.error};
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const CheckIcon = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.success};
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
`;

const FormatInfo = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  background: ${theme.colors.background};
  padding: 1.25rem;
  border-radius: ${theme.borderRadius.lg};
  border-left: 4px solid ${theme.colors.accent};
  margin: 0;
`;

const PricingSection = styled.div`
  background: ${theme.colors.background};
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
`;

const PricingTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-align: center;
  margin: 0 0 2rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  position: relative;
  border: 2px solid
    ${(props) =>
      props.$popular ? theme.colors.accent : theme.colors.backgroundDark};
  box-shadow: ${(props) => (props.$popular ? theme.shadows.md : 'none')};
  transform: ${(props) => (props.$popular ? 'scale(1.05)' : 'scale(1)')};
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.accent};
  color: white;
  padding: 0.375rem 1rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const PricingTier = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 0.5rem;
`;

const PricingSessions = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textLight};
  margin: 0 0 1rem;
`;

const PricingPrice = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1;
`;

const PricingPeriod = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.textLight};
`;

const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight} 0%,
    ${theme.colors.accentLight} 100%
  );
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2.5rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Services;
