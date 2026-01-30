import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiBookOpen, FiHeart, FiFeather, FiSun, FiStar, FiInstagram, FiMail, FiPlay } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// HD Images from Unsplash - 4K Quality Unique Images
const blogImages = {
  featured: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=2400&h=1600&fit=crop&q=100",
  yoga1: "https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?w=1600&h=1200&fit=crop&q=100",
  yoga2: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=1200&fit=crop&q=100",
  meditation: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=1600&h=1200&fit=crop&q=100",
  mindset: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&h=1200&fit=crop&q=100",
  wellness: "https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=1600&h=1200&fit=crop&q=100",
  lifestyle: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1600&h=1200&fit=crop&q=100",
  nature: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100",
  breathwork: "https://images.unsplash.com/photo-1512291313931-d4291c8475c4?w=1600&h=1200&fit=crop&q=100",
};

const Blog = () => {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const articlesRef = useRef(null);
  const categoriesRef = useRef(null);
  const newsletterRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const articlesInView = useInView(articlesRef, { once: true, amount: 0.1 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.3 });
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const categories = [
    { name: 'All', icon: <FiStar />, count: 12 },
    { name: 'Yoga', icon: <FiFeather />, count: 5 },
    { name: 'Meditation', icon: <FiSun />, count: 3 },
    { name: 'Mindset', icon: <FiBookOpen />, count: 2 },
    { name: 'Wellness', icon: <FiHeart />, count: 2 },
  ];

  const featuredArticle = {
    category: 'Yoga & Wellness',
    title: 'The Sacred Journey Within: Discovering Your True Self Through Yoga',
    excerpt: 'Embark on a transformative exploration of self-discovery through the ancient wisdom of yoga. Learn how to connect with your innermost being, release limiting patterns, and awaken to the infinite potential that resides within you.',
    readTime: '12 min read',
    date: 'January 25, 2026',
    image: blogImages.featured,
    author: 'BK Shikha',
    featured: true,
  };

  const articles = [
    {
      category: 'Yoga & Wellness',
      title: 'Have a Good Body and Soul Balance',
      excerpt: 'Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner peace.',
      readTime: '8 min read',
      date: 'January 25, 2026',
      image: blogImages.yoga2,
      slug: 'body-soul-balance',
    },
    {
      category: 'Yoga Tips',
      title: 'How to Keep Yoga Practice During Busy Times',
      excerpt: 'Learn effective strategies to maintain your yoga practice even during busy schedules and challenging times.',
      readTime: '7 min read',
      date: 'January 20, 2026',
      image: blogImages.yoga1,
      slug: 'keep-yoga-practice',
    },
    {
      category: 'Wellness',
      title: 'The Yoga of Food and Mindful Eating',
      excerpt: 'Explore the connection between mindful eating, nutrition, and your yoga journey for complete wellness.',
      readTime: '9 min read',
      date: 'January 15, 2026',
      image: blogImages.wellness,
      slug: 'yoga-of-food',
    },
    {
      category: 'Stress Relief',
      title: '5 Yoga Poses to Instantly Relieve Stress and Anxiety',
      excerpt: 'Discover simple yet powerful yoga poses that calm your nervous system and bring immediate peace.',
      readTime: '5 min read',
      date: 'January 22, 2026',
      image: blogImages.meditation,
      slug: 'yoga-stress-relief',
    },
    {
      category: 'Morning Rituals',
      title: 'Create a Mindful Morning Routine That Transforms Your Day',
      excerpt: 'Learn how to design a morning practice that sets the tone for joy, productivity, and inner peace.',
      readTime: '7 min read',
      date: 'January 18, 2026',
      image: blogImages.lifestyle,
      slug: 'mindful-morning-routine',
    },
    {
      category: 'Meditation',
      title: 'The Art of Stillness: A Guide to Deep Meditation',
      excerpt: 'Explore the profound depths of meditation and discover techniques for achieving lasting inner calm.',
      readTime: '8 min read',
      date: 'January 15, 2026',
      image: blogImages.breathwork,
      slug: 'deep-meditation-guide',
    },
    {
      category: 'Mindset',
      title: 'The Power of Mindset: How to Reset Your Thoughts for Success',
      excerpt: 'Explore practical NLP techniques to reprogram limiting beliefs and create empowering thought patterns.',
      readTime: '8 min read',
      date: 'January 12, 2026',
      image: blogImages.mindset,
      slug: 'mindset-reset',
    },
    {
      category: 'Wellness',
      title: 'Emotional Balance: Tools for Processing Difficult Feelings',
      excerpt: 'Navigate challenging emotions with grace and wisdom. Discover techniques for emotional regulation.',
      readTime: '6 min read',
      date: 'January 8, 2026',
      image: blogImages.nature,
      slug: 'emotional-balance',
    },
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => 
        article.category.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        {/* Decorative elements */}
        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />
        
        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="rgba(206, 197, 173, 0.2)" strokeWidth="0.8" />
          </svg>
        </DecorativeLeaf>

        <Container>
          <HeroContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <HeroLabel>Wellness Wisdom & Insights</HeroLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
              <HeroTitle>
                Stories of <HeroTitleAccent>Transformation</HeroTitleAccent>
              </HeroTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <HeroDescription>
                Explore ancient wisdom and modern wellness practices. Discover articles on yoga, 
                meditation, mindfulness, and holistic living to support your journey of self-discovery.
              </HeroDescription>
            </motion.div>
            <motion.div variants={itemVariants}>
              <HeroStats>
                <StatItem>
                  <StatNumber>50+</StatNumber>
                  <StatLabel>Articles</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatNumber>12</StatNumber>
                  <StatLabel>Topics</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatNumber>10K+</StatNumber>
                  <StatLabel>Readers</StatLabel>
                </StatItem>
              </HeroStats>
            </motion.div>
          </HeroContent>
        </Container>

        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Featured Article */}
      <FeaturedSection ref={featuredRef}>
        <Container>
          <FeaturedCard
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            <FeaturedImageSide as={motion.div} variants={itemVariants}>
              <FeaturedImageWrapper>
                <FeaturedBlobBg>
                  <svg viewBox="0 0 400 350" fill="none">
                    <path d="M350,175 C350,280 275,325 175,325 C75,325 25,280 25,175 C25,70 100,25 200,25 C300,25 350,70 350,175 Z" fill="#8ecfb3" opacity="0.3" />
                  </svg>
                </FeaturedBlobBg>
                <FeaturedImage src={featuredArticle.image} alt={featuredArticle.title} />
                <FeaturedBadge>
                  <FiStar />
                  Featured Article
                </FeaturedBadge>
              </FeaturedImageWrapper>
            </FeaturedImageSide>

            <FeaturedContentSide as={motion.div} variants={itemVariants}>
              <FeaturedLabel>
                <FiFeather />
                {featuredArticle.category}
              </FeaturedLabel>
              <FeaturedTitle>{featuredArticle.title}</FeaturedTitle>
              <FeaturedExcerpt>{featuredArticle.excerpt}</FeaturedExcerpt>
              
              <FeaturedMeta>
                <MetaItem>
                  <FiClock />
                  {featuredArticle.readTime}
                </MetaItem>
                <MetaDot>•</MetaDot>
                <MetaItem>{featuredArticle.date}</MetaItem>
              </FeaturedMeta>

              <FeaturedAuthor>
                <AuthorAvatar>BK</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>By {featuredArticle.author}</AuthorName>
                  <AuthorRole>Holistic Wellness Coach</AuthorRole>
                </AuthorInfo>
              </FeaturedAuthor>

              <ReadFullArticle to="/blog/featured">
                Read Full Article
                <FiArrowRight />
              </ReadFullArticle>
            </FeaturedContentSide>
          </FeaturedCard>
        </Container>

        <FeaturedDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e8f0e9" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,80 Q140,120 160,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q145,180 170,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q150,240 175,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
          </svg>
        </FeaturedDecor>
      </FeaturedSection>

      {/* Categories Section */}
      <CategoriesSection ref={categoriesRef}>
        <Container>
          <CategoriesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <SectionHeader>
                <SectionLabel>Explore Topics</SectionLabel>
                <SectionTitle>Browse by Category</SectionTitle>
              </SectionHeader>
            </motion.div>

            <CategoryTabs as={motion.div} variants={itemVariants}>
              {categories.map((cat, index) => (
                <CategoryTab
                  key={cat.name}
                  $active={activeCategory === cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <TabIcon $active={activeCategory === cat.name}>{cat.icon}</TabIcon>
                  <TabName>{cat.name}</TabName>
                  <TabCount $active={activeCategory === cat.name}>{cat.count}</TabCount>
                </CategoryTab>
              ))}
            </CategoryTabs>
          </CategoriesContent>
        </Container>
      </CategoriesSection>

      {/* Articles Grid */}
      <ArticlesSection ref={articlesRef}>
        <Container>
          <ArticlesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              <ArticlesGrid
                as={motion.div}
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredArticles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    as={motion.article}
                    variants={itemVariants}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    onClick={() => window.location.href = `/blog/${article.slug}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <ArticleImageWrapper>
                      <ArticleImage src={article.image} alt={article.title} loading="lazy" />
                      <ArticleImageOverlay />
                      <ArticleCategory>{article.category}</ArticleCategory>
                      <PlayButton>
                        <FiPlay />
                      </PlayButton>
                    </ArticleImageWrapper>

                    <ArticleContent>
                      <ArticleMeta>
                        <ArticleDate>{article.date}</ArticleDate>
                        <ArticleReadTime>
                          <FiClock />
                          {article.readTime}
                        </ArticleReadTime>
                      </ArticleMeta>

                      <ArticleTitle>{article.title}</ArticleTitle>
                      <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>

                      <ReadMoreLink as={Link} to={`/blog/${article.slug}`}>
                        Continue Reading
                        <FiArrowRight />
                      </ReadMoreLink>
                    </ArticleContent>
                  </ArticleCard>
                ))}
              </ArticlesGrid>
            </AnimatePresence>

            <LoadMoreWrapper>
              <LoadMoreButton
                as={motion.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Load More Articles
                <FiArrowRight />
              </LoadMoreButton>
            </LoadMoreWrapper>
          </ArticlesContent>
        </Container>

        <ArticlesDecorLeft>
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M60 30V270" stroke="#e8f0e9" strokeWidth="1" />
          </svg>
        </ArticlesDecorLeft>
      </ArticlesSection>

      {/* Quote Section */}
      <QuoteSection>
        <Container>
          <QuoteContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <QuoteMark>"</QuoteMark>
            <QuoteText>
              The journey of a thousand miles begins with a single breath. 
              Every article here is a step toward your highest self.
            </QuoteText>
            <QuoteAuthor>— BK Shikha</QuoteAuthor>
          </QuoteContent>
        </Container>
        
        <QuoteOrb className="left" />
        <QuoteOrb className="right" />
      </QuoteSection>

      {/* Newsletter Section */}
      <NewsletterSection ref={newsletterRef}>
        <Container>
          <NewsletterCard
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={newsletterInView ? "visible" : "hidden"}
          >
            <NewsletterGrid>
              <NewsletterImageSide as={motion.div} variants={itemVariants}>
                <NewsletterImageWrapper>
                  <NewsletterImage src={blogImages.meditation} alt="Meditation practice" />
                  <NewsletterImageOverlay />
                  <NewsletterFloatingCard>
                    <FloatingCardIcon><FiMail /></FloatingCardIcon>
                    <FloatingCardText>Weekly Wisdom</FloatingCardText>
                  </NewsletterFloatingCard>
                </NewsletterImageWrapper>
              </NewsletterImageSide>

              <NewsletterContentSide as={motion.div} variants={itemVariants}>
                <NewsletterLabel>Join Our Community</NewsletterLabel>
                <NewsletterTitle>Receive Weekly Wellness Wisdom</NewsletterTitle>
                <NewsletterDescription>
                  Get exclusive articles, guided meditations, and wellness tips delivered 
                  straight to your inbox. Join 10,000+ mindful souls on this journey.
                </NewsletterDescription>

                <NewsletterForm>
                  <EmailInputWrapper>
                    <FiMail />
                    <EmailInput
                      type="email"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                    />
                  </EmailInputWrapper>
                  <SubscribeButton
                    as={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                    <FiArrowRight />
                  </SubscribeButton>
                </NewsletterForm>

                <NewsletterFeatures>
                  <FeatureItem>
                    <FeatureCheck>✓</FeatureCheck>
                    Weekly articles & insights
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureCheck>✓</FeatureCheck>
                    Exclusive meditations
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureCheck>✓</FeatureCheck>
                    Unsubscribe anytime
                  </FeatureItem>
                </NewsletterFeatures>
              </NewsletterContentSide>
            </NewsletterGrid>

            <NewsletterDecor>
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#cec5ad" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" stroke="#22371b" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                <circle cx="100" cy="100" r="40" stroke="#cec5ad" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
              </svg>
            </NewsletterDecor>
          </NewsletterCard>
        </Container>
      </NewsletterSection>

      {/* Instagram Follow Section */}
      <InstagramSection>
        <Container>
          <InstagramContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InstagramIcon>
              <FiInstagram />
            </InstagramIcon>
            <InstagramTitle>Follow the Journey</InstagramTitle>
            <InstagramText>
              Daily inspiration, behind-the-scenes moments, and wellness tips on Instagram
            </InstagramText>
            <InstagramButton
              href="https://www.instagram.com/cyd_bkshikha"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @cyd_bkshikha
              <FiArrowRight />
            </InstagramButton>

            <InstagramGrid>
              {[blogImages.yoga1, blogImages.meditation, blogImages.wellness, blogImages.nature].map((img, i) => (
                <InstagramPreview key={i}>
                  <img src={img} alt={`Instagram post ${i + 1}`} />
                  <InstagramOverlay>
                    <FiHeart />
                  </InstagramOverlay>
                </InstagramPreview>
              ))}
            </InstagramGrid>
          </InstagramContent>
        </Container>
      </InstagramSection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
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

// Hero Section
const HeroSection = styled.section`
  min-height: 85vh;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 10rem;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 6rem 0 8rem;
  }
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 10s ease-in-out infinite;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 3s;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: #8ecfb3;
    top: 40%;
    left: 20%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.05); }
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.8;
  pointer-events: none;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`;

const HeroTitleAccent = styled.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`;

const HeroDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: #cec5ad;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(206, 197, 173, 0.3);
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Featured Section
const FeaturedSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FeaturedImageSide = styled.div`
  position: relative;
`;

const FeaturedImageWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`;

const FeaturedBlobBg = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 1;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #22371b;
  color: #cec5ad;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 10;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
`;

const FeaturedContentSide = styled.div``;

const FeaturedLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #5a8a62;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`;

const FeaturedTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.25;
  margin: 0 0 1.25rem;
`;

const FeaturedExcerpt = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`;

const FeaturedMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  color: #7a8a7a;

  svg {
    font-size: 1rem;
  }
`;

const MetaDot = styled.span`
  color: #cec5ad;
`;

const FeaturedAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: #f8f9f6;
  border-radius: 16px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cec5ad;
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`;

const AuthorRole = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
`;

const ReadFullArticle = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const FeaturedDecor = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Categories Section
const CategoriesSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
`;

const CategoriesContent = styled.div``;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryTab = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  background: ${props => props.$active ? '#22371b' : 'white'};
  color: ${props => props.$active ? '#cec5ad' : '#22371b'};
  border: 2px solid ${props => props.$active ? '#22371b' : 'rgba(34, 55, 27, 0.1)'};
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active ? '0 10px 30px rgba(34, 55, 27, 0.15)' : '0 4px 15px rgba(0,0,0,0.05)'};

  &:hover {
    border-color: #22371b;
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.1);
  }
