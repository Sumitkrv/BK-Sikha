import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = () => {
  const location = useLocation();

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  backface-visibility: hidden;
  isolation: isolate;
  will-change: auto;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 0; /* No padding - navbar is relative positioned */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
`;

export default Layout;
