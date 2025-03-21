import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import ImageBg from './assets/img/bg.jpg';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    user-select: none;
    outline: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }

  body {
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
  }

  #root {
    min-height: 100vh;
    background-image: url(${ImageBg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faq {
    width: 50%;
  }

  .description {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 375px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 480px) {
    html {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    html {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
