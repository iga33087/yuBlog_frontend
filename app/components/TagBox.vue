<template>
  <div>
    <a class="tagBox" :href="url" v-if="url">
      <div class="tagBoxBg"></div>
      <div class="tagBoxContent">
        <slot />
      </div>
    </a>
    <div class="tagBox" v-else>
      <div class="tagBoxBg"></div>
      <div class="tagBoxContent">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title','url'])

</script>