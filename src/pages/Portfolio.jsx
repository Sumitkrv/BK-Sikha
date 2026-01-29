import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiHeart, FiPlay, FiX, FiStar, FiMapPin, FiCalendar, FiTarget, FiCheck, FiInstagram, FiYoutube } from 'react-icons/fi';

// HD Images
const portfolioImages = {
  hero: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&q=80",
  corporate: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop&q=80",
  retreat: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
  workshop: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=1200&fit=crop&q=80",
  online: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&q=80",
  community: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=800&fit=crop&q=80",
  training: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80",
  meditation: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&h=1000&fit=crop&q=80",
  nature: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&q=80",
  transform1: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
  transform2: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=800&fit=crop&q=80",
};

const heroVideo = "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4";

const portfolioItems = [
  {
    id: 1,
    category: 'Corporate',
    title: 'Corporate Wellness Revolution',
    subtitle: 'Tech Giants Wellness Program',
    description: 'Transformed workplace wellness for 500+ professionals at leading tech companies through customized yoga and mindfulness programs.',
    image: portfolioImages.corporate,
    stats: { participants: '500+', satisfaction: '98%', companies: '12' },
    tags: ['Corporate', 'Stress Management', 'Team Building'],
    featured: true,
    size: 'tall',
  },
  {
    id: 2,
    category: 'Retreat',
    title: 'Himalayan Soul Journey',
    subtitle: '10-Day Spiritual Awakening',
    description: 'Curated transformative retreats in the serene Himalayas, combining ancient yogic wisdom with modern healing practices.',
    image: portfolioImages.retreat,
    stats: { participants: '150+', rating: '4.9', retreats: '15' },
    tags: ['Retreats', 'Meditation', 'Nature Immersion'],
    featured: true,
    size: 'wide',
  },
  {
    id: 3,
    category: 'Workshop',
    title: 'Emotional Alchemy',
    subtitle: 'Healing Through Movement',
    description: 'Interactive workshops blending yoga therapy, breathwork, and NLP techniques for profound emotional transformation.',
    image: portfolioImages.workshop,
    stats: { workshops: '50+', healed: '1000+', cities: '8' },
    tags: ['Emotional Wellness', 'Trauma Healing', 'Self-Discovery'],
    size: 'tall',
  },
  {
    id: 4,
    category: 'Online',
    title: '30-Day Transformation',
    subtitle: 'Virtual Wellness Journey',
    description: 'A comprehensive online program combining daily yoga, meditation, and nutrition guidance for holistic transformation.',
    image: portfolioImages.online,
    stats: { students: '2000+', completion: '85%', countries: '25' },
    tags: ['Online', 'Self-Paced', 'Global Reach'],
    size: 'normal',
  },
  {
    id: 5,
    category: 'Community',
    title: 'Yoga for All Initiative',
    subtitle: 'Making Wellness Accessible',
    description: 'Free weekly yoga sessions in parks and community centers, breaking financial barriers to wellness.',
    image: portfolioImages.community,
    stats: { sessions: '200+', lives: '3000+', years: '5' },
    tags: ['Free Classes', 'Community Service', 'Inclusivity'],
    size: 'square',
  },
  {
    id: 6,
    category: 'Training',
    title: 'Teacher Training Academy',
    subtitle: '200-Hour Certification Program',
    description: 'Comprehensive yoga teacher training that has certified 100+ passionate practitioners to spread wellness worldwide.',
    image: portfolioImages.training,
    stats: { graduates: '100+', employed: '90%', hours: '200' },
    tags: ['Certification', 'Professional', 'Career'],
    size: 'wide',
  },
  {
    id: 7,
    category: 'Meditation',
    title: 'Silence Speaks',
    subtitle: 'Vipassana Meditation Series',
    description: 'Deep meditation programs helping practitioners access profound states of awareness and inner peace.',
    image: portfolioImages.meditation,
    stats: { sessions: '100+', hours: '500+', breakthroughs: 'Many' },
    tags: ['Meditation', 'Mindfulness', 'Inner Peace'],
    size: 'tall',
  },
  {
    id: 8,
    category: 'Nature',
    title: 'Forest Bathing Wellness',
    subtitle: 'Shinrin-Yoku Experience',
    description: 'Immersive nature therapy combining yoga, forest bathing, and eco-mindfulness for complete rejuvenation.',
    image: portfolioImages.nature,
    stats: { participants: '300+', locations: '10', nature: '100%' },
    tags: ['Nature Therapy', 'Eco-Wellness', 'Outdoor'],
    size: 'normal',
  },
];

