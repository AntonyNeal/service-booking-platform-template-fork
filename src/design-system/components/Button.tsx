/**
 * Theme-Aware Button Component
 * Uses design system tokens - no hardcoded values
 */

import React from 'react';
import { useTenant } from '../../core/hooks/useTenant';
import { baseTokens } from '../tokens/base.tokens';
import { aestheticTokens } from '../tokens/aesthetic.tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  disabled,
  className = '',
  ...props
}) => {
  const { theme } = useTenant();
  const aesthetic = theme.aesthetic || 'modern';
  const aestheticConfig = aestheticTokens[aesthetic];
  const palette = theme.palette;

  // Size configurations
  const sizeConfig = {
    sm: {
      padding: `${baseTokens.spacing.sm} ${baseTokens.spacing.md}`,
      fontSize: baseTokens.typography.fontSize.sm,
      height: '36px',
    },
    md: {
      padding: `${baseTokens.spacing.md} ${baseTokens.spacing.xl}`,
      fontSize: baseTokens.typography.fontSize.base,
      height: '44px',
    },
    lg: {
      padding: `${baseTokens.spacing.lg} ${baseTokens.spacing['2xl']}`,
      fontSize: baseTokens.typography.fontSize.lg,
      height: '52px',
    },
  };

  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: palette?.primary.main || theme.colors.primary,
      color: '#FFFFFF',
      border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} transparent`,
      hover: {
        backgroundColor: palette?.primary.hover || theme.colors.primary,
        filter: 'brightness(0.9)',
      },
    },
    secondary: {
      backgroundColor: palette?.secondary.main || theme.colors.secondary,
      color: '#FFFFFF',
      border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} transparent`,
      hover: {
        backgroundColor: palette?.secondary.hover || theme.colors.secondary,
        filter: 'brightness(0.9)',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: palette?.primary.main || theme.colors.primary,
      border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} ${palette?.primary.main || theme.colors.primary}`,
      hover: {
        backgroundColor: palette?.primary.light || theme.colors.primary,
        opacity: 0.1,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: palette?.primary.main || theme.colors.primary,
      border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} transparent`,
      hover: {
        backgroundColor: palette?.neutral?.[100] || '#F3F4F6',
      },
    },
  };

  const config = sizeConfig[size];
  const styles = variantStyles[variant];

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: baseTokens.spacing.sm,
    padding: config.padding,
    fontSize: config.fontSize,
    fontWeight: aestheticConfig.typography.bodyWeight,
    height: config.height,
    width: fullWidth ? '100%' : 'auto',
    backgroundColor: styles.backgroundColor,
    color: styles.color,
    border: styles.border,
    borderRadius: baseTokens.radius[aestheticConfig.radius.button],
    boxShadow: baseTokens.shadows[aestheticConfig.shadows.button],
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: baseTokens.transitions.base,
    fontFamily: theme.fonts.body,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      if (styles.hover.backgroundColor) {
        e.currentTarget.style.backgroundColor = styles.hover.backgroundColor;
      }
      if (styles.hover.filter) {
        e.currentTarget.style.filter = styles.hover.filter;
      }
      if (styles.hover.opacity !== undefined) {
        e.currentTarget.style.opacity = styles.hover.opacity.toString();
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.backgroundColor = styles.backgroundColor;
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.opacity = '1';
    }
  };

  return (
    <button
      style={buttonStyle}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {loading && (
        <svg
          style={{ animation: 'spin 1s linear infinite' }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            strokeOpacity="0.25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  );
};

// Add spinning animation via style tag injection
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
