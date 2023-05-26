import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun'
import { toInteger } from 'lodash';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    //'micro-app'是在base基座中配置的名字
    plugins: [vue(), vueJsx(), qiankun('micro-app', { useDevMode: true })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    //server配置中host代表主机地址，port配置端口号，headers配置允许跨域
    server: { host: env.VITE_CLIENT_HOST, port: toInteger(env.VITE_CLIENT_PORT) || 8888, headers: { 'Access-Control-Allow-Origin': '*' } }
  }
})

