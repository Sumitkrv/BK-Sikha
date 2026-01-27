import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

const trainers = [
  {
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop",
    name: "BK Shikha",
    role: "Founder & Lead Mentor",
    social: { instagram: "#", facebook: "#", linkedin: "#", twitter: "#" }
  },
  {
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&h=600&fit=crop",
    name: "Priya Sharma",
    role: "Yoga Trainer",
    social: { instagram: "#", facebook: "#", linkedin: "#", twitter: "#" }
  },
  {
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=500&h=600&fit=crop",
    name: "Ananya Gupta",
    role: "Meditation Guide",
    social: { instagram: "#", facebook: "#", linkedin: "#", twitter: "#" }
  },
];

const TrainersSection = () => {
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
    <TrainersWrapper ref={ref}>
      {/* Background decorative elements */}
      <BgDecoration className="top-left" />
      <BgDecoration className="bottom-right" />

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <HeaderContent>
          <motion.div variants={itemVariants}>
            <SectionLabel>Trainer</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>Our Expert Trainer</SectionTitle>
          </motion.div>
        </HeaderContent>

        <TrainersGrid>
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <CardImageWrapper>
                <CardImage src={trainer.image} alt={trainer.name} loading="lazy" />
              </CardImageWrapper>
              <CardContent>
                <TrainerName>{trainer.name}</TrainerName>
                <TrainerRole>{trainer.role}</TrainerRole>
                <SocialLinks>
                  <SocialLink href={trainer.social.instagram} aria-label="Instagram">
                    <FiInstagram />
                  </SocialLink>
                  <SocialLink href={trainer.social.facebook} aria-label="Facebook">
                    <FiFacebook />
                  </SocialLink>
                  <SocialLink href={trainer.social.linkedin} aria-label="LinkedIn">
                    <FiLinkedin />
                  </SocialLink>
                  <SocialLink href={trainer.social.twitter} aria-label="Twitter">
                    <FiTwitter />
                  </SocialLink>
                </SocialLinks>
              </CardContent>
            </TrainerCard>
          ))}
        </TrainersGrid>

        <CTAWrapper as={motion.div} variants={itemVariants}>
          <CTAButton to="/about">
            Learn more
          </CTAButton>
        </CTAWrapper>
      </Container>
    </TrainersWrapper>
  );
};

// Styled Components - Anayoga Style
const TrainersWrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #eef4ef 0%, #e8f0e9 50%, #dfe9e0 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const BgDecoration = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;

  &.top-left {
    top: -150px;
    left: -150px;
    background: radial-gradient(circle, rgba(90, 138, 98, 0.08) 0%, transparent 70%);
  }

  &.bottom-right {
    bottom: -150px;
    right: -150px;
    background: radial-gradient(circle, rgba(201, 162, 39, 0.06) 0%, transparent 70%);
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
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 2.5rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #5a8a62;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`;

const TrainersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin: 0 auto;
  }
`;

const TrainerCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 350px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease;

  ${TrainerCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TrainerName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 0.25rem;
`;

const TrainerRole = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #6b7c6f;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #c9a227;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 50%;

  &:hover {
    color: #b8911f;
    background: rgba(201, 162, 39, 0.1);
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background: #c9a227;
  color: #ffffff;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 162, 39, 0.3);

  &:hover {
    background: #b8911f;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(201, 162, 39, 0.4);
  }
`;

export default TrainersSection;
