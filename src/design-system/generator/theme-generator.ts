/**
 * Theme Generator
 * Creates complete theme configurations for new tenants
 * (App wrapper around SDK design system)
 */

import type { TenantTheme } from '../../core/types/tenant.types';
import type { AestheticStyle, IndustryType } from '@your-organization/service-booking-sdk';
import {
  generateDesignSystemTheme,
  generateColorPalette as sdkGenerateColorPalette,
  generateSubdomain as sdkGenerateSubdomain,
  isValidHex as sdkIsValidHex,
  getDefaultServices as sdkGetDefaultServices,
  getTaglineTemplate as sdkGetTaglineTemplate,
} from '@your-organization/service-booking-sdk';

export interface ThemeGeneratorInput {
  businessName: string;
  industry: IndustryType;
  aesthetic: AestheticStyle;
  primaryColor?: string;
  domain: string;
}

/**
 * Generate a complete theme configuration for a tenant
 * Wraps SDK function for app compatibility
 */
export function generateTheme(input: ThemeGeneratorInput): TenantTheme {
  // Use SDK generator
  const theme = generateDesignSystemTheme(input);

  // Cast to TenantTheme (they're compatible)
  return theme as TenantTheme;
}

// Re-export SDK utilities
export const generateColorPalette = sdkGenerateColorPalette;
export const generateSubdomain = sdkGenerateSubdomain;
export const isValidHex = sdkIsValidHex;
export const getDefaultServices = sdkGetDefaultServices;
export const getTaglineTemplate = sdkGetTaglineTemplate;
