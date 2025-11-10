/**
 * Theme-Aware Card Component
 * Uses design system tokens - no hardcoded values
 */

import React from 'react';
import { useTenant } from '../../core/hooks/useTenant';
import { baseTokens } from '../tokens/base.tokens';
import { aestheticTokens } from '../tokens/aesthetic.tokens';

export interface CardProps {
  children: React.ReactNode;
  padding?: keyof typeof baseTokens.spacing;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'xl',
  variant = 'default',
  className = '',
  onClick,
  style = {},
}) => {
  const { theme } = useTenant();
  const aesthetic = theme.aesthetic || 'modern';
  const aestheticConfig = aestheticTokens[aesthetic];
  const palette = theme.palette;

  const variantStyles = {
    default: {
      backgroundColor: '#FFFFFF',
      border: 'none',
      boxShadow: baseTokens.shadows[aestheticConfig.shadows.card],
    },
    elevated: {
      backgroundColor: '#FFFFFF',
      border: 'none',
      boxShadow: baseTokens.shadows.lg,
    },
    outlined: {
      backgroundColor: '#FFFFFF',
      border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} ${palette?.neutral?.[200] || '#E5E7EB'}`,
      boxShadow: 'none',
    },
  };

  const styles = variantStyles[variant];

  const cardStyle: React.CSSProperties = {
    ...styles,
    padding: baseTokens.spacing[padding],
    borderRadius: baseTokens.radius[aestheticConfig.radius.card],
    transition: baseTokens.transitions.base,
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };

  return (
    <div style={cardStyle} className={className} onClick={onClick}>
      {children}
    </div>
  );
};
