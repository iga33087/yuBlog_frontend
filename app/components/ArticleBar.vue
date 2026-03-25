<template>
  <div class="articleBar">
    <a :href="'/article/'+data._id" class="articleBarBox">
      <div class="articleBarBoxInfo">
        <TagBox class="articleBarBoxInfoTag"><ClasstypeLabel :id="data.classtype_id" /></TagBox>
        <div class="articleBarBoxTime">{{global.timeFormat(data.date,'YYYY/MM/DD')}}</div>
      </div>
      <div class="articleBarBoxTitle">{{data.title}}</div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
import global from '~/assets/js/global.js'
</script>