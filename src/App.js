import React from "react";
import Theme from "./components/Theme/theme";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BlueHome from "./components/BlueHome/bluehome";
import PinkHome from "./components/PinkHome/pinkhome";
import DarkHome from "./components/DarkHome/darkhome";
import TodoList from "./components/TodoList/todolist";
import WaterTracker from "./components/WaterTracker/watertracker";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Theme />} />
          <Route path="/bluehome" element={<BlueHome />} />
          <Route path="/pinkhome" element={<PinkHome />} />
          <Route path="/darkhome" element={<DarkHome />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/watertracker" element={<WaterTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;