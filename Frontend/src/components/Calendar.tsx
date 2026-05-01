import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function Calendar() {
  const [date, setDate] = useState(new Date(2025, 5, 5)); // 05 Jun 2025
  const [hours, setHours] = useState(11);
  const [minutes, setMinutes] = useState(0);
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const days = Array.from(
    {
      length: daysInMonth
    },
    (_, i) => i + 1
  );
  const blanks = Array.from(
    {
      length: firstDayOfMonth
    },
    (_, i) => i
  );
  const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'];

  const prevMonth = () =>
  setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const nextMonth = () =>
  setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="font-semibold text-sm">
          {date.getDate().toString().padStart(2, '0')}{' '}
          {monthNames[date.getMonth()]} {date.getFullYear()}{' '}
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}
        </div>
        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {blanks.map((b) =>
        <div key={`blank-${b}`} className="p-2"></div>
        )}
        {days.map((d) =>
        <button
          key={d}
          onClick={() =>
          setDate(new Date(date.getFullYear(), date.getMonth(), d))
          }
          className={`p-2 rounded hover:bg-blue-50 ${d === date.getDate() ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}>
          
            {d}
          </button>
        )}
      </div>

      <div className="mt-4 pt-4 border-t flex justify-center gap-4 items-center">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setHours((h) => (h + 1) % 24)}
            className="p-1 hover:bg-gray-100 rounded">
            
            <ChevronLeft className="w-4 h-4 rotate-90" />
          </button>
          <span className="font-mono text-sm">
            {hours.toString().padStart(2, '0')}
          </span>
          <button
            onClick={() => setHours((h) => (h - 1 + 24) % 24)}
            className="p-1 hover:bg-gray-100 rounded">
            
            <ChevronLeft className="w-4 h-4 -rotate-90" />
          </button>
        </div>
        <span className="font-bold">:</span>
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMinutes((m) => (m + 1) % 60)}
            className="p-1 hover:bg-gray-100 rounded">
            
            <ChevronLeft className="w-4 h-4 rotate-90" />
          </button>
          <span className="font-mono text-sm">
            {minutes.toString().padStart(2, '0')}
          </span>
          <button
            onClick={() => setMinutes((m) => (m - 1 + 60) % 60)}
            className="p-1 hover:bg-gray-100 rounded">
            
            <ChevronLeft className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      </div>
    </div>);

}