const successStories = [
  {
    name: 'Priya Sharma',
    role: 'Corporate Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    story: 'Lost 15kg and found inner peace through the 30-day transformation program. My life has completely changed.',
    transformation: '15kg weight loss',
  },
  {
    name: 'Rahul Mehta',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    story: 'Overcame chronic anxiety and now lead a stress-free life. The meditation techniques are life-changing.',
    transformation: 'Anxiety-free life',
  },
  {
    name: 'Anita Desai',
    role: 'Mother of 2',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    story: 'Found balance between motherhood and self-care. The online program fits perfectly into my busy schedule.',
    transformation: 'Work-life balance',
  },
];

const achievements = [
  { icon: <FiUsers />, number: '5000+', label: 'Lives Transformed', color: '#cec5ad' },
  { icon: <FiAward />, number: '15+', label: 'Years Experience', color: '#8ecfb3' },
  { icon: <FiHeart />, number: '98%', label: 'Client Satisfaction', color: '#5a8a62' },
  { icon: <FiStar />, number: '500+', label: 'Sessions Delivered', color: '#cec5ad' },
  { icon: <FiMapPin />, number: '25+', label: 'Countries Reached', color: '#8ecfb3' },
  { icon: <FiTarget />, number: '100%', label: 'Dedication', color: '#5a8a62' },
];