`;

const TabIcon = styled.span`
  display: flex;
  font-size: 1.125rem;
  color: ${props => props.$active ? '#cec5ad' : '#5a8a62'};
`;

const TabName = styled.span``;

const TabCount = styled.span`
  padding: 0.25rem 0.625rem;
  background: ${props => props.$active ? 'rgba(206, 197, 173, 0.2)' : 'rgba(90, 138, 98, 0.1)'};
  color: ${props => props.$active ? '#cec5ad' : '#5a8a62'};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
`;

// Articles Section
const ArticlesSection = styled.section`
  padding: 5rem 0;
  background: #eef4ef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ArticlesContent = styled.div``;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.08);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 20px 60px rgba(34, 55, 27, 0.15);
  }
`;

const ArticleImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${ArticleCard}:hover & {
    transform: scale(1.1);
  }
`;

const ArticleImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(34, 55, 27, 0.4) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ArticleCard}:hover & {
    opacity: 1;
  }
`;

const ArticleCategory = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  color: #22371b;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const PlayButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: #cec5ad;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22371b;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;

  ${ArticleCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  svg {
    margin-left: 2px;
  }
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ArticleDate = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
`;

const ArticleReadTime = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;

  svg {
    font-size: 0.875rem;
  }
`;

const ArticleTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.35;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleExcerpt = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
  margin: 0 0 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #5a8a62;
  text-decoration: none;
  transition: all 0.3s ease;

  ${ArticleCard}:hover & {
    color: #22371b;
    gap: 0.75rem;
  }
`;

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const LoadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #22371b;
    color: #cec5ad;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ArticlesDecorLeft = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 280px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Quote Section
