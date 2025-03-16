import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isDarkMode: boolean;
}

export function Navigation({ isDarkMode }: NavigationProps) {
  const location = useLocation();

  const folders = [
    { name: 'to do', path: '/' },
    { name: 'planner', path: '/planner' },
    { name: 'water tracker', path: '/water-tracker' }
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 flex justify-center gap-16 bg-gradient-to-t ${
      isDarkMode ? 'from-black/40' : 'from-black/20'
    } to-transparent`}>
      {folders.map((folder) => (
        <Link
          key={folder.path}
          to={folder.path}
          className="flex flex-col items-center group"
        >
          <span className={`text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity ${
            isDarkMode ? 'text-gray-300' : 'text-gray-800'
          }`}>
            {folder.name}
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-lg ${
              location.pathname === folder.path
                ? 'bg-green-500 text-white'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white/80 text-gray-800 hover:bg-white'
            } transition-colors shadow-lg`}
          >
            <Folder className="w-8 h-8" />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}