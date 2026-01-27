import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import SectionTitle from '../components/shared/SectionTitle';
import { CircularTestimonials } from '../components/ui/CircularTestimonials';

const Testimonials = () => {
  // Featured testimonials for circular display
  const featuredTestimonials = [
    {
      quote: "BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it.",
      name: "Priya Sharma",
      designation: "Software Engineer",
      location: "Bangalore",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    },
    {
      quote: "The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power.",
      name: "Anjali Verma",
      designation: "Entrepreneur",
      location: "Mumbai",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    },
    {
      quote: "As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques and mindfulness practices I use every single day.",
      name: "Rahul Mehta",
      designation: "College Student",
      location: "Delhi",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    },
    {
      quote: "I came to BK Shikha feeling stuck in every area of my life. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. Six months later, I'm living a life I only dreamed of.",
      name: "Kavita Singh",
      designation: "Marketing Manager",
      location: "Pune",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      location: 'Bangalore',
      image: '👩‍💻',
      text: "BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it. The personalized approach, the genuine care - it's not just coaching, it's healing. I sleep better, I feel confident, and I've rediscovered joy in my life.",
      transformation: 'From anxiety and burnout to peace and confidence',
      rating: 5,
    },
    {
      name: 'Anjali Verma',
      role: 'Entrepreneur',
      location: 'Mumbai',
      image: '👩‍💼',
      text: "The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power. Her sessions are transformative - she combines practical tools with deep emotional work. Now I lead my team with confidence, speak my truth unapologetically, and trust my intuition completely.",
      transformation: 'From self-doubt to empowered leadership',
      rating: 5,
    },
    {
      name: 'Rahul Mehta',
      role: 'College Student',
      location: 'Delhi',
      image: '👨‍🎓',
      text: "As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques, mindfulness practices, and gave me tools I use every single day. What makes her special is how relatable and down-to-earth she is. She never makes you feel judged. Her guidance helped me ace my exams while staying mentally healthy.",
      transformation: 'From overwhelm to balanced achievement',
      rating: 5,
    },
    {
      name: 'Kavita Singh',
      role: 'Marketing Manager',
      location: 'Pune',
      image: '👩',
      text: "I came to BK Shikha feeling stuck in every area of my life - relationships, career, personal growth. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. She held space for my tears, celebrated my wins, and pushed me gently when I needed it. Six months later, I'm living a life I only dreamed of. This work is sacred.",
      transformation: 'From feeling stuck to purposeful living',
      rating: 5,
    },
    {
      name: 'Sanjay Kumar',
      role: 'IT Professional',
      location: 'Hyderabad',
      image: '👨‍💼',
      text: "I was skeptical about yoga and wellness coaching at first. But chronic back pain and stress-induced health issues forced me to try. BK Shikha's personalized yoga coaching not only healed my physical pain but also gave me mental clarity I hadn't experienced in years. Her scientific yet spiritual approach resonated with me. She explains the 'why' behind every practice, making it easy to commit. My life quality has improved dramatically.",
      transformation: 'From physical pain to holistic wellness',
      rating: 5,
    },
    {
      name: 'Meera Kapoor',
      role: 'Stay-at-home Mom',
      location: 'Jaipur',
      image: '👩‍🦰',
      text: "After becoming a mother, I lost myself completely. I was just 'mom', nothing more. BK Shikha's confidence and self-love coaching helped me rediscover who I am beyond my roles. She taught me that self-care isn't selfish, that my dreams still matter, and that I deserve to feel beautiful and confident. Her compassion and understanding made me feel seen for the first time in years. I'm now pursuing my passion and setting healthy boundaries.",
      transformation: 'From lost identity to empowered woman',
      rating: 5,
    },
    {
      name: 'Aditya Joshi',
      role: 'Creative Professional',
      location: 'Goa',
      image: '🎨',
      text: "BK Shikha's emotional wellness mentoring helped me process years of suppressed emotions and childhood trauma. I always thought I was 'fine' but was actually numbing myself through work and distractions. Her safe, judgment-free space allowed me to finally feel and heal. The tools she gave me for emotional regulation have been life-changing. I'm more present in my relationships, more creative in my work, and genuinely happy.",
      transformation: 'From emotional numbness to authentic feeling',
      rating: 5,
    },
    {
      name: 'Simran Patel',
      role: 'HR Director',
      location: 'Ahmedabad',
      image: '👩‍💼',
      text: "I work in a high-stress corporate environment where burnout is normalized. BK Shikha taught me that success doesn't require sacrificing my wellbeing. Through our sessions, I learned mindfulness practices that I integrate seamlessly into my workday. Her practical, no-nonsense approach fits perfectly with my lifestyle. I'm more productive, more patient with my team, and actually enjoy my life again. She's a game-changer.",
      transformation: 'From corporate burnout to mindful success',
      rating: 5,
    },
    {
      name: 'Rohan Desai',
      role: 'Fitness Trainer',
      location: 'Chennai',
      image: '💪',
      text: "Even as a fitness professional, I was missing the mind-body connection that yoga offers. BK Shikha's expertise in yogic philosophy and practice deepened my understanding of true wellness. She helped me see fitness as more than physical - it's emotional, mental, and spiritual. The knowledge I gained from her has made me a better trainer and a more balanced person. Her teachings are authentic and rooted in genuine experience.",
      transformation: 'From physical fitness to holistic wellness',
      rating: 5,
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
            <Subtitle>Transformation Stories</Subtitle>
            <HeroTitle>Real People, Real Transformations</HeroTitle>
            <HeroDescription>
              These are the voices of beautiful souls who chose healing, growth, and
              transformation. Their journeys inspire us all.
            </HeroDescription>
          </HeroContent>
        </div>
      </HeroSection>

      {/* Featured Circular Testimonials - Light */}
      <CircularTestimonialsSection>
        <div className="container">
          <SectionTitle subtitle="Featured Stories">
            Hear From Our Community
          </SectionTitle>
          <CircularTestimonials
            testimonials={featuredTestimonials}
            autoplay={true}
            autoplayInterval={6000}
            colors={{
              name: theme.colors.primary,
              designation: theme.colors.textLight,
              testimony: theme.colors.text,
              arrowBackground: theme.colors.cta,
              arrowForeground: "#ffffff",
              arrowHoverBackground: theme.colors.ctaHover,
            }}
            fontSizes={{
              name: "1.75rem",
              designation: "1rem",
              quote: "1.125rem",
            }}
          />
        </div>
      </CircularTestimonialsSection>

      {/* Testimonials */}
      <TestimonialsSection className="section">
        <div className="container">
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <QuoteIcon>"</QuoteIcon>

                <TestimonialText>{testimonial.text}</TestimonialText>

                <TransformationBadge>
                  ✨ {testimonial.transformation}
                </TransformationBadge>

                <Rating>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i}>
                      <FiStar fill={theme.colors.accent} />
                    </Star>
                  ))}
                </Rating>

                <AuthorSection>
                  <AuthorImage>{testimonial.image}</AuthorImage>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                    <AuthorLocation>{testimonial.location}</AuthorLocation>
                  </AuthorInfo>
                </AuthorSection>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </div>
      </TestimonialsSection>

      {/* Stats Section */}
      <StatsSection className="section">
        <div className="container">
          <SectionTitle subtitle="Impact in Numbers">
            A Community of Transformed Lives
          </SectionTitle>

          <StatsGrid>
            <StatCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StatNumber>500+</StatNumber>
              <StatLabel>Lives Transformed</StatLabel>
            </StatCard>

            <StatCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatNumber>1000+</StatNumber>
              <StatLabel>Healing Sessions</StatLabel>
            </StatCard>

            <StatCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatNumber>10+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>

            <StatCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatCard>
          </StatsGrid>
        </div>
      </StatsSection>

      {/* CTA */}
      <CTASection className="section">
        <div className="container">
          <CTAContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Ready to Write Your Own Transformation Story?</CTATitle>
            <CTAText>
              Every journey begins with a single step. Let's take that step together
              and create the life you deserve.
            </CTAText>
            <CTAButton
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey Today
            </CTAButton>
          </CTAContent>
        </div>
      </CTASection>
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

