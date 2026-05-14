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

/* ─── Styled Components ─── */

const HomeWrapper = styled.div``;

const HeroSection = styled.section`
  /* Push below the fixed navbar */
  margin-top: var(--navbar-h);
  position: relative;
  width: 100%;
  background: #0a0a0a;
  line-height: 0; /* remove inline gap below video */
`;

const HeroVideo = styled.video`
  /* Normal flow element — the video determines the section height.
     width: 100% scales it to the container; height: auto preserves
     the native aspect ratio. NO cropping, NO cutting. */
  display: block;
  width: 100%;
  height: auto;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.35) 0%,
    rgba(10, 10, 10, 0.06) 35%,
    transparent 65%
  );
  pointer-events: none;
`;

export default Home;
