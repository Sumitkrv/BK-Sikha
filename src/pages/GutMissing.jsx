import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiArrowRight, FiCheckCircle, FiChevronDown, FiHeart, FiShield } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';

const symptoms = [
  {
    title: 'Bloating & Gas',
    description: 'Persistent abdominal discomfort, heaviness, and irregular digestion after meals.',
    icon: <FiActivity />,
  },
  {
    title: 'Acidity & Reflux',
    description: 'Burning sensation, throat irritation, or recurring acid imbalance patterns.',
    icon: <FiHeart />,
  },
  {
    title: 'Irregular Bowel Patterns',
    description: 'Constipation, loose motions, or unstable digestive rhythm affecting daily energy.',
    icon: <FiActivity />,
  },
  {
    title: 'Low Energy & Brain Fog',
    description: 'Mental tiredness and reduced concentration linked with gut inflammation and imbalance.',
    icon: <FiShield />,
  },
];

const treatments = [
  {
    title: 'Gut Reset Program',
    description: 'A structured healing protocol combining food correction, habit correction, and mindful eating.',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&auto=format&fit=crop&q=80',
  },
  {
    title: 'Personalized Nutrition Guidance',
    description: 'Targeted dietary recommendations based on your symptoms, metabolism, and lifestyle.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mind-Gut Recovery Coaching',
    description: 'Breathwork, stress regulation, and emotional wellness support for deep digestive healing.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=80',
  },
];

const faqs = [
  {
    q: 'How long does gut healing usually take?',
    a: 'Most clients notice early changes within 2-4 weeks. Deeper and more stable healing generally builds over 8-12 weeks with consistency.',
  },
  {
    q: 'Do I need strict dieting?',
    a: 'No extreme dieting is required. BK Shikha focuses on practical, personalized food plans that are sustainable and emotionally balanced.',
  },
  {
    q: 'Can stress affect gut health?',
    a: 'Yes. Stress directly impacts digestion and inflammation. This program includes mind-body practices to support complete gut recovery.',
  },
  {
    q: 'Is this suitable for beginners?',
    a: 'Absolutely. Programs are designed for all levels and adapted to your daily routine, health history, and comfort level.',
  },
];

