<template>
  <div class="classtypeBox">
    <div class="classtypeBoxTitle" @click="show=!show">
      <div class="classtypeBoxTitleText">{{data.title}} <span v-if="showTotal">({{data.children&&data.children.length ? data.children.length : 0}})</span></div>
      <i class="classtypeBoxTitleMenu" :class="{'icon-cheveron-up':showTotal,'classtypeBoxTitleMenuOn':show}" />
    </div>
    <div class="classtypeBoxMenu" v-if="data.children&&data.children.length&&show">
      <ClasstypeBox v-for="(item,index) in data.children" :key="index" :data="item" :showTotal="false" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['data','showTotal'])
const show=ref(false)

</script>