import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiHeart, FiMessageCircle, FiStar, FiTarget, FiUserCheck, FiZap } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';
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
            </HeroActions>
          </HeroContent>
        </div>
      </HeroSection>

      <AboutSection>
        <div className="container">
          <AboutGrid>

            <AboutCopy
              as={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <AboutLabel>About NLP</AboutLabel>
              <AboutHeading>Rewriting the Story<br />Your Mind Repeats</AboutHeading>
              <AboutDivider />
              <AboutBody>
                NLP (Neuro-Linguistic Programming) is a therapeutic coaching approach that studies how your
                language, thought patterns, and emotional memory shape behavior. Through personalized sessions,
                BK Shikha helps you shift internal patterns that keep you stuck in stress, self-doubt, fear,
                and emotional overwhelm.
              </AboutBody>
              <AboutBody>
                The process focuses on emotional transformation, mindset rewiring, confidence development, and
                healing-led growth — practical, compassionate, and designed for real daily life.
              </AboutBody>
              <AboutPoints>
                {['Emotional Transformation', 'Mindset Rewiring', 'Confidence Growth', 'Daily Integration'].map((pt, i) => (
                  <AboutPoint key={i}>
                    <AboutPointDot />
                    {pt}
                  </AboutPoint>
                ))}
              </AboutPoints>
            </AboutCopy>

            <AboutImgCol
              as={motion.div}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <AboutImg
                src="/2/NLP ( 1).jpg (2).jpeg"
                alt="NLP Coaching — BK Shikha"
                loading="lazy"
              />
            </AboutImgCol>

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

      <ProcessSection>
        <div className="container">
          <ProcessHeader
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProcessEyebrow>How It Works</ProcessEyebrow>
            <ProcessTitle>Your NLP Journey in 5 Steps</ProcessTitle>
          </ProcessHeader>

          <StepTable>
            <StepTableLine />
            {processSteps.map((step, i) => (
              <StepRow
                key={step.number}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <StepNum>{step.number}</StepNum>
                <StepDivider />
                <StepName>{step.title}</StepName>
                <StepDesc>{step.description}</StepDesc>
                <StepIndex>{String(i + 1).padStart(2, '0')} / 05</StepIndex>
              </StepRow>
            ))}
            <StepTableLine />
          </StepTable>
        </div>
      </ProcessSection>

      <BannerCTASection>
        <div className="container">
          <BannerStrip
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BannerTopLine />
            <BannerBody>
              <BannerLeft>
                <BannerEyebrow>Begin Your Journey</BannerEyebrow>
                <BannerTitle>Ready to Feel<br />Emotionally Free?</BannerTitle>
              </BannerLeft>
              <BannerRight>
                <BannerText>
                  Start your guided NLP journey with BK Shikha and experience powerful internal change that lasts.
                </BannerText>
                <BannerCTA to="/contact">
                  Start My NLP Journey <FiArrowRight />
                </BannerCTA>
              </BannerRight>
            </BannerBody>
            <BannerBottomLine />
          </BannerStrip>
        </div>
      </BannerCTASection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: var(--navbar-h);

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100dvh;
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 6rem 0 4rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 5.5rem 0 3.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 4.5rem 0 3rem;
  }

  @media (max-width: 390px) {
    padding: 4rem 0 2.5rem;
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
  background: linear-gradient(135deg, #A3404B 0%, #C25964 100%);
  box-shadow: 0 6px 20px rgba(194, 89, 100, 0.3);
  transition: all ${theme.transitions.base};

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: white;
    background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(194, 89, 100, 0.4);

    svg {
      transform: translateX(4px);
    }
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
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.9);
    color: white;
    transform: translateY(-2px);
  }
`;

/* ── About Section ── */
const AboutSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C25964;
  margin-bottom: 1rem;
  display: block;
`;

const AboutHeading = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.9rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.15;
  margin: 0 0 1.1rem;
`;

const AboutDivider = styled.div`
  width: 2.5rem;
  height: 3px;
  background: #C25964;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`;

const AboutBody = styled.p`
  font-size: 0.97rem;
  color: #6B5860;
  line-height: 1.85;
  margin: 0 0 0.9rem;
`;

const AboutPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const AboutPoint = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1A1214;
`;

const AboutPointDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C25964;
  flex-shrink: 0;
`;

const AboutImgCol = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: -1;
    aspect-ratio: 3 / 2;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 4 / 3;
    border-radius: 1rem;
  }
`;

const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 70%;
  display: block;
`;

const AboutBadgeStat = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 800;
  color: #A3404B;
  line-height: 1;
`;

const AboutBadgeLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #5A4A50;
  letter-spacing: 0.04em;
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

/* ── Process / Timeline Section ── */
const ProcessSection = styled.section`
  padding: 6rem 0 7rem;
  background: #ffffff;
`;

const ProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 4.5rem;
`;

const ProcessEyebrow = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C25964;
  display: block;
  margin-bottom: 0.75rem;
`;

const ProcessTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #1A1214;
  margin: 0;
  line-height: 1.15;
`;

/* Wrapper for the step rows */
const StepTable = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

/* Top / bottom hairlines */
const StepTableLine = styled.div`
  height: 1.5px;
  background: linear-gradient(90deg, transparent, #C25964 30%, #C25964 70%, transparent);
`;

/* One step row */
const StepRow = styled.div`
  display: grid;
  grid-template-columns: 90px 2px 1fr 2fr auto;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0.5rem;
  border-bottom: 1px solid rgba(194, 89, 100, 0.1);
  transition: background 0.25s ease;
  cursor: default;

  &:last-child { border-bottom: none; }

  &:hover {
    background: rgba(245, 197, 202, 0.07);
    border-radius: 8px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 60px 2px 1fr;
    grid-template-rows: auto auto;
    gap: 0.75rem 1.25rem;
    padding: 1.75rem 0.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 48px 2px 1fr;
    gap: 0.6rem 1rem;
    padding: 1.5rem 0.25rem;
  }
`;

/* Oversized faded step number */
const StepNum = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.8rem, 4vw, 3.8rem);
  font-weight: 800;
  color: rgba(194, 89, 100, 0.18);
  line-height: 1;
  letter-spacing: -0.02em;
  user-select: none;
`;

/* Rose vertical divider bar */
const StepDivider = styled.div`
  width: 2px;
  height: 2.8rem;
  background: linear-gradient(to bottom, #F5C5CA, #C25964);
  border-radius: 2px;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 2rem;
  }
`;

/* Step title */
const StepName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 700;
  color: #1A1214;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 3 / 4;
    grid-row: 1;
  }
`;

/* Step description */
const StepDesc = styled.p`
  font-size: clamp(0.85rem, 1.2vw, 0.95rem);
  color: #7A6468;
  line-height: 1.75;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-row: 2;
    padding-left: 0;
  }
`;

/* Small counter on the far right — hidden on mobile */
const StepIndex = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(194, 89, 100, 0.35);
  white-space: nowrap;
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

/* ── Banner CTA: editorial strip ── */
const BannerCTASection = styled.section`
  padding: 5rem 0 6rem;
  background: #FDFAF8;
`;

const BannerStrip = styled.div``;

const BannerTopLine = styled.div`
  height: 1px;
  background: #1A1214;
  margin-bottom: 2.5rem;
`;

const BannerBottomLine = styled.div`
  height: 1px;
  background: rgba(26, 18, 20, 0.12);
  margin-top: 2.5rem;
`;

const BannerBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: flex-start;
  }
`;

const BannerLeft = styled.div``;

const BannerEyebrow = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #C25964;
  margin-bottom: 1rem;
  display: block;
`;

const BannerTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.08;
  margin: 0;
`;

const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const BannerText = styled.p`
  font-size: 0.97rem;
  color: #6B5860;
  line-height: 1.8;
  margin: 0;
`;

const BannerCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  border-radius: ${theme.borderRadius.full};
  background: linear-gradient(135deg, #A3404B, #C25964);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 6px 24px rgba(163, 64, 75, 0.35);
  transition: all ${theme.transitions.base};
  text-decoration: none;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(163, 64, 75, 0.45);

    svg {
      transform: translateX(4px);
    }
  }
`;

export default NLP;
