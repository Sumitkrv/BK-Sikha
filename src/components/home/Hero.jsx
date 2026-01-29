import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiPlay } from 'react-icons/fi';

// HD Images from Unsplash/Pexels
const heroImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=1200&fit=crop&q=80";
const heroVideo = "https://cdn.pixabay.com/video/2022/11/07/138570-769930540_large.mp4";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const blobVariants = {
    animate: {
      y: prefersReducedMotion ? 0 : [0, -20, 0],
      rotate: prefersReducedMotion ? 0 : [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingBlobVariants = {
    animate: {
      y: prefersReducedMotion ? 0 : [0, -25, 0],
      x: prefersReducedMotion ? 0 : [0, 15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <HeroSection ref={ref}>
      {/* Decorative leaf on left */}
      <LeafDecoration
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 80 50 80 100C80 150 50 200 50 250C50 200 20 150 20 100C20 50 50 0 50 0Z" stroke="#5a8a62" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M50 50C50 50 70 80 70 120C70 160 50 190 50 220" stroke="#5a8a62" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M30 80C30 80 50 100 50 130" stroke="#5a8a62" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M70 80C70 80 50 100 50 130" stroke="#5a8a62" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>
      </LeafDecoration>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column - Text Content */}
        <TextColumn>
          <Headline>
            <AccentHeadline
              as={motion.span}
              variants={textVariants}
            >
              Refreshing
            </AccentHeadline>
            <MainHeadline
              as={motion.h1}
              variants={textVariants}
            >
              body and soul.
            </MainHeadline>
          </Headline>

          <Description
            as={motion.p}
            variants={textVariants}
          >
            Step into a journey of holistic wellness, emotional balance, and mindful living. 
            As your Yogic Lifestyle & Wellness Mentor, I guide you toward lasting transformation.
          </Description>

          <ButtonGroup
            as={motion.div}
            variants={containerVariants}
          >
            <PrimaryButton
              as={motion(Link)}
              to="/contact"
              variants={buttonVariants}
              whileHover={prefersReducedMotion ? {} : {
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(90, 138, 98, 0.3)',
              }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Join us
            </PrimaryButton>
            
            <SecondaryButton
              as={motion(Link)}
              to="/about"
              variants={buttonVariants}
              whileHover={prefersReducedMotion ? {} : {
                scale: 1.03,
                backgroundColor: 'rgba(90, 138, 98, 0.08)',
              }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Learn more
            </SecondaryButton>
          </ButtonGroup>
        </TextColumn>

        {/* Right Column - Enhanced Image with Organic Shapes */}
        <ImageColumn>
          {/* Main Image Container */}
          <ImageContainer>
            {/* Large organic shape behind image */}
            <LargeBlob
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <BlobSVG viewBox="0 0 600 600" preserveAspectRatio="none">
                <path 
                  d="M450,300Q480,400,400,480Q320,560,220,520Q120,480,80,380Q40,280,80,180Q120,80,220,60Q320,40,400,120Q480,200,450,300Z" 
                  fill="url(#blob-gradient)"
                />
                <defs>
                  <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b8d4bc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9bc2a0" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </BlobSVG>
            </LargeBlob>
            
            {/* Small floating circle */}
            <SmallBlob
              as={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            
            {/* Tiny decorative circle */}
            <TinyBlob
              as={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            {/* Main Image/Video */}
            <ImageWrapper
              as={motion.div}
              variants={imageVariants}
              whileHover={prefersReducedMotion ? {} : {
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
            >
              <ImageFrame>
                {showVideo ? (
                  <VideoPlayer
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </VideoPlayer>
                ) : (
                  <>
                    <YogaImage 
                      src={heroImage} 
                      alt="BK Shikha - Yogic Lifestyle & Wellness Mentor"
                      loading="eager"
                    />
                    <PlayButton
                      onClick={() => setShowVideo(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiPlay />
                    </PlayButton>
                  </>
                )}
                {/* Image overlay gradient */}
                <ImageOverlay $isVideo={showVideo} />
              </ImageFrame>
            </ImageWrapper>
          </ImageContainer>
        </ImageColumn>
      </Container>
    </HeroSection>
  );
};

// Styled Components - Enhanced Version
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(165deg, #FAF8F5 0%, #f5f7f3 35%, #eef3ed 70%, #e6ede5 100%);
  padding: 6rem 0 4rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(ellipse at 80% 30%, rgba(206, 197, 173, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: auto;
    padding: 7rem 0 3rem;
  }
`;

const LeafDecoration = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 300px;
  z-index: 1;
  
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    gap: 4rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }
`;

const TextColumn = styled.div`
  max-width: 520px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    order: 2;
  }
`;

const Headline = styled.div`
  margin-bottom: 1.5rem;
`;

const AccentHeadline = styled.span`
  display: block;
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  font-style: italic;
  color: #22371b;
  line-height: 1.1;
  margin-bottom: 0.15rem;
  letter-spacing: 0.02em;
  opacity: 0.95;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }
`;

const MainHeadline = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: #21371a;
  margin-bottom: 2.75rem;
  max-width: 460px;
  opacity: 0.9;
  font-weight: 400;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.75;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.875rem;
  }
`;

const ButtonBase = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(135deg, #cec5ad 0%, #d6ceb8 100%);
  color: #22371b;
  box-shadow: 0 4px 20px rgba(206, 197, 173, 0.35);
  font-weight: 600;
  letter-spacing: 0.02em;

  &:hover {
    background: linear-gradient(135deg, #d6ceb8 0%, #ddd6c3 100%);
    box-shadow: 0 8px 30px rgba(206, 197, 173, 0.45);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: #22371b;
  border: 2px solid rgba(34, 55, 27, 0.3);
  font-weight: 500;
  letter-spacing: 0.02em;

  &:hover {
    border-color: #22371b;
    background-color: rgba(34, 55, 27, 0.05);
    transform: translateY(-2px);
  }
`;

const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    min-height: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 320px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    height: 500px;
    max-width: 500px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 450px;
    max-width: 450px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 350px;
    max-width: 350px;
  }
`;

const LargeBlob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(0px);
`;

const BlobSVG = styled.svg`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 20px 40px rgba(90, 138, 98, 0.15));
`;

const SmallBlob = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #cec5ad, #ddd6c3);
  border-radius: 50%;
  z-index: 2;
  opacity: 0.9;
  box-shadow: 0 8px 25px rgba(206, 197, 173, 0.4);

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60px;
    height: 60px;
    top: 20%;
    right: 20%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }
`;

const TinyBlob = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #22371b, #3a5a34);
  border-radius: 50%;
  z-index: 2;
  opacity: 0.7;
  box-shadow: 0 6px 20px rgba(34, 55, 27, 0.3);

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 35px;
    height: 35px;
    bottom: 25%;
    left: 15%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 85%;
  height: 85%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 0 0 12px rgba(255, 255, 255, 0.8),
    inset 0 0 20px rgba(255, 255, 255, 0.6);

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 90%;
    height: 90%;
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const YogaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transition: transform 0.8s cubic-bezier(0.43, 0.13, 0.23, 0.96);
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.$isVideo ? 'transparent' : `linear-gradient(
    135deg,
    rgba(184, 212, 188, 0.1) 0%,
    rgba(155, 194, 160, 0.05) 50%,
    transparent 100%
  )`};
  pointer-events: none;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  svg {
    font-size: 1.75rem;
    color: #22371b;
    margin-left: 4px;
  }

  &:hover {
    background: #cec5ad;
    
    svg {
      color: #22371b;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export default Hero;