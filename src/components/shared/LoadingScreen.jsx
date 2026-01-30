import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef(null);
  const hasCalledComplete = useRef(false);

  const handleComplete = () => {
    if (hasCalledComplete.current) return;
    hasCalledComplete.current = true;
    setIsExiting(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 800);
  };

  const handleVideoEnd = () => {
    // Wait for the full video to finish before completing
    handleComplete();
  };

  // Handle video load error - fallback after timeout
  const handleVideoError = () => {
    console.warn('Video failed to load, completing loading screen');
    handleComplete();
  };

  // Fallback timeout in case video doesn't load or play properly (15 seconds max)
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 15000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <LoadingContainer
          as={motion.div}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <FullScreenVideo
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            onCanPlay={() => {
              if (videoRef.current) {
                videoRef.current.play().catch(() => {});
              }
            }}
          >
            <source src="/logo-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </FullScreenVideo>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  z-index: 9999;
  overflow: hidden;
`;

const FullScreenVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  
  @media (max-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  
  @media (min-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`;

export default LoadingScreen;
