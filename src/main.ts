/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-23 23:10:04
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-24 22:53:57
 * @FilePath: /WebWizard/vue-project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
let app: any
function render(props: any) {
  const { container } = props
  app = createApp(App)
  app.use(router).mount(container instanceof Element ? container.querySelector('#app') : container)
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({ container: '#app' })
} else {
  renderWithQiankun({
    mount(props) {
      // 每次挂载都重新执行render方法
      render(props)
    },
    bootstrap() {
      //   console.log('Vue3App正在加载')
    },
    update() {
      //   console.log('Vue3App正在更新')
    },
    unmount() {
      //   console.log('Vue3App正在卸载')
      // 卸载时同时卸载子应用实例
      app.unmount()
    }
  })
}
