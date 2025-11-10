# 🚀 5-Minute Fork Workflow

This template includes a comprehensive design tokens system and theme generator that makes forking for new clients incredibly fast. No more manual style updates!

## Quick Start for New Clients

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/service-booking-platform-template.git my-new-client
cd my-new-client
```

### 2. Run Setup Wizard

```bash
npm install
npm run setup
```

The interactive wizard will ask you 4 simple questions:

1. **Business Name**: Client's business name
2. **Industry**: Healthcare, Retail, Professional, Hospitality, Fitness, Beauty, Education, Technology, or Other
3. **Design Aesthetic**: Modern, Elegant, Minimalist, or Bold
4. **Domain**: Their website domain

### 3. Customize with Copilot

Tell GitHub Copilot:

```
"Fill in content for [Business Name] in [Industry] industry"
```

Copilot will help you customize:

- Service descriptions
- Business bio
- Contact information
- SEO content

### 4. Add Photos

Replace placeholder images in `src/tenants/[tenant-id]/photos.config.ts` with actual client photos.

### 5. Deploy

```bash
npm run build
npm run deploy:azure
# or your preferred deployment method
```

**Done!** Total time: ~5 minutes ⏱️

---

## Design System Overview

### What It Does

The design system automatically generates:
✅ Complete color palettes (primary, secondary, accent, neutrals, semantic)
✅ Spacing, border radius, shadows, and typography scales
✅ Theme-aware components (Button, Card, Modal, Input, Textarea)
✅ Industry-appropriate color schemes
✅ Aesthetic-specific design tokens

### Industry Color Palettes

Each industry comes with carefully selected colors:

- **Healthcare**: Teal primary, blue secondary (trust, calm)
- **Retail**: Red primary, orange secondary (energy, conversion)
- **Professional**: Navy primary, emerald secondary (expertise, trust)
- **Hospitality**: Red primary, amber secondary (warmth, welcoming)
- **Fitness**: Red primary, sky blue secondary (energy, vitality)
- **Beauty**: Pink primary, purple secondary (elegance, luxury)
- **Education**: Blue primary, green secondary (trust, growth)
- **Technology**: Indigo primary, cyan secondary (innovation, modern)

### Aesthetic Styles

Choose the visual style that matches your client's brand:

**Minimalist**

- Maximum whitespace
- Light fonts and shadows
- Simple, clean design

**Modern** (Default)

- Balanced spacing
- Medium shadows
- Professional and versatile

**Elegant**

- Generous spacing
- Prominent shadows
- Soft, rounded corners
- Sophisticated feel

**Bold**

- Compact layout
- Strong shadows
- High contrast
- Confident aesthetic

---

## File Structure

After running `npm run setup`, you'll have:

```
src/
  design-system/
    tokens/
      base.tokens.ts          # Universal spacing, shadows, etc.
      aesthetic.tokens.ts     # Style presets
      industry.tokens.ts      # Color palettes
    components/
      Button.tsx             # Theme-aware button
      Card.tsx               # Theme-aware card
      Modal.tsx              # Theme-aware modal
      Input.tsx              # Theme-aware inputs
    generator/
      theme-generator.ts     # Theme generation logic
  tenants/
    [tenant-id]/
      theme.config.ts        # Generated theme
      content.config.ts      # Business content (customize this!)
      photos.config.ts       # Photo URLs (add real photos!)
      index.ts               # Tenant configuration
```

---

## Using Theme-Aware Components

All components automatically use the tenant's theme:

```tsx
import { Button, Card, Modal, Input } from '@/design-system';

// Button - automatically styled with tenant's primary color
<Button variant="primary" size="lg">
  Book Now
</Button>

// Card - uses tenant's border radius and shadows
<Card padding="xl" variant="elevated">
  <h3>Service Name</h3>
  <p>Service description</p>
</Card>

// Modal - themed automatically
<Modal isOpen={open} onClose={handleClose} title="Book Service">
  <Input label="Name" fullWidth />
  <Button variant="primary">Submit</Button>
</Modal>
```

**Zero hardcoded colors!** Everything comes from the design tokens.

---

## Customization Guide

### Override Primary Color

During setup, you can provide a custom hex color:

```
Custom Primary Color: #FF6B6B
```

The system will automatically generate hover, light, and dark variants.

### Modify Aesthetic After Setup

Edit `src/tenants/[tenant-id]/theme.config.ts`:

```typescript
export const theme: TenantTheme = {
  aesthetic: 'elegant', // Change to: minimalist, modern, elegant, or bold
  industry: 'healthcare',
  // ... rest of config
};
```

### Add Custom Services

Edit `src/tenants/[tenant-id]/content.config.ts`:

```typescript
services: [
  {
    id: 'service-1',
    name: 'Custom Service Name',
    description: 'Detailed description',
    duration: '60 minutes',
    priceDisplay: '$150',
    featured: true,
  },
  // ... more services
],
```

---

## Advanced Features

### A/B Testing Photos

The hero photo supports A/B testing:

```typescript
hero: {
  control: '/images/hero-1.jpg',
  variants: [
    { id: 'v1', url: '/images/hero-2.jpg', weight: 0.5 },
    { id: 'v2', url: '/images/hero-3.jpg', weight: 0.5 },
  ],
},
```

### Custom Tokens

Override specific tokens in theme.config.ts:

```typescript
tokens: {
  spacing: {
    ...baseTokens.spacing,
    custom: '5rem', // Add custom spacing
  },
},
```

---

## Deployment

### Azure Static Web Apps

```bash
npm run deploy:azure
```

### Vercel

```bash
vercel --prod
```

### DigitalOcean App Platform

```bash
doctl apps create --spec deployment/app-spec-digitalocean.yaml
```

---

## Troubleshooting

### Component Not Using Theme

Make sure the component imports from the design system:

```typescript
// ✅ Good
import { Button } from '@/design-system';

// ❌ Bad
import { Button } from './components/Button';
```

### Colors Not Updating

1. Clear browser cache
2. Restart dev server
3. Check that theme.config.ts exports are correct

### Setup Script Fails

Ensure you have Node.js 20+ and run:

```bash
npm install
```

---

## Best Practices

1. **Always use the setup wizard** for new clients
2. **Never hardcode colors** - use theme tokens
3. **Use semantic colors** for success/error/warning states
4. **Test on mobile** - all components are responsive
5. **Keep content.config.ts clean** - use AI to generate content
6. **Optimize images** before adding to photos.config.ts

---

## Contributing

Improvements to the design system are welcome! Focus areas:

- New industry color palettes
- Additional aesthetic styles
- More theme-aware components
- Enhanced setup wizard questions

---

## Support

For questions or issues:

- Check existing tenants for examples
- Review design-system/ source code
- Open an issue on GitHub

---

**Happy forking! 🎉**
