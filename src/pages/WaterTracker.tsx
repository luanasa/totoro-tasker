import { motion } from 'framer-motion';
import { Droplets, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface WaterTrackerProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export function WaterTracker({ isDarkMode, setIsDarkMode }: WaterTrackerProps) {
  const [milliliters, setMilliliters] = useState(0);
  const goal = 2000; // 2 liters in milliliters
  const glassSize = 250; // 250ml per glass

  const addWater = () => {
    if (milliliters < goal) {
      setMilliliters(Math.min(milliliters + glassSize, goal));
    }
  };

  const resetWater = () => {
    setMilliliters(0);
  };

  const progress = (milliliters / goal) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-32 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-blue-50 to-cyan-50'
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

      <div className="max-w-md mx-auto text-center p-4">
        <h1 className={`text-3xl font-bold mb-8 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Water Tracker</h1>

        <motion.div
          className={`p-6 rounded-lg shadow-lg mb-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-64 w-48 mx-auto mb-8 bg-gray-100 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: `${progress}%` }}
              transition={{ duration: 0.5 }}
              style={{
                background: isDarkMode
                  ? 'linear-gradient(180deg, #60A5FA 0%, #3B82F6 100%)'
                  : 'linear-gradient(180deg, #93C5FD 0%, #60A5FA 100%)'
              }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-2 bg-white/20"
                animate={{
                  y: [-2, 2, -2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {milliliters}/{goal}ml
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addWater}
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                isDarkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={milliliters >= goal}
            >
              <Droplets className="w-6 h-6" />
              Add {glassSize}ml
            </motion.button>

            <button
              onClick={resetWater}
              className={`w-full py-2 transition-colors ${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reset
            </button>
          </div>
        </motion.div>

        <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
          <p className="mb-4">Daily Goal: {goal}ml (2 liters)</p>
          <p>
            Progress: {Math.round(progress)}%
            {progress >= 100 && " 🎉"}
          </p>
        </div>
      </div>
    </div>
  );
}