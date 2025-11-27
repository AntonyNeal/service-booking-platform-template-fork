import { useTenant } from '../../../core/hooks/useTenant';

function DayCard({ day, items }: { day: string; items: any[] }) {
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScheduleGrid() {
  const { content } = useTenant();

  // Build week days ordering
  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const grouped = daysOrder.map((d) => ({ day: d, items: (content as any).schedule?.filter((s: any) => s.day === d) || [] }));

  return (
    <section id="schedule" className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Weekly Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 alphamma-schedule">
          {grouped.map((g) => (
            <DayCard key={g.day} day={g.day} items={g.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
