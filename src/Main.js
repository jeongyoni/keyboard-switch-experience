import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // 첫 페이지 컴포넌트
import KeyboardExperience from './components/KeyboardExperience'; // 키보드 체험 페이지 컴포넌트

const App = () => {
  return (
    <Routes>
      {/* 첫 페이지 */}
      <Route path="/" element={<Home />} />
      {/* 키보드 체험 페이지 */}
      <Route path="/keyboard-experience" element={<KeyboardExperience />} />
      {/* Main 페이지 */}
      <Route path="/main" element={<App />} />
    </Routes>
  );
};

export default App;