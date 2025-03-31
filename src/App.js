import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home'; // 올바른 경로로 수정
import KeyboardExperience from './components/KeyboardExperience'; // 키보드 체험 페이지 컴포넌트

const App = () => {
  return (
    <Routes>
      {/* 첫 페이지 */}
      <Route path="/" element={<Home />} />
      {/* 키보드 체험 페이지 */}
      <Route path="/keyboard-experience" element={<KeyboardExperience />} />
    </Routes>
  );
};

export default App;