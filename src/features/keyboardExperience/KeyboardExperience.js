import React from 'react';
import KeySimulator from '../keySimulator/KeySimulator'; // 키보드 시뮬레이터 컴포넌트

const KeyboardExperience = () => {
  return (
    <div>
      <h1>키보드 체험하기</h1>
      <p>이곳에서 Groovestone 키보드를 체험할 수 있습니다.</p>
      {/* 키보드 시뮬레이터 렌더링 */}
      <KeySimulator />
    </div>
  );
};

export default KeyboardExperience;
