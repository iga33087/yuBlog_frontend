<template>
  <BorderBox class="classtypeBox">
    <template v-slot:title>
      <div>文章類別</div>
    </template>
    <template v-slot:content>
      <div class="p-3">
        <ClasstypeBar v-for="(item,index) in data" :key="index" :data="item" :showTotal="true" />
      </div>
    </template>
  </BorderBox>
</template>

<script setup>

//const data = await $fetch('/api/articles/classtypeBox')
const { data } = await useFetch('/api/articles/classtypeBox')

/*const { data } = await useAsyncData('getInit', async () => {
  let res=[]
  const articlesData = await $fetch('/api/articles')
  const classtypesData = await $fetch('/api/classtypes')
  for(let item of classtypesData.data) {
    let obj={title:item.title,children:articlesData.data.filter(r=>r.classtype_id===item._id).map(r=> {return {title:r.title}})}
    res.push(obj)
  }
  return res
})

console.log(data)*/
</script>