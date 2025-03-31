import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders "키감 체험하기" button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // "키감 체험하기" 버튼이 화면에 나타나는지 확인
  expect(getByText(/키감 체험하기/i)).toBeInTheDocument();
});
