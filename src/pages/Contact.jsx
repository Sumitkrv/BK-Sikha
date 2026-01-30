import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiInstagram,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';
import Button from '../components/shared/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent. I\'ll be in touch soon. 🙏');
  };

  const services = [
    'Personalized Yoga Coaching',
    'Emotional Wellness Mentoring',
    'Mindset & NLP Coaching',
    'Stress Relief Sessions',
    'Holistic Transformation',
    'Confidence Building',
    'Not sure yet - Need guidance',
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
            <Subtitle>Let's Connect</Subtitle>
            <HeroTitle>Begin Your Healing Journey Today</HeroTitle>
            <HeroDescription>
              Every transformation starts with a conversation. Share your story, ask
              your questions, and let's explore how we can work together to create the
              life you deserve.
            </HeroDescription>
          </HeroContent>
        </div>
      </HeroSection>

      {/* Contact Form & Info */}
      <ContactSection className="section">
        <div className="container">
          <ContentWrapper>
            {/* Contact Form */}
            <FormSection
              as={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FormTitle>Send Me a Message</FormTitle>
              <FormDescription>
                Fill out the form below and I'll get back to you within 24 hours. ✨
              </FormDescription>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">
                    Your Name <Required>*</Required>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What should I call you?"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">
                    Email Address <Required>*</Required>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXX XXX XXXX"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="service">
                    Service You're Interested In <Required>*</Required>
                  </Label>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">
                    Tell Me About Your Journey <Required>*</Required>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What brings you here? What are you hoping to achieve? Share as much or as little as you're comfortable with..."
                    rows="6"
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend />
                  Send Message
                </SubmitButton>
              </Form>
            </FormSection>

            {/* Contact Info */}
            <InfoSection
              as={motion.div}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <InfoCard>
                <InfoTitle>Other Ways to Connect</InfoTitle>

                <ContactMethods>
                  <ContactMethod>
                    <MethodIcon>
                      <FiInstagram />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>Instagram</MethodLabel>
                      <MethodLink
                        href="https://www.instagram.com/cyd_bkshikha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @cyd_bkshikha
                      </MethodLink>
                      <MethodDescription>
                        Daily wellness tips & inspiration
                      </MethodDescription>
                    </MethodInfo>
                  </ContactMethod>

                  <ContactMethod>
                    <MethodIcon>
                      <FiMail />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>Email</MethodLabel>
                      <MethodLink href="mailto:contact@bkshikha.com">
                        contact@bkshikha.com
                      </MethodLink>
                      <MethodDescription>
                        For detailed inquiries
                      </MethodDescription>
                    </MethodInfo>
                  </ContactMethod>

                  <ContactMethod>
                    <MethodIcon>
                      <FiPhone />
                    </MethodIcon>
                    <MethodInfo>
                      <MethodLabel>WhatsApp</MethodLabel>
                      <MethodLink href="tel:+1234567890">
                        +91 XXX XXX XXXX
                      </MethodLink>
                      <MethodDescription>
                        Direct booking & quick questions
                      </MethodDescription>
                    </MethodInfo>
                  </ContactMethod>
                </ContactMethods>
              </InfoCard>

              <SessionInfoCard>
                <SessionIcon>📅</SessionIcon>
                <SessionTitle>Free Consultation Call</SessionTitle>
                <SessionDescription>
                  Not sure where to start? Book a complimentary 15-minute
                  consultation call where we'll discuss your goals and find the
                  perfect service for you.
                </SessionDescription>
                <SessionNote>
                  No pressure, no sales pitch - just a heartfelt conversation about
                  your wellness journey.
                </SessionNote>
              </SessionInfoCard>

              <QuoteCard>
                <QuoteText>
                  "The journey of a thousand miles begins with a single step."
                </QuoteText>
                <QuoteAuthor>- Lao Tzu</QuoteAuthor>
              </QuoteCard>
            </InfoSection>
          </ContentWrapper>
        </div>
      </ContactSection>

      {/* FAQ Section */}
      <FAQSection className="section">
        <div className="container">
          <SectionTitle subtitle="Common Questions">
            What You Might Be Wondering
          </SectionTitle>

          <FAQGrid>
            <FAQItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FAQQuestion>How long does each session last?</FAQQuestion>
              <FAQAnswer>
                Session lengths vary by service: Yoga sessions are typically 60
                minutes, emotional wellness and NLP coaching are 75-90 minutes, and
                stress relief sessions are 45 minutes.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FAQQuestion>Are sessions online or in-person?</FAQQuestion>
              <FAQAnswer>
                I offer both! Online sessions via Zoom are available worldwide.
                In-person sessions are available in select locations. We'll discuss
                what works best for you during our consultation.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FAQQuestion>What if I'm a complete beginner?</FAQQuestion>
              <FAQAnswer>
                Perfect! I work with people at all levels. Every practice is
                personalized to your current abilities and goals. There's no judgment,
                only support and guidance.
              </FAQAnswer>
            </FAQItem>

            <FAQItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FAQQuestion>How quickly will I see results?</FAQQuestion>
              <FAQAnswer>
                Many clients feel shifts after the first session - increased calm,
                clarity, or hope. Lasting transformation typically unfolds over 8-12
                weeks with consistent practice. Everyone's journey is unique.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </div>
      </FAQSection>
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
    rgba(206, 197, 173, 0.15) 50%,
    ${theme.colors.backgroundAlt} 100%
  );
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(34, 55, 27, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
  line-height: 1.2;
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`;

const ContactSection = styled.section`
  background: ${theme.colors.backgroundAlt};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 5rem;
  }
`;

const FormSection = styled.div``;

const FormTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 1rem;
`;

const FormDescription = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.8;
  margin: 0 0 2.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: #21371a;
`;

const Required = styled.span`
  color: #c45e4a;
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }

  &::placeholder {
    color: rgba(33, 55, 26, 0.5);
  }
