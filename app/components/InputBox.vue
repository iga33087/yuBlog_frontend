<template>
  <div class="inputBox">
    <div class="inputBoxTitle" @click="show=!show">
      <div class="inputBoxTitleText">{{title}}</div>
      <i class="bi bi-chevron-down"></i>
    </div>
    <div class="inputBoxContent" v-if="show">
      <slot />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['title'])
const show = ref(false)
</script>