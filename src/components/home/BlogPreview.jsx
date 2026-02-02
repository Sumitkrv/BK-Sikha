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

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
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

  &:hover {
    box-shadow: 0 8px 30px rgba(139, 115, 85, 0.15);
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

  ${ArticleCard}:hover & {
    transform: scale(1.08);
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
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
  }
`;

const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
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
  }

  ${ArticleCard}:hover & svg {
    transform: translateX(4px);
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

  &:hover {
    background: #ffffff;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 30%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const ModalContent = styled.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0 0 1.5rem 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ModalText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: ${theme.colors.textLight};
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;
`;

export default BlogPreview;
