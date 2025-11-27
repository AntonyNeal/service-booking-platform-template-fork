import { useState } from 'react';
import CoachModal from './CoachModal';

export default function CoachCard({ coach }: { coach: any }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="coach-card p-4 hover:shadow-lg transition cursor-pointer"
        role="button"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        tabIndex={0}
        aria-label={`Open details for coach ${coach.name}`}
      >
        <img src={`/images/${coach.photoId || 'coach-fallback'}.jpg`} alt={coach.name} />
        <div>
          <h4 className="font-semibold">{coach.name}</h4>
          <div className="text-sm opacity-70">{coach.role}</div>
        </div>
      </div>
      {open && <CoachModal coach={coach} onClose={() => setOpen(false)} />}
    </>
  );
}
