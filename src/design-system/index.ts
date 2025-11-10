/**
 * Design System - Main Export
 * Theme-aware components and tokens for multi-tenant platform
 */

// Components (app-specific, use React context)
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Input, Textarea } from './components/Input';
export type { InputProps, TextareaProps } from './components/Input';

// Tokens (re-export from SDK for convenience)
export {
  baseTokens,
  aestheticTokens,
  getAestheticSpacing,
  industryPalettes,
  type BaseTokens,
  type AestheticStyle,
  type AestheticTokens,
  type IndustryType,
  type ColorPalette,
} from '@your-organization/service-booking-sdk';

// Theme Generator (re-export from SDK, but wrap for app compatibility)
export { generateTheme } from './generator/theme-generator';
export type { ThemeGeneratorInput } from './generator/theme-generator';

// Also export SDK version for direct use
export {
  generateDesignSystemTheme,
  generateColorPalette,
  generateSubdomain,
  isValidHex,
  getDefaultServices,
  getTaglineTemplate,
  type DesignSystemThemeInput,
  type DesignSystemTheme,
} from '@your-organization/service-booking-sdk';
