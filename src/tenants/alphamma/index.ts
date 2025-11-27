/**
 * Alpha MMA Tenant Configuration
 * High-end, handcrafted tenant configuration mirroring Alpha MMA site
 */
import { content } from './content.config';
import { theme } from './theme.config';
import { photos } from './photos.config';
import type { TenantConfig } from '../../core/types/tenant.types';

export const alphammaTenant: TenantConfig = {
  id: 'alphamma',
  name: 'Alpha MMA - Elite Training & Performance',
  subdomain: 'alphamma',
  content,
  theme,
  photos,
  status: 'active',
  customDomain: 'alphamma.example.com',
  features: {
    bookingEnabled: true,
    galleryEnabled: true,
    blogEnabled: true,
    reviewsEnabled: true,
    chatEnabled: false,
  },
  analytics: {
    googleAnalyticsId: 'G-ALPHAMMA-XXXXX',
    trackingEnabled: true,
  },
};

export default alphammaTenant;
