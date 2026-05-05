import React from 'react';
import styled from 'styled-components';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import AreasOfExpertise from '../components/home/AreasOfExpertise';

const Home = () => {
  return (
    <HomeWrapper>
      {/* Hero Image Section */}
      <HeroSection>
        <HeroImage src="/yoga-gallery/pose3.jpg" alt="BK Shikha Wellness" />
      </HeroSection>

      <ProgramCardsCarousel />
      <AboutPreview />
      <ServicesSnapshot />
      <AreasOfExpertise />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  /* No spacing - hero sits flush below navbar */
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  display: block;
`;

export default Home;
