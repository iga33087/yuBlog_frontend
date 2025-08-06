<template>
  <div>
    <Header />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
const { $store } = useNuxtApp()

await $store.getInit()
</script>