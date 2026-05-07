import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiStar, FiUsers, FiAward, FiCheck, FiPlay, FiTarget, FiZap, FiFeather, FiSun, FiCalendar } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// HD Images - 4K Quality Unique Unsplash Images
const aboutImages = {
  hero: "/more images/about hero 4.png",
  heroMobile: "/new images/mobile about hero.png",
  founder: "/st/(%20About%20page%20)%20BK%20Shikha%20copy.jpg.jpeg",
  meditation: "/2/About%20(%20Ready%20to%20Experience%20True%20Wellness.png",
  yoga: "https://images.unsplash.com/photo-1506126279646-a697353d3166?w=1600&h=1200&fit=crop&q=100",
  nature: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&h=1200&fit=crop&q=100",
  wellness: "https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=1600&h=1200&fit=crop&q=100",
  studio: "/more images/sacred healing space 2.png",
};

const heroVideo = "https://cdn.pixabay.com/video/2024/02/08/199847-912188425_large.mp4";

const milestones = [
  { year: '2004', title: 'Academic Foundation', description: 'Completed Bachelor of Arts from IP College, New Delhi, laying the groundwork for a lifelong pursuit of knowledge.' },
  { year: '2014', title: 'Yoga & Meditation Journey', description: 'Began career as a Yoga Trainer & Meditation Coach, designing personalized yoga programs and leading mindfulness workshops.' },
  { year: '2021', title: 'Digital Expansion', description: 'Launched online wellness programs on Zoom, reaching students worldwide with workshops on mindfulness and stress management.' },
  { year: '2024', title: 'NLP Certification', description: 'Became a certified NLP Practitioner & Counselor, conducting sessions for anxiety, confidence, and emotional balance.' },
  { year: '2025', title: 'Gut Health Expertise', description: 'Achieved certification as a Gut Expert, specializing in digestive health, personalized nutrition plans, and holistic gut healing.' },
  { year: '2026', title: 'Holistic Impact', description: 'Integrating Yoga, NLP coaching, and gut health expertise to empower clients toward sustainable lifestyle transformations.' },
];

const credentials = [
  { icon: <FiAward />, title: 'Certified Yoga Trainer', org: '12+ Years of Teaching Experience' },
  { icon: <FiStar />, title: 'NLP Practitioner & Counselor', org: 'Certified NLP Practitioner' },
  { icon: <FiHeart />, title: 'Meditation Coach', org: 'Mindfulness & Stress Reduction Specialist' },
  { icon: <FiTarget />, title: 'Certified Gut Expert', org: 'Digestive Health & Nutrition Specialist' },
  { icon: <FiZap />, title: 'Bachelor of Arts', org: 'IP College, New Delhi (2004)' },
  { icon: <FiFeather />, title: 'Holistic Wellness Guide', org: 'Workshops, Retreats & One-on-One Coaching' },
];

// Q&A Videos - BK Shikha's Wellness Q&A
const qaVideos = [
  {
    id: 1,
    question: 'Wellness Q&A - Part 1',
    videoUrl: '/2/BK_Shikha 01_1.mp4',
    thumbnail: '/2/About%20%28%20video%20thumbnail%20%28%201%20%29.jpg.jpeg',
  },
  {
    id: 2,
    question: 'Wellness Q&A - Part 2',
    videoUrl: '/2/BK_Shikha 02_1.mp4',
    thumbnail: '/2/About%20%28%20video%20thumbnail%20%28%202%20%29.jpg.jpeg',
  },
  {
    id: 3,
    question: 'Wellness Q&A - Part 3',
    videoUrl: '/2/BK_Shikha 03_1.mp4',
    thumbnail: '/2/About%20%28%20video%20thumbnail%20%28%203%20%29.jpg.jpeg',
  },
];