const CircularTestimonialsSection = styled.section`
  padding: 5rem 0;
  background: ${theme.colors.background};
`;

const TestimonialsSection = styled.section`
  background: ${theme.colors.backgroundAlt};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 2px solid ${theme.colors.backgroundDark};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.secondaryLight};
  }
`;

const QuoteIcon = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 5rem;
  line-height: 1;
  color: ${theme.colors.secondaryLight};
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  z-index: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;
  position: relative;
  z-index: 2;
  font-style: italic;
`;

const TransformationBadge = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: ${theme.borderRadius.lg};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  font-style: normal;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled.span`
  color: ${theme.colors.accent};
  font-size: 1.1rem;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.backgroundDark};
`;

const AuthorImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const AuthorName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
  margin: 0;
`;

const AuthorLocation = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.accent};
  margin: 0;
`;

const StatsSection = styled.section`
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight},
    ${theme.colors.accentLight}
  );
  padding: 3rem 2rem;
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${theme.shadows.md};
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1.125rem;
  color: white;
  margin: 0;
  opacity: 0.95;
`;

const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondaryLight} 0%,
    ${theme.colors.accentLight} 100%
  );
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2.5rem;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.25rem 3rem;
  background: white;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.transitions.base};

  &:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-2px);
  }
`;

export default Testimonials;
