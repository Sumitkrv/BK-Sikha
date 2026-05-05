import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiHeart, FiPlay, FiX, FiStar, FiMapPin, FiCalendar, FiTarget, FiCheck, FiInstagram, FiYoutube } from 'react-icons/fi';

// HD Images - 4K Quality Unique Unsplash Images
const portfolioImages = {
  hero: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=3840&h=2160&fit=crop&q=100",
  corporate: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1600&h=2000&fit=crop&q=100",
  retreat: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1600&h=1200&fit=crop&q=100",
  workshop: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1600&h=2400&fit=crop&q=100",
  online: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1600&h=1200&fit=crop&q=100",
  community: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=1600&fit=crop&q=100",
  training: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&h=1200&fit=crop&q=100",
  meditation: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&h=2000&fit=crop&q=100",
  nature: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100",
  transform1: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=1200&h=1600&fit=crop&q=100",
  transform2: "https://images.unsplash.com/photo-1593205134161-0a17c62cf0fc?w=1200&h=1600&fit=crop&q=100",
};

const heroImage = "/more images/portfolio 1 (1).png";
const heroImageMobile = "/more images/portfolio hero mobile.png";

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
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&q=100',
    story: 'Lost 15kg and found inner peace through the 30-day transformation program. My life has completely changed.',
    transformation: '15kg weight loss',
  },
  {
    name: 'Rahul Mehta',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=100',
    story: 'Overcame chronic anxiety and now lead a stress-free life. The meditation techniques are life-changing.',
    transformation: 'Anxiety-free life',
  },
  {
    name: 'Anita Desai',
    role: 'Mother of 2',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=100',
    story: 'Found balance between motherhood and self-care. The online program fits perfectly into my busy schedule.',
    transformation: 'Work-life balance',
  },
];

const achievements = [
  { icon: <FiUsers />, number: '5000+', label: 'Lives Transformed', color: '#FFF0F2' },
  { icon: <FiAward />, number: '12+', label: 'Years Experience', color: '#F5C5CA' },
  { icon: <FiHeart />, number: '98%', label: 'Client Satisfaction', color: '#D4848C' },
  { icon: <FiStar />, number: '500+', label: 'Sessions Delivered', color: '#FFF0F2' },
  { icon: <FiMapPin />, number: '25+', label: 'Countries Reached', color: '#F5C5CA' },
  { icon: <FiTarget />, number: '100%', label: 'Dedication', color: '#D4848C' },
];

