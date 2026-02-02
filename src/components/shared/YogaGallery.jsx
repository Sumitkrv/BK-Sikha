import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FiX, FiChevronLeft, FiChevronRight, FiCamera, FiHeart } from 'react-icons/fi';

// Yoga Gallery Images - Practice in Motion
const galleryImages = [
  {
    id: 1,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.06 PM.jpeg',
    title: 'Warrior Flow',
    subtitle: 'Strength & Balance',
    description: 'Channeling inner strength through focused alignment',
  },
  {
    id: 2,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (1).jpeg',
    title: 'Graceful Extension',
    subtitle: 'Balance Pose',
    description: 'Finding equilibrium between effort and ease',
  },
  {
    id: 3,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (2).jpeg',
    title: 'Core Strength',
    subtitle: 'Power Center',
    description: 'Building stability from the inside out',
  },
  {
    id: 4,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM.jpeg',
    title: 'Mindful Movement',
    subtitle: 'Flow State',
    description: 'Where breath meets intention',
  },
  {
    id: 5,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM (1).jpeg',
    title: 'Dynamic Alignment',
    subtitle: 'Precise Practice',
    description: 'Every detail matters in the journey',
  },
  {
    id: 6,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM.jpeg',
    title: 'Heart Opening',
    subtitle: 'Backbend Practice',
    description: 'Releasing tension, embracing vulnerability',
  },
  {
    id: 7,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM (1).jpeg',
    title: 'Grounded Presence',
    subtitle: 'Foundation Work',
    description: 'Strong roots for powerful growth',
  },
  {
    id: 8,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM.jpeg',
    title: 'Fluid Motion',
    subtitle: 'Vinyasa Flow',
    description: 'Moving meditation in continuous rhythm',
  },
  {
    id: 9,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM (1).jpeg',
    title: 'Inner Focus',
    subtitle: 'Concentration',
    description: 'The mind leads, the body follows',
  },
  {
    id: 10,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM.jpeg',
    title: 'Serene Strength',
    subtitle: 'Calm Power',
    description: 'Finding peace within the practice',
  },
  {
    id: 11,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM (1).jpeg',
    title: 'Deep Stretch',
    subtitle: 'Flexibility Training',
    description: 'Opening pathways to greater freedom',
  },
  {
    id: 12,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM.jpeg',
    title: 'Balance Mastery',
    subtitle: 'Equilibrium',
    description: 'Standing tall in stillness',
  },
  {
    id: 13,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM (1).jpeg',
    title: 'Peak Pose',
    subtitle: 'Advanced Practice',
    description: 'Reaching new heights with dedication',
  },
  {
    id: 14,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM.jpeg',
    title: 'Breath & Body',
    subtitle: 'Pranayama Flow',
    description: 'Uniting movement with conscious breathing',
  },
  {
    id: 15,
    src: '/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.13 PM.jpeg',
    title: 'Journey Within',
    subtitle: 'Meditative Practice',
    description: 'Where discipline meets grace',
  },
];

const YogaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.2 });

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 3);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      <GallerySection ref={galleryRef}>
        <GalleryBackground />
        <Container>
          <GalleryContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <GalleryHeader>
                <SectionLabel>
                  <FiCamera /> Practice Gallery
                </SectionLabel>
                <SectionTitle>Yoga in Motion</SectionTitle>
                <GalleryDescription>
                  A glimpse into the daily practice — where discipline meets grace, 
                  and every pose tells a story of dedication.
                </GalleryDescription>
              </GalleryHeader>
            </motion.div>

            <MasonryGrid>
              {displayedImages.map((image, index) => (
                <GalleryItem
                  key={image.id}
                  as={motion.div}
                  variants={itemVariants}
                  className={index === 0 ? 'featured' : index === 2 ? 'tall' : ''}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(image, galleryImages.findIndex(img => img.id === image.id))}
                >
                  <ImageWrapper>
                    <GalleryImage 
                      src={image.src} 
                      alt={image.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <ImagePlaceholder>
                      <FiCamera />
                      <span>Add {image.title}</span>
                    </ImagePlaceholder>
                    <ImageOverlay>
                      <OverlayContent>
                        <PoseTitle>{image.title}</PoseTitle>
                        <PoseSubtitle>{image.subtitle}</PoseSubtitle>
                      </OverlayContent>
                      <ViewButton>
                        <FiHeart />
                      </ViewButton>
                    </ImageOverlay>
                  </ImageWrapper>
                </GalleryItem>
              ))}
            </MasonryGrid>

            {!showAll && galleryImages.length > 3 && (
              <ViewMoreButtonWrapper
                as={motion.div}
                variants={itemVariants}
              >
                <ViewMoreButton
                  onClick={() => setShowAll(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More ({galleryImages.length - 3} more poses)
                </ViewMoreButton>
              </ViewMoreButtonWrapper>
            )}

            {showAll && (
              <ViewMoreButtonWrapper
                as={motion.div}
                variants={itemVariants}
              >
                <ViewMoreButton
                  onClick={() => setShowAll(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Less
                </ViewMoreButton>
              </ViewMoreButtonWrapper>
            )}
          </GalleryContent>
        </Container>

        {/* Decorative Elements */}
        <DecorativeOrb className="orb1" />
        <DecorativeOrb className="orb2" />
      </GallerySection>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <LightboxOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <LightboxContent
              as={motion.div}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <LightboxImage src={selectedImage.src} alt={selectedImage.title} />
              <LightboxInfo>
                <LightboxTitle>{selectedImage.title}</LightboxTitle>
                <LightboxSubtitle>{selectedImage.subtitle}</LightboxSubtitle>
                <LightboxDesc>{selectedImage.description}</LightboxDesc>
              </LightboxInfo>

              <CloseButton onClick={closeLightbox}>
                <FiX />
              </CloseButton>

              <NavButton className="prev" onClick={() => navigateImage('prev')}>
                <FiChevronLeft />
              </NavButton>
              <NavButton className="next" onClick={() => navigateImage('next')}>
                <FiChevronRight />
              </NavButton>

              <ImageCounter>
                {currentIndex + 1} / {galleryImages.length}
              </ImageCounter>
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components
const GallerySection = styled.section`
  position: relative;
  padding: 7rem 0 8rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8faf8 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }
`;

const GalleryBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(142, 207, 179, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(90, 138, 98, 0.08) 0%, transparent 50%);
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const GalleryContent = styled.div`
  position: relative;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.15;
  margin: 0 0 1.25rem;
`;

const GalleryDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  background: #f0f4f1;

  &.featured {
    grid-column: span 1;
    grid-row: span 1;
    
    @media (min-width: 900px) {
      aspect-ratio: 3/4;
    }
  }

  &.tall {
    @media (min-width: 600px) {
      grid-row: span 1;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.08);
  }
`;

const ImagePlaceholder = styled.div`
  display: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #e8f0e9 0%, #d4e5d6 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #5a8a62;
  
  svg {
    font-size: 3rem;
    opacity: 0.5;
  }
  
  span {
    font-family: ${theme.fonts.body};
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.7;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 40%,
    rgba(34, 55, 27, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const OverlayContent = styled.div`
  transform: translateY(20px);
  transition: transform 0.4s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

const PoseTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`;

const PoseSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

const ViewButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transform: scale(0);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: scale(1);
  }

  svg {
    font-size: 1.125rem;
  }
`;

const DecorativeOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: rgba(142, 207, 179, 0.15);
    top: -100px;
    right: -100px;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: rgba(90, 138, 98, 0.1);
    bottom: -50px;
    left: -50px;
  }
`;

// Lightbox Styles
const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
`;

const LightboxInfo = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const LightboxTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`;

const LightboxSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0.5rem;
`;

const LightboxDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -60px;
  right: 0;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev {
    left: -80px;

    @media (max-width: 768px) {
      left: -10px;
    }
  }

  &.next {
    right: -80px;

    @media (max-width: 768px) {
      right: -10px;
    }
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ImageCounter = styled.span`
  position: absolute;
  bottom: -40px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
`;

const ViewMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ViewMoreButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #5a8a62 0%, #8ecfb3 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(90, 138, 98, 0.3);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 6px 30px rgba(90, 138, 98, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9375rem;
  }
`;

export default YogaGallery;
