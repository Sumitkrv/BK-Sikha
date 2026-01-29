import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { CircularTestimonials } from '../ui/CircularTestimonials';

const testimonials = [
  {
    quote: "BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need.",
    name: 'Priya Sharma',
    designation: 'Software Engineer',
    location: 'Bangalore',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
  },
  {
    quote: "The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision. BK Shikha helped me reprogram those limiting beliefs and step into my power.",
    name: 'Anjali Verma',
    designation: 'Entrepreneur',
    location: 'Mumbai',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
  },
  {
    quote: "As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques I use every single day.",
    name: 'Rahul Mehta',
    designation: 'College Student',
    location: 'Delhi',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
  },
  {
    quote: "I came to BK Shikha feeling stuck in every area of my life. Her holistic transformation program changed everything. It wasn't just about yoga poses; it was about redesigning my entire life with intention. Six months later, I'm living my dream life.",
    name: 'Kavita Singh',
    designation: 'Marketing Manager',
    location: 'Pune',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60',
  },
];

const TestimonialsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <TestimonialsSection ref={ref}>
      {/* Decorative Elements */}
      <DecorativeLeaf className="left">
        <svg viewBox="0 0 120 200" fill="none">
          <path d="M60 0C60 0 10 50 10 100C10 150 60 200 60 200C60 200 110 150 110 100C110 50 60 0 60 0Z" fill="#e8f0e9" />
          <path d="M60 20V180" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 60L30 90" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 100L35 130" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 60L90 90" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 100L85 130" stroke="#c5ddc8" strokeWidth="1" />
        </svg>
      </DecorativeLeaf>

      <DecorativeLeaf className="right">
        <svg viewBox="0 0 120 200" fill="none">
          <path d="M60 0C60 0 10 50 10 100C10 150 60 200 60 200C60 200 110 150 110 100C110 50 60 0 60 0Z" fill="#e8f0e9" />
          <path d="M60 20V180" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 60L30 90" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 100L35 130" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 60L90 90" stroke="#c5ddc8" strokeWidth="1" />
          <path d="M60 100L85 130" stroke="#c5ddc8" strokeWidth="1" />
        </svg>
      </DecorativeLeaf>

      {/* Golden Dots */}
      <DotsDecoration className="top-right">
        {[...Array(12)].map((_, i) => (
          <Dot key={i} style={{ 
            left: `${(i % 4) * 14}px`, 
            top: `${Math.floor(i / 4) * 14}px` 
          }} />
        ))}
      </DotsDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Header>
          <motion.div variants={itemVariants}>
            <SectionLabel>Testimonials</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>What Our Clients Say</SectionTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionSubtitle>
              Hear from the souls who found their peace through our wellness journey
            </SectionSubtitle>
          </motion.div>
        </Header>

        {/* Circular Testimonials Component */}
        <TestimonialWrapper as={motion.div} variants={itemVariants}>
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            autoplayInterval={5000}
            colors={{
              name: theme.colors.primary,
              designation: theme.colors.textLight,
              testimony: theme.colors.text,
              arrowBackground: theme.colors.cta,
              arrowForeground: "#ffffff",
              arrowHoverBackground: theme.colors.ctaHover,
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.95rem",
              quote: "1.0625rem",
            }}
          />
        </TestimonialWrapper>

        {/* View All Button */}
        <ViewAllWrapper as={motion.div} variants={itemVariants}>
          <ViewAllButton to="/testimonials">
            Read All Stories
            <FiArrowRight />
          </ViewAllButton>
        </ViewAllWrapper>
      </Container>
    </TestimonialsSection>
  );
};

// Styled Components
const TestimonialsSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f3f5f2 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 100px;
  height: 180px;
  opacity: 0.6;
  pointer-events: none;

  &.left {
    left: 2%;
    top: 20%;
    transform: rotate(-15deg);
  }

  &.right {
    right: 2%;
    bottom: 20%;
    transform: rotate(15deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DotsDecoration = styled.div`
  position: absolute;
  width: 56px;
  height: 42px;
  pointer-events: none;

  &.top-right {
    top: 15%;
    right: 10%;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #cec5ad;
  opacity: 0.6;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #22371b;
  margin: 0 0 1rem;
  line-height: 1.15;
`;

const SectionSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: #21371a;
  opacity: 0.8;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #22371b;
  text-decoration: none;
  padding: 1rem 2.25rem;
  border-radius: ${theme.borderRadius.full};
  border: 2px solid #22371b;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background: #22371b;
    color: #FAF8F5;
    gap: 0.75rem;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 55, 27, 0.25);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

export default TestimonialsPreview;
