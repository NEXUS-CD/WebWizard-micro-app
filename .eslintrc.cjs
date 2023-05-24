/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-24 22:00:37
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-24 22:04:18
 * @FilePath: /WebWizard/web-wizard-micro-app/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    // 禁止出现console
    'no-console': 'error',
    // 禁用debugger
    'no-debugger': 'warn',
    // 禁止提交未使用的变量
    "no-unused-vars": "error"
  }
}