const GutMissing = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    document.title = 'Gut Missing | Gut Health Healing | BK Shikha';
  }, []);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1800&auto=format&fit=crop&q=80"
          alt="Healthy gut wellness and nutrition"
          loading="eager"
        />
        <HeroOverlay />
        <div className="container">
          <HeroContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroLabel>Gut Missing · Gut Health Healing</HeroLabel>
            <HeroTitle>Restore Digestive Balance, Energy, and Inner Wellness</HeroTitle>
            <HeroDescription>
              A premium healthcare-focused wellness program for digestive correction, symptom relief,
              emotional balance, and sustainable healing.
            </HeroDescription>
            <HeroActions>
              <PrimaryCTA to="/contact">
                Book Gut Consultation <FiArrowRight />
              </PrimaryCTA>
              <SecondaryCTA to="/services">View Services</SecondaryCTA>
            </HeroActions>
          </HeroContent>
        </div>
      </HeroSection>

      <AboutSection className="section">
        <div className="container">
          <AboutGrid>
            <AboutCard>
              <SectionTitle subtitle="About Condition" align="left">
                Why Gut Health Matters
              </SectionTitle>
              <AboutText>
                Gut imbalance can affect digestion, immunity, mood, skin health, and mental clarity. Many recurring issues
                are connected to everyday stress, poor eating rhythm, inflammation, and disrupted lifestyle habits.
              </AboutText>
              <AboutText>
                BK Shikha’s healing framework addresses root causes with a balanced approach combining nutrition,
                nervous-system regulation, and personalized daily practices.
              </AboutText>
            </AboutCard>
            <AboutVisual>
              <AboutImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80"
                alt="Wellness consultation for digestive health"
                loading="lazy"
              />
            </AboutVisual>
          </AboutGrid>
        </div>
      </AboutSection>

      <SymptomsSection className="section">
        <div className="container">
          <SectionTitle subtitle="Symptoms">Common Signs of Gut Imbalance</SectionTitle>
          <SymptomGrid>
            {symptoms.map((item) => (
              <SymptomCard
                key={item.title}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-35px' }}
                transition={{ duration: 0.45 }}
              >
                <SymptomIcon>{item.icon}</SymptomIcon>
                <SymptomTitle>{item.title}</SymptomTitle>
                <SymptomDescription>{item.description}</SymptomDescription>
              </SymptomCard>
            ))}
          </SymptomGrid>
        </div>
      </SymptomsSection>

      <TreatmentsSection className="section">
        <div className="container">
          <SectionTitle subtitle="Healing Programs">Treatments & Healing Plans</SectionTitle>
          <TreatmentGrid>
            {treatments.map((item) => (
              <TreatmentCard
                key={item.title}
                as={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TreatmentImage src={item.image} alt={item.title} loading="lazy" />
                <TreatmentContent>
                  <TreatmentTitle>{item.title}</TreatmentTitle>
                  <TreatmentDescription>{item.description}</TreatmentDescription>
                </TreatmentContent>
              </TreatmentCard>
            ))}
          </TreatmentGrid>
        </div>
      </TreatmentsSection>

      <TrustSection className="section">
        <div className="container">
          <SectionTitle subtitle="Why Choose BK Shikha">Trusted Holistic Gut Healing</SectionTitle>
          <TrustGrid>
            <TrustItem>
              <FiCheckCircle /> Personalized protocols, not one-size-fits-all plans
            </TrustItem>
            <TrustItem>
              <FiCheckCircle /> Integrated mind-gut approach for sustainable outcomes
            </TrustItem>
            <TrustItem>
              <FiCheckCircle /> Practical guidance for real Indian lifestyle and food patterns
            </TrustItem>
            <TrustItem>
              <FiCheckCircle /> Ongoing follow-up and accountability for consistent progress
            </TrustItem>
          </TrustGrid>
        </div>
      </TrustSection>

      <FAQSection className="section">
        <div className="container">
          <SectionTitle subtitle="FAQs">Frequently Asked Questions</SectionTitle>
          <AccordionWrap>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <FAQItem key={item.q}>
                  <FAQButton onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                    <FAQQuestion>{item.q}</FAQQuestion>
                    <Chevron $open={isOpen}>
                      <FiChevronDown />
                    </Chevron>
                  </FAQButton>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <FAQAnswer
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <FAQAnswerText>{item.a}</FAQAnswerText>
                      </FAQAnswer>
                    )}
                  </AnimatePresence>
                </FAQItem>
              );
            })}
          </AccordionWrap>
        </div>
      </FAQSection>

      <ContactCTASection>
        <div className="container">
          <ContactCard
            as={motion.div}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <ContactTitle>Take the First Step Toward Digestive Healing</ContactTitle>
            <ContactText>
              Book your consultation and start a guided gut recovery journey that restores calm, comfort, and confidence.
            </ContactText>
            <PrimaryCTA to="/contact">
              Contact BK Shikha <FiArrowRight />
            </PrimaryCTA>
          </ContactCard>
        </div>
      </ContactCTASection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  min-height: calc(95vh - 100px);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: calc(80vh - 65px);
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(58, 31, 35, 0.85) 10%, rgba(109, 75, 203, 0.52) 58%, rgba(194, 89, 100, 0.22) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  padding: 7rem 0 4.2rem;
`;

const HeroLabel = styled.p`
  color: #FFF0F2;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0 0 0.85rem;
`;

const HeroTitle = styled.h1`
  color: #fff;
  margin: 0 0 1.1rem;
  font-size: clamp(2.2rem, 5vw, 4.1rem);
  line-height: 1.14;
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.93);
  margin: 0;
  line-height: 1.84;
  max-width: 630px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.9rem;
