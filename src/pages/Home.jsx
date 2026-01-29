import React from 'react';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import AreasOfExpertise from '../components/home/AreasOfExpertise';
import CoachingJourney from '../components/home/CoachingJourney';
import TrainersSection from '../components/home/TrainersSection';
import FunFacts from '../components/home/FunFacts';
import BlogPreview from '../components/home/BlogPreview';
import CommunityInvite from '../components/home/CommunityInvite';

const Home = () => {
  return (
    <>
      {/* Scroll Expand Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://cdn.pixabay.com/video/2024/02/08/199847-912188425_large.mp4"
        posterSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&q=80"
        bgImageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop&q=80"
        title="Find Your Inner Peace"
        scrollToExpand="Scroll to begin your journey"
        textBlend={true}
      />

      <ProgramCardsCarousel />
      <AboutPreview />
      <ServicesSnapshot />
      <Hero />
      <AreasOfExpertise />
      <CoachingJourney />
      <TrainersSection />
      <FunFacts />
      <BlogPreview />
      <CommunityInvite />
    </>
  );
};

export default Home;
