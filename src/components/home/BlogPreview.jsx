import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { getAllBlogPosts } from '../../data/blogData';

const blogs = getAllBlogPosts().slice(0, 3).map(post => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  image: post.image,
  slug: post.slug
}));

const BlogPreview = () => {
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
    hidden: { opacity: 0, y: 40 },
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
    <BlogSection ref={ref}>
      {/* Curved Top Decoration */}
      <CurvedTop>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,80 C360,20 720,20 1080,50 C1260,65 1380,80 1440,80 L1440,0 L0,0 Z" 
            fill="#f8f9f6"
          />
        </svg>
      </CurvedTop>

      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Header>
          <motion.div variants={itemVariants}>
            <SectionLabel>Blogs</SectionLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <SectionTitle>Latest Articles</SectionTitle>
          </motion.div>
        </Header>

        <BlogGrid>
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              as={motion.article}
              variants={itemVariants}
            >
              <ImageWrapper>
                <BlogImage 
                  src={blog.image} 
                  alt={blog.title}
                  loading="lazy"
                />
                <ImageOverlay />
              </ImageWrapper>
              <CardContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                <ReadMoreLink to={`/blog/${blog.slug}`}>
                  Read more
                </ReadMoreLink>
              </CardContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

// Styled Components
const BlogSection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #f0f4f0 0%, #f5f8f5 50%, #FAF8F5 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const CurvedTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  overflow: hidden;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 50px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
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
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
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

const BlogCard = styled.article`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(34, 55, 27, 0.06);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(34, 55, 27, 0.12);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.1) 100%);
  pointer-events: none;
`;

const CardContent = styled.div`
  padding: 1.75rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const BlogTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: #22371b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogExcerpt = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #21371a;
  opacity: 0.8;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #22371b;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;

  &:hover {
    color: #22371b;
    border-bottom-color: #cec5ad;
  }
`;

export default BlogPreview;
