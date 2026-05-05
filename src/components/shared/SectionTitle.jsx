import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const SectionTitle = ({
  children,
  subtitle,
  align = 'center',
  color = 'primary',
  maxWidth,
  className,
}) => {
  return (
    <TitleWrapper
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      $align={align}
      $maxWidth={maxWidth}
      className={className}
    >
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Title $color={color}>{children}</Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: ${(props) => props.$align};
  max-width: ${(props) => props.$maxWidth || '100%'};
  margin: ${(props) => (props.$align === 'center' ? '0 auto 3rem' : '0 0 3rem')};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  display: inline-block;
  padding: 0.35rem 0.9rem;
  margin: 0 0 1rem;
  background: rgba(194, 89, 100, 0.18);
  border-radius: 2px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #3A1F23;
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: ${(props) => {
    switch (props.$color) {
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      case 'text':
        return theme.colors.text;
      default:
        return theme.colors.primary;
    }
  }};
  line-height: 1.2;
  margin: 0;
`;

export default SectionTitle;
