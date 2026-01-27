import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  to,
  type = 'button',
  fullWidth = false,
  disabled = false,
  ...props
}) => {
  const Component = href ? 'a' : to ? motion.button : motion.button;

  return (
    <StyledButton
      as={Component}
      href={href}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={!disabled && { scale: 1.03 }}
      whileTap={!disabled && { scale: 0.97 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  display: ${(props) => (props.$fullWidth ? 'block' : 'inline-block')};
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  padding: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '0.625rem 1.5rem';
      case 'large':
        return '1.125rem 2.5rem';
      default:
        return '0.875rem 2rem';
    }
  }};
  font-family: ${theme.fonts.body};
  font-size: ${(props) => {
    switch (props.$size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.125rem';
      default:
        return '1rem';
    }
  }};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: ${theme.borderRadius.full};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};

  background: ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return theme.colors.secondary;
      case 'outline':
        return 'transparent';
      case 'accent':
        return theme.colors.accent;
      default:
        return theme.colors.cta;
    }
  }};

  color: ${(props) => {
    switch (props.$variant) {
      case 'outline':
        return theme.colors.primary;
      default:
        return 'white';
    }
  }};

  border: ${(props) => {
    switch (props.$variant) {
      case 'outline':
        return `2px solid ${theme.colors.primary}`;
      default:
        return 'none';
    }
  }};

  &:hover:not(:disabled) {
    background: ${(props) => {
      switch (props.$variant) {
        case 'secondary':
          return theme.colors.secondaryDark;
        case 'outline':
          return theme.colors.primary;
        case 'accent':
          return theme.colors.accentDark;
        default:
          return theme.colors.ctaHover;
      }
    }};

    color: ${(props) => {
      switch (props.$variant) {
        case 'outline':
          return 'white';
        default:
          return 'white';
      }
    }};

    box-shadow: ${theme.shadows.md};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 3px;
  }
`;

export default Button;
