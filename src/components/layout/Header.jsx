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
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Connect' },
  ], []);

  // Simple nav links for items without dropdown
  const simpleNavLinks = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Connect' },
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
            
            {/* Services Link */}
            <NavLink
              to="/services"
              $isActive={location.pathname === '/services'}
              aria-current={location.pathname === '/services' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>Services</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/services'} />
            </NavLink>
            
            {/* Portfolio Link */}
            <NavLink
              to="/portfolio"
              $isActive={location.pathname === '/portfolio'}
              aria-current={location.pathname === '/portfolio' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>Portfolio</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/portfolio'} />
            </NavLink>
            
            {/* Connect Link */}
            <NavLink
              to="/contact"
              $isActive={location.pathname === '/contact'}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <NavLinkText>Connect</NavLinkText>
              <NavLinkUnderline $isActive={location.pathname === '/contact'} />
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
                <MobileNavTagline>Your Wellness Journey</MobileNavTagline>
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
  z-index: ${theme.zIndex.fixed};
  background: ${(props) =>
    props.$isScrolled
      ? 'rgba(34, 55, 27, 0.97)'
      : 'rgba(33, 55, 26, 0.92)'};
  backdrop-filter: blur(${(props) => props.$isScrolled ? '16px' : '12px'});
  -webkit-backdrop-filter: blur(${(props) => props.$isScrolled ? '16px' : '12px'});
  box-shadow: ${(props) =>
    props.$isScrolled 
      ? '0 4px 20px rgba(34, 55, 27, 0.3), 0 1px 3px rgba(34, 55, 27, 0.15)'
      : 'none'};
  transition: 
    background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    backdrop-filter 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: ${(props) => (props.$isScrolled ? '0.875rem 0' : '1.375rem 0')};
  
  /* Safe area for notched devices */
  padding-top: max(${(props) => (props.$isScrolled ? '0.875rem' : '1.375rem')}, env(safe-area-inset-top));
  
  @media (max-width: 360px) {
    padding: ${(props) => (props.$isScrolled ? '0.5rem 0' : '0.75rem 0')};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${(props) => (props.$isScrolled ? '0.625rem 0' : '1rem 0')};
  }
  
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
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-decoration: none;
  position: relative;
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 4px;
    border-radius: ${theme.borderRadius.sm};
  }
`;

const LogoImage = styled.img`
  height: ${(props) => (props.$isScrolled ? '55px' : '70px')};
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: 
    height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  
  ${Logo}:hover & {
    opacity: 0.9;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => (props.$isScrolled ? '48px' : '60px')};
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
`;

const LogoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$isScrolled ? '0.0625rem' : '0.125rem')};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const LogoText = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${(props) => (props.$isScrolled ? '1.375rem' : '1.5rem')};
  font-weight: 600;
  color: #cec5ad;
  margin: 0;
  letter-spacing: 0.04em;
  line-height: 1.1;
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  
  ${Logo}:hover & {
    opacity: 0.85;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${(props) => (props.$isScrolled ? '1.125rem' : '1.25rem')};
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
  color: rgba(206, 197, 173, 0.85);
  letter-spacing: 0.06em;
  opacity: ${(props) => (props.$isScrolled ? 0.85 : 1)};
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    letter-spacing: 0.1em;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  /* Hide on tablet and below */
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 2.5rem;
  }
  
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 3rem;
  }
`;

const NavLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) =>
    props.$isActive ? '#cec5ad' : 'rgba(206, 197, 173, 0.85)'};
  text-decoration: none;
  position: relative;
  padding: 0.625rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #cec5ad;
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
  background: #cec5ad;
  border-radius: 1px;
  transform: translateX(-50%);
  width: ${(props) => (props.$isActive ? '70%' : '0')};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: 
    width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.35s ease;
  
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
  background: #5a8a62;
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 
    0 2px 8px rgba(90, 138, 98, 0.3),
    0 1px 2px rgba(90, 138, 98, 0.15);
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #4a7a52;
    box-shadow: 
      0 8px 24px rgba(90, 138, 98, 0.4),
      0 4px 8px rgba(90, 138, 98, 0.2);
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    outline: 2px solid #5a8a62;
    outline-offset: 3px;
  }
  
  &:active {
    background: #3d6a45;
    transform: translateY(0);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: #cec5ad;
  padding: 0.75rem;
  margin-right: -0.75rem;
  cursor: pointer;
  border-radius: ${theme.borderRadius.md};
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(206, 197, 173, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid #cec5ad;
    outline-offset: 2px;
  }

  /* Show on tablet and below */
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 360px) {
    padding: 0.5rem;
    margin-right: -0.5rem;
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
  background: rgba(74, 74, 74, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: ${theme.zIndex.modal - 1};
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(
    180deg,
    ${theme.colors.backgroundAlt} 0%,
    ${theme.colors.background} 100%
  );
  box-shadow: -8px 0 40px rgba(139, 115, 85, 0.12);
  padding: 2.5rem 2rem 3rem;
  padding-top: max(2.5rem, env(safe-area-inset-top));
  padding-bottom: max(3rem, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  z-index: ${theme.zIndex.modal};
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 360px) {
    width: 90%;
    padding: 2rem 1.5rem 2.5rem;
  }
  
  @media (min-width: 600px) {
    width: 60%;
  }
`;

const MobileNavHeader = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(139, 115, 85, 0.1);
`;

const MobileNavBrand = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;
`;

const MobileNavTagline = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 400;
  color: ${theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
`;

const MobileNavLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) =>
    props.$isActive ? '#22371b' : '#21371a'};
  text-decoration: none;
  padding: 1rem 1rem 1rem 1.25rem;
  border-radius: ${theme.borderRadius.lg};
  position: relative;
  display: flex;
  align-items: center;
  transition: 
    color 0.25s ease,
    background 0.25s ease;

  &:hover {
    color: #22371b;
    background: rgba(206, 197, 173, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid #cec5ad;
    outline-offset: -2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ActiveIndicator = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 1.5rem;
  background: #cec5ad;
  border-radius: 2px;
`;

const MobileNavLinkText = styled.span`
  position: relative;
`;

const MobileCTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 2rem;
  background: #5a8a62;
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-align: center;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 
    0 4px 16px rgba(90, 138, 98, 0.25),
    0 2px 4px rgba(90, 138, 98, 0.1);
  margin-top: auto;
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #4a7a52;
    box-shadow: 
      0 6px 24px rgba(90, 138, 98, 0.35),
      0 2px 6px rgba(90, 138, 98, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid #5a8a62;
    outline-offset: 3px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
  }
`;

export default Header;
