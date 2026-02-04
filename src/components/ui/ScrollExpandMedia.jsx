import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  bgObjectPosition,
  title,
  subtitle,
  scrollToExpand = 'Scroll to explore',
  textBlend = true,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    // Auto-expand on mobile after 2 seconds for better UX
    if (isMobile && !mediaFullyExpanded) {
      const timer = setTimeout(() => {
        setScrollProgress(1);
        setMediaFullyExpanded(true);
        setShowContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, mediaFullyExpanded]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded && !isMobile) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (isMobile && !mediaFullyExpanded) {
        // On mobile, any touch starts the expansion
        setScrollProgress(1);
        setMediaFullyExpanded(true);
        setShowContent(true);
      }
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY || isMobile) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded && !isMobile) {
        window.scrollTo(0, 0);
      }
    };

    if (!isMobile) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, isMobile]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const words = title ? title.split(' ') : [];
  const firstWord = words[0] || '';
  const restOfTitle = words.slice(1).join(' ');

  return (
    <SectionWrapper ref={sectionRef}>
      <Section>
        <ContentWrapper>
          {/* Background Image - Desktop Only */}
          {!isMobile && (
            <BackgroundWrapper
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <BackgroundImage
                src={bgImageSrc}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                $objectPosition={bgObjectPosition}
              />
              <BackgroundOverlay />
            </BackgroundWrapper>
          )}

          <Container>
            <MediaContainer>
              {/* Expanding Media */}
              <MediaWrapper
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <VideoContainer>
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '16px' }}
                      />
                      <VideoOverlay
                        as={motion.div}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </VideoContainer>
                  ) : (
                    <VideoContainer>
                      <Video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                      <VideoOverlay
                        as={motion.div}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </VideoContainer>
                  )
                ) : (
                  <ImageContainer>
                    <MediaImage src={mediaSrc} alt={title || 'Media content'} />
                    <VideoOverlay
                      as={motion.div}
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </ImageContainer>
                )}

                {/* Scroll Hint */}
                <ScrollHint style={{ transform: `translateX(${textTranslateX}vw)` }}>
                  {scrollToExpand}
                </ScrollHint>
              </MediaWrapper>

              {/* Title Text */}
              <TitleWrapper $textBlend={textBlend}>
                <TitleFirstWord
                  as={motion.h2}
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </TitleFirstWord>
                <TitleRest
                  as={motion.h2}
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </TitleRest>
              </TitleWrapper>
            </MediaContainer>

            {/* Content after expansion */}
            <ExpandedContent
              as={motion.section}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </ExpandedContent>
          </Container>
        </ContentWrapper>
      </Section>
    </SectionWrapper>
  );
};

// Styled Components
const SectionWrapper = styled.div`
  transition: background-color 0.7s ease-in-out;
  overflow-x: hidden;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100vh;
    min-height: 100dvh;
    min-height: -webkit-fill-available;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    min-height: 600px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100vh;
    min-height: 100dvh;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    position: absolute;
    height: 100%;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${props => props.$objectPosition || 'center center'};

  @media (max-width: ${theme.breakpoints.tablet}) {
    object-position: center 40%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    object-position: center 35%;
  }

  @media (max-width: 390px) {
    object-position: center 30%;
  }

  @media (max-width: 360px) {
    object-position: center 25%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center 50%;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    background: rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: 0;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  position: relative;
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 100vh;
    height: 100dvh;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.5rem;
  }
`;

const MediaWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  max-width: 95vw;
  max-height: 85vh;
  box-shadow: 0px 10px 60px rgba(34, 55, 27, 0.35);
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 20px;
    max-width: 92vw;
    max-height: 80vh;
    box-shadow: 0px 8px 50px rgba(34, 55, 27, 0.3);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 16px;
    max-width: 90vw;
    max-height: 75vh;
    box-shadow: 0px 6px 40px rgba(34, 55, 27, 0.25);
  }

  @media (max-width: 390px) {
    border-radius: 14px;
    max-width: 88vw;
    max-height: 70vh;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
    max-width: 86vw;
    max-height: 68vh;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;

  iframe {
    border-radius: 24px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      border-radius: 20px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      border-radius: 16px;
    }

    @media (max-width: 390px) {
      border-radius: 14px;
    }

    @media (max-width: 360px) {
      border-radius: 12px;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 16px;
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 16px;
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(34, 55, 27, 0.15) 0%, rgba(34, 55, 27, 0.35) 100%);
  border-radius: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(34, 55, 27, 0.12) 0%, rgba(34, 55, 27, 0.3) 100%);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(34, 55, 27, 0.1) 0%, rgba(34, 55, 27, 0.28) 100%);
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`;

const ScrollHint = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-top: 1.25rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-top: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    margin-top: 0.875rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  z-index: 10;
  mix-blend-mode: ${props => props.$textBlend ? 'difference' : 'normal'};
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.375rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.25rem;
    padding: 0 0.5rem;
  }
`;

const TitleFirstWord = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 7vw, 5rem);
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 30px rgba(34, 55, 27, 0.4);
  line-height: 1.1;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
    text-shadow: 0 3px 20px rgba(34, 55, 27, 0.5);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.5rem, 9vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.375rem, 8.5vw, 1.875rem);
  }
`;

const TitleRest = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 7vw, 5rem);
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 30px rgba(34, 55, 27, 0.4);
  line-height: 1.1;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
    text-shadow: 0 3px 20px rgba(34, 55, 27, 0.5);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.5rem, 9vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.375rem, 8.5vw, 1.875rem);
  }
`;

const ExpandedContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 4rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 1.25rem;
  }

  @media (max-width: 360px) {
    padding: 1rem;
  }
`;

export default ScrollExpandMedia;
