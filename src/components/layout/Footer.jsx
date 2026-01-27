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
    { path: '/testimonials', label: 'Testimonials' },
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

        {/* Color Palette Display */}
        <ColorPalette>
          <ColorDot $color={theme.colors.primary} title="Warm Earth" />
          <ColorDot $color={theme.colors.secondary} title="Sage Green" />
          <ColorDot $color={theme.colors.accent} title="Golden Sand" />
          <ColorDot $color={theme.colors.cta} title="Deep Moss" />
        </ColorPalette>

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
  background: linear-gradient(
    135deg,
    ${theme.colors.backgroundAlt} 0%,
    ${theme.colors.background} 100%
  );
  border-top: 1px solid ${theme.colors.backgroundDark};
  padding: 4rem 0 2rem;
  margin-top: 6rem;
`;

const Container = styled.div``;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BrandName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
`;

const BrandTagline = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
`;

const BrandDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${theme.colors.text};
  margin: 0.5rem 0 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  font-size: 1.25rem;
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    box-shadow: ${theme.shadows.md};
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 0.5rem;
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.95rem;
  color: ${theme.colors.text};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.primary};
    padding-left: 0.5rem;
  }
`;

const ServiceItem = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textLight};
  margin: 0;
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CTAText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin: 0;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 0.875rem 2rem;
  background: ${theme.colors.cta};
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.ctaHover};
    box-shadow: ${theme.shadows.md};
  }
`;

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid ${theme.colors.backgroundDark};
  border-bottom: 1px solid ${theme.colors.backgroundDark};
`;

const ColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: ${theme.shadows.sm};
  cursor: help;
  transition: transform ${theme.transitions.base};

  &:hover {
    transform: scale(1.3);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HeartIcon = styled.span`
  color: ${theme.colors.accent};
  display: inline-flex;
  animation: heartbeat 1.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

export default Footer;
