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
  isolation: isolate;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(34, 55, 27, 0.75);
    z-index: 0;
    transform: translateZ(0);
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: 7rem 0 3.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: 6rem 0 3rem;
  }

  @media (max-width: 1440px) {
    padding: 4.5rem 0 2.25rem;
  }

  @media (max-width: 1200px) {
    padding: 4rem 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 3.5rem 0 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 3rem 0 1.75rem;
  }

  @media (max-width: 640px) {
    padding: 2.75rem 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2.5rem 0 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 2rem 0 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 2rem 0 1.25rem;
  }

  @media (max-width: 360px) {
    padding: 1.75rem 0 1rem;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    max-width: 1600px;
    padding: 0 3rem;
  }

  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.625rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* 4K screens */
  @media (min-width: 2560px) {
    gap: 5rem;
    margin-bottom: 4.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    gap: 4.5rem;
    margin-bottom: 4rem;
  }

  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 4rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1440px) {
    gap: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1200px) {
    gap: 2.75rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 640px) {
    gap: 2.25rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    gap: 1.75rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 375px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`;

const BrandName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 2.75rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.875rem;
  }

  @media (max-width: 640px) {
    font-size: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.625rem;
  }

  @media (max-width: 390px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.375rem;
  }
`;

const BrandTagline = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  color: #8ecfb3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1rem;
    letter-spacing: 0.14em;
  }

  @media (min-width: 1920px) {
    font-size: 0.9375rem;
    letter-spacing: 0.13em;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    letter-spacing: 0.11em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
    letter-spacing: 0.08em;
  }
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.75rem 0 1.75rem;

  @media (min-width: 2560px) {
    font-size: 1.1875rem;
    line-height: 1.85;
    margin: 1rem 0 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.825;
    margin: 0.875rem 0 1.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
    margin: 0.625rem 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9375rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin: 0.5rem 0 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.65;
    margin: 0.5rem 0 1rem;
    text-align: center;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.6;
    margin: 0.5rem 0 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
    margin: 0.5rem 0 0.875rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
    gap: 0.75rem;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
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
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
  }

  @media (min-width: 1920px) {
    width: 52px;
    height: 52px;
    font-size: 1.375rem;
  }

  @media (max-width: 1024px) {
    width: 46px;
    height: 46px;
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    width: 44px;
    height: 44px;
    font-size: 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 1.0625rem;
  }

  @media (max-width: 390px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    width: 38px;
    height: 38px;
    font-size: 0.9375rem;
  }

  &:hover {
    background: #cec5ad;
    color: #22371b;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 8px 25px rgba(206, 197, 173, 0.25);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #cec5ad;
      color: #22371b;
      transform: scale(0.95) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`;

const SectionTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0 0 0.75rem;

  @media (min-width: 2560px) {
    font-size: 1.625rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.0625rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
  }
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 0.9375rem;
  }

  @media (max-width: 640px) {
    gap: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }

  &:hover {
    color: #cec5ad;
    padding-left: 0.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    &:hover {
      padding-left: 0;
    }
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      color: #cec5ad;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ServiceItem = styled.p`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`;

const CTAText = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.65;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
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
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1.25rem 3rem;
    font-size: 1.125rem;
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 0.9375rem 2rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 1.875rem;
    font-size: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.8125rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 360px) {
    padding: 0.6875rem 1.375rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #1a2b15;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(34, 55, 27, 0.35);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #1a2b15;
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    padding-top: 3rem;
  }

  @media (min-width: 1920px) {
    padding-top: 2.5rem;
  }

  @media (max-width: 1024px) {
    padding-top: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-top: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }

  @media (max-width: 390px) {
    padding-top: 1rem;
  }

  @media (max-width: 360px) {
    padding-top: 1rem;
  }
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

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
    gap: 0.625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    gap: 0.375rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
    gap: 0.3125rem;
  }
`;

const HeartIcon = styled.span`
  color: #cec5ad;
  display: inline-flex;
  animation: heartbeat 1.5s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1) translateZ(0);
    }
    50% {
      transform: scale(1.15) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default Footer;
