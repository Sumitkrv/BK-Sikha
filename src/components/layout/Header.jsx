import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

// Premium easing curves for luxurious motion
const premiumEasing = {
  smooth: [0.25, 0.1, 0.25, 1],
  entrance: [0.0, 0.0, 0.2, 1],
  exit: [0.4, 0.0, 1, 1],
  gentle: [0.4, 0, 0.2, 1],
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/nlp', label: 'NLP' },
    { path: '/gut-missing', label: 'Gut Healing' },
  ], []);

  // Motion variants with reduced motion support
  const headerVariants = {
    hidden: { y: prefersReducedMotion ? 0 : -100, opacity: prefersReducedMotion ? 1 : 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: premiumEasing.entrance }
    },
  };

  const mobileNavVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5, 
        ease: premiumEasing.smooth,
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.4, 
        ease: premiumEasing.exit,
      }
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: premiumEasing.entrance,
      },
    }),
  };

  const mobileCTAVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        delay: prefersReducedMotion ? 0 : navLinks.length * 0.08 + 0.1,
        ease: premiumEasing.entrance,
      },
    },
  };

  return (
    <>
      <HeaderWrapper
        as={motion.header}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        $isScrolled={isScrolled}
      >
        <Container className="container">
          <Logo to="/" aria-label="BK Shikha - Home">
            <LogoContent $isScrolled={isScrolled}>
              <LogoImage src="/bk.jpg" alt="BK Shikha Logo" $isScrolled={isScrolled} />
              <LogoTextContent>
                <LogoText $isScrolled={isScrolled}>BK Shikha</LogoText>
                <LogoTagline $isScrolled={isScrolled}>
                  Create your Destiny
                </LogoTagline>
              </LogoTextContent>
            </LogoContent>
          </Logo>

          {/* Desktop Navigation */}
          <Nav className="hide-mobile" role="navigation" aria-label="Main navigation">
            {/* Home Link */}
            <NavLink
              to="/"
              $isActive={location.pathname === '/'}
              aria-current={location.pathname === '/' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>Home</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/'} />
            </NavLink>
            
            {/* About Link */}
            <NavLink
              to="/about"
              $isActive={location.pathname === '/about'}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>About</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/about'} />
            </NavLink>
            
            {/* NLP Link */}
            <NavLink
              to="/nlp"
              $isActive={location.pathname === '/nlp'}
              aria-current={location.pathname === '/nlp' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>NLP</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/nlp'} />
            </NavLink>

            {/* Gut Healing Link */}
            <NavLink
              to="/gut-missing"
              $isActive={location.pathname === '/gut-missing'}
              aria-current={location.pathname === '/gut-missing' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>Gut Healing</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/gut-missing'} />
            </NavLink>
            
            {/* Desktop CTA Button */}
            <CTAButton
              to="/contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Begin Your Journey
            </CTAButton>
          </Nav>

          {/* Mobile Menu Toggle */}
          <MobileMenuButton
            className="show-mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <MenuIconWrapper
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: premiumEasing.smooth }}
            >
              {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </MenuIconWrapper>
          </MobileMenuButton>
        </Container>
      </HeaderWrapper>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileNavOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <MobileNav
              as={motion.nav}
              id="mobile-navigation"
              role="navigation"
              aria-label="Mobile navigation"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MobileNavHeader>
                <MobileNavBrand>BK Shikha</MobileNavBrand>
              </MobileNavHeader>
              
              <MobileNavLinks>
                {navLinks.map((link, index) => (
                  <MobileNavLink
                    key={link.path}
                    to={link.path}
                    as={motion(Link)}
                    custom={index}
                    variants={mobileNavItemVariants}
                    initial="hidden"
                    animate="visible"
                    $isActive={location.pathname === link.path}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {location.pathname === link.path && (
                      <ActiveIndicator
                        as={motion.span}
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3, ease: premiumEasing.smooth }}
                      />
                    )}
                    <MobileNavLinkText>{link.label}</MobileNavLinkText>
                  </MobileNavLink>
                ))}
              </MobileNavLinks>

              <MobileCTAButton
                to="/contact"
                as={motion(Link)}
                variants={mobileCTAVariants}
                initial="hidden"
                animate="visible"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                Begin Your Journey
              </MobileCTAButton>
            </MobileNav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components with premium polish

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  background: linear-gradient(135deg, rgba(194, 89, 100, 0.9) 0%, rgba(169, 74, 84, 0.88) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 28px rgba(42, 16, 21, 0.2);
  transition: 
    background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    backdrop-filter 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: 1.125rem 0;
  min-height: 64px;
  margin-bottom: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
  isolation: isolate;
  
  /* Safe area for notched devices */
  padding-top: max(${(props) => (props.$isScrolled ? '0.75rem' : '1.125rem')}, env(safe-area-inset-top));
  
  /* 4K screens */
  @media (min-width: 2560px) {
    padding: ${(props) => (props.$isScrolled ? '1.25rem 0' : '2rem 0')};
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: ${(props) => (props.$isScrolled ? '1.125rem 0' : '1.75rem 0')};
  }

  @media (max-width: 1440px) {
    padding: ${(props) => (props.$isScrolled ? '0.8125rem 0' : '1.125rem 0')};
  }

  @media (max-width: 1200px) {
    padding: ${(props) => (props.$isScrolled ? '0.75rem 0' : '1rem 0')};
  }

  @media (max-width: 1024px) {
    padding: ${(props) => (props.$isScrolled ? '0.6875rem 0' : '0.9375rem 0')};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${(props) => (props.$isScrolled ? '0.625rem 0 0' : '0.875rem 0 0')};
  }

  @media (max-width: 640px) {
    padding: ${(props) => (props.$isScrolled ? '0.5625rem 0 0' : '0.8125rem 0 0')};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${(props) => (props.$isScrolled ? '0.5625rem 0 0' : '0.875rem 0 0')};
  }

  @media (max-width: 390px) {
    padding: ${(props) => (props.$isScrolled ? '0.5625rem 0 0' : '0.875rem 0 0')};
  }

  @media (max-width: 375px) {
    padding: ${(props) => (props.$isScrolled ? '0.5rem 0 0' : '0.8125rem 0 0')};
  }
  
  @media (max-width: 360px) {
    padding: ${(props) => (props.$isScrolled ? '0.5rem 0 0' : '0.75rem 0 0')};
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    padding: ${(props) => (props.$isScrolled ? '1rem 0' : '1.5rem 0')};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 0 1.5rem;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    gap: 4rem;
  }

  @media (min-width: 1920px) {
    gap: 3.5rem;
  }

  @media (max-width: 1440px) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 2.25rem;
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 0 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 640px) {
    gap: 1.25rem;
    padding: 0 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.875rem;
  }

  @media (max-width: 360px) {
    gap: 0.75rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-decoration: none;
  position: relative;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 4px;
    border-radius: ${theme.borderRadius.sm};
  }

  @media (min-width: 2560px) {
    gap: 1.125rem;
  }

  @media (max-width: 640px) {
    gap: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.625rem;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
  }
`;

const LogoImage = styled.img`
  height: ${(props) => (props.$isScrolled ? '58px' : '72px')};
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: 
    height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  
  ${Logo}:hover & {
    opacity: 0.9;
  }
  
  @media (min-width: 2560px) {
    height: ${(props) => (props.$isScrolled ? '70px' : '90px')};
  }

  @media (min-width: 1920px) {
    height: ${(props) => (props.$isScrolled ? '62px' : '80px')};
  }

  @media (max-width: 1024px) {
    height: ${(props) => (props.$isScrolled ? '52px' : '65px')};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: ${(props) => (props.$isScrolled ? '50px' : '62px')};
  }

  @media (max-width: 640px) {
    height: ${(props) => (props.$isScrolled ? '48px' : '58px')};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => (props.$isScrolled ? '48px' : '60px')};
  }

  @media (max-width: 390px) {
    height: ${(props) => (props.$isScrolled ? '44px' : '54px')};
  }

  @media (max-width: 375px) {
    height: ${(props) => (props.$isScrolled ? '42px' : '52px')};
  }

  @media (max-width: 360px) {
    height: ${(props) => (props.$isScrolled ? '40px' : '50px')};
    border-radius: 6px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$isScrolled ? '0.5rem' : '0.75rem')};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    gap: ${(props) => (props.$isScrolled ? '0.4375rem' : '0.625rem')};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${(props) => (props.$isScrolled ? '0.4375rem' : '0.625rem')};
  }

  @media (max-width: 360px) {
    gap: ${(props) => (props.$isScrolled ? '0.375rem' : '0.5rem')};
  }