const values = [
  {
    icon: <FiHeart />,
    title: 'Root-Cause Healing',
    description: 'We address underlying causes, not just symptoms, for lasting transformation.',
    color: '#C25964',
  },
  {
    icon: <FiSun />,
    title: 'Mind-First Approach',
    description: 'True healing begins with the mind. When calm, the body naturally transforms.',
    color: '#D4848C',
  },
  {
    icon: <FiUsers />,
    title: 'Holistic Integration',
    description: 'Combining ancient yogic wisdom with modern science for complete well-being.',
    color: '#E7A3AB',
  },
  {
    icon: <FiFeather />,
    title: 'Compassionate Care',
    description: 'Every journey is unique. We provide personalized guidance with empathy.',
    color: '#C25964',
  },
];

const stats = [
  { number: '12+', label: 'Years Experience', icon: <FiCalendar /> },
  { number: '5000+', label: 'Lives Transformed', icon: <FiUsers /> },
  { number: '12+', label: 'Years in Yoga', icon: <FiSun /> },
  { number: '98%', label: 'Satisfaction', icon: <FiHeart /> },
];

const About = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const credentialsRef = useRef(null);
  const qaRef = useRef(null);
  const missionRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const credentialsInView = useInView(credentialsRef, { once: true, amount: 0.2 });
  const qaInView = useInView(qaRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  const displayedVideos = showAllVideos ? qaVideos : qaVideos.slice(0, 3);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  return (
    <PageWrapper>
      {/* Cinematic Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroVideoWrapper style={{ y: heroY }}>
          <HeroBackgroundImage 
            src={aboutImages.hero} 
            alt="About Hero" 
            className="desktop-hero"
          />
          <HeroBackgroundImage 
            src={aboutImages.heroMobile} 
            alt="About Hero Mobile" 
            className="mobile-hero"
          />
        </HeroVideoWrapper>

        <FloatingOrb className="orb1" />
        <FloatingOrb className="orb2" />
        <FloatingOrb className="orb3" />

        <DecorativeLeaf className="right">
          <svg viewBox="0 0 120 300" fill="none">
            <path d="M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" fill="none" />
            <path d="M60 30V270" stroke="rgba(206, 197, 173, 0.4)" strokeWidth="1" />
            <path d="M60 60L30 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L35 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L40 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 60L90 100" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 120L85 160" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
            <path d="M60 180L80 220" stroke="rgba(206, 197, 173, 0.3)" strokeWidth="0.8" />
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
              <FiFeather /> Discover Our Story
            </HeroLabel>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroTitle>
              Where Ancient Wisdom<br />
              <HeroTitleAccent>Meets Modern Healing</HeroTitleAccent>
            </HeroTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroDescription>
              A journey of 12+ years in holistic wellness, integrating Yoga, NLP coaching, 
              and gut health expertise to support physical, mental, and emotional well-being.
            </HeroDescription>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroStats>
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <StatDivider />}
                  <StatItem>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                </React.Fragment>
              ))}
            </HeroStats>
          </motion.div>
        </HeroContent>

        <WaveSeparator>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </WaveSeparator>
      </HeroSection>

      {/* Founder Story Section */}
      <StorySection ref={storyRef}>
        <Container>
          <StoryGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <StoryImageColumn as={motion.div} variants={itemVariants}>
              <StoryImageWrapper>
                <ImageGradientBg />
                
                <FounderImageCard>
                  <FounderImage 
                    src={aboutImages.founder}
                    alt="BK Shikha - Founder & Lead Mentor"
                    loading="lazy"
                  />
                </FounderImageCard>
              </StoryImageWrapper>
            </StoryImageColumn>

            <StoryTextColumn as={motion.div} variants={itemVariants}>
              <MentorTitle>Meet Your Mentor</MentorTitle>
              <FounderName>BK Shikha</FounderName>
              <FounderRole>Founder & Lead Mentor</FounderRole>
              
              <MentorQuote>
                "Guiding souls toward inner peace through the ancient wisdom of Raja Yoga and mindful living."
              </MentorQuote>

              <CredentialsList>
                <CredentialItem>
                  <MentorCredentialIcon><FiAward /></MentorCredentialIcon>
                  <MentorCredentialText>Certified Yoga Instructor & Meditation Coach</MentorCredentialText>
                </CredentialItem>
                <CredentialItem>
                  <MentorCredentialIcon><FiStar /></MentorCredentialIcon>
                  <MentorCredentialText>12+ Years Experience</MentorCredentialText>
                </CredentialItem>
                <CredentialItem>
                  <MentorCredentialIcon><FiTarget /></MentorCredentialIcon>
                  <MentorCredentialText>NLP Practitioner & Gut Expert</MentorCredentialText>
                </CredentialItem>
                <CredentialItem>
                  <MentorCredentialIcon><FiUsers /></MentorCredentialIcon>
                  <MentorCredentialText>5,000+ Lives Transformed</MentorCredentialText>
                </CredentialItem>
              </CredentialsList>

              <StoryButtons>
                <SecondaryButton to="/contact">
                  Book Consultation
                </SecondaryButton>
              </StoryButtons>
            </StoryTextColumn>
          </StoryGrid>
        </Container>
      </StorySection>

      {/* Values Section */}
      <ValuesSection ref={valuesRef}>
        <Container>
          <ValuesContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <ValuesHeader>
                <SectionLabel className="center">Wellness Philosophy</SectionLabel>
                <SectionTitle className="center">Our Core Values</SectionTitle>
                <ValuesDescription>
                  These foundational principles guide every aspect of our approach to holistic wellness.
                </ValuesDescription>
              </ValuesHeader>
            </motion.div>

            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 25px 60px rgba(34, 55, 27, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <ValueIconWrapper style={{ background: value.color }}>
                    {value.icon}
                  </ValueIconWrapper>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesContent>
        </Container>

        <ValuesDecor>
          <svg viewBox="0 0 200 400" fill="none">
            <path d="M100,20 Q150,100 140,200 Q130,300 100,380" stroke="#e8f0e9" strokeWidth="2" fill="none" />
            <path d="M100,80 Q60,120 40,100" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,140 Q55,180 30,150" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
            <path d="M100,200 Q50,240 25,200" stroke="#e8f0e9" strokeWidth="1.5" fill="none" />
          </svg>
        </ValuesDecor>
      </ValuesSection>

      {/* ── Timeline Section — Editorial Vertical ── */}
      <TimelineSection ref={timelineRef}>
        <Container>
          <TLHeader
            as={motion.div}
            initial={{ opacity: 0, y: 24 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="center">The Journey</SectionLabel>
            <SectionTitle className="center">Milestones of Transformation</SectionTitle>
            <TLSubtitle>
              A path shaped by dedication, growth, and an unwavering commitment to holistic well-being.
            </TLSubtitle>
          </TLHeader>

          <TLList>
            <TLTrackLine />
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <TLItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 28 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Left content (even items) or empty spacer */}
                  <TLSide $align="right" data-side="left">
                    {isLeft && (
                      <TLBody>
                        <TLYear>{milestone.year}</TLYear>
                        <TLTitle>{milestone.title}</TLTitle>
                        <TLDesc>{milestone.description}</TLDesc>
                      </TLBody>
                    )}
                  </TLSide>

                  {/* Center circle */}
                  <TLCircleCol>
                    <TLCircle>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </TLCircle>
                  </TLCircleCol>

                  {/* Right content (odd items) — on mobile ALL items show here */}
                  <TLSide $align="left" data-side="right">
                    <TLBody>
                      {/* On desktop only odd items show here; on mobile all items show here */}
                      {(!isLeft) && (
                        <>
                          <TLYear>{milestone.year}</TLYear>
                          <TLTitle>{milestone.title}</TLTitle>
                          <TLDesc>{milestone.description}</TLDesc>
                        </>
                      )}
                      {/* Mobile fallback: even items also render here (hidden on desktop) */}
                      {isLeft && (
                        <TLMobileBody>
                          <TLYear>{milestone.year}</TLYear>
                          <TLTitle>{milestone.title}</TLTitle>
                          <TLDesc>{milestone.description}</TLDesc>
                        </TLMobileBody>
                      )}
                    </TLBody>
                  </TLSide>
                </TLItem>
              );
            })}
          </TLList>
        </Container>
      </TimelineSection>

      {/* Credentials Section */}
      <CredentialsSection ref={credentialsRef}>
        <Container>
          <CredentialsContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={credentialsInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <CredentialsHeader>
                <SectionLabel className="center">Certifications</SectionLabel>
                <SectionTitle className="center">Credentials & Expertise</SectionTitle>
                <CredentialsDesc>
                  Backed by internationally recognized certifications and years of dedicated practice.
                </CredentialsDesc>
              </CredentialsHeader>
            </motion.div>

            <CredentialsGrid>
              {credentials.map((cred, index) => (
                <CredentialCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <CredentialIcon>{cred.icon}</CredentialIcon>
                  <CredentialTitle>{cred.title}</CredentialTitle>
                  <CredentialOrg>{cred.org}</CredentialOrg>
                </CredentialCard>
              ))}
            </CredentialsGrid>
          </CredentialsContent>
        </Container>
      </CredentialsSection>

      {/* Q&A Video Section */}
      <QASection ref={qaRef}>
        <Container>
          <QAContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={qaInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <QAHeader>
                <SectionLabel className="center">Common Questions</SectionLabel>
                <SectionTitle className="center">Wellness Q&A Videos</SectionTitle>
                <QADescription>
                  Get answers to the most frequently asked questions about holistic wellness, 
                  yoga practice, and the healing journey.
                </QADescription>
              </QAHeader>
            </motion.div>

            <QAGrid>
              {displayedVideos.map((video, index) => (
                <QAVideoCard
                  key={video.id}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <QAVideoWrapper>
                    {playingVideo === video.id ? (
                      <VideoPlayer
                        controls
                        autoPlay
                        src={video.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </VideoPlayer>
                    ) : (
                      <>
                        <QAThumbnail src={video.thumbnail} alt={video.question} />
                        <QAPlayOverlay>
                          <QAPlayButton
                            onClick={() => setPlayingVideo(video.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiPlay />
                          </QAPlayButton>
                        </QAPlayOverlay>
                      </>
                    )}
                  </QAVideoWrapper>
                  <QACardContent>
                    <QAQuestion>{video.question}</QAQuestion>
                  </QACardContent>
                </QAVideoCard>
              ))}
            </QAGrid>

            {!showAllVideos && qaVideos.length > 3 && (
              <QAViewMoreWrapper
                as={motion.div}
                variants={itemVariants}
              >
                <QAViewMoreButton
                  onClick={() => setShowAllVideos(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More ({qaVideos.length - 3} more videos)
                </QAViewMoreButton>
              </QAViewMoreWrapper>
            )}

            {showAllVideos && (
              <QAViewMoreWrapper
                as={motion.div}
                variants={itemVariants}
              >
                <QAViewMoreButton
                  onClick={() => setShowAllVideos(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Less
                </QAViewMoreButton>
              </QAViewMoreWrapper>
            )}
          </QAContent>
        </Container>
        
        <QADecorOrb className="left" />
        <QADecorOrb className="right" />
      </QASection>

      {/* Quote Section */}
      <QuoteSection>
        <QuoteContent>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            The greatest wealth is health. When we nurture our mind, 
            the body follows, and the soul finds its true purpose.
          </QuoteText>
          <QuoteAuthor>— BK Shikha</QuoteAuthor>
        </QuoteContent>
        <QuoteOrb className="left" />
        <QuoteOrb className="right" />
      </QuoteSection>

      {/* CTA Section */}
      <CTASection>
        <CTAOrb className="orb1" />
        <CTAOrb className="orb2" />
        <Container>
          <CTAWrap
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Left — Text */}
            <CTALeft>
              <CTABadge>Begin Your Transformation</CTABadge>
              <CTATitle>Ready to Experience True Wellness?</CTATitle>
              <CTADescription>
                Whether you seek stress relief, emotional balance, gut health improvement,
                or sustainable weight management, BK Shikha is here to guide you with
                compassion and expertise.
              </CTADescription>

              <CTAStats>
                <CTAStat>
                  <CTAStatNum>5000+</CTAStatNum>
                  <CTAStatLabel>Lives Transformed</CTAStatLabel>
                </CTAStat>
                <CTAStatDivider />
                <CTAStat>
                  <CTAStatNum>12+</CTAStatNum>
                  <CTAStatLabel>Years Experience</CTAStatLabel>
                </CTAStat>
                <CTAStatDivider />
                <CTAStat>
                  <CTAStatNum>98%</CTAStatNum>
                  <CTAStatLabel>Happy Clients</CTAStatLabel>
                </CTAStat>
              </CTAStats>

              <CTAButtons>
                <PrimaryButton to="/contact">
                  Book Free Consultation
                  <FiArrowRight />
                </PrimaryButton>
                <SecondaryButton to="/services">
                  Explore Programs
                </SecondaryButton>
              </CTAButtons>
            </CTALeft>

            {/* Right — Image */}
            <CTARight
              as={motion.div}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <CTAImageCard>
                <CTAImage
                  src="/2/About%20(%20Ready%20to%20Experience%20True%20Wellness.png"
                  alt="Ready to Experience True Wellness – BK Shikha"
                />
              </CTAImageCard>
            </CTARight>
          </CTAWrap>
        </Container>
      </CTASection>
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
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    max-width: 1500px;
  }
  
  /* 4K screens */
  @media (min-width: 2560px) {
    max-width: 1800px;
  }
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(135deg, #6D4BCB 0%, #A3404B 50%, #C25964 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: calc(8rem + var(--navbar-h)) 0 10rem;
  overflow: hidden;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    min-height: auto;
    padding: calc(5rem + var(--navbar-h)) 0 6rem;
  }

  @media (max-width: 768px) {
    min-height: 90vh;
    padding: calc(6rem + var(--navbar-h)) 0 8rem;
  }
  
  /* Landscape mobile */
  @media (max-width: 896px) and (orientation: landscape) {
    min-height: auto;
    padding: calc(4rem + var(--navbar-h)) 0 5rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    padding: calc(10rem + var(--navbar-h)) 0 12rem;
  }
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
  opacity: 0.35;
`;

const HeroBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.35;
  
  &.mobile-hero {
    display: none;
  }
  
  @media (max-width: 1025px) {
    &.desktop-hero {
      display: none;
    }
    
    &.mobile-hero {
      display: block;
      object-fit: cover;
      object-position: center center;
    }
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
    rgba(58, 31, 35, 0.82) 0%,
    rgba(109, 75, 203, 0.64) 50%,
    rgba(58, 31, 35, 0.82) 100%
  );
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
    background: #F5C5CA;
    top: -150px;
    right: -150px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #C25964;
    bottom: -100px;
    left: -100px;
    animation-delay: 3s;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: #D4848C;
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
  z-index: 1;

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
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 2rem;
  
  @media (max-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
  
  @media (max-width: 360px) {
    padding: 0 1rem;
  }
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
  
  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding: 0.5rem 1.25rem;
    gap: 0.375rem;
    letter-spacing: 0.15em;
  }
  
  @media (max-width: 480px) {
    font-size: 0.6875rem;
    padding: 0.4375rem 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.625rem;
    padding: 0.375rem 0.875rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
  
  @media (max-width: 640px) {
    font-size: clamp(2rem, 5vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 5vw, 2rem);
    margin: 0 0 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 5vw, 1.75rem);
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.8125rem;
  }
`;

const HeroStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 360px) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #FFF0F2;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.6875rem;
    letter-spacing: 0.08em;
  }
`;

const StatDivider = styled.div`
  width: 1px;
  height: 50px;
  background: rgba(255, 240, 242, 0.35);

  @media (max-width: 600px) {
    height: 40px;
  }
  
  @media (max-width: 480px) {
    height: 35px;
  }
  
  @media (max-width: 360px) {
    height: 30px;
  }
`;

const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Story Section
const StorySection = styled.section`
  padding: 7rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    padding: 9rem 0;
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    gap: 6rem;
  }
`;

const StoryImageColumn = styled.div`
  position: relative;
`;

const StoryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 600px;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    height: 350px;
    max-width: 280px;
  }

  @media (max-width: 768px) {
    height: 450px;
    max-width: 380px;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    height: 680px;
    max-width: 580px;
  }
`;

const ImageGradientBg = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 197, 202, 0.22) 0%, rgba(194, 89, 100, 0.12) 100%);
  border-radius: 30px;
  z-index: 0;
`;

const FounderImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(194, 89, 100, 0.2);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 60%,
      rgba(58, 31, 35, 0.32) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

const FounderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
  
  ${FounderImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const StatsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  z-index: 3;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
  }
`;

const StatBadge = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(194, 89, 100, 0.15);
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.25rem;
  }
`;

const OverlayStatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  color: #3A1F23;
  line-height: 1;
  margin-bottom: 0.25rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OverlayStatText = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #A3404B;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const StoryTextColumn = styled.div``;

const MentorLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #A3404B;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
`;

const MentorTitle = styled.h3`
  display: inline-block;
  font-family: ${theme.fonts.body};
  padding: 0.35rem 0.9rem;
  margin: 0 0 1rem;
  background: rgba(194, 89, 100, 0.18);
  border-radius: 2px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #3A1F23;
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const FounderName = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #3A1F23;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

const FounderRole = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.25rem;
  font-weight: 500;
  color: #A3404B;
  margin-bottom: 2rem;
`;

const MentorQuote = styled.blockquote`
  font-family: ${theme.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 400;
  color: #3A1F23;
  line-height: 1.6;
  padding: 2rem 0 2rem 2rem;
  margin: 0 0 2.5rem 0;
  border-left: 4px solid #F5C5CA;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    left: -15px;
    top: 0;
    font-size: 4rem;
    color: #F5C5CA;
    opacity: 0.5;
    font-family: ${theme.fonts.heading};
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
`;

const CredentialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const CredentialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(194, 89, 100, 0.06);
  border-radius: 16px;
  border: 1px solid rgba(194, 89, 100, 0.16);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(194, 89, 100, 0.1);
    transform: translateX(5px);
  }