const Portfolio = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const storiesRef = useRef(null);
  const statsRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const storiesInView = useInView(storiesRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const categories = ['All', 'Corporate', 'Retreat', 'Workshop', 'Online', 'Community', 'Training', 'Meditation', 'Nature'];
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  return (
    <PageWrapper>
      {/* Cinematic Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroVideoWrapper style={{ y: heroY }}>
          <HeroVideo autoPlay muted loop playsInline poster={portfolioImages.hero}>
            <source src={heroVideo} type="video/mp4" />
          </HeroVideo>
          <VideoOverlay />
        </HeroVideoWrapper>

        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />

        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="1" />
          </svg>
        </DecorativeLeaf>

        <HeroContent
          as={motion.div}
          style={{ opacity: heroOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <HeroLabel>
              <FiStar /> Our Journey of Impact
            </HeroLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroTitle>
              Transforming Lives,<br />
              <HeroTitleAccent>One Breath at a Time</HeroTitleAccent>
            </HeroTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroDescription>
              Explore our collection of transformative programs, workshops, and initiatives 
              that have touched thousands of souls across the globe.
            </HeroDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroButtons>
              <HeroPrimaryBtn to="/contact">
                Start Your Journey
                <FiArrowRight />
              </HeroPrimaryBtn>
              <HeroSecondaryBtn onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
                <FiPlay />
                View Portfolio
              </HeroSecondaryBtn>
            </HeroButtons>
          </motion.div>
        </HeroContent>

        <ScrollIndicator>
          <ScrollText>Scroll to Explore</ScrollText>
          <ScrollLine />
        </ScrollIndicator>

        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Animated Stats Marquee */}
      <StatsMarquee ref={statsRef}>
        <MarqueeTrack>
          {[...achievements, ...achievements].map((stat, index) => (
            <MarqueeStat key={index}>
              <StatIcon style={{ color: stat.color }}>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </MarqueeStat>
          ))}
        </MarqueeTrack>
      </StatsMarquee>

      {/* Bento Gallery Section */}
      <GallerySection id="gallery" ref={galleryRef}>
        <Container>
          <GalleryHeader
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>Our Impact</SectionLabel>
              <SectionTitle>Featured Work & Projects</SectionTitle>
              <SectionDescription>
                Each project represents a unique journey of transformation, healing, and growth.
              </SectionDescription>
            </motion.div>

            <CategoryScroll as={motion.div} variants={itemVariants}>
              {categories.map((cat) => (
                <CategoryPill
                  key={cat}
                  $active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </CategoryPill>
              ))}
            </CategoryScroll>
          </GalleryHeader>

          <AnimatePresence mode="wait">
            <BentoGrid
              as={motion.div}
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {filteredItems.map((item, index) => (
                <BentoItem
                  key={item.id}
                  $size={item.size}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(item)}
                  whileHover={{ y: -10 }}
                >
                  <BentoImageWrapper>
                    <BentoImage src={item.image} alt={item.title} loading="lazy" />
                    <BentoOverlay>
                      <OverlayCategory>{item.category}</OverlayCategory>
                      <OverlayContent>
                        <OverlayTitle>{item.title}</OverlayTitle>
                        <OverlaySubtitle>{item.subtitle}</OverlaySubtitle>
                        <ViewButton>
                          View Project <FiArrowRight />
                        </ViewButton>
                      </OverlayContent>
                    </BentoOverlay>
                    {item.featured && (
                      <FeaturedBadge>
                        <FiStar /> Featured
                      </FeaturedBadge>
                    )}
                  </BentoImageWrapper>
                </BentoItem>
              ))}
            </BentoGrid>
          </AnimatePresence>
        </Container>

        <GalleryDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e8f0e9" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
          </svg>
        </GalleryDecor>
      </GallerySection>

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
            <QuoteIcon>"</QuoteIcon>
            <QuoteText>
              Every soul I touch, every life I transform, is a reminder of why I walk this path.
              This portfolio is not just my work — it's our collective journey toward light.
            </QuoteText>
            <QuoteAuthor>
              <AuthorImage src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop" alt="BK Shikha" />
              <AuthorDetails>
                <AuthorName>BK Shikha</AuthorName>
                <AuthorRole>Holistic Wellness Coach</AuthorRole>
              </AuthorDetails>
            </QuoteAuthor>
          </QuoteContent>
        </Container>
      </QuoteSection>

      {/* Media & Recognition */}
      <MediaSection>
        <Container>
          <MediaContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MediaHeader>
              <SectionLabel>Follow the Journey</SectionLabel>
              <SectionTitle>Stay Connected</SectionTitle>
            </MediaHeader>

            <SocialLinks>
              <SocialCard
                href="https://www.instagram.com/cyd_bkshikha"
                target="_blank"
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ y: -8 }}
              >
                <SocialIcon className="instagram">
                  <FiInstagram />
                </SocialIcon>
                <SocialInfo>
                  <SocialName>Instagram</SocialName>
                  <SocialHandle>@cyd_bkshikha</SocialHandle>
                </SocialInfo>
                <SocialArrow><FiArrowRight /></SocialArrow>
              </SocialCard>

              <SocialCard
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ y: -8 }}
              >
                <SocialIcon className="youtube">
                  <FiYoutube />
                </SocialIcon>
                <SocialInfo>
                  <SocialName>YouTube</SocialName>
                  <SocialHandle>BK Shikha Wellness</SocialHandle>
                </SocialInfo>
                <SocialArrow><FiArrowRight /></SocialArrow>
              </SocialCard>
            </SocialLinks>
          </MediaContent>
        </Container>
      </MediaSection>

      {/* CTA Section */}
      <CTASection>
        <CTABlobLeft />
        <CTABlobRight />
        <Container>
          <CTAContent
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CTALabel>Begin Your Story</CTALabel>
            <CTATitle>Ready to Be Our Next Success Story?</CTATitle>
            <CTADescription>
              Your transformation journey begins with a single step. Let's write your success story together.
            </CTADescription>
            <CTAButtons>
              <CTAPrimaryBtn to="/contact">
                Book Free Consultation
                <FiArrowRight />
              </CTAPrimaryBtn>
              <CTASecondaryBtn to="/services">
                Explore Programs
              </CTASecondaryBtn>
            </CTAButtons>

            <CTAFeatures>
              <CTAFeature><FiCheck /> Personalized Assessment</CTAFeature>
              <CTAFeature><FiCheck /> No Obligation</CTAFeature>
            </CTAFeatures>
          </CTAContent>
        </Container>

        <CTADecor>
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="#cec5ad" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
            <circle cx="100" cy="100" r="60" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
            <circle cx="100" cy="100" r="40" stroke="#cec5ad" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
          </svg>
        </CTADecor>
      </CTASection>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalCloseBtn onClick={() => setSelectedProject(null)}>
                <FiX />
              </ModalCloseBtn>
              
              <ModalImage src={selectedProject.image} alt={selectedProject.title} />
              
              <ModalBody>
                <ModalCategory>{selectedProject.category}</ModalCategory>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalSubtitle>{selectedProject.subtitle}</ModalSubtitle>
                <ModalDescription>{selectedProject.description}</ModalDescription>
                
                <ModalStats>
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <ModalStat key={key}>
                      <ModalStatValue>{value}</ModalStatValue>
                      <ModalStatLabel>{key}</ModalStatLabel>
                    </ModalStat>
                  ))}
                </ModalStats>

                <ModalTags>
                  {selectedProject.tags.map((tag, i) => (
                    <ModalTag key={i}>{tag}</ModalTag>
                  ))}
                </ModalTags>

                <ModalCTA to="/contact">
                  Start Similar Journey <FiArrowRight />
                </ModalCTA>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
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
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroVideoWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.9) 0%,
    rgba(33, 55, 26, 0.75) 50%,
    rgba(34, 55, 27, 0.9) 100%
  );
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 12s ease-in-out infinite;
  z-index: 1;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 4s;
  }

  &.orb3 {
    width: 300px;
    height: 300px;
    background: #8ecfb3;
    top: 50%;
    left: 30%;
    animation-delay: 8s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-50px) scale(1.05); }
  }
