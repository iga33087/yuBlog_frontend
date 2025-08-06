import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    showLogin: false,
    userData: null,
    classtypes: null,
    tags: null
  }),
  getters: {
    classtypeObj:(state) => {
      let res={}
      if(!state.classtypes) return res
      for(let item of state.classtypes.data) {
        res[item._id]=item
      }
      return res
    },
    tagObj:(state) => {
      let res={}
      if(!state.tags) return res
      for(let item of state.tags.data) {
        res[item._id]=item
      }
      return res
    },
  },
  actions: {
    async getInit() {
      await callOnce(async() => {
        this.tags=await $fetch('/api/tags')
        this.classtypes=await $fetch('/api/classtypes')
      })
    }
  },
})