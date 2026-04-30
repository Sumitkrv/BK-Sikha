import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = ({ hideHeader = false }) => {
  const location = useLocation();

  return (
    <>
      {!hideHeader && <Header />}
      <LayoutWrapper>
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
    </>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 100px; /* Account for fixed navbar */

  @media (max-width: 768px) {
    padding-top: 65px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

export default Layout;
