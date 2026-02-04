import React from 'react';
import styled from 'styled-components';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import AreasOfExpertise from '../components/home/AreasOfExpertise';
import CoachingJourney from '../components/home/CoachingJourney';
import FunFacts from '../components/home/FunFacts';
import BlogPreview from '../components/home/BlogPreview';
import CommunityInvite from '../components/home/CommunityInvite';

const Home = () => {
  return (
    <HomeWrapper>
      {/* Scroll Expand Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/yoga-gallery/d3b4c390-e5a0-42ce-9f9d-ff5a0bcc7ab4 (1).mp4"
        posterSrc="/yoga-gallery/pose5.jpg"
        bgImageSrc="/yoga-gallery/pose3.jpg"
        bgObjectPosition="center 40%"
        title="Find Your Inner Peace"
        scrollToExpand="Scroll to begin your journey"
        textBlend={true}
      />

      <ProgramCardsCarousel />
      <AboutPreview />
      <ServicesSnapshot />
      <AreasOfExpertise />
      <CoachingJourney />
      <FunFacts />
      <BlogPreview />
      <CommunityInvite />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  /* No spacing - hero sits flush below navbar */
`;

export default Home;
