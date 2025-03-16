import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp';
import { Planner } from './pages/Planner';
import { WaterTracker } from './pages/WaterTracker';
import { Navigation } from './components/Navigation';
import { TotoroMascot } from './components/TotoroMascot';
import { useState } from 'react';

function App() {
  const [isTotoroAwake, setIsTotoroAwake] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<TodoApp setIsTotoroAwake={setIsTotoroAwake} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/planner" element={<Planner isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/water-tracker" element={<WaterTracker isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        </Routes>
        
        <TotoroMascot isAwake={isTotoroAwake} />
        <Navigation isDarkMode={isDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;