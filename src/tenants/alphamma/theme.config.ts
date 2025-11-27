import type { TenantTheme } from '../../core/types/tenant.types';

export const theme: TenantTheme = {
  colors: {
    primary: '#0B0D0E', // deep black
    secondary: '#FF4D4F', // energetic red highlight
    accent: '#F5A623', // warm gold accent
    background: '#0F1724', // near-black background for modern look
    text: '#F8FAFC', // near-white text
    textLight: '#AAB6C0',
  },
  fonts: {
    heading: 'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans CJK JP"',
    body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  layout: 'modern',
  spacing: 'comfortable',
  borderRadius: '10px',
  shadowIntensity: 'strong',
};

export default theme;
