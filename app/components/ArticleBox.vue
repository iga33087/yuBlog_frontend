<template>
  <BorderBox2>
    <div class="articleBox">
      <div class="articleBoxInner">
        <div class="articleBoxInnerImg">
          <img class="articleBoxInnerImgPic" :src="data.coverImg" />
        </div>
      </div>
      <div class="articleBoxTitle">{{data.title}}</div>
      <div class="articleBoxInfo">
        <ClasstypeLabel :id="data.classtype_id" />
        <div class="articleBoxTime">{{global.timeFormat(data.date,'YYYY/MM/DD')}}</div>
      </div>
    </div>
  </BorderBox2>
</template>

<script setup>
const { $store } = useNuxtApp()
import global from '~/assets/js/global.js'
const props = defineProps(['data'])
</script>