`;

const PrimaryCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.9rem 1.75rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
  box-shadow: 0 5px 18px rgba(109, 75, 203, 0.35);
  transition: all ${theme.transitions.base};

  &:hover {
    color: #000000;
    transform: translateY(-2px);
  }
`;

const SecondaryCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.95rem;
  font-weight: 500;
  color: white;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  transition: all ${theme.transitions.base};

  &:hover {
    color: #000000;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const AboutSection = styled.section`
  background: ${theme.colors.background};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.2rem;
  align-items: stretch;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled.div`
  background: white;
  border: 1px solid rgba(245, 197, 202, 0.35);
  border-radius: ${theme.borderRadius.xl};
  padding: 2.2rem;
  box-shadow: ${theme.shadows.sm};
`;

const AboutText = styled.p`
  margin: 0 0 0.95rem;
  color: ${theme.colors.text};
  line-height: 1.8;

  &:last-child {
    margin-bottom: 0;
  }
`;

const AboutVisual = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
`;

const SymptomsSection = styled.section`
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
`;

const SymptomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SymptomCard = styled.div`
  background: white;
  border: 1px solid rgba(245, 197, 202, 0.35);
  border-radius: ${theme.borderRadius.lg};
  padding: 1.6rem 1.2rem;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.sm};
  }
`;

const SymptomIcon = styled.div`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #3A1F23;
  background: rgba(245, 197, 202, 0.32);
  margin-bottom: 0.8rem;
`;

const SymptomTitle = styled.h3`
  margin: 0 0 0.45rem;
  font-size: 1.2rem;
  color: #3A1F23;
`;

const SymptomDescription = styled.p`
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.7;
  color: ${theme.colors.text};
`;

const TreatmentsSection = styled.section`
  background: white;
`;

const TreatmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const TreatmentCard = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  border: 1px solid rgba(245, 197, 202, 0.35);
  background: ${theme.colors.background};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.md};
  }
`;

const TreatmentImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const TreatmentContent = styled.div`
  padding: 1.25rem 1.2rem 1.35rem;
`;

const TreatmentTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.35rem;
  color: #3A1F23;
`;

const TreatmentDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${theme.colors.text};
  line-height: 1.75;
`;

const TrustSection = styled.section`
  background: ${theme.colors.background};
`;

const TrustGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: white;
  border: 1px solid rgba(245, 197, 202, 0.32);
  border-radius: ${theme.borderRadius.lg};
  padding: 1rem 1.05rem;
  color: #3A1F23;
  font-size: 0.96rem;

  svg {
    margin-top: 0.15rem;
    color: #C25964;
    flex-shrink: 0;
  }
`;

const FAQSection = styled.section`
  background: white;
`;

const AccordionWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const FAQItem = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid rgba(245, 197, 202, 0.35);
`;

const FAQButton = styled.button`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: transparent;
  padding: 1rem 1.2rem;
  color: #3A1F23;
`;

const FAQQuestion = styled.h4`
  margin: 0;
  font-size: 1.18rem;
  font-family: ${theme.fonts.heading};
  color: #3A1F23;
`;

const Chevron = styled.span`
  display: inline-flex;
  transition: transform ${theme.transitions.base};
  transform: rotate(${(props) => (props.$open ? '180deg' : '0deg')});
`;

const FAQAnswer = styled.div`
  overflow: hidden;
`;

const FAQAnswerText = styled.p`
  margin: 0;
  padding: 0 1.2rem 1rem;
  color: ${theme.colors.text};
  line-height: 1.75;
`;

const ContactCTASection = styled.section`
  padding: 0 0 6rem;
  background: linear-gradient(180deg, #ffffff 0%, #FFF7F8 100%);
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, #C25964 0%, #A3404B 100%);
  border-radius: ${theme.borderRadius['2xl']};
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: ${theme.shadows.lg};
`;

const ContactTitle = styled.h2`
  color: white;
  margin: 0 0 0.7rem;
  font-size: clamp(1.85rem, 4vw, 2.9rem);
`;

const ContactText = styled.p`
  max-width: 700px;
  margin: 0 auto 1.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

export default GutMissing;