`;

const LogoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$isScrolled ? '0.0625rem' : '0.125rem')};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const LogoText = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${(props) => (props.$isScrolled ? '1.375rem' : '1.5rem')};
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.04em;
  line-height: 1.1;
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  ${Logo}:hover & {
    opacity: 0.85;
  }
  
  @media (min-width: 2560px) {
    font-size: ${(props) => (props.$isScrolled ? '1.75rem' : '2rem')};
  }

  @media (min-width: 1920px) {
    font-size: ${(props) => (props.$isScrolled ? '1.5rem' : '1.75rem')};
  }

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.$isScrolled ? '1.25rem' : '1.375rem')};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${(props) => (props.$isScrolled ? '1.1875rem' : '1.3125rem')};
  }

  @media (max-width: 640px) {
    font-size: ${(props) => (props.$isScrolled ? '1.125rem' : '1.25rem')};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${(props) => (props.$isScrolled ? '1.125rem' : '1.25rem')};
  }

  @media (max-width: 390px) {
    font-size: ${(props) => (props.$isScrolled ? '1.0625rem' : '1.1875rem')};
  }

  @media (max-width: 375px) {
    font-size: ${(props) => (props.$isScrolled ? '1rem' : '1.125rem')};
  }

  @media (max-width: 360px) {
    font-size: ${(props) => (props.$isScrolled ? '0.9375rem' : '1.0625rem')};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const LogoTagline = styled.span`
  font-family: ${theme.fonts.accent};
  font-size: ${(props) => (props.$isScrolled ? '0.625rem' : '0.6875rem')};
  font-weight: 400;
  font-style: italic;
  color: rgba(255, 240, 242, 0.9);
  letter-spacing: 0.06em;
  opacity: ${(props) => (props.$isScrolled ? 0.85 : 1)};
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  
  @media (min-width: 2560px) {
    font-size: ${(props) => (props.$isScrolled ? '0.75rem' : '0.875rem')};
  }

  @media (min-width: 1920px) {
    font-size: ${(props) => (props.$isScrolled ? '0.6875rem' : '0.75rem')};
  }

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.$isScrolled ? '0.5625rem' : '0.625rem')};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${(props) => (props.$isScrolled ? '0.5625rem' : '0.625rem')};
  }

  @media (max-width: 640px) {
    font-size: 0.5625rem;
    letter-spacing: 0.08em;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.5625rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 375px) {
    font-size: 0.5rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
    letter-spacing: 0.07em;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* Hide on mobile and small tablets */
  @media (max-width: 900px) {
    display: none;
  }
  
  @media (min-width: 2560px) {
    gap: 2.25rem;
  }

  @media (min-width: 1920px) {
    gap: 2rem;
  }

  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 1.75rem;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 1.45rem;
  }

  @media (max-width: 1200px) {
    gap: 1.15rem;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 0.975rem;
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) =>
    props.$isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)'};
  text-decoration: none;
  position: relative;
  padding: 0.625rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    padding: 0.75rem 0;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    padding: 0.6875rem 0;
  }

  @media (max-width: 1200px) {
    font-size: 0.875rem;
    padding: 0.5625rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 0.8125rem;
    padding: 0.5rem 0;
  }

  &:hover {
    color: #000000;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 4px;
    border-radius: ${theme.borderRadius.sm};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const NavLinkText = styled.span`
  position: relative;
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  ${NavLink}:hover & {
    transform: translateY(-1px);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

// Center-out underline animation
const NavLinkUnderline = styled.span`
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 240, 242, 0.2), rgba(255, 240, 242, 0.9));
  border-radius: 1px;
  transform: translateX(-50%) translateZ(0);
  width: ${(props) => (props.$isActive ? '75%' : '0')};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: 
    width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.35s ease;
  backface-visibility: hidden;
  
  ${NavLink}:hover & {
    width: 70%;
    opacity: 0.7;
  }
  
  ${NavLink}[aria-current="page"]:hover & {
    opacity: 1;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8125rem 1.875rem;
  background: linear-gradient(135deg, #C25964 0%, #A94A54 100%);
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 
    0 6px 20px rgba(194, 89, 100, 0.35),
    0 2px 6px rgba(194, 89, 100, 0.2);
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1rem 2.5rem;
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    padding: 0.9375rem 2.125rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0.75rem 1.625rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 1024px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
    color: #000000 !important;
    box-shadow: 
      0 12px 30px rgba(194, 89, 100, 0.45),
      0 6px 14px rgba(194, 89, 100, 0.28);
    transform: translateY(-2px) scale(1.02) translateZ(0);
  }
  
  &:focus-visible {
    outline: 2px solid #C25964;
    outline-offset: 3px;
  }
  
  &:active {
    background: #7A2530;
    transform: translateY(0) translateZ(0);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #A3404B;
      transform: scale(0.98) translateZ(0);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: #FFF0F2;
  padding: 0.75rem;
  margin-right: -0.75rem;
  cursor: pointer;
  border-radius: ${theme.borderRadius.md};
  transition: background 0.2s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  
  &:hover {
    background: rgba(245, 197, 202, 0.18);
  }
  
  &:focus-visible {
    outline: 2px solid #F5C5CA;
    outline-offset: 2px;
  }

  /* Show on mobile and small tablets */
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
    margin-right: -0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.5625rem;
    margin-right: -0.5625rem;
  }

  @media (max-width: 390px) {
    padding: 0.5rem;
    margin-right: -0.5rem;
  }
  
  @media (max-width: 360px) {
    padding: 0.5rem;
    margin-right: -0.5rem;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: rgba(245, 197, 202, 0.25);
    }
  }
