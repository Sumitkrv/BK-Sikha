import React from 'react';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import AreasOfExpertise from '../components/home/AreasOfExpertise';
import CoachingJourney from '../components/home/CoachingJourney';
import FunFacts from '../components/home/FunFacts';
import BlogPreview from '../components/home/BlogPreview';
import CommunityInvite from '../components/home/CommunityInvite';

const Home = () => {
  return (
    <>
      {/* Scroll Expand Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/yoga-gallery/d3b4c390-e5a0-42ce-9f9d-ff5a0bcc7ab4 (1).mp4"
        posterSrc="/yoga-gallery/ChatGPT Image Feb 1, 2026, 01_49_50 PM.png"
        bgImageSrc="/yoga-gallery/ChatGPT Image Feb 1, 2026, 01_49_50 PM.png"
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
      <FunFacts />
      <BlogPreview />
      <CommunityInvite />
    </>
  );
};

export default Home;
