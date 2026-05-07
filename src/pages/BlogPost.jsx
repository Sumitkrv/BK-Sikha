import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { FiClock, FiCalendar, FiUser, FiArrowLeft, FiArrowRight, FiTag, FiShare2 } from 'react-icons/fi';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const relatedRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.2 });

  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <NotFoundWrapper>
        <NotFoundContent>
          <h1>Blog Post Not Found</h1>
          <p>Sorry, we couldn't find the blog post you're looking for.</p>
          <BackButton to="/blog">
            <FiArrowLeft /> Back to Blog
          </BackButton>
        </NotFoundContent>
      </NotFoundWrapper>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <ContentParagraph key={index}>{block.text}</ContentParagraph>;
      
      case 'heading':
        return <ContentHeading key={index}>{block.text}</ContentHeading>;
      
      case 'list':
        return (
          <ContentList key={index}>
            {block.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ContentList>
        );
      
      case 'quote':
        return (
          <ContentQuote key={index}>
            <QuoteText>"{block.text}"</QuoteText>
            {block.author && <QuoteAuthor>— {block.author}</QuoteAuthor>}
          </ContentQuote>
        );
      
      case 'image':
        return (
          <ContentImage key={index}>
            <img src={block.src} alt={block.alt} loading="lazy" />
          </ContentImage>
        );
      
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection ref={heroRef} $bgImage={post.image}>
        <HeroOverlay />
        <HeroContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <BackLink
            as={motion(Link)}
            to="/blog"
            variants={itemVariants}
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft /> Back to Blog
          </BackLink>
          
          <motion.div variants={itemVariants}>
            <CategoryBadge>{post.category}</CategoryBadge>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HeroTitle>{post.fullTitle || post.title}</HeroTitle>
          </motion.div>
          
          <PostMeta
            as={motion.div}
            variants={itemVariants}
          >
            <MetaItem>
              <FiUser />
              {post.author}
            </MetaItem>
            <MetaItem>
              <FiCalendar />
              {post.date}
            </MetaItem>
            <MetaItem>
              <FiClock />
              {post.readTime}
            </MetaItem>
          </PostMeta>
        </HeroContainer>
      </HeroSection>

      {/* Main Content */}
      <ContentSection ref={contentRef}>
        <ContentContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <ArticleContent
            as={motion.article}
            variants={itemVariants}
          >
            {post.content.map((block, index) => renderContent(block, index))}
          </ArticleContent>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <TagsSection
              as={motion.div}
              variants={itemVariants}
            >
              <TagsTitle>
                <FiTag /> Tags
              </TagsTitle>
              <TagsList>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsList>
            </TagsSection>
          )}

          {/* Share Section */}
          <ShareSection
            as={motion.div}
            variants={itemVariants}
          >
            <ShareTitle>
              <FiShare2 /> Share this article
            </ShareTitle>
            <ShareText>Help others discover this content</ShareText>
          </ShareSection>
        </ContentContainer>
      </ContentSection>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedSection ref={relatedRef}>
          <RelatedContainer
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={relatedInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <RelatedTitle>Related Articles</RelatedTitle>
            </motion.div>
            
            <RelatedGrid>
              {relatedPosts.map((relatedPost, index) => (
                <RelatedCard
                  key={relatedPost.slug}
                  as={motion.article}
                  variants={itemVariants}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  whileHover={{ y: -8 }}
                >
                  <RelatedImage>
                    <img src={relatedPost.image} alt={relatedPost.title} loading="lazy" />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedCategory>{relatedPost.category}</RelatedCategory>
                    <RelatedCardTitle>{relatedPost.title}</RelatedCardTitle>
                    <RelatedExcerpt>{relatedPost.excerpt}</RelatedExcerpt>
                    <ReadMoreLink>
                      Read More <FiArrowRight />
                    </ReadMoreLink>
                  </RelatedContent>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedContainer>
        </RelatedSection>
      )}

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTATitle>Begin Your Wellness Journey</CTATitle>
          <CTAText>
            Ready to transform your life through yoga and holistic wellness? 
            Let's connect and create your personalized path to inner peace.
          </CTAText>
          <CTAButton
            as={motion(Link)}
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Session
          </CTAButton>
        </CTAContainer>
      </CTASection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #FAF8F5;
`;

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: ${props => `url(${props.$bgImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: var(--navbar-h);

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 50vh;
    background-attachment: scroll;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(34, 55, 27, 0.75) 50%,
    rgba(90, 138, 98, 0.65) 100%
  );
`;

const HeroContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 7rem 1.5rem 3rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #FAF8F5;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 2rem;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    gap: 0.75rem;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(206, 197, 173, 0.25);
  color: #cec5ad;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #FAF8F5;
  line-height: 1.2;
  margin: 0 0 2rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  color: rgba(250, 248, 245, 0.9);

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  
  svg {
    opacity: 0.8;
  }
`;

const ContentSection = styled.section`
  padding: 5rem 0;
  background: #FAF8F5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const ArticleContent = styled.article`
  background: white;
  padding: 4rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const ContentParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.9;
  color: #21371a;
  margin-bottom: 1.75rem;
  opacity: 0.95;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.0625rem;
    line-height: 1.8;
  }
`;

const ContentHeading = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 1.875rem;
  font-weight: 600;
  color: #22371b;
  margin: 3rem 0 1.5rem;
  line-height: 1.3;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.625rem;
    margin: 2.5rem 0 1.25rem;
  }
`;

const ContentList = styled.ul`
  margin: 1.5rem 0 2rem;
  padding-left: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1.25rem;
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #21371a;
    opacity: 0.95;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 8px;
      height: 8px;
      background: #cec5ad;
      border-radius: 50%;
    }

    strong {
      color: #22371b;
      font-weight: 600;
    }
  }
`;

const ContentQuote = styled.blockquote`
  margin: 3rem 0;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(206, 197, 173, 0.1) 0%, rgba(206, 197, 173, 0.05) 100%);
  border-left: 4px solid #cec5ad;
  border-radius: 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium} 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
    margin: 2rem 0;
  }
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 400;
  color: #22371b;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1875rem;
  }
`;

const QuoteAuthor = styled.cite`
  display: block;
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  color: #cec5ad;
  letter-spacing: 0.02em;
`;

const ContentImage = styled.figure`
  margin: 3rem 0;
  
  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.medium};
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 2rem 0;
  }
`;

const TagsSection = styled.div`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(206, 197, 173, 0.3);
`;

const TagsTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(206, 197, 173, 0.15);
  color: #22371b;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(206, 197, 173, 0.25);
  }
`;

const ShareSection = styled.div`
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(90, 138, 98, 0.08) 0%, rgba(206, 197, 173, 0.08) 100%);
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
`;

const ShareTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`;

