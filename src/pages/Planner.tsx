import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
}

export function Planner() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const addEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: '', date: '', time: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-4 pb-32">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Totoro Planner</h1>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          onSubmit={addEvent}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Event title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Date</span>
                </div>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Time</span>
                </div>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors"
            >
              Add Event
            </button>
          </div>
        </motion.form>

        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
            >
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}