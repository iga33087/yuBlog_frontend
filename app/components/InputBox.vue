<template>
  <div class="inputBox">
    <div class="inputBoxTitle">{{title}}</div>
    <div class="inputBoxContent">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>