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

      <div className="w-full max-w-lg mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Water Tracker</h1>

        <motion.div
          className={`p-4 sm:p-6 rounded-lg shadow-lg mb-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-full sm:w-1/2 aspect-[3/4] max-w-[200px] mx-auto bg-gray-100 rounded-2xl overflow-hidden">
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
                <span className={`text-lg sm:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {milliliters}/{goal}ml
                </span>
              </div>
            </div>

            <div className="w-full sm:w-1/2 space-y-4">
              <div className={`text-center sm:text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="text-sm sm:text-base mb-2">Daily Goal: {goal}ml (2 liters)</p>
                <p className="text-sm sm:text-base">
                  Progress: {Math.round(progress)}%
                  {progress >= 100 && " 🎉"}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addWater}
                className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  isDarkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                } ${milliliters >= goal ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={milliliters >= goal}
              >
                <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Add {glassSize}ml</span>
              </motion.button>

              <button
                onClick={resetWater}
                className={`w-full py-2 text-sm sm:text-base transition-colors ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-gray-300'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[250, 500, 750, 1000].map((amount) => (
            <div
              key={amount}
              className={`p-3 rounded-lg ${
                milliliters >= amount
                  ? isDarkMode
                    ? 'bg-blue-600/30 text-blue-300'
                    : 'bg-blue-100 text-blue-700'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-400'
                    : 'bg-white text-gray-500'
              }`}
            >
              <p className="text-sm font-medium">{amount}ml</p>
              <p className="text-xs mt-1">
                {Math.round((amount / goal) * 100)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}