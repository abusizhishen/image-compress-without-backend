import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Global.style';
import './i18n'; // 加载 i18n 配置

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App/>
    </>
    ,
    document.getElementById('root')
);

