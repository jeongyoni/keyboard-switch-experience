import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import './Home.css';

const Home = () => {
  return (
    <div className="home-container"> {/* className 추가 */}
      <h1>Groovestone </h1>
      <p>여기에서 다양한 그루브스톤 축을 직접 체험해 보세요!</p>
      <Link to="/keyboard-experience">키보드 체험하기</Link> {/* a 태그 대신 Link 사용 */}
    </div>
  );
};

export default Home;