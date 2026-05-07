import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiCheckCircle, FiHeart, FiShield } from 'react-icons/fi';
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
    num: '01',
    title: 'Gut Reset Program',
    tag: 'Reset & Restore',
    description: 'A structured healing protocol combining food correction, habit correction, and mindful eating to restore your digestive rhythm from the root.',
    image: '/2/GUT health ( Treatments & Healing Plans ( 1 ).png',
  },
  {
    num: '02',
    title: 'Personalized Nutrition Guidance',
    tag: 'Eat Right',
    description: 'Targeted dietary recommendations based on your symptoms, metabolism, and lifestyle — because no two guts are the same.',
    image: '/2/GUT health ( Treatments & Healing Plans (2).png',
  },
  {
    num: '03',
    title: 'Mind-Gut Recovery Coaching',
    tag: 'Heal Deep',
    description: 'Breathwork, stress regulation, and emotional wellness support for deep digestive healing — addressing the gut-brain connection directly.',
    image: '/2/GUT health ( Treatments & Healing Plans ( 3 ).png',
  },
];

const GutMissing = () => {

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
            </HeroActions>
          </HeroContent>
        </div>
      </HeroSection>

      <AboutSection>
        <div className="container">
          <AboutLayout>

            {/* Left — tall image */}
            <AboutImgWrap
              as={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AboutImg
                src="/2/GUT HEALTH ( Why Gut Health Matters).jpg (1).jpeg"
                alt="Why Gut Health Matters — BK Shikha Holistic Healing"
                loading="lazy"
              />
            </AboutImgWrap>

            {/* Right — content */}
            <AboutContent
              as={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <AboutTag>About the Condition</AboutTag>
              <AboutTitle>Why Gut Health<br />Matters</AboutTitle>
              <AboutLead>
                Most recurring issues — bloating, fatigue, mood swings, poor immunity — trace back
                to one root: an imbalanced gut. Healing it changes everything.
              </AboutLead>

              <AboutFactGrid>
                {[
                  { stat: "90%",  heading: "Serotonin Origin",    body: "Nearly all your mood-regulating serotonin is produced in the gut, not the brain." },
                  { stat: "70%",  heading: "Immune Regulation",   body: "The majority of your immune cells reside in the gut lining — making it your first line of defense." },
                  { stat: "2×",   heading: "Faster Recovery",     body: "A healed gut microbiome speeds up recovery from stress, illness, and inflammation." },
                  { stat: "15+",  heading: "Years of Practice",   body: "BK Shikha's framework is built from 15+ years of holistic gut healing work." },
                ].map((f, i) => (
                  <AboutFactItem
                    key={i}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  >
                    <AboutFactAccent />
                    <AboutFactStat>{f.stat}</AboutFactStat>
                    <AboutFactHeading>{f.heading}</AboutFactHeading>
                    <AboutFactBody>{f.body}</AboutFactBody>
                  </AboutFactItem>
                ))}
              </AboutFactGrid>
            </AboutContent>

          </AboutLayout>
        </div>
      </AboutSection>

      <SymptomsSection>
        <div className="container">

          <SymptomTop>
            <SymptomEyebrow>Symptoms</SymptomEyebrow>
            <SymptomMainTitle>Common Signs of Gut Imbalance</SymptomMainTitle>
            <SymptomSubtext>
              Your body speaks before you do. Recognising these patterns early is the first step to healing.
            </SymptomSubtext>
          </SymptomTop>

          <BentoGrid>
            {[
              { num: "01", bg: "#FFF2F3", accent: "#C25964", ...symptoms[0] },
              { num: "02", bg: "#FFF8EC", accent: "#B8813A", ...symptoms[1] },
              { num: "03", bg: "#F0F6FF", accent: "#4A78B8", ...symptoms[2] },
              { num: "04", bg: "#F2FFF4", accent: "#3A8A50", ...symptoms[3] },
            ].map((item, i) => (
              <BentoCell
                key={item.title}
                $bg={item.bg}
                $accent={item.accent}
                $wide={i === 0 || i === 3}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <BentoCellNum $accent={item.accent}>{item.num}</BentoCellNum>
                <BentoCellIcon $accent={item.accent}>{item.icon}</BentoCellIcon>
                <BentoCellTitle>{item.title}</BentoCellTitle>
                <BentoCellDesc>{item.description}</BentoCellDesc>
              </BentoCell>
            ))}
          </BentoGrid>

        </div>
      </SymptomsSection>

      <TreatmentsSection>
        <div className="container">

          <TreatHeader>
            <TreatEyebrow>Healing Programs</TreatEyebrow>
            <TreatTitle>Treatments &amp; Healing Plans</TreatTitle>
            <TreatSubtext>
              Three pathways to lasting gut health — each tailored to go beyond symptom relief.
            </TreatSubtext>
          </TreatHeader>

          <TreatGallery>
            {treatments.map((item, i) => (
              <TreatTile
                key={item.title}
                as={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <TreatImg src={item.image} alt={item.title} loading="lazy" />
                <TreatOverlay />
                <TreatTileContent>
                  <TreatTileTop>
                    <TreatTileNum>{item.num}</TreatTileNum>
                    <TreatTileTag>{item.tag}</TreatTileTag>
                  </TreatTileTop>
                  <TreatTileBottom>
                    <TreatTileName>{item.title}</TreatTileName>
                    <TreatTileDesc>{item.description}</TreatTileDesc>
                  </TreatTileBottom>
                </TreatTileContent>
              </TreatTile>
            ))}
          </TreatGallery>

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

      <ContactCTASection>
        <div className="container">
          <ContactStrip
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactTopLine />
            <ContactBody>
              <ContactLeft>
                <ContactEyebrow>Begin Your Journey</ContactEyebrow>
                <ContactTitle>Take the First Step<br />Toward Healing</ContactTitle>
              </ContactLeft>
              <ContactRight>
                <ContactText>
                  Book your consultation and start a guided gut recovery journey that restores calm, comfort, and confidence.
                </ContactText>
                <ContactCTA to="/contact">
                  Contact BK Shikha <FiArrowRight />
                </ContactCTA>
              </ContactRight>
            </ContactBody>
            <ContactBottomLine />
          </ContactStrip>
        </div>
      </ContactCTASection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  min-height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: var(--navbar-h);

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100dvh;
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 6rem 0 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 5rem 0 3rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 4.5rem 0 2.5rem;
  }

  @media (max-width: 390px) {
    padding: 4rem 0 2rem;
  }
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
  background: linear-gradient(135deg, #A3404B 0%, #C25964 100%);
  box-shadow: 0 6px 20px rgba(194, 89, 100, 0.3);
  transition: all ${theme.transitions.base};

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
    color: white;
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
  padding: 0.9rem 1.5rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.95rem;
  font-weight: 500;
  color: white;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  transition: all ${theme.transitions.base};

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.9);
    color: white;
    transform: translateY(-2px);
  }
`;

/* ── About Section: magazine feature spread ── */
const AboutSection = styled.section`
  padding: 5.5rem 0;
  background: #FDFAF8;
`;

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutImgWrap = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: 0 20px 60px rgba(163, 64, 75, 0.14);

  @media (max-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 5;
  }
`;

const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.8s ease;

  ${AboutImgWrap}:hover & {
    transform: scale(1.04);
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutTag = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #A3404B;
  margin-bottom: 1rem;
  display: block;
`;

const AboutTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.12;
  margin: 0 0 1.25rem;
`;

const AboutLead = styled.p`
  font-size: 1rem;
  color: #6B5860;
  line-height: 1.85;
  margin: 0 0 2.75rem;
  padding-bottom: 2.75rem;
  border-bottom: 1px solid rgba(163, 64, 75, 0.12);
`;

const AboutFactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 3rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AboutFactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const AboutFactAccent = styled.div`
  width: 2rem;
  height: 2.5px;
  background: #C25964;
  border-radius: 2px;
  margin-bottom: 0.5rem;
`;

const AboutFactStat = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 2.1rem;
  font-weight: 800;
  color: #A3404B;
  line-height: 1;
`;

const AboutFactHeading = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  color: #1A1214;
  margin-top: 0.1rem;
`;

const AboutFactBody = styled.div`
  font-size: 0.8rem;
  color: #8A7078;
  line-height: 1.65;
`;

/* ── Symptoms Section: bento grid ── */
const SymptomsSection = styled.section`
  padding: 5.5rem 0;
  background: #FDFAF8;
`;

const SymptomTop = styled.div`
  margin-bottom: 3rem;
  max-width: 600px;
`;

const SymptomEyebrow = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #C25964;
  display: block;
  margin-bottom: 0.75rem;
`;

const SymptomMainTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.15;
  margin: 0 0 0.85rem;
`;

const SymptomSubtext = styled.p`
  font-size: 0.95rem;
  color: #7A6468;
  line-height: 1.75;
  margin: 0;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 3fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BentoCell = styled.div`
  background: ${({ $bg }) => $bg || '#FFF5F6'};
  border-radius: 1.5rem;
  padding: 2.2rem 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.07);
  }
`;

const BentoCellNum = styled.span`
  position: absolute;
  top: -0.5rem;
  right: 1rem;
  font-family: ${theme.fonts.heading};
  font-size: 6rem;
  font-weight: 900;
  color: ${({ $accent }) => $accent || '#C25964'};
  opacity: 0.07;
  line-height: 1;
  user-select: none;
  pointer-events: none;
`;

const BentoCellIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.75rem;
  background: ${({ $accent }) => $accent ? `${$accent}18` : 'rgba(194,89,100,0.1)'};
  color: ${({ $accent }) => $accent || '#C25964'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
`;

const BentoCellTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1A1214;
  margin: 0;
  line-height: 1.3;
`;

const BentoCellDesc = styled.p`
  font-size: 0.83rem;
  color: #7A6468;
  line-height: 1.7;
  margin: 0;
`;

/* ── Treatments Section: tall portrait gallery ── */
const TreatmentsSection = styled.section`
  padding: 5.5rem 0;
  background: #FDFAF8;
`;

const TreatHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const TreatEyebrow = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #C25964;
  flex-shrink: 0;
`;

const TreatTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.15;
  margin: 0;
  flex: 1;
`;

const TreatSubtext = styled.p`
  font-size: 0.9rem;
  color: #7A6468;
  line-height: 1.75;
  margin: 0;
  max-width: 280px;
  flex-shrink: 0;
  padding-bottom: 0.25rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const TreatGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TreatTile = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  cursor: default;

  @media (max-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 3;
  }
`;

const TreatImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;

  ${TreatTile}:hover & {
    transform: scale(1.06);
  }
`;

const TreatOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 18, 20, 0.15) 0%,
    rgba(26, 18, 20, 0.3) 40%,
    rgba(26, 18, 20, 0.82) 100%
  );
  transition: background 0.4s ease;

  ${TreatTile}:hover & {
    background: linear-gradient(
      to bottom,
      rgba(26, 18, 20, 0.1) 0%,
      rgba(26, 18, 20, 0.35) 35%,
      rgba(26, 18, 20, 0.9) 100%
    );
  }
