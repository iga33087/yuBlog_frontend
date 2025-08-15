<template>
  <BorderBox class="searchBox">
    <template v-slot:title>
      <div>搜索文章</div>
    </template>
    <template v-slot:content>
      <div class="p-3">
        <InputBox title="關鍵字">
          <input type="text" v-model="formData.keyword" />
        </InputBox>
        <InputBox title="文章類別">
          <select v-model="formData.classtype">
            <option value="">不限</option>
            <option v-for="(item) in $store.classtypes.data" :key="item._id" :value="item._id">{{item.title}}</option>
          </select>
        </InputBox>
        <InputBox title="文章標籤">
          <div class="d-flex align-items-center flex-wrap">
            <TagBox class="tagBox2 me-2" :class="{'tagBoxOnc':formData.tag.includes(item._id)}" v-for="(item) in $store.tags.data" :key="item._id" @click="addTag(item._id)">{{item.title}}</TagBox>
          </div>
        </InputBox>
        <div class="d-flex align-items-center">
          <ButtonBox style="width:50%;">清空</ButtonBox>
          <ButtonBox style="width:50%;" @click="search">搜尋</ButtonBox>
        </div>
      </div>
    </template>
  </BorderBox>
</template>

<script setup>
import {ref} from 'vue'
const route = useRoute()
const { $store } = useNuxtApp()

const formData=ref({
  keyword: route.query.keyword ? route.query.keyword : '',
  classtype: route.query.classtype ? route.query.classtype : '',
  tag: route.query.tag ? route.query.tag.split(',') : []
})

function addTag(x) {
  let index=formData.value.tag.indexOf(x)
  if(index===-1) formData.value.tag.push(x)
  else formData.value.tag.splice(index,1)
}

function search() {
  location.href=`/article?keyword=${formData.value.keyword}&classtype=${formData.value.classtype}&tag=${formData.value.tag.join(',')}`
}

function clear() {
  formData.value={
    keyword: '',
    classtype: '',
    tag: []
  }
}

console.log(777,route.query)
</script>