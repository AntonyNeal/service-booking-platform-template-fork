// React import intentionally omitted; using TSX runtime
import { X } from 'lucide-react';

export default function CoachModal({ coach, onClose }: { coach: any; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      role="dialog"
    >
      <div className="bg-white text-black rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-black"
          aria-label="Close coach details"
        >
          <X />
        </button>
        <div className="flex gap-4 items-center">
          <img
            src={`/images/${coach.photoId || 'coach-fallback'}.jpg`}
            alt={coach.name}
            className="w-20 h-20 rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{coach.name}</h3>
            <div className="text-sm text-gray-600">{coach.role}</div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-700">{coach.bio}</div>
      </div>
    </div>
  );
}
