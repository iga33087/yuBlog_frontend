<template>
  <div class="pageBox">
    <div class="pageBoxInner">
      <div class="pageBoxInnerList">
        <div class="pageBoxInnerListItem" @click="goTo(Number(props.now) - 1)" v-if="props.now > 1"><i class="fs-4 icon-cheveron-left" /></div>
        <div class="pageBoxInnerListItem" :class="{'pageBoxInnerListItemOnc':item==props.now}" v-for="(item,index) in pageNum" @click="goTo(item)" :key="index">{{item}}</div>
        <div class="pageBoxInnerListItem" @click="goTo(Number(props.now) + 1)" v-if="props.now < totalNum"><i class="fs-4 icon-cheveron-right" /></div>
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
const emit = defineEmits(['change'])

const totalNum=computed(()=> {
  return Math.ceil(props.total/props.limit)
})

const pageNum=computed(()=> {
  let res=[]
  let total=totalNum.value
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

function goTo(x) {
  emit('change',x)
}
</script>