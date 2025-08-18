<template>
  <a class="tagBox" :href="props.url">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps(['title','url'])

</script>