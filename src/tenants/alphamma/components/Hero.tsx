import { useTenant } from '../../../core/hooks/useTenant';
// styles module purposely not directly referenced in JSX to keep Tailwind-like classes,
// but imported CSS file is present at runtime;

export default function Hero() {
  const { content, photos } = useTenant();

  return (
    <section
      className={`w-full min-h-[60vh] flex items-center justify-center text-center text-white alphamma-hero`}
      style={{
        backgroundImage: `url(${photos.hero?.control || '/images/hero-fallback.jpg'})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-4xl p-8">
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 title`}>{content.name}</h1>
        <p className={`text-xl md:text-2xl mb-6 tagline`}>{content.tagline}</p>
        <div className="flex gap-4 justify-center">
          <a href="#schedule" className="btn btn-primary">
            View Schedule
          </a>
          <a href="#pricing" className="btn btn-secondary">
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}
