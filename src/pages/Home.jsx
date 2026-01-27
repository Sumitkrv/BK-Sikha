import React from 'react';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import CoachingJourney from '../components/home/CoachingJourney';
import TrainersSection from '../components/home/TrainersSection';
import FunFacts from '../components/home/FunFacts';
import BlogPreview from '../components/home/BlogPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CommunityInvite from '../components/home/CommunityInvite';

const Home = () => {
  return (
    <>
      {/* Scroll Expand Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
        posterSrc="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        bgImageSrc="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1920"
        title="Find Your Inner Peace"
        scrollToExpand="Scroll to begin your journey"
        textBlend={true}
      />

      <ProgramCardsCarousel />
      <AboutPreview />
      <ServicesSnapshot />
      <CoachingJourney />
      <TrainersSection />
      <FunFacts />
      <BlogPreview />
      <TestimonialsPreview />
      <CommunityInvite />
    </>
  );
};

export default Home;