`;

const TreatTileContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`;

const TreatTileTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TreatTileNum = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 0.85rem;
  font-weight: 800;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.05em;
`;

const TreatTileTag = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(194, 89, 100, 0.7);
  backdrop-filter: blur(6px);
  border-radius: 2rem;
  padding: 0.25rem 0.75rem;
`;

const TreatTileBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(2.5rem);
  transition: transform 0.4s ease;

  ${TreatTile}:hover & {
    transform: translateY(0);
  }
`;

const TreatTileName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;
`;

const TreatTileDesc = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  margin: 0;
  opacity: 0;
  transition: opacity 0.4s ease 0.05s;

  ${TreatTile}:hover & {
    opacity: 1;
  }
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

/* ── Contact CTA: editorial strip ── */
const ContactCTASection = styled.section`
  padding: 5rem 0 6rem;
  background: #FDFAF8;
`;

const ContactStrip = styled.div``;

const ContactTopLine = styled.div`
  height: 1px;
  background: #1A1214;
  margin-bottom: 2.5rem;
`;

const ContactBottomLine = styled.div`
  height: 1px;
  background: rgba(26, 18, 20, 0.12);
  margin-top: 2.5rem;
`;

const ContactBody = styled.div`
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

const ContactLeft = styled.div``;

const ContactEyebrow = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #C25964;
  margin-bottom: 1rem;
  display: block;
`;

const ContactTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.08;
  margin: 0;
`;

const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const ContactText = styled.p`
  font-size: 0.97rem;
  color: #6B5860;
  line-height: 1.8;
  margin: 0;
`;

const ContactCTA = styled(Link)`
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

export default GutMissing;
