/**
 * Design System - Main Export
 * Theme-aware components and tokens for multi-tenant platform
 */

// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Input, Textarea } from './components/Input';
export type { InputProps, TextareaProps } from './components/Input';

// Tokens
export { baseTokens } from './tokens/base.tokens';
export type { BaseTokens } from './tokens/base.tokens';

export { aestheticTokens, getAestheticSpacing } from './tokens/aesthetic.tokens';
export type { AestheticStyle, AestheticTokens } from './tokens/aesthetic.tokens';

export { industryPalettes } from './tokens/industry.tokens';
export type { IndustryType, ColorPalette } from './tokens/industry.tokens';

// Theme Generator
export {
  generateTheme,
  generateColorPalette,
  generateSubdomain,
  isValidHex,
  getDefaultServices,
  getTaglineTemplate,
} from './generator/theme-generator';
export type { ThemeGeneratorInput } from './generator/theme-generator';
