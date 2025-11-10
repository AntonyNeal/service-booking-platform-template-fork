/**
 * Theme-Aware Modal Component
 * Uses design system tokens - no hardcoded values
 */

import React, { useEffect } from 'react';
import { useTenant } from '../../core/hooks/useTenant';
import { baseTokens } from '../tokens/base.tokens';
import { aestheticTokens } from '../tokens/aesthetic.tokens';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
}) => {
  const { theme } = useTenant();
  const aesthetic = theme.aesthetic || 'modern';
  const aestheticConfig = aestheticTokens[aesthetic];
  const palette = theme.palette;

  // Size configurations
  const sizeConfig = {
    sm: '400px',
    md: '600px',
    lg: '800px',
    xl: '1000px',
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: baseTokens.zIndex.modal,
    padding: baseTokens.spacing.lg,
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: baseTokens.radius[aestheticConfig.radius.card],
    boxShadow: baseTokens.shadows[aestheticConfig.shadows.modal],
    maxWidth: sizeConfig[size],
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
  };

  const headerStyle: React.CSSProperties = {
    padding: baseTokens.spacing.xl,
    borderBottom: `1px solid ${palette?.neutral?.[200] || '#E5E7EB'}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: baseTokens.typography.fontSize['2xl'],
    fontWeight: aestheticConfig.typography.headingWeight,
    color: palette?.neutral?.[900] || theme.colors.text,
  };

  const contentStyle: React.CSSProperties = {
    padding: baseTokens.spacing.xl,
  };

  const footerStyle: React.CSSProperties = {
    padding: baseTokens.spacing.xl,
    borderTop: `1px solid ${palette?.neutral?.[200] || '#E5E7EB'}`,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: baseTokens.spacing.md,
  };

  return (
    <div style={overlayStyle} onClick={closeOnOverlayClick ? onClose : undefined}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div style={headerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: baseTokens.typography.fontSize['2xl'],
                cursor: 'pointer',
                color: palette?.neutral?.[600] || '#6B7280',
                padding: 0,
                lineHeight: 1,
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
        <div style={contentStyle}>{children}</div>
        {footer && <div style={footerStyle}>{footer}</div>}
      </div>
    </div>
  );
};
