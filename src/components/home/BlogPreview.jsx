import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const blogs = [
  {
    id: 1,
    title: "Have a Good Body and Soul Balance in...",
    excerpt: "Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner peace...",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
    slug: "/blog/body-soul-balance"
  },
  {
    id: 2,
    title: "Yoga Tips : How to Keep Yoga When...",
    excerpt: "Learn effective strategies to maintain your yoga practice even during busy schedules and challenging times...",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400&fit=crop",
    slug: "/blog/keep-yoga-practice"
  },
  {
    id: 3,
    title: "Yoga Tips : The Yoga of Food and...",
    excerpt: "Explore the connection between mindful eating, nutrition, and your yoga journey for complete wellness...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    slug: "/blog/yoga-of-food"
  }
];

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
                <ReadMoreLink to={blog.slug}>
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
  padding: 6rem 0;
  background: linear-gradient(180deg, #eef4ef 0%, #f8f9f6 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
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
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

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
`;

const BlogCard = styled.article`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
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
  color: #2a3a2e;
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
  line-height: 1.7;
  color: #6b7c6f;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #c9a227;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    color: #b08a1e;
  }
`;

export default BlogPreview;
