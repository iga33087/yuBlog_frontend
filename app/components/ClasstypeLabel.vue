<template>
  <a class="classtypeLabel" :href="'/article?classtype='+id">
    <i class="classtypeLabelIcon fs-4 icon-folder-outline me-2" />
    <div class="classtypeLabelTitle">{{$store.classtypeObj[id].title}}</div>
  </a>
</template>

<script setup>
const { $store } = useNuxtApp()
const props = defineProps(['id'])
</script>