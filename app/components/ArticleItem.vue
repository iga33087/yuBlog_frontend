<template>
  <BorderBox2 class="articleItem">
    <div class="articleItemBox">
      <img class="articleItemBoxImg" :src="data.coverImg" />
      <div class="articleItemBoxContent">
        <div>
          <div class="articleItemBoxContentTitle">
            <div class="articleItemBoxContentTitleText">{{data.title}}</div>
            <NuxtLink :to="'/article/'+data._id"><TagBox >CHECK</TagBox></NuxtLink>
          </div>
          <div class="articleItemBoxContentContent" v-text="data.content" />
        </div>
        <div class="articleItemBoxContentInfo">
          <div class="articleItemBoxContentInfoClasstype"><i class="fs-4 icon-folder-outline me-2" />{{$store.classtypeObj[data.classtype_id].title}}</div>
          <div class="d-flex align-items-center">
            <div class="articleItemBoxContentInfoList">
              <TagBox class="tagBox2 mb-0 me-3" v-for="(item) in data.tag_id" :key="item">{{$store.tagObj[item].title}}</TagBox>
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