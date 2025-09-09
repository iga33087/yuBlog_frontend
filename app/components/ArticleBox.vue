<template>
  <BorderBox2>
    <div class="articleBox">
      <div class="articleBoxInner">
        <div class="articleBoxInnerImg">
          <a :href="'/article/'+data._id"><img class="articleBoxInnerImgPic" :src="data.coverImg" /></a>
        </div>
      </div>
      <a class="articleBoxTitle" :href="'/article/'+data._id"><div class="articleBoxTitle">{{data.title}}</div></a>
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