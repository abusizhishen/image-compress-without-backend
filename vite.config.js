import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import pkg from './package.json'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    base: (new URL(pkg.homepage)).pathname,
    server: {
        port: 3010
    },

    plugins: [
        reactJsx(),
        reactRefresh(),
        viteCompression({
            algorithm: 'brotliCompress', // 或 'gzip'
            threshold: 10240 // 对大于 10KB 的文件压缩
        })
    ],
})
