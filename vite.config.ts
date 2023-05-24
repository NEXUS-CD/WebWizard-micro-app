import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from "vite-plugin-qiankun"
// https://vitejs.dev/config/
export default defineConfig({
//'micro-app'是在base基座中配置的名字
  plugins: [vue(), vueJsx(),qiankun('micro-app', { useDevMode: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
//server配置中host代表主机地址，port配置端口号，headers配置允许跨域
  server:{ host: '127.0.0.1', port: 8888, headers: {'Access-Control-Allow-Origin': '*' } }
})
