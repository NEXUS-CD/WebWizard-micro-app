<script lang="ts" setup>
import { useAppStateStore } from '@/stores/appState'

const appState = useAppStateStore()
const toMainApp = () => {
  const { parentBase, origin } = appState
  open(origin + parentBase, '_self')
}
</script>
<template>
  <div>Vue3(Micro) About Page</div>
  <button @click="toMainApp">To main</button>
</template>
