/**
 * Aesthetic Design Tokens
 * Visual style presets that define the overall look and feel
 */

import { baseTokens } from './base';

export type AestheticStyle = 'minimalist' | 'modern' | 'elegant' | 'bold';

export interface AestheticTokens {
  spacing: {
    multiplier: number; // Multiply base spacing
    compact: boolean; // Use tighter spacing overall
  };
  radius: {
    default: keyof typeof baseTokens.radius;
    card: keyof typeof baseTokens.radius;
    button: keyof typeof baseTokens.radius;
    input: keyof typeof baseTokens.radius;
  };
  shadows: {
    intensity: 'subtle' | 'moderate' | 'prominent';
    card: keyof typeof baseTokens.shadows;
    button: keyof typeof baseTokens.shadows;
    modal: keyof typeof baseTokens.shadows;
  };
  typography: {
    scale: 'compact' | 'comfortable' | 'spacious';
    headingWeight: keyof typeof baseTokens.typography.fontWeight;
    bodyWeight: keyof typeof baseTokens.typography.fontWeight;
    letterSpacing: 'tight' | 'normal' | 'wide';
  };
  borders: {
    width: '1px' | '2px' | '3px';
    style: 'solid' | 'dashed';
  };
}

export const aestheticTokens: Record<AestheticStyle, AestheticTokens> = {
  /**
   * MINIMALIST
   * Clean, simple, maximum whitespace
   */
  minimalist: {
    spacing: {
      multiplier: 1.5, // More generous spacing
      compact: false,
    },
    radius: {
      default: 'sm',
      card: 'md',
      button: 'md',
      input: 'sm',
    },
    shadows: {
      intensity: 'subtle',
      card: 'sm',
      button: 'none',
      modal: 'lg',
    },
    typography: {
      scale: 'spacious',
      headingWeight: 'light',
      bodyWeight: 'light',
      letterSpacing: 'wide',
    },
    borders: {
      width: '1px',
      style: 'solid',
    },
  },

  /**
   * MODERN
   * Balanced, professional, slightly rounded
   */
  modern: {
    spacing: {
      multiplier: 1.0, // Standard spacing
      compact: false,
    },
    radius: {
      default: 'md',
      card: 'lg',
      button: 'lg',
      input: 'md',
    },
    shadows: {
      intensity: 'moderate',
      card: 'md',
      button: 'sm',
      modal: 'xl',
    },
    typography: {
      scale: 'comfortable',
      headingWeight: 'semibold',
      bodyWeight: 'normal',
      letterSpacing: 'normal',
    },
    borders: {
      width: '1px',
      style: 'solid',
    },
  },

  /**
   * ELEGANT
   * Refined, sophisticated, soft curves
   */
  elegant: {
    spacing: {
      multiplier: 1.25, // Slightly more breathing room
      compact: false,
    },
    radius: {
      default: 'lg',
      card: 'xl',
      button: 'xl',
      input: 'lg',
    },
    shadows: {
      intensity: 'prominent',
      card: 'lg',
      button: 'md',
      modal: '2xl',
    },
    typography: {
      scale: 'comfortable',
      headingWeight: 'medium',
      bodyWeight: 'normal',
      letterSpacing: 'normal',
    },
    borders: {
      width: '1px',
      style: 'solid',
    },
  },

  /**
   * BOLD
   * Strong, confident, high contrast
   */
  bold: {
    spacing: {
      multiplier: 0.875, // Tighter, more compact
      compact: true,
    },
    radius: {
      default: 'sm',
      card: 'md',
      button: 'md',
      input: 'sm',
    },
    shadows: {
      intensity: 'prominent',
      card: 'md',
      button: 'md',
      modal: 'xl',
    },
    typography: {
      scale: 'compact',
      headingWeight: 'bold',
      bodyWeight: 'medium',
      letterSpacing: 'tight',
    },
    borders: {
      width: '2px',
      style: 'solid',
    },
  },
};

/**
 * Helper to get computed spacing based on aesthetic
 */
export function getAestheticSpacing(
  aesthetic: AestheticStyle,
  size: keyof typeof baseTokens.spacing
): string {
  const tokens = aestheticTokens[aesthetic];
  const baseValue = parseFloat(baseTokens.spacing[size]);
  const computed = baseValue * tokens.spacing.multiplier;
  return `${computed}rem`;
}
