/**
 * Industry Color Palettes
 * Pre-designed color schemes for different business types
 */

export type IndustryType =
  | 'healthcare'
  | 'retail'
  | 'professional'
  | 'hospitality'
  | 'fitness'
  | 'beauty'
  | 'education'
  | 'technology'
  | 'other';

export interface ColorPalette {
  primary: {
    main: string;
    hover: string;
    light: string;
    dark: string;
  };
  secondary: {
    main: string;
    hover: string;
    light: string;
    dark: string;
  };
  accent: {
    main: string;
    hover: string;
    light: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export const industryPalettes: Record<IndustryType, ColorPalette> = {
  /**
   * HEALTHCARE
   * Trust, calm, professional
   */
  healthcare: {
    primary: {
      main: '#0D9488', // Teal 600
      hover: '#0F766E', // Teal 700
      light: '#99F6E4', // Teal 200
      dark: '#134E4A', // Teal 900
    },
    secondary: {
      main: '#3B82F6', // Blue 500
      hover: '#2563EB', // Blue 600
      light: '#BFDBFE', // Blue 200
      dark: '#1E3A8A', // Blue 900
    },
    accent: {
      main: '#F97316', // Orange 500
      hover: '#EA580C', // Orange 600
      light: '#FED7AA', // Orange 200
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * RETAIL
   * Energy, excitement, conversion-focused
   */
  retail: {
    primary: {
      main: '#DC2626', // Red 600
      hover: '#B91C1C', // Red 700
      light: '#FECACA', // Red 200
      dark: '#7F1D1D', // Red 900
    },
    secondary: {
      main: '#F97316', // Orange 500
      hover: '#EA580C', // Orange 600
      light: '#FED7AA', // Orange 200
      dark: '#7C2D12', // Orange 900
    },
    accent: {
      main: '#A855F7', // Purple 500
      hover: '#9333EA', // Purple 600
      light: '#E9D5FF', // Purple 200
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    semantic: {
      success: '#22C55E', // Green 500
      warning: '#EAB308', // Yellow 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * PROFESSIONAL SERVICES
   * Trust, expertise, sophistication
   */
  professional: {
    primary: {
      main: '#1E40AF', // Blue 800
      hover: '#1E3A8A', // Blue 900
      light: '#BFDBFE', // Blue 200
      dark: '#172554', // Blue 950
    },
    secondary: {
      main: '#059669', // Emerald 600
      hover: '#047857', // Emerald 700
      light: '#A7F3D0', // Emerald 200
      dark: '#064E3B', // Emerald 900
    },
    accent: {
      main: '#D97706', // Amber 600
      hover: '#B45309', // Amber 700
      light: '#FDE68A', // Amber 200
    },
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * HOSPITALITY
   * Warm, welcoming, inviting
   */
  hospitality: {
    primary: {
      main: '#DC2626', // Red 600
      hover: '#B91C1C', // Red 700
      light: '#FECACA', // Red 200
      dark: '#7F1D1D', // Red 900
    },
    secondary: {
      main: '#D97706', // Amber 600
      hover: '#B45309', // Amber 700
      light: '#FDE68A', // Amber 200
      dark: '#78350F', // Amber 900
    },
    accent: {
      main: '#EC4899', // Pink 500
      hover: '#DB2777', // Pink 600
      light: '#FBCFE8', // Pink 200
    },
    neutral: {
      50: '#FAFAF9',
      100: '#F5F5F4',
      200: '#E7E5E4',
      300: '#D6D3D1',
      400: '#A8A29E',
      500: '#78716C',
      600: '#57534E',
      700: '#44403C',
      800: '#292524',
      900: '#1C1917',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * FITNESS
   * Energy, motivation, vitality
   */
  fitness: {
    primary: {
      main: '#EF4444', // Red 500
      hover: '#DC2626', // Red 600
      light: '#FECACA', // Red 200
      dark: '#7F1D1D', // Red 900
    },
    secondary: {
      main: '#0EA5E9', // Sky 500
      hover: '#0284C7', // Sky 600
      light: '#BAE6FD', // Sky 200
      dark: '#0C4A6E', // Sky 900
    },
    accent: {
      main: '#10B981', // Green 500
      hover: '#059669', // Green 600
      light: '#A7F3D0', // Green 200
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#18181B',
    },
    semantic: {
      success: '#22C55E', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * BEAUTY
   * Elegance, luxury, femininity
   */
  beauty: {
    primary: {
      main: '#EC4899', // Pink 500
      hover: '#DB2777', // Pink 600
      light: '#FBCFE8', // Pink 200
      dark: '#831843', // Pink 900
    },
    secondary: {
      main: '#A855F7', // Purple 500
      hover: '#9333EA', // Purple 600
      light: '#E9D5FF', // Purple 200
      dark: '#581C87', // Purple 900
    },
    accent: {
      main: '#F59E0B', // Amber 500
      hover: '#D97706', // Amber 600
      light: '#FDE68A', // Amber 200
    },
    neutral: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: '#A855F7',
      600: '#9333EA',
      700: '#7E22CE',
      800: '#6B21A8',
      900: '#581C87',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * EDUCATION
   * Trust, growth, knowledge
   */
  education: {
    primary: {
      main: '#2563EB', // Blue 600
      hover: '#1D4ED8', // Blue 700
      light: '#BFDBFE', // Blue 200
      dark: '#1E3A8A', // Blue 900
    },
    secondary: {
      main: '#10B981', // Green 500
      hover: '#059669', // Green 600
      light: '#A7F3D0', // Green 200
      dark: '#064E3B', // Green 900
    },
    accent: {
      main: '#F59E0B', // Amber 500
      hover: '#D97706', // Amber 600
      light: '#FDE68A', // Amber 200
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * TECHNOLOGY
   * Innovation, modern, forward-thinking
   */
  technology: {
    primary: {
      main: '#6366F1', // Indigo 500
      hover: '#4F46E5', // Indigo 600
      light: '#C7D2FE', // Indigo 200
      dark: '#312E81', // Indigo 900
    },
    secondary: {
      main: '#06B6D4', // Cyan 500
      hover: '#0891B2', // Cyan 600
      light: '#A5F3FC', // Cyan 200
      dark: '#164E63', // Cyan 900
    },
    accent: {
      main: '#8B5CF6', // Violet 500
      hover: '#7C3AED', // Violet 600
      light: '#DDD6FE', // Violet 200
    },
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },

  /**
   * OTHER / GENERIC
   * Neutral, balanced, adaptable
   */
  other: {
    primary: {
      main: '#3B82F6', // Blue 500
      hover: '#2563EB', // Blue 600
      light: '#BFDBFE', // Blue 200
      dark: '#1E3A8A', // Blue 900
    },
    secondary: {
      main: '#6B7280', // Gray 500
      hover: '#4B5563', // Gray 600
      light: '#E5E7EB', // Gray 200
      dark: '#1F2937', // Gray 800
    },
    accent: {
      main: '#10B981', // Green 500
      hover: '#059669', // Green 600
      light: '#A7F3D0', // Green 200
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    semantic: {
      success: '#10B981', // Green 500
      warning: '#F59E0B', // Amber 500
      error: '#EF4444', // Red 500
      info: '#3B82F6', // Blue 500
    },
  },
};
