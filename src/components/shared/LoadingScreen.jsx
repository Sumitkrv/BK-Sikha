import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Minimum loading time of 2 seconds
    const minLoadingTimer = setTimeout(() => {
      if (videoEnded) {
        onLoadingComplete();
      }
    }, 2000);

    return () => clearTimeout(minLoadingTimer);
  }, [videoEnded, onLoadingComplete]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Give a small delay before transitioning out
    setTimeout(() => {
      onLoadingComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      <LoadingContainer
        as={motion.div}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <VideoWrapper>
          <LogoVideo
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/src/assets/bkim/bk shikha logo animation.mp4" type="video/mp4" />
          </LogoVideo>
        </VideoWrapper>
      </LoadingContainer>
    </AnimatePresence>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  z-index: 9999;
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  max-height: 800px;
  padding: 2rem;
`;

const LogoVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default LoadingScreen;
