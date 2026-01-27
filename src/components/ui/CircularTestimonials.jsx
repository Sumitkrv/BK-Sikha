import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
  colors = {
    name: theme.colors.primary,
    designation: theme.colors.textLight,
    testimony: theme.colors.text,
    arrowBackground: theme.colors.cta,
    arrowForeground: "#ffffff",
    arrowHoverBackground: theme.colors.ctaHover,
  },
  fontSizes = {
    name: "1.5rem",
    designation: "1rem",
    quote: "1.125rem",
  },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextTestimonial, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: (direction) => ({
      scale: 0.8,
      opacity: 0,
      rotate: direction > 0 ? 10 : -10,
    }),
    center: {
      scale: 1,
      opacity: 1,
      rotate: 0,
    },
    exit: (direction) => ({
      scale: 0.8,
      opacity: 0,
      rotate: direction < 0 ? 10 : -10,
    }),
  };

  return (
    <TestimonialsWrapper>
      <ContentSection>
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialContent
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <QuoteMark>"</QuoteMark>
            <Quote style={{ color: colors.testimony, fontSize: fontSizes.quote }}>
              {currentTestimonial.quote}
            </Quote>
            <AuthorInfo>
              <AuthorName style={{ color: colors.name, fontSize: fontSizes.name }}>
                {currentTestimonial.name}
              </AuthorName>
              <AuthorDesignation style={{ color: colors.designation, fontSize: fontSizes.designation }}>
                {currentTestimonial.designation}
              </AuthorDesignation>
              {currentTestimonial.location && (
                <AuthorLocation style={{ color: colors.designation }}>
                  {currentTestimonial.location}
                </AuthorLocation>
              )}
            </AuthorInfo>
          </TestimonialContent>
        </AnimatePresence>

        <NavigationButtons>
          <NavButton
            onClick={prevTestimonial}
            $bgColor={colors.arrowBackground}
            $fgColor={colors.arrowForeground}
            $hoverColor={colors.arrowHoverBackground}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronLeft />
          </NavButton>
          <NavButton
            onClick={nextTestimonial}
            $bgColor={colors.arrowBackground}
            $fgColor={colors.arrowForeground}
            $hoverColor={colors.arrowHoverBackground}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronRight />
          </NavButton>
        </NavigationButtons>
      </ContentSection>

      <ImageSection>
        <CircularImageContainer>
          <AnimatePresence mode="wait" custom={direction}>
            <CircularImage
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {currentTestimonial.src ? (
                <img src={currentTestimonial.src} alt={currentTestimonial.name} />
              ) : (
                <EmojiAvatar>{currentTestimonial.emoji || "🧘"}</EmojiAvatar>
              )}
            </CircularImage>
          </AnimatePresence>
          
          {/* Decorative circles */}
          <DecorativeCircle $size="120%" $opacity={0.1} />
          <DecorativeCircle $size="140%" $opacity={0.05} />
        </CircularImageContainer>

        {/* Dots indicator */}
        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              $isActive={index === currentIndex}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </DotsContainer>
      </ImageSection>
    </TestimonialsWrapper>
  );
};

// Styled Components
const TestimonialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 1rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TestimonialContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QuoteMark = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 5rem;
  line-height: 0.5;
  color: ${theme.colors.accent};
  opacity: 0.3;
`;

const Quote = styled.p`
  font-family: ${theme.fonts.body};
  line-height: 1.8;
  font-style: italic;
  margin: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const AuthorName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  margin: 0;
`;

const AuthorDesignation = styled.p`
  font-family: ${theme.fonts.body};
  margin: 0;
`;

const AuthorLocation = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$bgColor};
  color: ${props => props.$fgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.$hoverColor};
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CircularImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
  }
`;

const CircularImage = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 180px;
    height: 180px;
  }
`;

const EmojiAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 3.5rem;
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${props => props.$size};
  height: ${props => props.$size};
  border-radius: 50%;
  border: 2px solid ${theme.colors.accent};
  opacity: ${props => props.$opacity};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$isActive ? theme.colors.accent : theme.colors.backgroundDark};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: ${props => props.$isActive ? theme.colors.accent : theme.colors.textLight};
  }
`;

export default CircularTestimonials;
