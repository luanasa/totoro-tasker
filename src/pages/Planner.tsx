import { motion } from 'framer-motion';
import { Calendar, Clock, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface PlannerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
}

export function Planner({ isDarkMode, setIsDarkMode }: PlannerProps) {
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
    <div className={`min-h-screen transition-colors duration-300 pb-32 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-pink-50 to-purple-50'
    }`}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 left-4 p-2 rounded-full ${
          isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-400 text-gray-900'
        }`}
      >
        {isDarkMode ? <Moon /> : <Sun />}
      </motion.button>

      <div className="max-w-md mx-auto p-4">
        <h1 className={`text-3xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Totoro Planner</h1>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-lg shadow-lg mb-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
          onSubmit={addEvent}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Event title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className={`w-full p-2 border rounded focus:ring-2 focus:outline-none ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500'
                  : 'bg-white border-gray-200 text-gray-800 focus:ring-purple-300'
              }`}
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Date</span>
                </div>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className={`w-full p-2 border rounded focus:ring-2 focus:outline-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500'
                      : 'bg-white border-gray-200 text-gray-800 focus:ring-purple-300'
                  }`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Time</span>
                </div>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  className={`w-full p-2 border rounded focus:ring-2 focus:outline-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500'
                      : 'bg-white border-gray-200 text-gray-800 focus:ring-purple-300'
                  }`}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded transition-colors ${
                isDarkMode
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
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
              className={`p-4 rounded-lg shadow flex items-center gap-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`p-3 rounded-full ${
                isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
              }`}>
                <Calendar className={`w-6 h-6 ${
                  isDarkMode ? 'text-purple-300' : 'text-purple-500'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>{event.title}</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
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