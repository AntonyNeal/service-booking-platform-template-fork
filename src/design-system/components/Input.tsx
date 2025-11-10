/**
 * Theme-Aware Input Component
 * Uses design system tokens - no hardcoded values
 */

import React from 'react';
import { useTenant } from '../../core/hooks/useTenant';
import { baseTokens } from '../tokens/base.tokens';
import { aestheticTokens } from '../tokens/aesthetic.tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const { theme } = useTenant();
  const aesthetic = theme.aesthetic || 'modern';
  const aestheticConfig = aestheticTokens[aesthetic];
  const palette = theme.palette;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: baseTokens.spacing.xs,
    width: fullWidth ? '100%' : 'auto',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: baseTokens.typography.fontSize.sm,
    fontWeight: aestheticConfig.typography.bodyWeight,
    color: palette?.neutral?.[700] || theme.colors.text,
    marginBottom: baseTokens.spacing.xs,
  };

  const inputStyle: React.CSSProperties = {
    padding: `${baseTokens.spacing.md} ${baseTokens.spacing.lg}`,
    fontSize: baseTokens.typography.fontSize.base,
    fontFamily: theme.fonts.body,
    color: palette?.neutral?.[900] || theme.colors.text,
    backgroundColor: '#FFFFFF',
    border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} ${error ? palette?.semantic.error || theme.colors.error : palette?.neutral?.[300] || '#D1D5DB'}`,
    borderRadius: baseTokens.radius[aestheticConfig.radius.input],
    outline: 'none',
    transition: baseTokens.transitions.base,
    width: '100%',
  };

  const helperStyle: React.CSSProperties = {
    fontSize: baseTokens.typography.fontSize.xs,
    color: error
      ? palette?.semantic.error || theme.colors.error
      : palette?.neutral?.[600] || '#6B7280',
    marginTop: baseTokens.spacing.xs,
  };

  return (
    <div style={containerStyle} className={className}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        style={inputStyle}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = palette?.primary.main || theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${palette?.primary.light || theme.colors.primary}33`;
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = palette?.neutral?.[300] || '#D1D5DB';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...props}
      />
      {(error || helperText) && <span style={helperStyle}>{error || helperText}</span>}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const { theme } = useTenant();
  const aesthetic = theme.aesthetic || 'modern';
  const aestheticConfig = aestheticTokens[aesthetic];
  const palette = theme.palette;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: baseTokens.spacing.xs,
    width: fullWidth ? '100%' : 'auto',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: baseTokens.typography.fontSize.sm,
    fontWeight: aestheticConfig.typography.bodyWeight,
    color: palette?.neutral?.[700] || theme.colors.text,
    marginBottom: baseTokens.spacing.xs,
  };

  const textareaStyle: React.CSSProperties = {
    padding: `${baseTokens.spacing.md} ${baseTokens.spacing.lg}`,
    fontSize: baseTokens.typography.fontSize.base,
    fontFamily: theme.fonts.body,
    color: palette?.neutral?.[900] || theme.colors.text,
    backgroundColor: '#FFFFFF',
    border: `${aestheticConfig.borders.width} ${aestheticConfig.borders.style} ${error ? palette?.semantic.error || theme.colors.error : palette?.neutral?.[300] || '#D1D5DB'}`,
    borderRadius: baseTokens.radius[aestheticConfig.radius.input],
    outline: 'none',
    transition: baseTokens.transitions.base,
    width: '100%',
    minHeight: '120px',
    resize: 'vertical',
  };

  const helperStyle: React.CSSProperties = {
    fontSize: baseTokens.typography.fontSize.xs,
    color: error
      ? palette?.semantic.error || theme.colors.error
      : palette?.neutral?.[600] || '#6B7280',
    marginTop: baseTokens.spacing.xs,
  };

  return (
    <div style={containerStyle} className={className}>
      {label && <label style={labelStyle}>{label}</label>}
      <textarea
        style={textareaStyle}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = palette?.primary.main || theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${palette?.primary.light || theme.colors.primary}33`;
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = palette?.neutral?.[300] || '#D1D5DB';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...props}
      />
      {(error || helperText) && <span style={helperStyle}>{error || helperText}</span>}
    </div>
  );
};
