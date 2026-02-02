import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiArrowRight } from 'react-icons/fi';

const classes = [
  {
    image: "/classes/online-meditation.jpg",
    price: "₹999",
    title: "Online Meditation",
  },
  {
    image: "/classes/yoga-at-home.jpg",
    price: "₹1,499",
    title: "Yoga at Home",
  },
  {
    image: "/classes/couple-yoga.jpg",
    price: "₹2,499",
    title: "Couple Yoga",
  },
  {
    image: "/classes/morning-flow.jpg",
    price: "₹799",
    title: "Morning Flow",
  },
  {
    image: "/classes/stress-relief.jpg",
    price: "₹1,299",
    title: "Stress Relief",
  },
  {
    image: "/classes/private-session.jpg",
    price: "₹1,999",
    title: "Private Session",
  },
];

const CoachingJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <ClassesSection ref={ref}>
      {/* Decorative leaf */}
      <LeafDecoration>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C100 20 180 100 180 200C180 300 100 380 100 380" stroke="#d4e5d6" strokeWidth="1.5" fill="none"/>
          <path d="M100 60C100 60 150 120 150 200C150 280 100 340 100 340" stroke="#d4e5d6" strokeWidth="1" fill="none"/>
          <path d="M100 100C100 100 130 140 130 200C130 260 100 300 100 300" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M60 120C60 120 100 160 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M140 120C140 120 100 160 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M50 180C50 180 100 200 100 200" stroke="#d4e5d6" strokeWidth="0.6" fill="none"/>
          <path d="M150 180C150 180 100 200 100 200" stroke="#d4e5d6" strokeWidth="0.6" fill="none"/>
          <path d="M60 260C60 260 100 240 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
          <path d="M140 260C140 260 100 240 100 200" stroke="#d4e5d6" strokeWidth="0.8" fill="none"/>
        </svg>
      </LeafDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <HeaderContent>
          <motion.div variants={itemVariants}>
            <SectionLabel>Our Classes</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>Most Favorite Classes</SectionTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionDescription>
              Discover our most popular yoga and wellness classes designed to 
              nurture your mind, body, and spirit on your journey to inner peace.
            </SectionDescription>
          </motion.div>
        </HeaderContent>

        <ClassesGrid>
          {classes.map((item, index) => (
            <ClassCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <CardImageWrapper>
                <CardImage src={item.image} alt={item.title} loading="lazy" />
              </CardImageWrapper>
              <CardContent>
                <CardPrice>{item.price}</CardPrice>
                <CardTitle>{item.title}</CardTitle>
                <BookNowLink to="/contact">
                  Book Now <FiArrowRight />
                </BookNowLink>
              </CardContent>
            </ClassCard>
          ))}
        </ClassesGrid>
      </Container>
    </ClassesSection>
  );
};

// Styled Components - Exact Anayoga Style
const ClassesSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 180px;
  height: 400px;
  opacity: 0.4;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  svg path {
    stroke: #cec5ad;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 500px;
  margin-bottom: 3.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 2.5rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  /* Large screens */
  @media (min-width: ${theme.breakpoints.wide}) {
    gap: 2.5rem;
  }
`;

const ClassCard = styled.div`
  position: relative;
  padding-bottom: 60px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 260px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ClassCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`;

const CardPrice = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: #22371b;
  margin-bottom: 0.35rem;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`;

const BookNowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #22371b;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #22371b;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

export default CoachingJourney;
