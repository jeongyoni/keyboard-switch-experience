import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home'; // 올바른 경로로 수정
import KeyboardExperience from './features/keyboardExperience/KeyboardExperience';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keyboard-experience" element={<KeyboardExperience />} />
    </Routes>
  );
};

export default App;