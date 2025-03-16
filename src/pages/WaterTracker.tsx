import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';
import { useState } from 'react';

export function WaterTracker() {
  const [glasses, setGlasses] = useState(0);
  const goal = 8;

  const addGlass = () => {
    if (glasses < goal) {
      setGlasses(glasses + 1);
    }
  };

  const resetGlasses = () => {
    setGlasses(0);
  };

  const progress = (glasses / goal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 p-4 pb-32">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Water Tracker</h1>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-64 w-48 mx-auto mb-8 bg-gray-100 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-800">
                {glasses}/{goal}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addGlass}
              className="w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              disabled={glasses >= goal}
            >
              <Droplets className="w-6 h-6" />
              Add Glass
            </motion.button>

            <button
              onClick={resetGlasses}
              className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </motion.div>

        <div className="text-gray-600">
          <p className="mb-4">Daily Goal: {goal} glasses</p>
          <p>
            Progress: {Math.round(progress)}%
            {progress >= 100 && " 🎉"}
          </p>
        </div>
      </div>
    </div>
  );
}