import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';

const Blog = () => {
  const articles = [
    {
      category: 'Stress Relief',
      title: '5 Yoga Poses to Instantly Relieve Stress and Anxiety',
      excerpt:
        'Discover simple yet powerful yoga poses that calm your nervous system and bring immediate peace. Perfect for busy days when you need to reset quickly.',
      readTime: '5 min read',
      image: '🧘‍♀️',
    },
    {
      category: 'Morning Rituals',
      title: 'Create a Mindful Morning Routine That Transforms Your Day',
      excerpt:
        'Learn how to design a morning practice that sets the tone for joy, productivity, and inner peace. Small habits, profound impact.',
      readTime: '7 min read',
      image: '🌅',
    },
    {
      category: 'Mindset',
      title: 'The Power of Mindset: How to Reset Your Thoughts for Success',
      excerpt:
        'Explore practical NLP techniques to reprogram limiting beliefs and create empowering thought patterns. Your mind is your greatest tool.',
      readTime: '8 min read',
      image: '🧠',
    },
    {
      category: 'Emotional Wellness',
      title: 'Emotional Balance: Tools for Processing Difficult Feelings',
      excerpt:
        'Navigate challenging emotions with grace and wisdom. Discover techniques for emotional regulation and self-compassion.',
      readTime: '6 min read',
      image: '💗',
    },
    {
      category: 'Yogic Lifestyle',
      title: 'Living Yoga Beyond the Mat: Bringing Practice into Daily Life',
      excerpt:
        'Yoga is not just poses - it\'s a way of being. Learn how to integrate yogic principles into your relationships, work, and everyday choices.',
      readTime: '9 min read',
      image: '🕉️',
    },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <div className="container">
          <HeroContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Subtitle>Wellness Insights & Guidance</Subtitle>
            <HeroTitle>Wisdom for Your Wellness Journey</HeroTitle>
            <HeroDescription>
              Explore articles on yoga, mindfulness, emotional wellness, and holistic
              living. Practical guidance to support your transformation.
            </HeroDescription>
          </HeroContent>
        </div>
      </HeroSection>

      {/* Articles */}
      <ArticlesSection className="section">
        <div className="container">
          <ArticlesGrid>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                as={motion.article}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ArticleImage>
                  <ImagePlaceholder>{article.image}</ImagePlaceholder>
                  <Category>{article.category}</Category>
                </ArticleImage>

                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>

                  <ArticleFooter>
                    <ReadTime>
                      <FiClock />
                      {article.readTime}
                    </ReadTime>
                    <ReadMore>
                      Read Article
                      <FiArrowRight />
                    </ReadMore>
                  </ArticleFooter>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </div>
      </ArticlesSection>

      {/* Newsletter CTA */}
      <NewsletterSection className="section">
        <div className="container">
          <NewsletterContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NewsletterTitle>Stay Connected to Your Wellness Journey</NewsletterTitle>
            <NewsletterText>
              Receive weekly wisdom, guided practices, and exclusive wellness tips
              directly to your inbox. Join our mindful community.
            </NewsletterText>
            <NewsletterForm>
              <EmailInput
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />
              <SubscribeButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </SubscribeButton>
            </NewsletterForm>
            <NewsletterNote>
              ✨ No spam, just love and wellness wisdom. Unsubscribe anytime.
            </NewsletterNote>
          </NewsletterContent>
        </div>
      </NewsletterSection>

      {/* Follow CTA */}
      <FollowSection className="section">
        <div className="container">
          <FollowContent
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FollowText>
              For daily inspiration and wellness tips, follow me on Instagram
            </FollowText>
            <InstagramButton
              href="https://www.instagram.com/cyd_bkshikha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @cyd_bkshikha
            </InstagramButton>
          </FollowContent>
        </div>
      </FollowSection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div``;

const HeroSection = styled.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    ${theme.colors.background} 0%,
    ${theme.colors.backgroundAlt} 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0 0 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;
`;

const ArticlesSection = styled.section`
  background: ${theme.colors.backgroundAlt};
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadows.xl};
  }
`;

const ArticleImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

const Category = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: ${theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  line-height: 1.3;
  margin: 0 0 1rem;
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${theme.colors.text};
  margin: 0 0 1.5rem;
`;

const ArticleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.backgroundDark};
`;

const ReadTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  transition: gap ${theme.transitions.base};

  ${ArticleCard}:hover & {
    gap: 0.75rem;
  }
`;

const NewsletterSection = styled.section`
  background: white;
`;

const NewsletterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  border-radius: ${theme.borderRadius['2xl']};
  box-shadow: ${theme.shadows.xl};
`;

const NewsletterTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin: 0 0 1rem;
`;

const NewsletterText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2.5rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  border: none;
  border-radius: ${theme.borderRadius.full};
  background: white;
  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.sm};

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${theme.colors.textLight};
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;

const NewsletterNote = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 0;
  opacity: 0.9;
`;

const FollowSection = styled.section`
  background: ${theme.colors.background};
`;

const FollowContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FollowText = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.text};
  margin: 0;
`;

const InstagramButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
  color: white;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};

  &:hover {
    box-shadow: ${theme.shadows.lg};
  }
`;

export default Blog;
