import { useTenant } from '../../../core/hooks/useTenant';
// React import is not necessary for this component

export default function JsonLd() {
  const { content } = useTenant();

  const base = {
    '@context': 'https://schema.org',
    '@type': 'SportsClub',
    name: content.name,
    description: content.shortBio || content.bio,
    url: window.location.href,
    telephone: content.contact.phone,
    address: content.contact.address || undefined,
  } as any;

  const script = JSON.stringify(base);

  return <script type="application/ld+json">{script}</script>;
}
