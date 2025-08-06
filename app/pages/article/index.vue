<template>
  <div class="article">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <CardBox title="Articles">
            <template v-slot:content>
              <!--<ArticleItem v-for="(item) in data.data" :key="item._id" :data="item" />-->
              {{data}}
            </template>
          </CardBox>
        </div>
        <div class="col-3">
          <BorderBox class="articleSearch">
            <template v-slot:title>
              <div>搜索文章</div>
            </template>
            <template v-slot:content>
              <div class="p-3">
                11
              </div>
            </template>
          </BorderBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $store } = useNuxtApp()
console.log(55,$store.classtypes,$store.classtypeObj)
</script>