import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar, FiX } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { getLatestPosts } from '../../data/blogData';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';

const BlogPreview = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const latestPosts = getLatestPosts(3);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  if (!latestPosts || latestPosts.length === 0) return null;

  return (
    <>
      <Section>
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              subtitle="Latest Insights"
              title="From the Blog"
              description="Explore the latest thoughts on mindfulness, wellness, and personal growth"
            />
          </AnimatedSection>

          <ArticlesGrid>
            {latestPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={0.1 + index * 0.1}>
                <ArticleCard
                  as={motion.article}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedPost(post)}
                >
                  <ImageWrapper>
                    <ArticleImage src={post.image} alt={post.title} />
                    <Category>{post.category}</Category>
                  </ImageWrapper>
                  
                  <Content>
                    <Meta>
                      <MetaItem>
                        <FiCalendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </MetaItem>
                      <MetaItem>
                        <FiClock size={14} />
                        <span>{post.readTime}</span>
                      </MetaItem>
                    </Meta>
                    
                    <Title>{post.title}</Title>
                    <Excerpt>{post.excerpt}</Excerpt>
                    
                    <ReadMoreLink
                      as={motion.div}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Read Article</span>
                      <FiArrowRight />
                    </ReadMoreLink>
                  </Content>
                </ArticleCard>
              </AnimatedSection>
            ))}
          </ArticlesGrid>
        </div>
      </Section>

      {/* Modal Portal */}
      <AnimatePresence>
        {selectedPost && (
          <ModalPortal>
            <ModalOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedPost(null)}
            />
            <ModalWrapper
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Modal>
                <ModalHeader>
                  <ModalCategory>{selectedPost.category}</ModalCategory>
                  <CloseButton 
                    onClick={() => setSelectedPost(null)}
                    aria-label="Close modal"
                  >
                    <FiX size={24} />
                  </CloseButton>
                </ModalHeader>
                
                <ModalImage src={selectedPost.image} alt={selectedPost.title} />
                
                <ModalContent>
                  <ModalMeta>
                    <MetaItem>
                      <FiCalendar size={16} />
                      <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </MetaItem>
                    <MetaItem>
                      <FiClock size={16} />
                      <span>{selectedPost.readTime}</span>
                    </MetaItem>
                  </ModalMeta>
                  
                  <ModalTitle>{selectedPost.title}</ModalTitle>
                  <ModalText>{selectedPost.content}</ModalText>
                </ModalContent>
              </Modal>
            </ModalWrapper>
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components

const Section = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.background};
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 7rem 0;
  }

  @media (max-width: 1440px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 4.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }

  @media (max-width: 820px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.25rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.25rem 0;
  }

  @media (max-width: 375px) {
    padding: 2rem 0;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  @media (max-width: 1440px) {
    gap: 1.875rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    gap: 1.75rem;
    padding: 0 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1.5rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 1.25rem;
  }

  @media (max-width: 375px) {
    gap: 1rem;
  }
`;

const ArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 115, 85, 0.08);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    box-shadow: 0 8px 30px rgba(139, 115, 85, 0.15);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    box-shadow: 0 3px 16px rgba(139, 115, 85, 0.08);
    
    &:hover {
      box-shadow: 0 6px 24px rgba(139, 115, 85, 0.13);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    box-shadow: 0 2px 12px rgba(139, 115, 85, 0.06);
    
    &:hover {
      box-shadow: 0 4px 18px rgba(139, 115, 85, 0.11);
    }
  }

  @media (max-width: 390px) {
    box-shadow: 0 2px 10px rgba(139, 115, 85, 0.05);
    
    &:hover {
      box-shadow: 0 3px 15px rgba(139, 115, 85, 0.1);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      box-shadow: 0 4px 20px rgba(139, 115, 85, 0.08);
    }

    &:active {
      box-shadow: 0 6px 24px rgba(139, 115, 85, 0.13);
      transform: scale(0.99) translateZ(0);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  width: 100%;
  background: ${theme.colors.backgroundAlt};
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${ArticleCard}:hover & {
    transform: scale(1.08) translateZ(0);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    transition: transform 0.3s ease;
    
    ${ArticleCard}:hover & {
      transform: scale(1.05) translateZ(0);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    ${ArticleCard}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${ArticleCard}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${ArticleCard}:hover & {
      transform: translateZ(0);
    }
  }
`;

const Category = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(90, 138, 98, 0.95);
  color: #ffffff;
  padding: 0.375rem 0.875rem;
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 0.8125rem;
    padding: 0.4375rem 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.6875rem;
    padding: 0.3438rem 0.8125rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    top: 0.875rem;
    left: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.625rem;
    padding: 0.3125rem 0.75rem;
    top: 0.75rem;
    left: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.5938rem;
    padding: 0.2813rem 0.6875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.5625rem;
    padding: 0.25rem 0.625rem;
    top: 0.625rem;
    left: 0.625rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  @media (min-width: 1920px) {
    padding: 1.75rem;
    gap: 1.125rem;
  }

  @media (max-width: 1200px) {
    padding: 1.375rem;
    gap: 0.9375rem;
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.375rem;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
    gap: 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.125rem;
    gap: 0.8125rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  
  svg {
    color: ${theme.colors.accent};
    flex-shrink: 0;
  }

  @media (min-width: 1920px) {
    font-size: 0.875rem;
    gap: 0.4375rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.7813rem;
    gap: 0.3438rem;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    gap: 0.3125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.7188rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    gap: 0.25rem;
  }

  @media (max-width: 375px) {
    font-size: 0.625rem;
  }
`;

const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0;

  @media (min-width: 1920px) {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }

  @media (max-width: 1024px) {
    line-height: 1.35;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    line-height: 1.3;
  }

  @media (max-width: 640px) {
    line-height: 1.35;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    line-height: 1.4;
  }

  @media (max-width: 390px) {
    line-height: 1.4;
  }
`;

const Excerpt = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 1920px) {
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 1200px) {
    font-size: 0.9063rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  margin-top: 0.5rem;
  
  svg {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  ${ArticleCard}:hover & svg {
    transform: translateX(4px);
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    margin-top: 0.375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    margin-top: 0.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    gap: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }

  @media (hover: none) and (pointer: coarse) {
    ${ArticleCard}:hover & svg {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
    
    ${ArticleCard}:hover & svg {
      transform: translateX(0);
    }
  }
`;

// Modal Styles
const ModalPortal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  
  > * {
    pointer-events: auto;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0.75rem;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.5rem;
  }

  @media (max-width: 390px) {
    padding: 0.375rem;
  }
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  background: #ffffff;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  margin: auto;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    max-width: 900px;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 640px) {
    max-height: 92vh;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-height: 94vh;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 390px) {
    max-height: 95vh;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.125rem;
  }

  @media (max-width: 640px) {
    padding: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.875rem;
  }

  @media (max-width: 390px) {
    padding: 0.75rem;
  }
`;

const ModalCategory = styled.span`
  background: rgba(90, 138, 98, 0.95);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 0.9375rem;
    padding: 0.5625rem 1.125rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.8125rem;
    padding: 0.4375rem 0.9375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding: 0.375rem 0.875rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.6875rem;
    padding: 0.3438rem 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    padding: 0.3125rem 0.75rem;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.colors.text};
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #ffffff;
    transform: scale(1.05) translateZ(0);
  }

  &:active {
    transform: scale(0.95) translateZ(0);
  }

  @media (min-width: 1920px) {
    width: 2.75rem;
    height: 2.75rem;
  }

  @media (max-width: 1024px) {
    width: 2.375rem;
    height: 2.375rem;
  }

  @media (max-width: 640px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 390px) {
    width: 1.875rem;
    height: 1.875rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 30%;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (min-width: 1920px) {
    height: 350px;
  }

  @media (max-width: 1024px) {
    height: 280px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 250px;
  }

  @media (max-width: 640px) {
    height: 220px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 200px;
  }

  @media (max-width: 430px) {
    height: 180px;
  }

  @media (max-width: 390px) {
    height: 160px;
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`;

const ModalContent = styled.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;

  @media (min-width: 1920px) {
    padding: 2.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 1.375rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.25rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 1rem;
    margin-bottom: 1.125rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.875rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 390px) {
    gap: 0.75rem;
    margin-bottom: 0.875rem;
  }
`;

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.375rem, 3vw, 2rem);
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0 0 1.5rem 0;

  @media (min-width: 1920px) {
    font-size: clamp(1.625rem, 3vw, 2.25rem);
    margin-bottom: 1.75rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.375rem;
    line-height: 1.35;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.125rem;
    line-height: 1.4;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 0.875rem;
  }
`;

const ModalText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;

  @media (min-width: 1920px) {
    font-size: 1.125rem;
    line-height: 1.85;
  }

  @media (max-width: 1200px) {
    font-size: 1.0313rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.9688rem;
    line-height: 1.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  @media (max-width: 390px) {
    font-size: 0.9063rem;
    line-height: 1.6;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
`;

export default BlogPreview;