`;

const Select = styled.select`
  padding: 1rem 1.25rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem 1.25rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${theme.borderRadius.lg};
  resize: vertical;
  transition: all ${theme.transitions.base};

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }

  &::placeholder {
    color: rgba(33, 55, 26, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.125rem 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
  border: none;
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(34, 55, 27, 0.3);
  transition: all ${theme.transitions.base};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  align-self: flex-start;

  &:hover {
    background: linear-gradient(135deg, #2d4a23 0%, #22371b 100%);
    box-shadow: 0 6px 20px rgba(34, 55, 27, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.08);
  border: 1px solid rgba(206, 197, 173, 0.2);
`;

const InfoTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 2rem;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const MethodIcon = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #22371b 0%,
    #2d4a23 100%
  );
  color: #cec5ad;
  font-size: 1.5rem;
  border-radius: ${theme.borderRadius.lg};
`;

const MethodInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MethodLabel = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin: 0;
`;

const MethodLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #22371b;
  text-decoration: none;
  transition: all ${theme.transitions.base};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #cec5ad;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #21371a;
    
    &::after {
      width: 100%;
    }
  }
`;

const MethodDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(33, 55, 26, 0.65);
  margin: 0;
`;

const SessionInfoCard = styled.div`
  background: linear-gradient(
    135deg,
    #22371b 0%,
    #2d4a23 50%,
    #22371b 100%
  );
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(206, 197, 173, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const SessionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SessionTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 1rem;
`;

const SessionDescription = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  margin: 0 0 1rem;
  opacity: 0.95;
`;

const SessionNote = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
  opacity: 0.9;
`;

const QuoteCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
  border-left: 4px solid #cec5ad;
  box-shadow: 0 2px 12px rgba(34, 55, 27, 0.06);
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.6;
  color: #22371b;
  margin: 0 0 0.75rem;
`;

const QuoteAuthor = styled.p`
  font-size: 0.95rem;
  color: #cec5ad;
  font-weight: 500;
  margin: 0;
`;

const FAQSection = styled.section`
  background: white;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 2.5rem;
  }
`;

const FAQItem = styled.div`
  background: ${theme.colors.background};
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid rgba(206, 197, 173, 0.3);
  transition: all ${theme.transitions.base};

  &:hover {
    border-color: #cec5ad;
    box-shadow: 0 4px 15px rgba(34, 55, 27, 0.08);
    transform: translateY(-2px);
  }
`;

const FAQQuestion = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.75rem;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`;

export default Contact;
