<template>
  <a class="tagBox" :href="props.url">
    <div class="tagBoxBg"></div>
    <div class="tagBoxContent">
      <slot />
    </div>
  </a>
</template>

<script setup>
const props = defineProps(['title','url'])

</script>