`;

const MenuIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileNavOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(58, 31, 35, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: ${theme.zIndex.modal - 1};
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: none;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(180deg, #FFF3F5 0%, #FFFFFF 100%);
  box-shadow: -12px 0 40px rgba(194, 89, 100, 0.25);
  padding: 2.5rem 2rem 3rem;
  padding-top: max(2.5rem, env(safe-area-inset-top));
  padding-bottom: max(3rem, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  z-index: ${theme.zIndex.modal};
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  
  @media (min-width: 2560px) {
    max-width: 500px;
  }

  @media (min-width: 1920px) {
    max-width: 450px;
  }

  @media (max-width: 640px) {
    padding: 2.25rem 1.75rem 2.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem 2.5rem;
  }

  @media (max-width: 390px) {
    padding: 1.875rem 1.375rem 2.25rem;
  }

  @media (max-width: 375px) {
    padding: 1.75rem 1.25rem 2rem;
  }
  
  @media (max-width: 360px) {
    padding: 2rem 1.5rem 2.5rem;
  }
  
  @media (min-width: 600px) {
    width: 100%;
  }
`;

const MobileNavHeader = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;

  @media (max-width: 640px) {
    margin-bottom: 2.25rem;
    padding-bottom: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
    padding-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 1.875rem;
    padding-bottom: 1.125rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 1.75rem;
    padding-bottom: 1rem;
  }
