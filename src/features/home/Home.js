// src/features/home/Home.js
import React from 'react';
import './Home.css';  // 필요한 스타일 파일

const Home = () => (
  <div className="home-container">
    <h1>Groovestone 키보드 체험</h1>
    <p>여기에서 다양한 그루브스톤 키보드를 직접 체험해 보세요!</p>
    <button onClick={() => (window.location.href = '/keyboard-experience.html')}>
      키감 체험하기
    </button>
  </div>
);

export default Home;
