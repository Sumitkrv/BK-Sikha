import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/about', label: 'About BK Shikha' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Wellness Insights' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Connect' },
  ];

  const services = [
    'Personalized Yoga Coaching',
    'Emotional Wellness Mentoring',
    'Mindset & NLP Coaching',
    'Stress Relief Sessions',
    'Confidence Building',
  ];

  return (
    <FooterWrapper>
      <Container className="container">
        <FooterTop>
          {/* Brand Section */}
          <BrandSection>
            <BrandName>BK Shikha</BrandName>
            <BrandTagline>Yogic Lifestyle & Wellness Mentor</BrandTagline>
            <BrandDescription>
              Transforming lives through holistic wellness, yoga, and emotional
              balance. Your journey to inner peace and confident living begins here.
            </BrandDescription>
            <SocialLinks>
              <SocialLink
                href="https://www.instagram.com/cyd_bkshikha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiInstagram />
              </SocialLink>
              <SocialLink
                href="mailto:contact@bkshikha.com"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
              </SocialLink>
              <SocialLink
                href="tel:+1234567890"
                aria-label="Phone"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          {/* Quick Links */}
          <LinksSection>
            <SectionTitle>Quick Links</SectionTitle>
            <LinksList>
              {quickLinks.map((link) => (
                <FooterLink key={link.path} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </LinksList>
          </LinksSection>

          {/* Services */}
          <LinksSection>
            <SectionTitle>Services</SectionTitle>
            <LinksList>
              {services.map((service, index) => (
                <ServiceItem key={index}>{service}</ServiceItem>
              ))}
            </LinksList>
          </LinksSection>

          {/* Contact CTA */}
          <CTASection>
            <SectionTitle>Begin Your Journey</SectionTitle>
            <CTAText>
              Ready to transform your life through wellness and yoga? Let's connect and create your personalized path to inner peace.
            </CTAText>
            <CTAButton
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Session
            </CTAButton>
          </CTASection>
        </FooterTop>

        {/* Copyright */}
        <FooterBottom>
          <Copyright>
            © {currentYear} BK Shikha. All rights reserved. Crafted with{' '}
            <HeartIcon>
              <FiHeart />
            </HeartIcon>{' '}
            for wellness seekers.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

// Styled Components
const FooterWrapper = styled.footer`
  background-image: url('/more images/footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(206, 197, 173, 0.2);
  padding: 5rem 0 2.5rem;
  margin-top: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(34, 55, 27, 0.75);
    z-index: 0;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 4rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BrandName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0;
`;

const BrandTagline = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  color: #8ecfb3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0;
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.75rem 0 1.75rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(206, 197, 173, 0.15);
  color: #cec5ad;
  border-radius: ${theme.borderRadius.full};
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    background: #cec5ad;
    color: #22371b;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(206, 197, 173, 0.25);
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0 0 0.75rem;
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #cec5ad;
    padding-left: 0.5rem;
  }
`;

const ServiceItem = styled.p`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CTAText = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2.25rem;
  background: #22371b;
  color: #FAF8F5;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background: #1a2b15;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(34, 55, 27, 0.35);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HeartIcon = styled.span`
  color: #cec5ad;
  display: inline-flex;
  animation: heartbeat 1.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
  }
`;

export default Footer;
