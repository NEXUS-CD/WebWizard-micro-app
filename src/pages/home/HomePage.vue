<!--
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-24 22:41:12
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-24 22:41:59
 * @FilePath: /WebWizard/web-wizard-micro-app/src/pages/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>我是vue3+vite</div>
  <button @click="router.push('/about')">To About</button>
</template>
