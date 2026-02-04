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

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

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
      whileHover={!disabled && !prefersReducedMotion ? { scale: 1.03 } : {}}
      whileTap={!disabled && !prefersReducedMotion ? { scale: 0.97 } : {}}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
  
  /* Performance optimizations */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
  isolation: isolate;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.75rem 1.875rem';
        case 'large':
          return '1.375rem 3rem';
        default:
          return '1.125rem 2.5rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '1rem';
        case 'large':
          return '1.375rem';
        default:
          return '1.1875rem';
      }
    }};
    border-radius: 3.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.6875rem 1.75rem';
        case 'large':
          return '1.25rem 2.75rem';
        default:
          return '1rem 2.25rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.9375rem';
        case 'large':
          return '1.25rem';
        default:
          return '1.0625rem';
      }
    }};
  }

  /* Desktop */
  @media (max-width: 1440px) {
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
  }

  @media (max-width: 1200px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5625rem 1.375rem';
        case 'large':
          return '1rem 2.25rem';
        default:
          return '0.8125rem 1.875rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.8125rem';
        case 'large':
          return '1.0625rem';
        default:
          return '0.9375rem';
      }
    }};
  }

  /* Laptop */
  @media (max-width: 1024px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 1.25rem';
        case 'large':
          return '0.9375rem 2rem';
        default:
          return '0.75rem 1.75rem';
      }
    }};
  }

  /* Tablets */
  @media (max-width: 900px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 1.125rem';
        case 'large':
          return '0.875rem 1.875rem';
        default:
          return '0.6875rem 1.625rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.8125rem';
        case 'large':
          return '1rem';
        default:
          return '0.9375rem';
      }
    }};
    border-radius: 2.5rem;
  }

  @media (max-width: 820px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 1.125rem';
        case 'large':
          return '0.8125rem 1.75rem';
        default:
          return '0.6875rem 1.5rem';
      }
    }};
  }

  @media (max-width: 768px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 1rem';
        case 'large':
          return '0.8125rem 1.625rem';
        default:
          return '0.6875rem 1.5rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.8125rem';
        case 'large':
          return '0.9375rem';
        default:
          return '0.875rem';
      }
    }};
  }

  /* Mobile landscape */
  @media (max-width: 640px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 1rem';
        case 'large':
          return '0.75rem 1.5rem';
        default:
          return '0.625rem 1.375rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.8125rem';
        case 'large':
          return '0.9375rem';
        default:
          return '0.875rem';
      }
    }};
    border-radius: 2rem;
  }

  /* Mobile portrait */
  @media (max-width: 480px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 0.9375rem';
        case 'large':
          return '0.75rem 1.375rem';
        default:
          return '0.625rem 1.25rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.8125rem';
        case 'large':
          return '0.9375rem';
        default:
          return '0.875rem';
      }
    }};
  }

  /* iPhone 14 Pro Max, iPhone 13 Pro Max */
  @media (max-width: 430px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 0.875rem';
        case 'large':
          return '0.6875rem 1.25rem';
        default:
          return '0.625rem 1.125rem';
      }
    }};
  }

  /* iPhone 12 Pro, iPhone 13 */
  @media (max-width: 390px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 0.875rem';
        case 'large':
          return '0.6875rem 1.125rem';
        default:
          return '0.5625rem 1rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.75rem';
        case 'large':
          return '0.875rem';
        default:
          return '0.8125rem';
      }
    }};
  }

  /* iPhone SE, iPhone 12 mini */
  @media (max-width: 375px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 0.875rem';
        case 'large':
          return '0.6875rem 1.125rem';
        default:
          return '0.5625rem 1rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.75rem';
        case 'large':
          return '0.875rem';
        default:
          return '0.8125rem';
      }
    }};
    border-radius: 1.75rem;
  }

  /* Extra small phones */
  @media (max-width: 360px) {
    padding: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.5rem 0.75rem';
        case 'large':
          return '0.625rem 1rem';
        default:
          return '0.5rem 0.875rem';
      }
    }};
    font-size: ${(props) => {
      switch (props.$size) {
        case 'small':
          return '0.75rem';
        case 'large':
          return '0.8125rem';
        default:
          return '0.75rem';
      }
    }};
    border-radius: 1.5rem;
  }

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

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    
    &:active:not(:disabled) {
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
      
      opacity: 0.9;
    }
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 3px;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    will-change: auto;
  }
`;

export default Button;