`;

const MentorCredentialIcon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #A3404B, #D4848C);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const MentorCredentialText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: #3A1F23;
`;

const StoryButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #C25964;
  margin-bottom: 0.75rem;

  &.center {
    display: block;
    text-align: center;
  }

  &.light {
    color: #FFF0F2;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #3A1F23;
  line-height: 1.2;
  margin-bottom: 1rem;

  &.center {
    text-align: center;
  }

  &.light {
    color: #ffffff;
  }
`;

// Mission Section
const MissionSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #FFF7F8 0%, #FFF0F2 100%);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 15px 50px rgba(194, 89, 100, 0.12);
  text-align: center;

  &.vision {
    background: #6D4BCB;
    
    h3, p {
      color: white;
    }
    
    p {
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const MissionIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.75rem;

  &.mission {
    background: linear-gradient(135deg, #A3404B, #D4848C);
    color: #FFF0F2;
  }

  &.vision {
    background: rgba(255, 240, 242, 0.25);
    color: #FFF0F2;
  }
`;

const MissionTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 1rem;
`;

const MissionText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6D4A4E;
`;

// Values Section
const ValuesSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const ValuesContent = styled.div``;

const ValuesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ValuesDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6D4A4E;
  max-width: 600px;
  margin: 1rem auto 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: #FFF7F8;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(245, 197, 202, 0.28);
`;

const ValueIconWrapper = styled.div`
  width: 65px;
  height: 65px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6D4A4E;
`;

const ValuesDecor = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.6;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// ── Timeline Section — Editorial Vertical ───────────────────────────────────
const TimelineSection = styled.section`
  padding: 7rem 0 8rem;
  background: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }
`;

const TLHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const TLSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6D4A4E;
  max-width: 500px;
  margin: 0.5rem auto 0;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

/* Outer list wrapper — holds the absolute center track line */
const TLList = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

/* Vertical line down the center */
const TLTrackLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 24px;
  bottom: 24px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(194, 89, 100, 0) 0%,
    #F5C5CA 8%,
    #C25964 20%,
    #C25964 80%,
    #F5C5CA 92%,
    rgba(194, 89, 100, 0) 100%
  );

  /* Mobile: left-aligned track */
  @media (max-width: 640px) {
    left: 22px;
    transform: none;
  }
`;

/* One milestone row — three columns: left | circle | right */
const TLItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px 1fr;
  align-items: center;
  gap: 2rem;
  padding: 2.2rem 0;
  border-bottom: 1px solid rgba(245, 197, 202, 0.25);

  &:last-child { border-bottom: none; }

  /* Mobile: two-column — circle + content */
  @media (max-width: 640px) {
    grid-template-columns: 48px 1fr;
    gap: 1.25rem;
    padding: 1.5rem 0;
  }
`;

/* Left or right content column */
const TLSide = styled.div`
  text-align: ${({ $align }) => $align};

  /* On mobile: hide the LEFT side column entirely (circle + right column remain) */
  @media (max-width: 640px) {
    &[data-side="left"] { display: none; }
    &[data-side="right"] { text-align: left; }
  }