const ShareText = styled.p`
  color: #21371a;
  opacity: 0.8;
  margin: 0;
`;

const RelatedSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const RelatedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const RelatedTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #22371b;
  text-align: center;
  margin-bottom: 3rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.article`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
`;

const RelatedImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${RelatedCard}:hover & img {
    transform: scale(1.05);
  }
`;

const RelatedContent = styled.div`
  padding: 1.75rem;
`;

const RelatedCategory = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #cec5ad;
  margin-bottom: 0.75rem;
`;

const RelatedCardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;

const RelatedExcerpt = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #22371b;
  font-size: 0.9375rem;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${RelatedCard}:hover & {
    color: #5a8a62;
    gap: 0.75rem;

    svg {
      transform: translateX(3px);
    }
  }
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

const CTAContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #FAF8F5;
  margin-bottom: 1.25rem;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(250, 248, 245, 0.9);
  margin-bottom: 2.5rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.125rem 2.75rem;
  background: linear-gradient(135deg, #cec5ad 0%, #d6ceb8 100%);
  color: #22371b;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 0 6px 25px rgba(206, 197, 173, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 35px rgba(206, 197, 173, 0.4);
    background: linear-gradient(135deg, #d6ceb8 0%, #ddd6c3 100%);
    color: #000000;
  }
`;

const NotFoundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FAF8F5;
  padding: 8rem 2rem 4rem;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 500px;

  h1 {
    font-family: ${theme.fonts.heading};
    font-size: 2.5rem;
    color: #22371b;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: #21371a;
    opacity: 0.8;
    margin-bottom: 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #FAF8F5;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 55, 27, 0.3);
  }
`;

export default BlogPost;
