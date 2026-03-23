<template>
  <div class="articleBar">
    <div class="articleBarBox">
      <div class="articleBarBoxInfo">
        <TagBox class="articleBarBoxInfoTag"><ClasstypeLabel class="articleBarBoxInfoTag" :id="data.classtype_id" /></TagBox>
        <div class="articleBarBoxTime">{{global.timeFormat(data.date,'YYYY/MM/DD')}}</div>
      </div>
      <div class="articleBarBoxTitle">{{data.content}}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
import global from '~/assets/js/global.js'
</script>