const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const QuoteContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const QuoteMark = styled.span`
  display: block;
  font-family: ${theme.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`;

const QuoteAuthor = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const QuoteOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;

  &.left {
    background: #cec5ad;
    left: -100px;
    bottom: -100px;
  }

  &.right {
    background: #5a8a62;
    right: -100px;
    top: -100px;
  }
`;

// Newsletter Section
const NewsletterSection = styled.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const NewsletterCard = styled.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
  position: relative;
`;

const NewsletterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const NewsletterImageSide = styled.div`
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NewsletterImageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 500px;
`;

const NewsletterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NewsletterImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.3), rgba(90, 138, 98, 0.2));
`;

const NewsletterFloatingCard = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 100px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
`;

const FloatingCardIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FloatingCardText = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`;

const NewsletterContentSide = styled.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const NewsletterLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`;

const NewsletterTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`;

const NewsletterDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 2rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const EmailInputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 1.25rem;
    color: #7a8a7a;
    font-size: 1.125rem;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem 1rem 3rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  border: 2px solid #e8efe9;
  border-radius: 100px;
  background: #f8f9f6;
  color: #22371b;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5a8a62;
    background: white;
  }

  &::placeholder {
    color: #a0b0a2;
  }
`;

const SubscribeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #1a2d15;
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }
`;

const NewsletterFeatures = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  color: #6b7c6f;
`;

const FeatureCheck = styled.span`
  color: #5a8a62;
  font-weight: 600;
`;

const NewsletterDecor = styled.div`
  position: absolute;
  right: -50px;
  top: -50px;
  width: 200px;
  height: 200px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Instagram Section
const InstagramSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #eef4ef 100%);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const InstagramContent = styled.div`
  text-align: center;
`;

const InstagramIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const InstagramTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  margin: 0 0 1rem;
`;

const InstagramText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 500px;
  margin: 0 auto 2rem;
`;

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(221, 42, 123, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 15px 40px rgba(221, 42, 123, 0.4);
    transform: translateY(-2px);
  }
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const InstagramPreview = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const InstagramOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 133, 41, 0.6), rgba(221, 42, 123, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  svg {
    color: white;
    font-size: 2rem;
  }

  ${InstagramPreview}:hover & {
    opacity: 1;
  }
`;

export default Blog;
