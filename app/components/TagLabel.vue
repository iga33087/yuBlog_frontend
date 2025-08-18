<template>
  <a class="tagLabel" :href="'/article?tag='+id">{{$store.tagObj[id].title}}</a>
</template>

<script setup>
const { $store } = useNuxtApp()
const props = defineProps(['id'])
</script>