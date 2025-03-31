// src/features/keyboardExperience/KeyboardExperience.js

import React from 'react';
import Keyboard from '../../components/Keyboard';  // 실제 키보드 컴포넌트 임포트

const KeyboardExperience = () => {
  return (
    <div className="keyboard-experience">
      <h1>키보드 체험하기</h1>
      <p>이 페이지에서 Groovestone 키보드의 타건감을 체험할 수 있습니다.</p>
      <div className="keyboard-simulator">
        {/* 실제 키보드 컴포넌트 */}
        <Keyboard layoutKey="9009_wkltkl" pressedKey="" handleMouseDown={() => {}} handleMouseUp={() => {}} />
      </div>
    </div>
  );
};

export default KeyboardExperience;
