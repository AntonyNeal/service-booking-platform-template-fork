import { useTenant } from '../../../core/hooks/useTenant';
import { useState } from 'react';
import BookingModal from '../../../components/BookingModal';

function DayCard({
  day,
  items,
  onBook,
}: {
  day: string;
  items: any[];
  onBook: (slot: any) => void;
}) {
  return (
    <div className="slot" aria-label={`Schedule for ${day}`}>
      <h4 className="font-semibold mb-2">{day}</h4>
      <div className="flex flex-col gap-2">
        {items.map((it) => (
          <div key={it.id} className="p-2 bg-white/3 rounded">
            <div className="flex justify-between">
              <span className="font-medium">{it.title}</span>
              <span className="text-sm opacity-70">{it.start}</span>
            </div>
            <div className="text-xs opacity-75">Coach: {it.coach}</div>
            <div className="flex justify-end mt-2">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => onBook(it)}
                aria-label={`Book ${it.title} on ${day} at ${it.start}`}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScheduleGrid() {
  const { content } = useTenant();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null);

  const onBook = (slot: any) => {
    // Compute next occurrence date for the slot day (simple approach)
    const nextDate = getNextDateForDay(slot.day);
    setSelectedSlot({ ...slot, date: nextDate });
    setModalOpen(true);
  };

  function getNextDateForDay(dayName: string) {
    const dayMap: Record<string, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    const dayIndex = dayMap[dayName] ?? 1;
    const today = new Date();
    const diff = (dayIndex + 7 - today.getDay()) % 7 || 7; // Next occurrence; if same day => next week
    const result = new Date(today);
    result.setDate(today.getDate() + diff);
    return result.toISOString().split('T')[0];
  }

  // Build week days ordering
  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const grouped = daysOrder.map((d) => ({
    day: d,
    items: (content as any).schedule?.filter((s: any) => s.day === d) || [],
  }));

  return (
    <section id="schedule" className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Weekly Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 alphamma-schedule">
          {grouped.map((g) => (
            <DayCard key={g.day} day={g.day} items={g.items} onBook={onBook} />
          ))}
        </div>
        {/* JSON-LD for schedule events */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph':
              (content as any).schedule?.map((s: any) => ({
                '@type': 'Event',
                name: s.title,
                startDate: `2025-12-01T${s.start}:00`, // Example date placeholder; for a real site, compute start dates properly.
                endDate: s.end ? `2025-12-01T${s.end}:00` : undefined,
                eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                location: {
                  '@type': 'Place',
                  name: content.name,
                  address: content.contact.address,
                },
              })) || [],
          })}
        </script>
        {modalOpen && selectedSlot && (
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            provider={{
              id: 'alphamma',
              name: content.name,
              specialty: selectedSlot.title,
              isVerified: true,
            }}
            hourlyRate={content.pricing.hourly || 0}
            platformFeePercentage={10}
            initialDate={selectedSlot.date}
            initialTime={selectedSlot.start}
          />
        )}
      </div>
    </section>
  );
}
