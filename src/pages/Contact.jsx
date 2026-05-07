import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiMapPin, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. I'll be in touch soon. 🙏");
  };

  const services = [
    'Personalized Yoga Coaching',
    'Emotional Wellness Mentoring',
    'Mindset & NLP Coaching',
    'Gut Health & Nutrition',
    'Stress Relief Sessions',
    'Holistic Transformation',
    'Not sure yet – Need guidance',
  ];

  const contactItems = [
    { icon: <FiInstagram />, label: 'Instagram', value: '@cyd_bkshikha', href: 'https://www.instagram.com/cyd_bkshikha', note: 'Daily wellness tips & inspiration' },
    { icon: <FiMail />,      label: 'Email',     value: 'khnadelwalshikha1983@gmail.com', href: 'mailto:khnadelwalshikha1983@gmail.com', note: 'For detailed inquiries' },
    { icon: <FiPhone />,     label: 'WhatsApp',  value: '+91 783 501 2335', href: 'tel:+917835012335', note: 'Direct booking & quick questions' },
    { icon: <FiMapPin />,    label: 'Location',  value: 'New Delhi, India 110007', href: 'https://maps.google.com/?q=New+Delhi+110007', note: 'Hindi (Fluent) & English' },
  ];

  return (
    <PageWrapper>

      {/* ── Hero ── */}
      <HeroSection>
        <div className="container">
          <HeroInner>
            <HeroLeft
              as={motion.div}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <HeroEyebrow>Let's Connect</HeroEyebrow>
              <HeroTitle>Begin Your<br />Healing Journey</HeroTitle>
              <HeroLine />
              <HeroDesc>
                Every transformation starts with a conversation. Share your story, ask your questions, and let's explore how we can create the life you deserve together.
              </HeroDesc>
              <HeroStats>
                <HeroStat><HeroStatNum>15+</HeroStatNum><HeroStatLabel>Years Experience</HeroStatLabel></HeroStat>
                <HeroStatDivider />
                <HeroStat><HeroStatNum>2000+</HeroStatNum><HeroStatLabel>Lives Transformed</HeroStatLabel></HeroStat>
                <HeroStatDivider />
                <HeroStat><HeroStatNum>24hr</HeroStatNum><HeroStatLabel>Response Time</HeroStatLabel></HeroStat>
              </HeroStats>
            </HeroLeft>
            <HeroRight
              as={motion.div}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <HeroConsultBox>
                <HeroConsultIcon>🌿</HeroConsultIcon>
                <HeroConsultTitle>Free 15-Min Consultation</HeroConsultTitle>
                <HeroConsultText>
                  Not sure where to start? Book a complimentary call — no pressure, no sales pitch, just a heartfelt conversation about your wellness journey.
                </HeroConsultText>
                <HeroConsultNote>Fill the form below to get started</HeroConsultNote>
                <HeroArrow><FiArrowRight /></HeroArrow>
              </HeroConsultBox>
            </HeroRight>
          </HeroInner>
        </div>
      </HeroSection>

      {/* ── Form + Info ── */}
      <MainSection>
        <div className="container">
          <MainGrid>

            {/* Form */}
            <FormWrap
              as={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FormHeader>
                <FormTitle>Send Me a Message</FormTitle>
                <FormSubtitle>I'll get back to you within 24 hours</FormSubtitle>
              </FormHeader>

              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Your Name <Req>*</Req></Label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="What should I call you?" required />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email Address <Req>*</Req></Label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number <Optional>(Optional)</Optional></Label>
                    <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXX XXX XXXX" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="service">Service Interested In <Req>*</Req></Label>
                    <Select id="service" name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Select a service…</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">Tell Me About Your Journey <Req>*</Req></Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="What brings you here? What are you hoping to achieve? Share as much or as little as you're comfortable with…" rows="5" required />
                </FormGroup>

                <SubmitBtn
                  type="submit"
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FiArrowRight />
                </SubmitBtn>
              </Form>
            </FormWrap>

            {/* Info sidebar */}
            <InfoWrap
              as={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <InfoHeading>Other Ways to Reach Me</InfoHeading>
              <InfoList>
                {contactItems.map((item, i) => (
                  <InfoItem key={i}>
                    <InfoIcon>{item.icon}</InfoIcon>
                    <InfoItemBody>
                      <InfoItemLabel>{item.label}</InfoItemLabel>
                      <InfoItemLink href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {item.value}
                      </InfoItemLink>
                      <InfoItemNote>{item.note}</InfoItemNote>
                    </InfoItemBody>
                  </InfoItem>
                ))}
              </InfoList>

              <QuoteStrip>
                <QuoteMark>"</QuoteMark>
                <QuoteBody>
                  <QuoteText>The journey of a thousand miles begins with a single step.</QuoteText>
                  <QuoteAuthor>— Lao Tzu</QuoteAuthor>
                </QuoteBody>
              </QuoteStrip>
            </InfoWrap>

          </MainGrid>
        </div>
      </MainSection>

      {/* ── FAQ ── */}
      <FAQSection>
        <div className="container">
          <FAQTop
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FAQEyebrow>Common Questions</FAQEyebrow>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
          </FAQTop>

          <FAQList>
            {[
              { q: 'What type of yoga do you teach?', a: 'The sessions are a blend of gentle yoga, breathwork, and mindful movement designed to support both physical and mental well-being.' },
              { q: 'Can NLP help with anxiety, confidence, or emotional blocks?', a: 'Yes. NLP techniques are highly effective in addressing patterns related to anxiety, self-doubt, and emotional triggers — helping you respond rather than react.' },
              { q: 'How is gut health connected to mental well-being?', a: 'Your gut and brain are closely connected. An imbalanced gut can impact mood, stress levels, and energy, which is why a holistic approach is essential.' },
              { q: 'Who is this program best suited for?', a: 'Anyone looking to improve physical health, emotional balance, mindset, and overall lifestyle in a holistic, sustainable way.' },
            ].map((item, i) => (
              <FAQRow
                key={i}
                as={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <FAQNum>0{i + 1}</FAQNum>
                <FAQContent>
                  <FAQQuestion>{item.q}</FAQQuestion>
                  <FAQAnswer>{item.a}</FAQAnswer>
                </FAQContent>
              </FAQRow>
            ))}
          </FAQList>
        </div>
      </FAQSection>

    </PageWrapper>
  );
};

/* ── Styled Components ── */
const PageWrapper = styled.div``;

/* Hero */
const HeroSection = styled.section`
  padding: calc(5.5rem + var(--navbar-h)) 0 4rem;
  background: linear-gradient(160deg, #FFFFFF 0%, #FFF7F8 60%, #FFF0F2 100%);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(194,89,100,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: calc(4.5rem + var(--navbar-h)) 0 3rem;
  }
`;

const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const HeroLeft = styled.div``;

const HeroEyebrow = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #C25964;
  display: block;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 700;
  color: #1A1214;
  line-height: 1.1;
  margin: 0 0 1.1rem;
`;

const HeroLine = styled.div`
  width: 3rem;
  height: 3px;
  background: linear-gradient(90deg, #E8909A, #C25964);
  border-radius: 2px;
  margin-bottom: 1.4rem;
`;

const HeroDesc = styled.p`
  font-size: 1rem;
  color: rgba(75, 50, 53, 0.7);
  line-height: 1.85;
  margin: 0 0 2.25rem;
  max-width: 480px;
`;

const HeroStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const HeroStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const HeroStatNum = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  color: #1A1214;
  line-height: 1;
`;

const HeroStatLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(75, 50, 53, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const HeroStatDivider = styled.div`
  width: 1px;
  height: 2.2rem;
  background: rgba(26, 18, 20, 0.12);
`;

const HeroRight = styled.div``;

const HeroConsultBox = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(194, 89, 100, 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 32px rgba(194, 89, 100, 0.08);
  position: relative;
`;

const HeroConsultIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  line-height: 1;
`;

const HeroConsultTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: #1A1214;
  margin: 0 0 1rem;
`;

const HeroConsultText = styled.p`
  font-size: 0.93rem;
  color: rgba(75, 50, 53, 0.68);
  line-height: 1.8;
  margin: 0 0 1.25rem;
`;

const HeroConsultNote = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: #C25964;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
`;

const HeroArrow = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.75rem;
  color: rgba(194, 89, 100, 0.3);
  font-size: 1.5rem;
`;

/* Main Section */
const MainSection = styled.section`
  padding: 5.5rem 0;
  background: #FDFAF8;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* Form */
const FormWrap = styled.div``;

const FormHeader = styled.div`
  margin-bottom: 2.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(26,18,20,0.08);
`;

const FormTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #1A1214;
  margin: 0 0 0.3rem;
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: #8A7078;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #1A1214;
`;

const Req = styled.span`color: #C25964;`;

const Optional = styled.span`
  font-weight: 400;
  color: #8A7078;
  font-size: 0.78rem;
  margin-left: 0.25rem;
`;

const inputBase = `
  padding: 0.875rem 1.1rem;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  color: #1A1214;
  background: #ffffff;
  border: 1.5px solid rgba(163, 64, 75, 0.15);
  border-radius: 0.75rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #C25964;
    box-shadow: 0 0 0 3px rgba(194, 89, 100, 0.12);
  }

  &::placeholder {
    color: rgba(138, 112, 120, 0.6);
  }
`;

const Input = styled.input`${inputBase}`;
const Select = styled.select`${inputBase} cursor: pointer; appearance: auto;`;
const Textarea = styled.textarea`${inputBase} resize: vertical; line-height: 1.7;`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 2.25rem;
  background: linear-gradient(135deg, #A3404B, #C25964);
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(163, 64, 75, 0.32);
  transition: all 0.25s ease;
  align-self: flex-start;
  margin-top: 0.5rem;

  svg { transition: transform 0.3s ease; }

  &:hover {
    box-shadow: 0 12px 32px rgba(163, 64, 75, 0.42);
    svg { transform: translateX(4px); }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

/* Info Sidebar */
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 7rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
  }
`;

const InfoHeading = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: #1A1214;
  margin: 0 0 0.25rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.15rem;
  background: #ffffff;
  border-radius: 0.85rem;
  border: 1px solid rgba(163, 64, 75, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(163, 64, 75, 0.08);
  }
`;

const InfoIcon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.55rem;
  background: linear-gradient(135deg, #A3404B, #C25964);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const InfoItemBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const InfoItemLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8A7078;
  margin-bottom: 0.15rem;
`;

const InfoItemLink = styled.a`
  font-size: 0.88rem;
  font-weight: 600;
  color: #A3404B;
  text-decoration: none;
  display: block;
  overflow-wrap: anywhere;
  word-break: break-all;
  margin-bottom: 0.1rem;
  transition: color 0.2s ease;

  &:hover { color: #6B1E28; text-decoration: underline; }
`;

const InfoItemNote = styled.div`
  font-size: 0.75rem;
  color: #8A7078;
`;

const QuoteStrip = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.4rem 1.5rem;
  background: #ffffff;
  border-left: 3px solid #C25964;
  border-radius: 0 0.75rem 0.75rem 0;
`;

const QuoteMark = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 3rem;
  color: #C25964;
  line-height: 0.8;
  flex-shrink: 0;
  opacity: 0.35;
`;

const QuoteBody = styled.div``;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.95rem;
  font-style: italic;
  color: #1A1214;
  line-height: 1.65;
  margin: 0 0 0.35rem;
`;

const QuoteAuthor = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: #C25964;
  margin: 0;
`;

/* FAQ */
const FAQSection = styled.section`
  padding: 5.5rem 0 6rem;
  background: #ffffff;
`;

const FAQTop = styled.div`
  margin-bottom: 3rem;
`;

const FAQEyebrow = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #C25964;
  display: block;
  margin-bottom: 0.75rem;
`;

const FAQTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #1A1214;
  margin: 0;
  line-height: 1.15;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 860px;
`;

const FAQRow = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  gap: 1.5rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid rgba(163, 64, 75, 0.1);

  &:first-child { border-top: 1px solid rgba(163, 64, 75, 0.1); }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 2.5rem 1fr;
    gap: 1rem;
  }
`;

const FAQNum = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 800;
  color: rgba(194, 89, 100, 0.22);
  padding-top: 0.2rem;
`;

const FAQContent = styled.div``;

const FAQQuestion = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 700;
  color: #1A1214;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`;

const FAQAnswer = styled.p`
  font-size: 0.92rem;
  line-height: 1.78;
  color: #7A6468;
  margin: 0;
`;

export default Contact;
