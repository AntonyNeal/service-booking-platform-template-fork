/**
 * Design System Theme Generator
 * Creates complete theme configurations for new tenants
 */

import type { AestheticStyle } from '../design-system/tokens/aesthetic';
import type { IndustryType, ColorPalette } from '../design-system/tokens/industry';
import { industryPalettes } from '../design-system/tokens/industry';
import { aestheticTokens } from '../design-system/tokens/aesthetic';
import { baseTokens } from '../design-system/tokens/base';

export interface DesignSystemThemeInput {
  businessName: string;
  industry: IndustryType;
  aesthetic: AestheticStyle;
  primaryColor?: string; // Optional override for primary color
  domain: string;
}

export interface DesignSystemTheme {
  // Design System Properties
  aesthetic: AestheticStyle;
  industry: IndustryType;
  palette: ColorPalette;
  tokens: {
    spacing: typeof baseTokens.spacing;
    radius: typeof baseTokens.radius;
    shadows: typeof baseTokens.shadows;
    typography: typeof baseTokens.typography;
  };

  // Legacy Properties (for backward compatibility)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
    success: string;
    error: string;
    warning: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: 'elegant' | 'modern' | 'minimal';
  spacing: 'compact' | 'comfortable' | 'spacious';
  borderRadius: string;
  shadowIntensity: 'light' | 'medium' | 'strong';
}

/**
 * Generate a complete theme configuration for a tenant
 */
export function generateDesignSystemTheme(input: DesignSystemThemeInput): DesignSystemTheme {
  const { industry, aesthetic, primaryColor } = input;

  // Get base color palette for industry
  const industryPalette = industryPalettes[industry];

  // If custom primary color is provided, regenerate palette
  const palette = primaryColor
    ? generateColorPalette(primaryColor, industryPalette)
    : industryPalette;

  // Get aesthetic tokens
  const aestheticConfig = aestheticTokens[aesthetic];

  // Build complete theme
  return {
    // New design system properties
    aesthetic,
    industry,
    palette,
    tokens: {
      spacing: baseTokens.spacing,
      radius: baseTokens.radius,
      shadows: baseTokens.shadows,
      typography: baseTokens.typography,
    },

    // Legacy properties (for backward compatibility)
    colors: {
      primary: palette.primary.main,
      secondary: palette.secondary.main,
      accent: palette.accent.main,
      background: '#FFFFFF',
      text: palette.neutral[900],
      textLight: palette.neutral[600],
      success: palette.semantic.success,
      error: palette.semantic.error,
      warning: palette.semantic.warning,
    },
    fonts: {
      heading: baseTokens.typography.fontFamily.sans,
      body: baseTokens.typography.fontFamily.sans,
    },
    layout: mapAestheticToLayout(aesthetic),
    spacing: mapAestheticToSpacing(aestheticConfig.typography.scale),
    borderRadius: baseTokens.radius[aestheticConfig.radius.card],
    shadowIntensity: mapShadowIntensity(aestheticConfig.shadows.intensity),
  };
}

/**
 * Generate color variants from a base hex color
 */
export function generateColorPalette(
  baseHex: string,
  template: ColorPalette = industryPalettes.other
): ColorPalette {
  // Validate hex color
  if (!isValidHex(baseHex)) {
    console.warn(`Invalid hex color: ${baseHex}, using template palette`);
    return template;
  }

  return {
    ...template,
    primary: {
      main: baseHex,
      hover: adjustBrightness(baseHex, -15),
      light: adjustBrightness(baseHex, 50),
      dark: adjustBrightness(baseHex, -30),
    },
  };
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Convert RGB to hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = Math.max(0, Math.min(255, Math.round(x))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

/**
 * Adjust brightness of a hex color
 */
function adjustBrightness(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hex);
  const amt = Math.round(2.55 * percent);

  return rgbToHex(r + amt, g + amt, b + amt);
}

/**
 * Map aesthetic style to legacy layout
 */
function mapAestheticToLayout(aesthetic: AestheticStyle): 'elegant' | 'modern' | 'minimal' {
  switch (aesthetic) {
    case 'minimalist':
      return 'minimal';
    case 'elegant':
      return 'elegant';
    case 'modern':
    case 'bold':
    default:
      return 'modern';
  }
}

/**
 * Map typography scale to spacing
 */
function mapAestheticToSpacing(
  scale: 'compact' | 'comfortable' | 'spacious'
): 'compact' | 'comfortable' | 'spacious' {
  return scale;
}

/**
 * Map shadow intensity
 */
function mapShadowIntensity(
  intensity: 'subtle' | 'moderate' | 'prominent'
): 'light' | 'medium' | 'strong' {
  switch (intensity) {
    case 'subtle':
      return 'light';
    case 'moderate':
      return 'medium';
    case 'prominent':
      return 'strong';
  }
}

/**
 * Generate a subdomain from business name
 */
export function generateSubdomain(businessName: string): string {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate hex color
 */
export function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

/**
 * Get industry-appropriate default services
 */
export function getDefaultServices(industry: IndustryType): string[] {
  const serviceMap: Record<IndustryType, string[]> = {
    healthcare: ['Consultation', 'Treatment', 'Follow-up', 'Emergency Care'],
    retail: ['Product Selection', 'Personal Shopping', 'Styling Session', 'Gift Consultation'],
    professional: ['Consultation', 'Strategy Session', 'Implementation', 'Follow-up'],
    hospitality: ['Room Service', 'Concierge', 'Event Planning', 'Catering'],
    fitness: ['Personal Training', 'Group Class', 'Nutrition Consultation', 'Wellness Assessment'],
    beauty: ['Haircut', 'Coloring', 'Styling', 'Treatment'],
    education: ['Tutoring Session', 'Workshop', 'Course', 'Assessment'],
    technology: ['Consultation', 'Development', 'Training', 'Support'],
    other: ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
  };

  return serviceMap[industry] || serviceMap.other;
}

/**
 * Get industry-appropriate tagline template
 */
export function getTaglineTemplate(industry: IndustryType): string {
  const taglineMap: Record<IndustryType, string> = {
    healthcare: 'Professional Healthcare Services',
    retail: 'Your Premier Shopping Destination',
    professional: 'Expert Professional Services',
    hospitality: 'Exceptional Hospitality Experience',
    fitness: 'Transform Your Fitness Journey',
    beauty: 'Elevate Your Beauty Experience',
    education: 'Empowering Learning Excellence',
    technology: 'Innovative Technology Solutions',
    other: 'Professional Service Excellence',
  };

  return taglineMap[industry] || taglineMap.other;
}