`;

const DecorativeLeaf = styled.div`
  position: absolute;
  width: 100px;
  height: 280px;
  z-index: 2;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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

  svg {
    font-size: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
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
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroPrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #cec5ad;
  color: #22371b;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0d9c7;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(206, 197, 173, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const HeroSecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cec5ad;
    color: #cec5ad;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
`;

const ScrollText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, rgba(206, 197, 173, 0.8), transparent);
  animation: scrollPulse 2s ease-in-out infinite;

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; transform: scaleY(1); }
    50% { opacity: 0.5; transform: scaleY(0.8); }
  }
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Stats Marquee
const StatsMarquee = styled.section`
  background: linear-gradient(135deg, #22371b 0%, #2d4d24 100%);
  padding: 2rem 0;
  overflow: hidden;
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 4rem;
  animation: marquee 30s linear infinite;

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const MarqueeStat = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const StatIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
`;

const StatNumber = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
`;

const StatLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

// Gallery Section
const GallerySection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CategoryScroll = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const CategoryPill = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? '#22371b' : 'transparent'};
  color: ${props => props.$active ? '#cec5ad' : '#22371b'};
  border: 2px solid ${props => props.$active ? '#22371b' : 'rgba(34, 55, 27, 0.2)'};
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #22371b;
    background: ${props => props.$active ? '#22371b' : 'rgba(34, 55, 27, 0.05)'};
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
  }
`;

const BentoItem = styled.div`
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  
  ${props => props.$size === 'tall' && `
    grid-row: span 2;
  `}
  
  ${props => props.$size === 'wide' && `
    grid-column: span 2;
    
    @media (max-width: 600px) {
      grid-column: span 1;
    }
  `}
  
  ${props => props.$size === 'square' && `
    grid-row: span 1;
    grid-column: span 1;
  `}
