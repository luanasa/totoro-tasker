import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp';
import { Planner } from './pages/Planner';
import { WaterTracker } from './pages/WaterTracker';
import { Navigation } from './components/Navigation';
import { TotoroMascot } from './components/TotoroMascot';
import { useState } from 'react';

function App() {
  const [isTotoroAwake, setIsTotoroAwake] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<TodoApp setIsTotoroAwake={setIsTotoroAwake} />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/water-tracker" element={<WaterTracker />} />
        </Routes>
        
        <TotoroMascot isAwake={isTotoroAwake} />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;