`;

const MobileNavBrand = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #3A1F23;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.3125rem;
  }

  @media (max-width: 390px) {
    font-size: 1.25rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1875rem;
  }
`;

const MobileNavTagline = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 400;
  color: #6D4A4E;
  text-transform: uppercase;
  letter-spacing: 0.12em;

  @media (max-width: 640px) {
    font-size: 0.6875rem;
    letter-spacing: 0.11em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    gap: 0.3125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.25rem;
  }

  @media (max-width: 360px) {
    gap: 0.25rem;
  }
`;

const MobileNavLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) =>
    props.$isActive ? '#3A1F23' : '#5A3238'};
  text-decoration: none;
  padding: 1rem 1rem 1rem 1.25rem;
  border-radius: ${theme.borderRadius.lg};
  position: relative;
  display: flex;
  align-items: center;
  transition: 
    color 0.25s ease,
    background 0.25s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    font-size: 1.0625rem;
    padding: 0.9375rem 0.9375rem 0.9375rem 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0.875rem 0.875rem 0.875rem 1rem;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    padding: 0.8125rem 0.8125rem 0.8125rem 0.9375rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
    padding: 0.75rem 0.75rem 0.75rem 0.875rem;
  }

  &:hover {
    color: #3A1F23;
    background: rgba(245, 197, 202, 0.12);
  }
  
  &:focus-visible {
    outline: 2px solid #F5C5CA;
    outline-offset: -2px;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: rgba(245, 197, 202, 0.18);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ActiveIndicator = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 3px;
  height: 1.5rem;
  background: #F5C5CA;
  border-radius: 2px;
  backface-visibility: hidden;

  @media (max-width: 640px) {
    height: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 1.25rem;
    width: 2.5px;
  }

  @media (max-width: 360px) {
    height: 1.125rem;
    width: 2px;
  }
`;

const MobileNavLinkText = styled.span`
  position: relative;
`;

const MobileCTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 2rem;
  background: #C25964;
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-align: center;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 
    0 4px 16px rgba(194, 89, 100, 0.28),
    0 2px 4px rgba(194, 89, 100, 0.14);
  margin-top: auto;
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (max-width: 640px) {
    padding: 1.0625rem 1.875rem;
    font-size: 0.9375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem 1.75rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 390px) {
    padding: 0.9375rem 1.625rem;
    font-size: 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 360px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.8125rem;
  }

  &:hover {
    background: linear-gradient(135deg, #C25964 0%, #A3404B 100%);
    color: #000000 !important;
    box-shadow: 
      0 6px 24px rgba(194, 89, 100, 0.35),
      0 2px 6px rgba(194, 89, 100, 0.16);
  }
  
  &:focus-visible {
    outline: 2px solid #C25964;
    outline-offset: 3px;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #A3404B;
      transform: scale(0.98) translateZ(0);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;

export default Header;