`;

const BentoImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BentoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${BentoItem}:hover & {
    transform: scale(1.1);
  }
`;

const BentoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(34, 55, 27, 0) 0%, rgba(34, 55, 27, 0.9) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${BentoItem}:hover & {
    opacity: 1;
  }
`;

const OverlayCategory = styled.span`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #22371b;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
`;

const OverlayContent = styled.div``;

const OverlayTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const OverlaySubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const ViewButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #cec5ad;
  
  svg {
    transition: transform 0.3s ease;
  }

  ${BentoItem}:hover & svg {
    transform: translateX(4px);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  background: #cec5ad;
  color: #22371b;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
  z-index: 5;

  svg {
    font-size: 0.875rem;
  }
`;

const GalleryDecor = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.4;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;

// Stories Section
const StoriesSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
  position: relative;
  overflow: hidden;
`;

const StoriesContent = styled.div``;

const StoriesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StoryCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.08);
  transition: all 0.3s ease;
`;

const StoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const StoryAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #cec5ad;
`;

const StoryInfo = styled.div`
  flex: 1;
`;

const StoryName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.125rem;
`;

const StoryRole = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #6b7c6f;
`;

const TransformBadge = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StoryQuote = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5a4d;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const StoryStars = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #cec5ad;

  svg {
    fill: currentColor;
    font-size: 1rem;
  }
`;

const StoriesOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;

  &.left {
    background: #22371b;
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    background: #cec5ad;
    right: -200px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// Quote Section
const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  position: relative;
  overflow: hidden;
`;

const QuoteContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const QuoteIcon = styled.span`
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
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const QuoteAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #cec5ad;
`;

const AuthorDetails = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #cec5ad;
`;

const AuthorRole = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

// Media Section
const MediaSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
`;

const MediaContent = styled.div`
  text-align: center;
`;

const MediaHeader = styled.div`
  margin-bottom: 3rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 2rem;
  background: #f8f9f6;
  border-radius: 20px;
  text-decoration: none;
  min-width: 280px;
  transition: all 0.3s ease;

  &:hover {
    background: #eef4ef;
    box-shadow: 0 15px 40px rgba(34, 55, 27, 0.1);
  }
`;

const SocialIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;

  &.instagram {
    background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
  }

  &.youtube {
    background: #FF0000;
  }
`;

const SocialInfo = styled.div`
  flex: 1;
  text-align: left;
`;

const SocialName = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
`;

const SocialHandle = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #6b7c6f;
`;

const SocialArrow = styled.div`
  color: #5a8a62;
  font-size: 1.25rem;
`;

// CTA Section
const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #eef4ef 0%, #f8f9f6 100%);
  position: relative;
  overflow: hidden;
`;

const CTABlobLeft = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #22371b;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.08;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
`;

const CTABlobRight = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #cec5ad;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  right: -150px;
  bottom: -100px;
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTALabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2.5rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const CTAPrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
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

const CTASecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: transparent;
  color: #22371b;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #22371b;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`;

const CTAFeatures = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 1rem;
  }
`;

const CTADecor = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0.5;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;

// Modal
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(34, 55, 27, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 30px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.25rem;
  color: #22371b;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    background: #22371b;
    color: #cec5ad;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const ModalBody = styled.div`
  padding: 2.5rem;
`;

const ModalCategory = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(90, 138, 98, 0.1);
  color: #5a8a62;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 100px;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`;

const ModalSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: #5a8a62;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const ModalDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2rem;
`;

const ModalStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 1.5rem;
`;

const ModalStat = styled.div`
  text-align: center;
`;

const ModalStatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.25rem;
`;

const ModalStatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: capitalize;
`;

const ModalTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ModalTag = styled.span`
  padding: 0.5rem 1rem;
  background: #f8f9f6;
  color: #5a8a62;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 100px;
`;

const ModalCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  }
`;

export default Portfolio;
