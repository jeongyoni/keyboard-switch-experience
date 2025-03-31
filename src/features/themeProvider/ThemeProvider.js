import React from 'react';
import { connect } from 'react-redux';
import { palette } from '../theme/theme';
import styles from './ThemeProvider.module.css';

function ThemeProvider({ children, theme }) {
    // 테마가 유효하지 않을 경우 기본값 설정
    const currentTheme = palette[theme?.current] || palette.default;

    return (
        <div
          className={styles.themeProvider}
          style={{
              backgroundColor: currentTheme.background,
          }}
        >
            {children}
        </div>
    );
}

const mapStateToProps = (state) => ({
    theme: state.themeProvider, // Redux 상태에서 themeProvider 가져오기
});

export default connect(mapStateToProps)(ThemeProvider);