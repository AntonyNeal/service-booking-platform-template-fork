import type { TenantContent } from '../../core/types/tenant.types';

export const content: TenantContent = {
  name: 'Alpha MMA',
  tagline: 'Elite Training. Crafted For Champions.',
  bio:
    "Alpha MMA is Newcastle’s premier combat sports center offering world-class coaching, training, and competition preparation across Boxing, BJJ, Wrestling, and MMA. We blend elite-level coaching and scientific training programs with a community-first spirit to produce outstanding athletes and lifelong members.",
  shortBio: 'Combat sports training for all levels — champion coaching, crafted experience.',
  services: [
    {
      id: 'bjj-class',
      name: 'BJJ Fundamentals',
      description: 'Technical Brazilian Jiu-Jitsu curriculum tailored for new and developing athletes.',
      duration: '60 minutes',
      price: 20,
      priceDisplay: '$20',
      featured: true,
      icon: 'jiu-jitsu',
    },
    {
      id: 'mma-striking',
      name: 'MMA Striking & Kickboxing',
      description: 'Dynamic striking program focusing on footwork, combinations and power development.',
      duration: '60 minutes',
      price: 20,
      priceDisplay: '$20',
      featured: true,
      icon: 'striking',
    },
    {
      id: 'wrestling',
      name: 'Wrestling & Takedowns',
      description: 'Olympic-style wrestling fundamentals adapted to modern MMA needs.',
      duration: '60 minutes',
      price: 20,
      priceDisplay: '$20',
      featured: false,
      icon: 'wrestling',
    },
    {
      id: 'strength-conditioning',
      name: 'Strength & Conditioning',
      description: 'Performance training focusing on explosive strength and injury resistance.',
      duration: '45 minutes',
      price: 25,
      priceDisplay: '$25',
      featured: false,
      icon: 'training',
    },
  ],
  pricing: {
    hourly: 20,
    currency: 'AUD',
    customRates: [
      {
        duration: 'Single Class',
        price: 20,
        description: 'Drop-in session',
      },
      {
        duration: 'Unlimited Monthly',
        price: 49,
        description: 'Unlimited access to classes during the membership month',
      },
      {
        duration: 'Kids Program - Weekly',
        price: 35,
        description: 'Youth training with age-appropriate curriculum',
      },
    ],
  },
  contact: {
    email: 'hello@alphamma.com.au',
    phone: '+61413068386',
    phoneDisplay: '0413 068 386',
    availableHours: 'Mon-Fri, 9AM-7PM',
    responseTime: 'Typically within 24 hours',
    preferredContact: 'phone',
    address: '3/57 Munibung Road, Cardiff NSW 2285, Australia',
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/alphammapg',
    instagram: 'https://www.instagram.com/alphamma__newcastle',
  },
  coaches: [
    { id: 'ben-cook', name: 'Ben Cook', role: 'Head Coach', bio: 'Owner and Head Coach with 20+ years of experience', photoId: 'ben-cook' },
    { id: 'simon-arentz', name: 'Simon Arentz', role: 'Striking Coach', bio: 'Kickboxing and striking specialist', photoId: 'simon-arentz' },
    { id: 'jamie-ballard', name: 'Jamie Ballard', role: 'BJJ Coach', bio: 'Brazilian Jiu-Jitsu Black Belt and Coach', photoId: 'jamie-ballard' },
  ],
  availability: {
    location: 'Cardiff, NSW',
    timezone: 'Australia/Sydney',
  },
  preferences: {
    minNotice: '2 hours',
    depositRequired: false,
    screeningRequired: false,
  },
  schedule: [
    { id: 'mon-bjj', day: 'Monday', start: '18:00', end: '19:00', title: 'BJJ Fundamentals', coach: 'Jamie Ballard' },
    { id: 'tue-striking', day: 'Tuesday', start: '18:00', end: '19:00', title: 'MMA Striking', coach: 'Simon Arentz' },
    { id: 'wed-wrestle', day: 'Wednesday', start: '18:00', end: '19:00', title: 'Wrestling & Takedowns', coach: 'Ben Cook' },
    { id: 'thu-strength', day: 'Thursday', start: '18:00', end: '19:00', title: 'Strength & Conditioning', coach: 'Corey Smith' },
    { id: 'sat-kids', day: 'Saturday', start: '09:00', end: '10:00', title: 'Kids Program', coach: 'Rowan Langford' },
  ],
  seo: {
    title: 'Alpha MMA - Elite Training, Newcastle',
    description:
      'Alpha MMA is an elite training center in Newcastle providing coach-led programs in MMA, Boxing, BJJ, and Wrestling — book a class or start your membership today.',
    keywords: ['mma', 'bjj', 'boxing', 'wrestling', 'alpha mma', 'newcastle gym'],
    ogImage: 'hero-main',
  },
};

export default content;
