<template>
  <BorderBox class="addCommentBox">
    <template v-slot:title>
      <div>發表評論</div>
    </template>
    <template v-slot:content>
      <div class="p-3">
        <textarea type="text" class="addCommentBoxContent" v-model="formData.content" />
        <div class="addCommentBoxMenu">
          <TagBox class="me-3" @click="clear">清空</TagBox>
          <TagBox @click="sub">發表</TagBox>
        </div>
      </div>
    </template>
  </BorderBox>
</template>

<script setup>
import { ref } from 'vue'
const { $store } = useNuxtApp()
const props = defineProps(['articleID'])

const formData=ref({
  article_id: props.articleID,
  content: null
})

async function sub() {
  try {
    if(!$store.userData) {
      alert('欲使用評論，請先登入')
      $store.showLogin=true
      return 0
    }
    await $fetch('/api/comments', {method: 'POST',headers:{authorization:localStorage.token},body:formData.value})
    alert('評論發表成功')
    location.reload()
  }
  catch(err) {
    alert('評論發表失敗')
  }
}

function clear() {
  formData.value.content=null
}
</script>