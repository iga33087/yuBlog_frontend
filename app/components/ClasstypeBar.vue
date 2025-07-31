<template>
  <div class="classtypeBar">
    <div class="classtypeBarTitle" @click="show=!show">
      <div class="classtypeBarTitleText">
        <span v-if="showTotal">{{data.title}}</span>
        <NuxtLink :to="'/article/'+data._id" v-else><span>{{data.title}}</span></NuxtLink>
        <span v-if="showTotal">({{data.children&&data.children.length ? data.children.length : 0}})</span>
      </div>
      <i class="classtypeBarTitleMenu" :class="{'icon-cheveron-up':showTotal,'classtypeBarTitleMenuOn':show}" />
    </div>
    <div class="classtypeBarMenu" v-if="data.children&&data.children.length&&show">
      <ClasstypeBar v-for="(item,index) in data.children" :key="index" :data="item" :showTotal="false" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['data','showTotal'])
const show=ref(false)

</script>