`;

/* Center column: circle */
const TLCircleCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

/* The numbered circle */
const TLCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C25964 0%, #A3404B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(194, 89, 100, 0.3);
  position: relative;
  z-index: 2;

  span {
    font-family: ${theme.fonts.body};
    font-size: 0.8125rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.04em;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    span { font-size: 0.75rem; }
  }
`;

const TLBody = styled.div`
  padding-top: 0.15rem;
`;

/* Visible only on mobile — shows even-index content in the right column */
const TLMobileBody = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

const TLYear = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C25964;
  margin-bottom: 0.5rem;

  /* Short decorative line before the year */
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1.5px;
    background: #C25964;
    vertical-align: middle;
    margin-right: 0.5rem;
    opacity: 0.55;
  }
`;

const TLTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #3A1F23;
  margin: 0 0 0.6rem;
  line-height: 1.25;
`;

const TLDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6D4A4E;
  margin: 0;
  max-width: 580px;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

// Credentials Section
const CredentialsSection = styled.section`
  padding: 6rem 0;
  background: #FFF7F8;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const CredentialsContent = styled.div``;

const CredentialsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CredentialsDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6D4A4E;
  max-width: 600px;
  margin: 1rem auto 0;
`;

const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CredentialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(194, 89, 100, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(245, 197, 202, 0.28);
`;

const CredentialIcon = styled.div`
  width: 55px;
  height: 55px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #A3404B, #D4848C);
  border-radius: 50%;
  color: #FFF0F2;
  font-size: 1.25rem;
`;

const CredentialTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #3A1F23;
  margin-bottom: 0.5rem;
`;

const CredentialOrg = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: #6D4A4E;
  margin: 0;
`;

// Q&A Section
const QASection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const QAContent = styled.div`
  position: relative;
  z-index: 2;
`;

const QAHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const QADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6D4A4E;
  max-width: 650px;
  margin: 1rem auto 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const QAGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
`;

const QAVideoCard = styled.div`
  background: #FFF7F8;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(194, 89, 100, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(245, 197, 202, 0.26);

  &:hover {
    box-shadow: 0 15px 40px rgba(194, 89, 100, 0.18);
  }
`;

const QAVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 140%; /* slightly wider to reduce cropping */
  background: #f4e9ec;
  overflow: hidden;
  max-height: 600px;
`;

const QAThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f4e9ec;
`;

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
`;

const QAPlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(109, 75, 203, 0.18),
    rgba(58, 31, 35, 0.25)
  );
  transition: all 0.3s ease;

  ${QAVideoCard}:hover & {
    background: linear-gradient(
      135deg,
      rgba(109, 75, 203, 0.12),
      rgba(58, 31, 35, 0.2)
    );
  }
`;

const QAPlayButton = styled(motion.button)`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  color: #6D4BCB;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding-left: 5px;

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover {
    background: #FFF0F2;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const QACardContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const QAQuestion = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #3A1F23;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const QADecorOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
  pointer-events: none;

  &.left {
    width: 400px;
    height: 400px;
    background: #D4848C;
    top: 10%;
    left: -100px;
  }

  &.right {
    width: 350px;
    height: 350px;
    background: #F5C5CA;
    bottom: 10%;
    right: -100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const QAViewMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const QAViewMoreButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #A3404B 0%, #D4848C 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(163, 64, 75, 0.3);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 6px 30px rgba(163, 64, 75, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9375rem;
  }
`;

// Studio Section
const StudioSection = styled.section`
  position: relative;
`;

const StudioImageWrapper = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const StudioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
`;

const StudioOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(58, 31, 35, 0.9) 0%,
    rgba(109, 75, 203, 0.7) 50%,
    rgba(194, 89, 100, 0.4) 100%
  );
`;

const StudioContent = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StudioBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const StudioTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const StudioDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92);
`;

// Quote Section
const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #C25964 0%, #A94A54 100%);
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
  color: #FFE5E8;
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
  color: #FFF0F2;
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
    background: #F5C5CA;
    left: -100px;
    bottom: -100px;
  }

  &.right {
    background: #C25964;
    right: -100px;
    top: -100px;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 7rem 0;
  background: linear-gradient(135deg, #FFF7F8 0%, #FFF0F2 50%, #FDE8EC 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const CTAOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #F5C5CA;
    top: -150px;
    right: 10%;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #E7A3AB;
    bottom: -120px;
    left: 5%;
  }
`;

const CTAWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1100px) {
    gap: 3.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CTALeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const CTABadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  color: #A3404B;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.25rem;
  padding: 0.4rem 1rem;
  background: rgba(194, 89, 100, 0.1);
  border: 1px solid rgba(194, 89, 100, 0.2);
  border-radius: 100px;
  width: fit-content;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 400;
  color: #3A1F23;
  line-height: 1.15;
  margin: 0 0 1.25rem;
  letter-spacing: -0.01em;
`;

const CTADescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6D4A4E;
  margin: 0 0 2.25rem;

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    margin-bottom: 1.75rem;
  }
`;

const CTAStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CTAStatNum = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 500;
  color: #A3404B;
  line-height: 1;
`;

const CTAStatLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: #9A6B6E;
  letter-spacing: 0.04em;
`;

const CTAStatDivider = styled.div`
  width: 1px;
  height: 36px;
  background: rgba(194, 89, 100, 0.2);
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    a {
      justify-content: center;
      text-align: center;
    }
  }
`;

const CTARight = styled.div`
  position: relative;
`;

const CTAImageCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.08);
  background: #FADADD;
  line-height: 0;

  @media (max-width: 900px) {
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
  }
`;

const CTAImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

// Buttons
const PrimaryButton = styled(Link)`
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
  box-shadow: 0 8px 24px rgba(163, 64, 75, 0.3);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(194, 89, 100, 0.4);

    svg {
      transform: translateX(4px);
    }
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #A3404B;
  border: 1.5px solid #C25964;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #C25964;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(194, 89, 100, 0.3);
  }
`;

export default About;
