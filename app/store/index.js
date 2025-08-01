import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    showLogin: false,
    userData: null
  }),
  actions: {
  },
})