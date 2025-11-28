// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0'
  },
  modules: ['@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css','~/assets/css/index.scss','~/assets/icons/style.css','~/assets/css/quill.bubble.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    '/api/**': { proxy: 'http://localhost:3009/**' }
  }
})
