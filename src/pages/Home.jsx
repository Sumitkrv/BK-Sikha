import React from 'react';
import styled from 'styled-components';
import ProgramCardsCarousel from '../components/home/ProgramCardsCarousel';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import AreasOfExpertise from '../components/home/AreasOfExpertise';

const Home = () => {
  return (
    <HomeWrapper>
      <HeroSection>
        <HeroVideo
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/2/BK_Shikha web home page video 04_1.mp4"
        />
        <HeroOverlay />
      </HeroSection>

      <ProgramCardsCarousel />
      <AboutPreview />
      <ServicesSnapshot />
      <AreasOfExpertise />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  padding-top: var(--navbar-h);
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  /* Desktop: fill viewport, cover is fine (both landscape) */
  height: calc(100vh - var(--navbar-h));
  height: calc(100dvh - var(--navbar-h));

  /* Tablet and below: auto height — video keeps its natural aspect ratio, no cropping */
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const HeroVideo = styled.video`
  display: block;
  width: 100%;

  /* Desktop: absolute fill + cover */
  height: 100%;
  object-fit: cover;
  object-position: center center;

  /* Tablet and below: flow element, natural aspect ratio, no crop */
  @media (max-width: 1024px) {
    position: relative;
    height: auto;
    object-fit: contain;
    object-position: center center;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.05) 40%,
    transparent 70%
  );
  pointer-events: none;
`;

export default Home;
