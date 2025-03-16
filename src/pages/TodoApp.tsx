import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, Moon, Sun, Repeat, Volume2, VolumeX } from 'lucide-react';

interface TodoAppProps {
  setIsTotoroAwake: (isAwake: boolean) => void;
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
  recurring?: 'daily' | 'weekly' | 'monthly';
  lastCompleted?: Date;
}

interface Notification {
  id: number;
  message: string;
}

const motivationalMessages = [
  "Totoro is proud of you! 🌱",
  "The forest spirits celebrate your progress! 🍃",
  "Keep growing like a magical tree! 🌳",
  "The Catbus approves of your journey! 🚌",
  "The Soot Sprites dance with joy! ✨"
];

export function TodoApp({ setIsTotoroAwake }: TodoAppProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [recurringType, setRecurringType] = useState<'daily' | 'weekly' | 'monthly' | undefined>();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    audioRef.current = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/94/Cicada_Sounds_in_Nature.ogg');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  React.useEffect(() => {
    const today = new Date();
    tasks.forEach(task => {
      if (task.completed && task.recurring && task.lastCompleted) {
        const lastCompleted = new Date(task.lastCompleted);
        let shouldReset = false;

        switch (task.recurring) {
          case 'daily':
            shouldReset = today.getDate() !== lastCompleted.getDate();
            break;
          case 'weekly':
            const weekDiff = Math.floor((today.getTime() - lastCompleted.getTime()) / (1000 * 60 * 60 * 24 * 7));
            shouldReset = weekDiff >= 1;
            break;
          case 'monthly':
            shouldReset = today.getMonth() !== lastCompleted.getMonth();
            break;
        }

        if (shouldReset) {
          setTasks(prev => prev.map(t => 
            t.id === task.id ? { ...t, completed: false } : t
          ));
        }
      }
    });
  }, [tasks]);

  const addNotification = (message: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        recurring: recurringType
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setRecurringType(undefined);
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newCompleted = !task.completed;
        if (newCompleted) {
          addNotification(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
          setIsTotoroAwake(true);
          setTimeout(() => {
            setIsTotoroAwake(false);
          }, 3000);
        }
        return {
          ...task,
          completed: newCompleted,
          lastCompleted: newCompleted ? new Date() : task.lastCompleted
        };
      }
      return task;
    }));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-32 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-blue-100 to-green-50'
    }`}>
      {/* Audio Control */}
      <button
        onClick={toggleAudio}
        className={`fixed bottom-24 left-4 p-2 rounded-full z-50 ${
          isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
        } shadow-lg`}
      >
        {isAudioPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className={`mb-2 p-4 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              {notification.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto max-w-md px-4 py-12">
        {/* Theme Toggle */}
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

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl shadow-xl overflow-hidden ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {/* Header */}
          <div className="p-6 text-center relative">
            <img 
              src={isDarkMode ? "./sprites.jpg" : "./ghibli3.gif"}
              alt="Totoro Forest"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <h1 className={`text-2xl font-bold relative z-10 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              My Totoro Tasks
            </h1>
          </div>

          {/* Task Input */}
          <form onSubmit={addTask} className={`p-6 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className={`flex-1 px-4 py-2 rounded-lg border-2 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-800'
                  } focus:border-green-400 focus:outline-none`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setRecurringType('daily')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    recurringType === 'daily'
                      ? 'bg-green-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <Repeat className="w-4 h-4" /> Daily
                </button>
                <button
                  type="button"
                  onClick={() => setRecurringType('weekly')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    recurringType === 'weekly'
                      ? 'bg-green-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <Repeat className="w-4 h-4" /> Weekly
                </button>
                <button
                  type="button"
                  onClick={() => setRecurringType('monthly')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    recurringType === 'monthly'
                      ? 'bg-green-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <Repeat className="w-4 h-4" /> Monthly
                </button>
              </div>
            </div>
          </form>

          {/* Task List */}
          <div className="p-6">
            <AnimatePresence>
              {tasks.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-center py-8 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  <p>No tasks yet! Add some tasks to get started.</p>
                </motion.div>
              ) : (
                <ul className="space-y-3">
                  {tasks.map(task => (
                    <motion.li
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isDarkMode
                          ? task.completed ? 'bg-gray-700' : 'bg-gray-700'
                          : task.completed ? 'bg-green-50' : 'bg-gray-50'
                      } hover:shadow-md`}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleTask(task.id)}
                        className={`p-1 rounded-full ${
                          task.completed
                            ? 'bg-green-500 text-white'
                            : isDarkMode
                              ? 'border-2 border-gray-500'
                              : 'border-2 border-gray-300'
                        }`}
                      >
                        {task.completed && <Check className="w-4 h-4" />}
                      </motion.button>
                      <span className={`flex-1 ${
                        task.completed
                          ? 'line-through text-gray-400'
                          : isDarkMode ? 'text-white' : ''
                      }`}>
                        {task.text}
                        {task.recurring && (
                          <span className="ml-2 text-xs text-gray-500">
                            ({task.recurring})
                          </span>
                        )}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteTask(task.id)}
                        className="text-red-400 hover:text-red-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}