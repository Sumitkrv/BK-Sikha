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
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
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
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  /* No padding-top here — each page's hero section absorbs the navbar
     offset via var(--navbar-h) so backgrounds fill flush to the top. */
`;

export default Layout;
