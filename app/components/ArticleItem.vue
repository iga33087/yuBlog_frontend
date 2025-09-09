<template>
  <BorderBox2 class="articleItem">
    <div class="articleItemBox">
      <a :href="'/article/'+data._id">
        <div class="articleItemBoxImg">
          <img class="articleItemBoxImgPic" :src="data.coverImg" />
        </div>
      </a>
      <div class="articleItemBoxContent">
        <div>
          <div class="articleItemBoxContentTitle">
            <a :href="'/article/'+data._id"><div class="articleItemBoxContentTitleText">{{data.title}}</div></a>
            <TagBox :url="'/article/'+data._id">CHECK</TagBox>
          </div>
          <div class="articleItemBoxContentContent" v-text="data.content" />
        </div>
        <div class="articleItemBoxContentInfo">
          <ClasstypeLabel :id="data.classtype_id" />
          <div class="d-flex align-items-center">
            <div class="articleItemBoxContentInfoList">
              <TagLabel :id="item" v-for="(item) in data.tag_id" :key="item">{{item}}</TagLabel>
            </div>
            <div class="articleItemBoxContentInfoTime">{{global.timeFormat(data.date,'YYYY/MM/DD')}}</div>
          </div>
        </div>
      </div>
    </div>
  </BorderBox2>
</template>

<script setup>
const { $store } = useNuxtApp()
import global from '~/assets/js/global.js'
const props = defineProps(['data'])
</script>