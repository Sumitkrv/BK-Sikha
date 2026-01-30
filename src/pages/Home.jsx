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
        posterSrc="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=3840&h=2160&fit=crop&q=100"
        bgImageSrc="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=3840&h=2160&fit=crop&q=100"
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
