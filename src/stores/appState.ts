import { inject } from 'vue'
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore<'appState', any>('appState', {
  state: () => ({ ...(inject('globalState') as Object) })
})
