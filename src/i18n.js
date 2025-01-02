import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend'; // 加载语言文件
import LanguageDetector from 'i18next-browser-languagedetector'; // 自动检测语言
import en from './locales/en';
import zh from './locales/zh';

i18n
    .use(Backend) // 使用后端加载语言文件
    .use(LanguageDetector) // 检测用户语言
    .use(initReactI18next) // 初始化 React-i18next
    .init({
        resources: {en, zh},
        lng: 'en',
        fallbackLng: {
            'zh-CN': ['zh'], // 如果是 zh-CN，使用 zh 作为后备语言
            default: ['en'], // 默认语言
        },
        debug: true, // 开启调试模式
        interpolation: {
            escapeValue: false, // React 自动转义 XSS
        },
    });

export default i18n;