const Portfolio = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const storiesRef = useRef(null);
  const statsRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const storiesInView = useInView(storiesRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Detect mobile screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          <HeroBackgroundImage src={isMobile ? heroImageMobile : heroImage} alt="Portfolio Hero" />
          <VideoOverlay />
        </HeroVideoWrapper>

        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />

        <DecorativeLeaf className="left">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(245, 197, 202, 0.35)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(245, 197, 202, 0.35)" strokeWidth="1" />
          </svg>
        </DecorativeLeaf>

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(245, 197, 202, 0.35)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(245, 197, 202, 0.35)" strokeWidth="1" />
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
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#F5C5CA" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#F5C5CA" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#F5C5CA" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#F5C5CA" strokeWidth="1.5" fill="none" />
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
              <AuthorImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=100" alt="BK Shikha" />
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
            <circle cx="100" cy="100" r="80" stroke="#F5C5CA" strokeWidth="1" strokeDasharray="4 4" opacity="0.35"/>
            <circle cx="100" cy="100" r="60" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
            <circle cx="100" cy="100" r="40" stroke="#D4848C" strokeWidth="1" strokeDasharray="4 4" opacity="0.45"/>
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

const HeroBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.7;
  
  @media (max-width: 1024px) {
    object-position: center 30%;
  }
  
  @media (max-width: 768px) {
    object-position: center 25%;
    opacity: 0.6;
  }
  
  @media (max-width: 640px) {
    object-position: center 20%;
  }
  
  @media (max-width: 480px) {
    object-position: center 15%;
  }
  
  @media (max-width: 360px) {
    object-position: center 10%;
  }
  
  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center center;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(58, 31, 35, 0.62) 0%,
    rgba(109, 75, 203, 0.5) 50%,
    rgba(58, 31, 35, 0.62) 100%
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
    background: #F5C5CA;
    top: -150px;
    right: -150px;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #C25964;
    bottom: -100px;
    left: -100px;
    animation-delay: 4s;
  }

  &.orb3 {
    width: 300px;
    height: 300px;
    background: #D4848C;
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
  color: #FFF0F2;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(255, 240, 242, 0.45);
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
  color: #FFF0F2;
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
  background: #FFF0F2;
  color: #6D4BCB;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #F5C5CA;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(167, 139, 250, 0.35);
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
    border-color: #FFF0F2;
    color: #FFF0F2;
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
  background: linear-gradient(135deg, #6D4BCB 0%, #C25964 100%);
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
  color: #C25964;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: #3A1F23;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6D4A4E;
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
  background: ${props => props.$active ? '#A3404B' : 'transparent'};
  color: ${props => props.$active ? '#FFF0F2' : '#3A1F23'};
  border: 2px solid ${props => props.$active ? '#A3404B' : 'rgba(194, 89, 100, 0.25)'};
  border-radius: 100px;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #A3404B;
    background: ${props => props.$active ? '#A3404B' : 'rgba(194, 89, 100, 0.08)'};
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
  background: linear-gradient(180deg, rgba(58, 31, 35, 0) 0%, rgba(58, 31, 35, 0.9) 100%);
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
  color: #3A1F23;
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
  color: #FFF0F2;
  
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
  background: #FFF0F2;
  color: #6D4BCB;
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
  background: linear-gradient(180deg, #FFF7F8 0%, #FFF0F2 100%);
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
  box-shadow: 0 10px 40px rgba(194, 89, 100, 0.12);
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
  border: 3px solid #F5C5CA;
`;

const StoryInfo = styled.div`
  flex: 1;
`;

const StoryName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 0.125rem;
`;

const StoryRole = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #6D4A4E;
`;

const TransformBadge = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #A3404B, #D4848C);
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
  color: #4B5563;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const StoryStars = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #F5C5CA;

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
    background: #C25964;
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    background: #F5C5CA;
    right: -200px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// Quote Section
const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #6D4BCB 0%, #C25964 100%);
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
  color: #FFF0F2;
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
  border: 3px solid #FFF0F2;
`;

const AuthorDetails = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #FFF0F2;
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
  background: #FFF7F8;
  border-radius: 20px;
  text-decoration: none;
  min-width: 280px;
  transition: all 0.3s ease;

  &:hover {
    background: #FFF0F2;
    box-shadow: 0 15px 40px rgba(194, 89, 100, 0.16);
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
  color: #3A1F23;
`;

const SocialHandle = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #6D4A4E;
`;

const SocialArrow = styled.div`
  color: #A3404B;
  font-size: 1.25rem;
`;

// CTA Section
const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #FFF0F2 0%, #FFF7F8 100%);
  position: relative;
  overflow: hidden;
`;

const CTABlobLeft = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #C25964;
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
  background: #F5C5CA;
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
  color: #A3404B;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6D4A4E;
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
  background: linear-gradient(135deg, #A3404B 0%, #C25964 100%);
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #6D4BCB;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(163, 64, 75, 0.28);
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
  color: #6D4BCB;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #C25964;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(194, 89, 100, 0.08);
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
  color: #A3404B;

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
  background: rgba(58, 31, 35, 0.9);
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
  color: #6D4BCB;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    background: #A3404B;
    color: #FFF0F2;
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
  background: rgba(194, 89, 100, 0.14);
  color: #A3404B;
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
  color: #3A1F23;
  margin-bottom: 0.5rem;
`;

const ModalSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  color: #A3404B;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const ModalDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6D4A4E;
  margin-bottom: 2rem;
`;

const ModalStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #F5C5CA;
  border-bottom: 1px solid #F5C5CA;
  margin-bottom: 1.5rem;
`;

const ModalStat = styled.div`
  text-align: center;
`;

const ModalStatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 0.25rem;
`;

const ModalStatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  color: #6D4A4E;
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
  background: #FFF7F8;
  color: #A3404B;
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
  background: linear-gradient(135deg, #A3404B 0%, #C25964 100%);
  color: #ffffff;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #6D4BCB;
  }
`;

export default Portfolio;
