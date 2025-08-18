<template>
  <div class="pageBox">
    <div class="pageBoxInner">
      <div class="pageBoxInnerList">
        <div class="pageBoxInnerListItem"><i class="fs-4 icon-cheveron-left" /></div>
        <a class="pageBoxInnerListItem" :class="{'pageBoxInnerListItemOnc':item==props.now}" :href="'/article?page='+item" v-for="(item,index) in pageNum" :key="index">{{item}}</a>
        <div class="pageBoxInnerListItem"><i class="fs-4 icon-cheveron-right" /></div>
      </div>
      <div class="pageBoxInnerInfo">
        <div class="pageBoxInnerInfoTotal">Total：{{total}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['now','limit','total'])

const pageNum=computed(()=> {
  let res=[]
  let total=Math.ceil(props.total/props.limit)
  let start=props.now - 2
  while(res.length!==5) {
    if(start<1) {
      start++
      continue;
    }
    if(start>total) break; 
    res.push(start)
    start++
  }
  return res
})
</script>